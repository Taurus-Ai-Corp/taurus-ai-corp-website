#!/usr/bin/env python3
"""
Global rename: Q-Grid|Comply -> GRIDERA|Comply

Targets all known surface forms. Skips auto-generated logs, archives,
and binary artifacts. Dry-run by default.

Usage:
    python3 rename-q-grid-comply-to-gridera.py --dry-run    # preview only
    python3 rename-q-grid-comply-to-gridera.py --execute    # do it
    python3 rename-q-grid-comply-to-gridera.py --execute --root /path  # other root
"""
import argparse
import os
import re
import sys
from pathlib import Path

# Replacement pairs - ORDER MATTERS (longest match first)
# Format: (old, new)
# Scope: bare brand strings + Comply sub-product variants + q-grid.net URL migration.
# Extended 2026-08-08: added bare-brand patterns + q-grid.net → grid-era.com.
# Other q-grid.* domains (q-grid.in, q-grid.ca, etc.) are NOT migrated per user direction.
REPLACEMENTS = [
    # Domain migration (MUST come first - longest match; only q-grid.net, not other q-grid.* TLDs)
    # Order: protocol+www first, then bare domain, then path-prefixed
    ("https://www.q-grid.net", "https://grid-era.com"),
    ("http://www.q-grid.net", "http://grid-era.com"),
    ("https://q-grid.net", "https://grid-era.com"),
    ("http://q-grid.net", "http://grid-era.com"),
    ("www.q-grid.net", "grid-era.com"),
    # Pipe variants (matches the live brand)
    ("Q-Grid|Comply", "GRIDERA|Comply"),
    ("Q-GRID|COMPLY", "GRIDERA|COMPLY"),
    ("Q-Grid|comply", "GRIDERA|Comply"),
    ("q-grid|comply", "gridera|comply"),
    # Space variants -> pipe form. The space-separated GRIDERA form is itself a
    # brand violation (fixed 2026-09-25; these used to emit it).
    ("Q-Grid Comply", "GRIDERA|Comply"),  # brand-allow: rename input
    ("Q-GRID COMPLY", "GRIDERA|COMPLY"),
    ("Q-Grid comply", "GRIDERA|Comply"),
    # Slash variant
    ("Q-Grid/Comply", "GRIDERA/Comply"),
    ("Q-GRID/COMPLY", "GRIDERA/COMPLY"),
    # Hyphen variants in display
    ("Q-Grid-Comply", "Gridera-Comply"),
    ("Q-GRID-COMPLY", "GRIDERA-COMPLY"),
    # Reverse-order in filenames like Comply-Q-Grid-Launch-Package.html
    ("Comply-Q-Grid", "Comply-Gridera"),
    ("comply-q-grid", "comply-gridera"),
    ("COMPLY-Q-GRID", "COMPLY-GRIDERA"),
    # Slug variants
    ("q-grid-comply", "gridera-comply"),
    ("Q_GRID_COMPLY", "GRIDERA_COMPLY"),
    ("q_grid_comply", "gridera_comply"),
    # Code identifier variants
    ("QGridComply", "GrideraComply"),
    ("qgridComply", "grideraComply"),
    ("QgridComply", "GrideraComply"),
    # Bare brand strings (extended 2026-08-08)
    # Longest first: Q-GRID then Q-Grid then variants
    ("Q-GRID", "GRIDERA"),
    ("Q-Grid", "GRIDERA"),
    ("QGRID", "GRIDERA"),
    ("Qgrid", "GRIDERA"),
    ("q-grid", "gridera"),
    ("qgrid", "gridera"),
    # Banned concept names
    ("Quantum-Grid-Mesh", "GRIDERA"),  # brand-allow: rename input
    ("Quantum Grid", "GRIDERA"),  # brand-allow: rename input
    ("Quantum-Grid", "GRIDERA"),
]

# FROZEN infrastructure — must survive every replacement above untouched.
# Added 2026-09-25: the bare ("q-grid", "gridera") pairs were rewriting production
# hosts (q-grid.in -> gridera.in, in.q-grid.net -> in.gridera.net, and gridera.net
# is a DEAD domain) despite the header saying other q-grid.* domains are not
# migrated. Source: [frozen] in ~/.ai-context/taxonomy/TAXONOMY.toml.
# Only the q-grid.net APEX and www.q-grid.net are migrated (to grid-era.com);
# every q-grid.net SUBDOMAIN and every q-grid.in / q-grid.ca host is frozen.
FROZEN_PATTERNS = [
    # any host under q-grid.in or q-grid.ca, apex included (rupee.q-grid.in, q-arq.q-grid.ca)
    re.compile(r"(?<![A-Za-z0-9.-])(?:[A-Za-z0-9-]+\.)*q-grid\.(?:in|ca)(?![A-Za-z0-9])"),
    # q-grid.net subdomains other than www (eu/ca/na/in/ae.q-grid.net)
    re.compile(r"(?<![A-Za-z0-9.-])(?!www\.)(?:[A-Za-z0-9-]+\.)+q-grid\.net(?![A-Za-z0-9])"),
    # CI environment and secret names
    re.compile(r"q-grid-in-production|VERCEL_Q_GRID_IN_PROJECT_ID"),
]


def _mask_frozen(text: str) -> tuple[str, list[str]]:
    """Swap frozen tokens for placeholders no replacement pair can match."""
    saved: list[str] = []

    def stash(m: re.Match) -> str:
        saved.append(m.group(0))
        return f"\x00FROZEN{len(saved) - 1}\x00"

    for pat in FROZEN_PATTERNS:
        text = pat.sub(stash, text)
    return text, saved


def _unmask_frozen(text: str, saved: list[str]) -> str:
    for i, tok in enumerate(saved):
        text = text.replace(f"\x00FROZEN{i}\x00", tok)
    return text


# Directories to skip entirely
SKIP_DIRS = {
    "node_modules", ".git", "__pycache__", ".next", ".turbo",
    "dist", "build", ".vercel", ".cache", "_archive",
    # NOTE 2026-08-08: generated_carousels REMOVED from skip list. Carousels are
    # primary LinkedIn client-facing assets and must be in scope for brand migration.
}

# File extensions to process for content (binary files excluded)
TEXT_EXTENSIONS = {
    ".md", ".txt", ".html", ".htm", ".css", ".js", ".jsx", ".ts", ".tsx",
    ".json", ".yaml", ".yml", ".toml", ".py", ".sh", ".env", ".env.example",
    ".svg", ".xml", ".rst", ".mdx", ".jsonl",
}

# Files to skip even if extension matches
SKIP_FILE_PATTERNS = [
    re.compile(r"\.lock$"),
    re.compile(r"package-lock\.json$"),
    re.compile(r"yarn\.lock$"),
    re.compile(r"pnpm-lock\.yaml$"),
    re.compile(r"history\.jsonl$"),  # Claude Code history
    # Conversation history JSONLs in ~/.claude/projects
    re.compile(r"\.claude/projects/.*\.jsonl$"),
    # The rename script itself - keep historical name intact
    re.compile(r"rename-q-grid-comply-to-gridera\.py$"),
    # Audit artifacts - these describe the violations, don't rewrite them
    re.compile(r"output/GRIDERA-(AUDIT|INVENTORY|BRAND-VIOLATIONS|DEDUP|H-PREFIX|AUDIT-STATS)-2026-08-08\.(md|csv|json|txt)$"),
]


def should_skip_dir(dirname: str) -> bool:
    # Only skip explicitly listed dirs - keep project metadata dirs
    # like .orchestra, .cursor, .codemap, .sisyphus, .clinerules
    return dirname in SKIP_DIRS


def should_skip_file(path: Path) -> bool:
    p = str(path)
    for pat in SKIP_FILE_PATTERNS:
        if pat.search(p):
            return True
    return False


def replace_in_text(text: str) -> tuple[str, int]:
    """Apply all replacements; return (new_text, num_replacements)."""
    text, saved = _mask_frozen(text)
    total = 0
    for old, new in REPLACEMENTS:
        count = text.count(old)
        if count:
            text = text.replace(old, new)
            total += count
    return _unmask_frozen(text, saved), total


def rename_filename(name: str) -> str:
    """Apply slug replacements to filename. Pure transform."""
    new, saved = _mask_frozen(name)
    for old, new_form in REPLACEMENTS:
        # Skip pipe-variants in filenames (filesystems generally hate pipes)
        if "|" in old:
            continue
        new = new.replace(old, new_form)
    return _unmask_frozen(new, saved)


def process_root(root: Path, dry_run: bool):
    content_changes = []  # list of (path, count)
    rename_changes = []   # list of (old_path, new_path)
    skipped_binary = 0
    skipped_dir_count = 0

    for current_dir, dirs, files in os.walk(root):
        # Filter out skip dirs in-place
        before = len(dirs)
        dirs[:] = [d for d in dirs if not should_skip_dir(d)]
        skipped_dir_count += before - len(dirs)

        cur = Path(current_dir)
        for fname in files:
            fpath = cur / fname
            if should_skip_file(fpath):
                continue

            ext = fpath.suffix.lower()
            if ext not in TEXT_EXTENSIONS:
                # Binary or unknown - check filename for rename only
                new_name = rename_filename(fname)
                if new_name != fname:
                    rename_changes.append((fpath, cur / new_name))
                continue

            # Text file: read, scan, optionally write
            try:
                text = fpath.read_text(encoding="utf-8")
            except (UnicodeDecodeError, PermissionError, FileNotFoundError, OSError):
                skipped_binary += 1
                continue

            new_text, count = replace_in_text(text)
            if count > 0:
                content_changes.append((fpath, count))
                if not dry_run:
                    fpath.write_text(new_text, encoding="utf-8")

            # Filename rename (after content)
            new_name = rename_filename(fname)
            if new_name != fname:
                target = cur / new_name
                rename_changes.append((fpath, target))
                if not dry_run:
                    # Use the path as-it-is-now (post content write)
                    fpath.rename(target)

    return content_changes, rename_changes, skipped_binary, skipped_dir_count


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=".", help="Root directory to walk")
    ap.add_argument("--dry-run", action="store_true", help="Preview only")
    ap.add_argument("--execute", action="store_true", help="Apply changes")
    args = ap.parse_args()

    if not args.dry_run and not args.execute:
        print("ERROR: must specify --dry-run or --execute")
        sys.exit(2)

    root = Path(args.root).resolve()
    print(f"Root: {root}")
    print(f"Mode: {'DRY-RUN' if args.dry_run else 'EXECUTE'}")
    print(f"Replacements: {len(REPLACEMENTS)} pairs")
    print()

    content_changes, rename_changes, skipped_binary, skipped_dirs = process_root(
        root, args.dry_run
    )

    print(f"=== Content changes: {len(content_changes)} files ===")
    total_replacements = sum(c for _, c in content_changes)
    print(f"Total replacements across files: {total_replacements}")
    for fpath, count in sorted(content_changes, key=lambda x: -x[1])[:20]:
        rel = fpath.relative_to(root) if str(fpath).startswith(str(root)) else fpath
        print(f"  [{count}x] {rel}")
    if len(content_changes) > 20:
        print(f"  ... and {len(content_changes) - 20} more")

    print()
    print(f"=== File renames: {len(rename_changes)} files ===")
    for old, new in rename_changes[:20]:
        rel_old = old.relative_to(root) if str(old).startswith(str(root)) else old
        rel_new = new.relative_to(root) if str(new).startswith(str(root)) else new
        print(f"  {rel_old}")
        print(f"    -> {rel_new.name}")
    if len(rename_changes) > 20:
        print(f"  ... and {len(rename_changes) - 20} more")

    print()
    print(f"Skipped: {skipped_binary} binary/unreadable, {skipped_dirs} skip-dirs")

    if args.dry_run:
        print()
        print("DRY-RUN ONLY. Re-run with --execute to apply.")


if __name__ == "__main__":
    main()
