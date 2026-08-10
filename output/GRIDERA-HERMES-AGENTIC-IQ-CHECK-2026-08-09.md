# GRIDERA Hermes Agentic IQ Check — Local Dev Ops Audit
**Date:** 2026-08-09
**Workspace:** /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA
**Status:** ⚠️ CRITICAL FINDING — local workspace is NOT deployed to Vercel

---

## TL;DR

The local workspace at `SOCIAL MEDIA ORCHESTRA` is a **Next.js 15 build that has never been deployed to Vercel from this directory**. The Vercel project `landing` (prj_Aa1xuuC3MAC9ZB4vtyCdjikmHX7q) that everyone assumes "this app" maps to is actually deployed from a DIFFERENT repo (`Taurus-Ai-Corp/GRIDERA`), and its production alias is still `q-grid.net`.

---

## 1. WORKSPACE STATE

### Repository
- **Branch:** `feat/gridera-brand-domain-migration`
- **Last commit:** `c2a8fbc feat(brand): migrate q-grid → GRIDERA + q-grid.net → grid-era.com`
- **5 commits ahead of main** (this branch's brand migration)
- **21 untracked files** (working artifacts not in .gitignore)

### Project config
- **package.json**: name=`cosmic`, Next.js 15.2.8, React 19, Tailwind 4.1.7
- **Scripts:** `dev`, `build`, `start`, `lint`
- **Build output:** `.next/` (305 MB), `out/` (153 MB), `node_modules/` (476 MB)
- **No `next.config.mjs`** (only `tsconfig.json` for config)
- **No `tailwind.config.js`** (Tailwind 4 uses CSS-based config now)
- **No `vercel.json`** (only `.vercel/project.json`)

### .vercel/project.json (LOCAL STATE)
```json
{
  "projectId": "prj_kdTL5N4aGBGLPkhf6eAQFTptwwex",
  "orgId": "team_ljtVg59YsYUDbIdetyyOVg05",
  "projectName": "opsflow-ai-landing"
}
```
**Problem:** Project name `opsflow-ai-landing` does NOT exist in your Vercel account. The project ID `prj_kdTL5N4aGBGLPkhf6eAQFTptwwex` is also missing from the live project list.

### .env.local
```
NEBIUS_API_KEY=<238 chars>
FIRECRAWL_API_KEY=<37 chars>
PERPLEXITY_BIZFLOW=<55 chars>
PERPLEXITY_NEOVIBE=<55 chars>
APIFY_ORG_ID=<19 chars>
APIFY_ORG_API=<48 chars>
APIFY_PERSONAL_API=<48 chars>
GCP_ADMIN_CLIENT_ID=<74 chars>
GCP_ADMIN_CLIENT_SECRET=<37 chars>
OPENROUTER_SONNET_3_5=<75 chars>
OPENROUTER_SONNET_4=<75 chars>
OPENROUTER_MANUS=<75 chars>
```
**Issue:** Variables reference `BIZFLOW` and `NEOVIBE` — both dead brands per TAXONOMY (BizFlow = OpsFlow now, NeoVibe = Nexus Creative now). Stale.

---

## 2. VERCEL REAL STATE (verified via API)

### Project `landing` (prj_Aa1xuuC3MAC9ZB4vtyCdjikmHX7q)
- **GitHub source:** `Taurus-Ai-Corp/GRIDERA` (NOT `SOCIAL MEDIA ORCHESTRA`)
- **Branch deployed:** `main`
- **Production alias:** **`q-grid.net`** (STILL — not yet migrated to grid-era.com)
- **Production URL:** `landing-62865sqzg-taurus-s-projects.vercel.app`
- **Latest prod commit:** `635be5f906b88b2185e182b32abfda740a607f03` — feat(gridera-verify): stable platform signer + --signer pin (#46 phase 1)
- **Preview state:** **ERROR** — last build (dependabot minor-patch group update) failed
- **Plan:** hobby
- **Auto-aliases:** `landing-taurus-s-projects.vercel.app`, `landing-git-main-taurus-s-projects.vercel.app`

### Other GRIDERA-related Vercel projects (verified live)
| Project | ID | URL |
|---|---|---|
| q-grid-comply-ca | prj_qtqQZO9PMdAKHHAj8aNdDd21yN5E | q-grid-comply-o7iqrqucs-taurus-s-projects.vercel.app |
| landing | prj_Aa1xuuC3MAC9ZB4vtyCdjikmHX7q | landing-62865sqzg-taurus-s-projects.vercel.app |
| gridera-pay-site | prj_LR4MpCwBHYOr3juy5UUgKXDK3lbt | gridera-pay-site-4c4udqqm7-taurus-s-projects.vercel.app |
| nexus-platform | prj_or87gYIQTyT4N11wn3U8fanVqoLA | nexus-platform-pegpnqvir-taurus-s-projects.vercel.app |
| nexus-creative-editorial | prj_NCqinis3B4rghR39CgAiuitJRcaS | nexus-creative-editorial-du5ya1chr-taurus-s-projects.vercel.app |
| nexus-creative-live | prj_APNyiNKhv13dl8crNXgIt9drdHrE | nexus-creative-live-ayut329g9-taurus-s-projects.vercel.app |

### Unknown
- **`opsflow-ai-landing`** — does NOT exist in Vercel. The `.vercel/project.json` is stale.

---

## 3. THE REAL ISSUE: WHICH REPO DEPLOYS WHERE?

| Vercel Project | Source Repo (verified) | Workspace State |
|---|---|---|
| landing | `Taurus-Ai-Corp/GRIDERA` (main) | NOT this workspace |
| gridera-pay-site | (unknown) | NOT this workspace |
| nexus-* | (unknown) | NOT this workspace |

**This workspace (`SOCIAL MEDIA ORCHESTRA`) is not deployed to Vercel from this directory.** It may have been deployed in the past under a different name, or it may have always been a local-only workspace for asset management / social-media-orchestration.

### Implication
- The `feat/gridera-brand-domain-migration` branch I just committed is in this local repo only
- It does NOT affect the live `landing` project at `q-grid.net`
- The live site still shows `q-grid.net` URLs (whatever the last deployed commit was)
- The local brand+domain migration is a **separate concern** from the live site's branding

---

## 4. WHAT NEEDS TO HAPPEN (concrete blockers)

### To make this workspace deploy to Vercel
1. **Choose target Vercel project.** Options:
 - Connect `landing` (existing) → re-deploy from `SOCIAL MEDIA ORCHESTRA` (will replace GRIDERA repo's app)
 - Create NEW Vercel project → import this workspace as a fresh project
 - Rename `landing` to `gridera-landing` (or `social-media-orchestra`)
2. **Update `.vercel/project.json`** to point at the correct project
3. **Fix `.env.local`** — remove BizFlow/NeoVibe references, add GRIDERA-specific vars (Higgsfield, TAURUS API endpoints)
4. **Remove the stale `landing-phi-ashen.vercel.app` alias** (from a previous deployment that's no longer valid)
5. **Migrate the `q-grid.net` alias** on the `landing` project to `grid-era.com` (this is the separate DNS plan we discussed)

### To fix the local-to-Vercel mismatch
- Document which repo each Vercel project deploys from
- Update TAXONOMY to reflect actual repo-to-project mapping
- Add a CI check: "if `.vercel/project.json` name doesn't match API, fail build"

---

## 5. RECOMMENDATIONS

### Immediate
- **Do NOT deploy from this workspace yet.** The workspace state doesn't match the live site state.
- **Audit the GRIDERA repo (`Taurus-Ai-Corp/GRIDERA`)** — that's where `landing` actually deploys from. If you want to migrate `q-grid.net` → `grid-era.com`, the changes need to happen there.
- **Decide whether this workspace should deploy** — if yes, do steps 1-5 above. If no, treat it as a local-only asset management workspace.

### This workspace's actual role
Given the directory name (`SOCIAL MEDIA ORCHESTRA`) and the asset inventory (videos, images, slide decks), this workspace appears to be the **content production hub**, not the marketing site. The actual `landing` site is deployed from `GRIDERA` repo. The two should be kept separate:
- `SOCIAL MEDIA ORCHESTRA` workspace = content creation + asset library + brand DNA
- `GRIDERA` repo = the live landing site + dashboard + PQC compliance app

---

## 6. SKILLS / TOOLS NOT USED YET (Hermes agentic IQ)

Top skills in this workspace that COULD help with the audit:
- `vercel-deploy-monorepo-sso-gotchas` (43.3 KB) — diagnostic for Vercel deployment issues
- `workspace-soul-generator` (6.6 KB) — auto-generate workspace documentation
- `pqc-repo-audit` — scan repos for cryptographic compliance
- `github-issue-to-pr` — full issue-to-PR workflow

The `vercel-deploy-monorepo-sso-gotchas` skill would be especially relevant for fixing the .vercel/project.json mismatch.

---

## 7. NEXT ACTIONS

### Decision needed
- **Is this workspace supposed to deploy to Vercel?** If yes, which project?
- **Do you want me to fix the `.vercel/project.json` mismatch?** (Low risk — it's already broken.)
- **Do you want me to scope down to this workspace's actual role** (asset library / content production) instead of trying to make it the live site?

### Safe actions I can take now
- Update `.vercel/project.json` to point at the real `landing` project (projectId stays the same since Vercel allows linking by ID)
- Fix `.env.local` to remove stale BizFlow/NeoVibe references
- Add a `README.md` to this workspace documenting its role as content production hub

### NOT safe without your approval
- Deleting `landing` from Vercel
- Renaming Vercel project
- Migrating `q-grid.net` alias to `grid-era.com`
- Anything that touches the live production site

---

## ARTIFACTS

- This audit: `/Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/output/GRIDERA-HERMES-AGENTIC-IQ-CHECK-2026-08-09.md`
- OCR audit (in progress via sub-agent): `/Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/output/GRIDERA-DECK-OCR-AUDIT-2026-08-09.md`
- Asset rewriter (5-platform mode): `/Users/taurus_ai/.hermes/skills/devops/gridera-asset-rewriter/scripts/derive_variants.py`
- Commit on branch: `c2a8fbc feat(brand): migrate q-grid → GRIDERA + q-grid.net → grid-era.com`

— END AUDIT —