# GRIDERA Asset Reverse-Engineering Strategy — OCR + Prompt Extraction
**Date:** 2026-08-09
**Purpose:** Systematic method for extracting prompts from existing assets (videos, images, decks, animations) to feed into Higgsfield AI + NotebookLM for regeneration in GRIDERA brand-locked style.
**Tools:** NotebookLM (cloud source ingestion) + Higgsfield AI (regeneration) + this OCR/RE pipeline

---

## 1. WHY REVERSE-ENGINEER PROMPTS

For B2B PQC marketing:
- Existing high-performing security-product videos on envato / videohive have proven visual grammar (dark voids, cipher grids, deadline clocks) — we want GRIDERA-branded variants
- Reference decks (Pitch / corporate presentations) reveal industry-standard structure — we adapt with GRIDERA proof points
- Carousel images encode typography + color palettes — we extract the pattern, swap the brand

Goal: not copy. Decode → adapt → regenerate in brand-locked form.

---

## 2. THE 4-STAGE PIPELINE

```
[Stage 1] INGEST       NotebookLM source upload
                        OR: web_extract + browser_navigate for envato URLs
                        OR: gws drive import for local files

[Stage 2] DECODE       OCR + visual analysis
                        ↓
                        - pdftotext for PDF decks
                        - tesseract for image OCR
                        - browser_console (page inspection) for web assets
                        - ffmpeg/ffprobe for video metadata
                        ↓

[Stage 3] EXTRACT      LLM analysis on decoded content
                        ↓
                        Identify:
                        - Color palette (hex codes)
                        - Typography (font families + sizes)
                        - Composition (aspect, layout grid)
                        - Motion language (transitions, easing)
                        - Narrative structure (hook → build → CTA)
                        ↓

[Stage 4] REGENERATE   Higgsfield AI image / video generation
                        ↓
                        Output: GRIDERA-branded variant
                        Format: 1200x627 LinkedIn, 1080x1080 Instagram, etc.
                        Brand: void #080A0F + GRIDERA #00F0FF + parchment #F4F0E8
                        Fonts: Oswald display + Inter body + Space Mono data
```

---

## 3. STAGE 1 — INGEST (multiple paths)

### Path A — NotebookLM upload (preferred for multi-asset analysis)
**When:** You have 5+ source assets (PDFs, docs, videos) to compare side-by-side.
**Steps:**
 1. Go to https://notebook.google.com/
 2. Create notebook: "GRIDERA — {topic} — {date}"
 3. Click "Add source" → upload PDFs / docs / paste URLs
 4. NotebookLM auto-extracts text + creates summaries
 5. Query: "Extract the visual style, color palette, typography, and motion language from these sources"

**Limitation:** NotebookLM is Google-SSO-gated; cannot accept your account from this CLI session. You need to do the upload + first query manually, then paste the summary back here.

### Path B — web_extract / browser_navigate (for envato URLs)
**When:** You have URLs to envato / videohive / specific asset pages.
**Steps:**
 1. `web_extract(urls=[envato_url])` — gets clean markdown
 2. `browser_navigate(envato_url)` → `browser_console(expression='fetch(window.location.href).then(r=>r.text())')` — bypasses JS rendering, gets raw HTML
 3. Pattern-match the HTML for asset preview URLs (mp4, mov, webm, jpg, png)
 4. `curl -sI <preview_url>` — verify reachability
 5. `curl -o /tmp/asset.mp4 <preview_url>` — download

### Path C — Local file
**When:** Assets already on disk.
**Steps:**
 1. `gws drive files upload` (if Drive auth works) OR `cp` / `mv` to /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/
 2. Apply H_ prefix per memory rule
 3. SHA-256 for dedup tracking

---

## 4. STAGE 2 — DECODE (OCR + visual analysis)

### Tools needed
- `tesseract` (image OCR) — `brew install tesseract` if missing
- `pdftotext` (PDF text extraction) — comes with `poppler` (`brew install poppler`)
- `ffmpeg` / `ffprobe` (video frame extraction) — `brew install ffmpeg`
- `playwright` (browser inspection) — already installed v1.58.2

### Image OCR (tesseract)
```bash
# Per asset
tesseract /path/to/asset.png /tmp/asset_text -l eng

# Output: plain text from image (text in slides, infographics, etc.)
# For GRIDERA fonts: -l eng --psm 6 (single uniform block)
```

### PDF text + structure (pdftotext + pdfimages)
```bash
# Text extraction (preserves reading order)
pdftotext -layout /path/to/deck.pdf /tmp/deck.txt

# Image extraction (for visual analysis)
pdfimages -all /path/to/deck.pdf /tmp/deck_img
```

### Video frame extraction (ffmpeg)
```bash
# Get 1 frame per second
ffmpeg -i /path/to/video.mp4 -vf fps=1 /tmp/frame_%04d.png

# Get key frames only (every 5s)
ffmpeg -i /path/to/video.mp4 -vf fps=1/5 /tmp/frame_%04d.png

# Extract metadata
ffprobe -v quiet -print_format json -show_format -show_streams /path/to/video.mp4
```

### Browser inspection (playwright)
```python
# Get computed styles of an element
mcp__playwright__browser_evaluate(expression='JSON.stringify({
  fontFamily: getComputedStyle(document.querySelector("h1")).fontFamily,
  fontSize: getComputedStyle(document.querySelector("h1")).fontSize,
  color: getComputedStyle(document.querySelector("h1")).color,
  backgroundColor: getComputedStyle(document.body).backgroundColor
})')
```

### Color palette extraction
```python
# From a single image
from PIL import Image
img = Image.open(asset_path)
# Resample to small for fast color counting
small = img.resize((50, 50))
colors = small.getcolors(50*50)
# Top 5 colors
top = sorted(colors, key=lambda x: -x[0])[:5]
for count, rgb in top:
    print(f"  {count} px: rgb{rgb} -> #{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}")
```

---

## 5. STAGE 3 — EXTRACT (LLM analysis)

Once decoded content is in text form, feed to LLM with this prompt template:

```markdown
You are analyzing a marketing asset for reverse-engineering.

INPUTS:
- Decoded text (from OCR / pdftotext)
- Color palette (top 5 hex codes)
- Asset dimensions (WxH)
- Asset type (video/image/deck/animation)

EXTRACT the following in structured JSON:
1. "color_palette": list of hex codes + their semantic role (background/accent/text/etc.)
2. "typography": {"display": "...", "body": "...", "data": "...", "sizes_pt": [...]}
3. "composition": {"aspect": "WxH", "layout": "left-text/right-image|centered|grid|...", "focal_point": "..."}
4. "motion_language": (for video) {"transitions": ["cut", "fade", "zoom"], "easing": "linear|ease-in|ease-out", "pacing": "..."}
5. "narrative_structure": {"hook": "...", "build": "...", "cta": "...", "duration_sec": N}
6. "brand_locks": {"must_preserve": [...], "must_swap": [...]}  # what we keep vs change

OUTPUT as JSON only. No prose.
```

After extraction, compare against GRIDERA brand lock:
- void #080A0F + GRIDERA #00F0FF + parchment #F4F0E8 = GRIDERA palette
- Oswald display + Inter body + Space Mono data = GRIDERA fonts
- Anything that conflicts = must_swap

---

## 6. STAGE 4 — REGENERATE (Higgsfield AI)

Once you have the extraction JSON, build the GRIDERA-branded prompt:

```markdown
Editorial dark cybersecurity {asset_type} for GRIDERA.
{Narrative hook from extracted hook, swapped for GRIDERA angle}

Composition:
- Aspect: {WxH}
- Layout: {GRIDERA-style layout: hero, deadline-clock, cell-map, etc.}
- Focal point: {GRIDERA focal: countdown, signature, jurisdiction cell, etc.}

Color palette (LOCKED):
- Background: void #080A0F
- Accent: GRIDERA neon teal #00F0FF
- Text: parchment #F4F0E8

Typography (LOCKED):
- Display: Oswald
- Body: Inter
- Data: Space Mono

NO PEOPLE. NO FACES. NO STOCK PHOTOGRAPHY.
NO QR codes (use grid-era.com/{page} URLs).
NO competitor logos.
NO Q-Grid brand strings (banned since 2026-04-08).

Mood: minimal, editorial, premium, security-product, deadline-driven.
```

Send to Higgsfield via:
```bash
higgsfield generate create <model_id> \
  --prompt "<prompt above>" \
  --aspect-ratio 1200x627 \
  --style dark \
  --output /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_GRIDERA_<asset_name>.png
```

Model selection: `higgsfield model list --image` (need to pick model that handles dark editorial).

---

## 7. SPECIFIC ENVATO-STYLE PROMPT PATTERNS

When you DO feed me envato assets (URLs or local files), here are the prompt patterns I extract:

### Pattern A — "Corporate Cybersecurity Hero"
Common in envato: dark void bg, single big type, single accent line, "STATUS: //" tag bottom-right.
**GRIDERA swap:** Oswald display for the type, GRIDERA #00F0FF for the accent line, status tag in Space Mono, void #080A0F bg.

### Pattern B — "Threat Timeline Infographic"
Common: horizontal timeline with 5-8 milestones, regulator badges, deadline callouts.
**GRIDERA swap:** Map milestones to NIST/SWIFT/EU/CNSA dates from insight brief §1. Use ML-KEM-768/ML-DSA-65 icons. Anchor to Hedera aBFT.

### Pattern C — "Carousel Slide for Social"
Common: split-screen text+image, minimal type, bold color blocks, single icon.
**GRIDERA swap:** Use cipher grid + key motifs (per H_GRIDERA_COLOR_TAXONOMY if it exists). 1080x1080 for Instagram.

### Pattern D — "Corporate Deck Cover"
Common: gradient overlay on photo, large wordmark, subtitle in lighter weight.
**GRIDERA swap:** REJECT photo overlay. Use pure typography + grid motif. Oswald display. void bg.

### Pattern E — "Animated Explainer Intro"
Common: dark void, particle system, glow trails, soft synth audio, brand mark reveal.
**GRIDERA swap:** Use cipher grid particles (not generic dots). Glow color = GRIDERA #00F0FF. Reveal at 1.5s. 5-10s max for LinkedIn.

---

## 8. OCR + RE WORKFLOW CHECKLIST

For each asset you want to reverse-engineer:

□ Stage 1: ingest (NotebookLM upload / web_extract / local copy)
□ Stage 2: decode (tesseract / pdftotext / ffmpeg / playwright)
□ Stage 3: extract (LLM JSON with color/type/composition/motion/narrative)
□ Stage 4: regenerate (Higgsfield with brand-locked prompt)
□ Verify: brand scan (`python3 tools/rename-q-grid-comply-to-gridera.py --dry-run` returns 0)
□ Verify: visual (open the generated file, confirm void+teal palette, no people, no Q-Grid)
□ Archive: /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_GRIDERA_<asset_name>.<ext>

---

## 9. WHEN THIS STRATEGY DOESN'T FIT

- **Live-action footage**: don't reverse-engineer. Source from stock (Artgrid, Pexels) and overlay GRIDERA graphics
- **Photography of products/people**: don't reverse-engineer. Use real photography if you have it
- **Audio/music**: reverse-engineer the *mood* (dark ambient synth), not the audio itself. License-constrained.
- **Web animations (Lottie)**: reverse-engineer the JSON structure, swap colors + text

---

## 10. NEXT ACTIONS

1. **You upload 3-5 reference assets** (PDFs, images, videos) to a NotebookLM notebook OR give me local paths OR give me URLs
2. **I run the full 4-stage pipeline** on each one
3. **I generate GRIDERA-branded variants** via Higgsfield (after auth login)
4. **You review + approve** each variant before it goes to the content calendar

Time per asset (Stages 1-4): ~5-15 minutes once OCR tools installed + Higgsfield auth done.

— END STRATEGY —