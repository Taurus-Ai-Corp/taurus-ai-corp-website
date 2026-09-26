# GRIDERA Corporate Launch — GTM Plan v1
**Date:** 2026-08-09
**Owner:** TAURUS AI Corp
**Status:** PLAN ONLY — awaiting your approval to execute

---

## 0. CONTEXT (one-paragraph truth)

GRIDERA is the post-quantum cryptography compliance platform (entity: ARQ QUANTUM LLC Wyoming; signs GRIDERA). Today's brand+domain migration executed: all Q-Grid → GRIDERA, q-grid.net → grid-era.com. The migration script touched 376 files / 3378 replacements / 39 renames with 0 remaining brand violations in workspace text. Cloudflare API access verified: grid-era.com zone is ACTIVE, NS pointed (dexter/gina.ns.cloudflare.com), 0 DNS records yet, plan=Free. q-grid.net zone is in a different Cloudflare account (not accessible from the cfat token you provided). Vercel `landing` project (prj_Aa1xuuC3MAC9ZB4vtyCdjikmHX7q) is the current q-grid.net host with deployment URL `landing-62865sqzg-taurus-s-projects.vercel.app`. `npm run build` blocked on Node 25 + webpack wasm hash incompatibility (pre-existing, not migration-caused); `npm run lint` clean.

---

## 1. PRIMARY OBJECTIVES (90-day)

1. Establish GRIDERA on `grid-era.com` as the canonical corporate web presence.
2. Launch GRIDERA on LinkedIn (primary) + Instagram (secondary) with 3 + 3 = 6 seed posts in week 1.
3. Funnel traffic to `grid-era.com` free assessment / landing page.
4. Generate 25+ qualified enterprise leads in Q3 2026 (banks, fintechs, regulated enterprises).
5. Build measurement + iteration loop so the campaign teaches itself.

---

## 2. TARGET AUDIENCE (from research docs)

**Primary ICP — Banks & Financial Services** (cited in `QUANTUM_THREAT_ANALYSIS.md` §2.1 + `MARKETING-CONTENT-PACKAGE.md`):
 - CISO + Head of Cryptography at Tier-1/2 banks
 - SWIFT ecosystem members (SWIFT mandates PQC by 2027)
 - Federal Reserve / ECB / Bank of Canada regulated entities

**Secondary ICP — Regulated enterprises with PQC exposure:**
 - Healthcare (HIPAA + post-quantum HIPAA guidance pending)
 - Government / Defense (ITSG-33 in Canada, NIST FIPS 203/204 in US)
 - Critical infrastructure (energy, telco)

**Tertiary ICP — Fintechs & payment processors:**
 - CBDC infrastructure (RBI x402-Q, India track)
 - Crypto exchanges / custodians

---

## 3. PLATFORM PRIORITY (per your direction this turn)

### LinkedIn — PRIMARY
**Why:** B2B PQC decision-makers live on LinkedIn. CISO searches, regulator engagement, vendor research. Workspace already has `LINKEDIN-OPTIMIZATION-STRATEGY.md` (11 KB), `LINKEDIN-POSTS-BATCH-1.md` (15 KB).

### Instagram — SECONDARY (your addition this turn)
**Why you specified it:** even B2B PQC has visual storytelling — threat timelines, deadline clocks, lighthouse imagery, "harvest-now-decrypt-later" visualizations. Workspace has no existing IG plan; this is new territory.

### Tertiary (out of scope for v1):
 - X/Twitter — `xurl` CLI exists but workspace has no Twitter brand handle for GRIDERA
 - YouTube — `H_GRIDERA_TRILLION_DOLLAR_THREAT.mov` (32 MB) exists; long-form YouTube plan deferred
 - Reddit / Quora / HN — not B2B-appropriate for v1

---

## 4. TOOL/SKILL/MCP ARCHITECTURE (verified live this session)

### MCP servers ACTIVE this session (verified via `ps aux`):
- `chrome-devtools-mcp` — browser automation, page inspection, screenshots
- `context7-mcp` — live library documentation lookup
- `gsheets-mcp` — Google Sheets content calendar + analytics
- `atlassian-mcp` — Jira/Confluence (out of scope; available)
- `github-mcp` — repo management for the workspace itself
- `mcp-google-drive` — Drive for content storage (Drive 401 right now, will recover)
- `supabase-mcp` — backend persistence (free tier, no PAT set per your memory rule)
- `higgsfield-mcp` — image/video/3D generation (paid, used in brand-kit flow)
- `agent_reach` — proxy/route MCP calls across servers
- `gcal-autoauth` — Google Calendar for scheduling
- `playwright-mcp` — browser automation (works alongside chrome-devtools)

### CLIs available (this session):
- `firecrawl` — web research + scrape
- `himalaya` — IMAP email (placeholder account, blocked)
- `gws` — Google Workspace (Drive 401, Gmail failedPrecondition; Calendar/Sheets/Slides/Docs/People work)
- `higgsfield` — image/video generation
- `playwright` v1.58.2 — browser automation

### Skills (Hermes-managed, top 8 relevant for this plan):
- `brandkit` — brand asset generation (LOCKED colors: GRIDERA #00F0FF on void #080A0F)
- `higgsfield-video-explainer` — full explainer pipeline
- `image-to-code` — screenshot → Next.js component
- `imagegen-frontend-web` — web-quality image generation
- `imagegen-frontend-mobile` — Instagram-format image generation
- `marketing` — marketing automation patterns
- `pqc-repo-audit` — GRIDERA repo compliance audit (for proof-point posts)
- `social-media` — direct social-media-pipeline orchestration

### BLOCKERS (concrete, today):
1. **Vercel landing project not redeployed with migrated code** — its current build still has q-grid.net URLs (the rename happened in source, not in the deployed artifact)
2. **No DNS records on grid-era.com** — site won't resolve until A/CNAME added
3. **gws Drive 401 + Gmail API disabled** — limits analytics pipeline (will need workaround)
4. **No content calendar populated yet** — `gsheets-mcp` ready but sheet is empty
5. **Higgsfield needs auth** — `higgsfield auth login` not yet done this session
6. **No Instagram account linked** — workspace has no IG credentials configured

---

## 5. 6-STAGE PIPELINE (the system to build)

```
[Stage 1: Research]            [Stage 2: Insight]
firecrawl + last30days    →    Sub-agent swarm     →
+ NotebookLM-fallback         reads 11 strategy docs
+ context7-mcp                 extracts top 3 pain pts
                               → output: brief.md

[Stage 3: Brand-compliant content generation]
                               ↓
  ┌─────────────────┬──────────────────┬──────────────────┐
  │ Imagegen-web    │ Imagegen-mobile  │ higgsfield-      │
  │ (LinkedIn)      │ (Instagram)      │ video-explainer  │
  │ brandkit colors │ 1:1 + 9:16       │ (YouTube/Reels)  │
  └─────────────────┴──────────────────┴──────────────────┘
                               ↓

[Stage 4: Packaging]
html-pitch-deck-no-overflow → slides PDF
carousel HTML → PDF (carousel-to-pdf-converter.py)
sentinel-infographic → threat timeline PDFs
                               ↓

[Stage 5: Distribution + Scheduling]
gsheets-mcp → content calendar (date/platform/copy/asset/status)
gcal-autoauth → schedule reminders for human posting
playwright-mcp → automation of LinkedIn web posting (no official API)
                               ↓

[Stage 6: Analytics + Iteration]
gsheets-mcp → metrics import (LinkedIn company page analytics, IG insights)
last30days → weekly trending check
viral-content-analysis → double down on winners
```

---

## 6. AGENT ARCHITECTURE (5 specialized agents)

| Agent | Tools/MCP | Output |
|---|---|---|
| **Research Agent** | firecrawl, context7-mcp, last30days skill | weekly trending + competitor moves |
| **Insight Writer Agent** | reads strategy docs, writes in GRIDERA voice | 3 LinkedIn posts/week + 3 Instagram posts/week |
| **Visual Agent** | higgsfield-cli, imagegen-frontend-web, imagegen-frontend-mobile, brandkit | 1:1, 9:16, 16:9 images with GRIDERA color lock |
| **Format Agent** | html-pitch-deck-no-overflow, carousel-to-pdf-converter.py, sentinel-infographic | slide PDFs, carousel PDFs, threat-timeline infographics |
| **Distribution Agent** | gsheets-mcp, gcal-autoauth, playwright-mcp | content calendar, scheduled posts, IG/LinkedIn uploads via web automation |

Each agent runs in its own delegate_task context with isolated terminal. Spawn all 5 in parallel for week 1's 6-post drop.

---

## 7. 90-DAY ROLLOUT (phased)

### Phase 1 — FOUNDATION (Week 1, 1 session)
- Activate grid-era.com DNS (Cloudflare A/CNAME, see separate approval needed)
- Redeploy Vercel `landing` project with migrated code
- Higgsfield auth login
- Set up `gsheets-mcp` content calendar (template: Date | Platform | Topic | Copy | Asset | Status | Metrics)
- Create 5 brand-compliant image templates using `brandkit` + `imagegen-frontend-web` (LOCKED colors: GRIDERA #00F0FF on void #080A0F)

### Phase 2 — RESEARCH + INSIGHT (Week 1-2, 2 sessions)
- Deploy Research Agent: 5 competitor pages, NIST updates, regulator feeds
- Deploy Insight Writer Agent: extract 3 pillar narratives from research docs
- Draft LinkedIn pillar themes:
  - Pillar 1: "Deadline math" (2030 quantum threat + 2027 SWIFT + 2026 NIST)
  - Pillar 2: "Sovereign cells" (per-jurisdiction compliance)
  - Pillar 3: "Audit trail" (Hedera aBFT + ML-D-DS-65 witness layer)
  - Pillar 4: "Standards validation" (NRC IRAP, ITSG-33, NIST FIPS 203/204)
- Draft Instagram pillar themes:
  - Pillar 1: "Threat timeline" countdown visualizations
  - Pillar 2: "Lighthouse cells" sovereignty imagery
  - Pillar 3: "Deadline clocks" regulator-driven urgency
  - Pillar 4: "Behind the build" team/process shots

### Phase 3 — FIRST DROP (Week 2-3, 1 session)
- Spawn 5 agents in parallel for 3 LinkedIn + 3 Instagram posts
- Each post: copy (≤1300 chars LinkedIn, ≤2200 chars IG caption), 1 image, 1 alt-text, 3 hashtags, link back to grid-era.com
- Visual Agent generates 6 images (3: 1200x627 LinkedIn, 3: 1080x1080 IG square)
- Format Agent packages carousels (3 LinkedIn carousel PDFs + 3 IG carousel PDFs)
- Review cycle: you approve each post before scheduling

### Phase 4 — SCHEDULE + LAUNCH (Week 3, 1 session)
- Distribution Agent populates `gsheets-mcp` calendar
- `gcal-autoauth` schedules reminders for human posting windows (LinkedIn: Tue-Thu 8-10am, IG: Mon/Wed/Fri 12-2pm)
- `playwright-mcp` orchestrates web login + post (since no official APIs for IG/LinkedIn personal posting)

### Phase 5 — MEASURE + ITERATE (Week 4+, ongoing)
- Weekly metrics pull: impressions, engagement, link clicks, leads
- Use `last30days` for trending check, `viral-content-analysis` for content quality
- Kill underperformers (engagement <1%), double down on winners

### Phase 6 — SCALE TO OTHER PLATFORMS (Month 2-3)
- Add X/Twitter once `xurl` is configured
- YouTube: cut down `H_GRIDERA_TRILLION_DOLLAR_THREAT.mov` into 3-5 short clips via `higgsfield-video-explainer`
- Reddit/HN long-form for technical authority
- Expand to other GRIDERA products (Scan, Guard, Migrate) once Comply is established

---

## 8. COST ANALYSIS (verified)

| Tool | Cost | Status |
|---|---|---|
| firecrawl | Free tier (500 pages/mo) or scale $49/mo | Available |
| gws Sheets/Calendar/Docs/Slides | Free with Google account | Working |
| context7-mcp | Free | Active |
| gsheets-mcp | Free | Active |
| github-mcp | Free (rate-limited) | Active |
| supabase-mcp | Free tier | Active (no PAT) |
| higgsfield | Paid (per-image/video) | Needs login |
| last30days skill | Free | Available |
| brandkit, imagegen-* | Free (uses configured free models) | Available |
| NotebookLM-fallback | Free (manual extraction) | Available |
| NotebookLM native | Requires your Google auth | BLOCKED (SSO) |
| Playwright | Free | v1.58.2 active |
| **Total for week-1 launch** | **$0–$50** | Mostly free |

---

## 9. SEED CONTENT (drafted this turn, ready for review)

### LinkedIn Post 1 — "Deadline Math"
**Hook:** "Three deadlines. One platform. Zero excuses."
**Body:** A countdown showing SWIFT 2027, NIST FIPS 203/204 mandatory 2026, EU ETSI 2030. Frame as math problem: if your TLS handshake uses RSA-2048 today, an attacker recording your traffic now decrypts it in 2030. That's "harvest now, decrypt later" — and it's already happening.
**CTA:** Free assessment at grid-era.com/assess
**Hashtags:** #PostQuantum #PQC #NIST #GRIDERA #CyberSecurity

### LinkedIn Post 2 — "Sovereign Cells"
**Hook:** "Your data doesn't cross borders. Neither should your compliance."
**Body:** GRIDERA jurisdiction cells — NA, EU, IN, AE, CA — each running on sovereign infrastructure with audit trail anchored to Hedera aBFT. One platform, five jurisdictions, zero data residency violations.
**CTA:** Sovereign demo at grid-era.com
**Hashtags:** #DataSovereignty #GRIDERA #Compliance #Hedera #PQC

### LinkedIn Post 3 — "Standards Authority"
**Hook:** "We're the first PQC compliance platform with NRC IRAP, ITSG-33, and NIST FIPS 203/204 in one report."
**Body:** Three regulator-issued standards validated end-to-end. No vendor lock-in, no certification theater — actual cryptographic primitives (ML-KEM-768, ML-DSA-65) running on production-grade infrastructure.
**CTA:** Standards report at grid-era.com/reports
**Hashtags:** #NIST #FIPS203 #FIPS204 #GRIDERA #PQC

### Instagram Post 1 — Threat Timeline
**Visual:** Dark void background, GRIDERA neon teal #00F0FF timeline showing 2017 NSA warning → 2022 NIST selection → 2024 FIPS published → 2027 SWIFT mandatory → 2030 quantum threat. Each milestone with year + source.
**Caption:** "The countdown already started. 7 years. 1 platform. ⏱️ #PostQuantum #GRIDERA"

### Instagram Post 2 — Lighthouse Cell
**Visual:** Stylized lighthouse beam rotating over a map of the world, with jurisdiction cells highlighted in GRIDERA #00F0FF: NA, EU, IN, AE, CA. Dark void #080A0F background.
**Caption:** "Five jurisdictions. One platform. No data leaves the cell. 🗼 #DataSovereignty #GRIDERA"

### Instagram Post 3 — Deadline Clock
**Visual:** Massive countdown clock at 00:00:00:00 with "SWIFT 2027" in bold GRIDERA neon teal. Below: "Your RSA-2048 traffic is being recorded. The clock is ticking."
**Caption:** "Harvest now. Decrypt later. The clock is ticking. ⏰ #PQC #GRIDERA"

---

## 10. KPIs (90-day targets)

| KPI | Target |
|---|---|
| LinkedIn followers | +500 organic |
| LinkedIn post impressions/week | 5K+ per post by week 4 |
| LinkedIn engagement rate | ≥3% |
| Instagram followers | +300 organic |
| Instagram post reach | 1K+ per post by week 4 |
| grid-era.com sessions from social | 500+/mo by week 8 |
| Qualified leads from social | 25 by day 90 |
| Lead → assessment conversion | ≥8% |
| Cost per lead (organic only) | <$5 |

---

## 11. RISKS / OPEN QUESTIONS

1. **DNS activation blocked** — grid-era.com has no A/CNAME yet. Need your approval on the separate DNS plan.
2. **Vercel landing project rebuild blocked by Node 25/wasm hash bug.** Need to either downgrade Node or upgrade Next.js/webpack before deploying migrated code.
3. **gws Drive 401 stale token** — affects analytics pipeline. Workaround: use gsheets-mcp directly (works), or re-auth gws.
4. **No Instagram account credentials configured in workspace** — need to set up before Distribution Agent can post.
5. **Higgsfield needs `higgsfield auth login`** — costs apply per generation.
6. **Brand migration just executed; the deployed Vercel build is stale.** Need to redeploy after the Node 25 bug is fixed.
7. **No canonical "GRIDERA Instagram bio / handle" exists** — needs definition (e.g., @gridera_official vs @gridera_pqc vs @grid_era).

---

## 12. APPROVAL NEEDED TO PROCEED

Phase 1 (Foundation) is the smallest unit. It requires:
1. `higgsfield auth login` (one-time, costs apply)
2. Cloudflare DNS plan execution (separate approval needed)
3. Vercel rebuild after Node 25 bug fix (separate approval needed)

Phase 2-5 require no external service approval, only tool execution time.

**Say "execute Phase 1" or "execute all phases" and I'll proceed with the corresponding scope.**

— END PLAN —
