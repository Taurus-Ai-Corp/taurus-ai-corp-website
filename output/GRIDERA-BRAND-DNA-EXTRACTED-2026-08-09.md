# GRIDERA Brand DNA — Extracted from Design System v2 (DTCG 2025.10)
**Date:** 2026-08-09
**Source:** `~/Downloads/Brand kit for Corporate Platform.zip` → `TAURUS AI Design System v2.dc.html` (966 lines)
**Canonical:** YES — overrides any prior memory values
**Iteration:** V2 (corrects stale memory: GRIDERA accent = #00CCAA, NOT #00F0FF)

---

## 1. THE "ONE VOID, FOUR EMITTERS" ARCHITECTURE

Every TAURUS AI platform shares:
- The same void (black background palette)
- The same addressable grid (1px wire lines)
- The same typography (Instrument Sans + IBM Plex Mono)
- The same motion (tds-breathe, tds-sweep)
- The same components (buttons, cards, grids, inputs)

What changes per platform is the **emitter** (one accent hue) and the **signature geometry**.

```
BRANDS = {
  taurus:    { em: '#FFFFFF', void: '#050508', geo: 'Addressable Monolith Matrix',  domain: 'taurusai.io'              },
  gridera:   { em: '#00CCAA', void: '#030807', geo: 'Octahedral Cryptographic Shield', domain: 'q-grid.net (now grid-era.com)' },
  nexus:     { em: '#4F7DF3', void: '#04060C', geo: 'Dynamic Flow Torus & Nodes',  domain: 'nexus.taurusai.io'         },
  biofoundry:{ em: '#00FF99', void: '#020905', geo: 'Posner Molecule Lattice',      domain: 'biofoundry.taurusai.io'    }
}
```

---

## 2. GRIDERA PALETTE (CANONICAL)

### Emitter ramp (teal-cyan family)
| Token | Hex | OKLCH | Use |
|---|---|---|---|
| `em.50` | `#E6FBF7` | oklch(.97 .02 180) | Light text on dark |
| `em.100` | `#B3F1E6` | oklch(.91 .05 180) | Hover state |
| `em.300` | `#66E0CC` | oklch(.82 .08 180) | Accent secondary |
| `em.500` | **`#00CCAA`** | oklch(.73 .13 180) | **Primary emitter** |
| `em.700` | `#008C77` | oklch(.55 .10 180) | Pressed state |
| `em.900` | `#003F36` | oklch(.30 .05 180) | Deep accent |

### Void ramp (background)
| Token | Hex | OKLCH | Use |
|---|---|---|---|
| `void.000` | `#000000` | oklch(0 0 0) | Print, true black only |
| `void.100` | **`#050508`** | oklch(.09 .006 280) | **Ground · 92% of surface** |
| `void.200` | `#0A0A0F` | oklch(.14 .008 280) | Panel, code block |
| `void.300` | `#101018` | oklch(.19 .012 280) | Raised card |
| `void.400` | `#16161F` | oklch(.23 .013 280) | Input, subtle button |
| `void.500` | `#1E1E28` | oklch(.28 .015 280) | Hover, overlay |

**GRIDERA uses void.100 `#050508` for primary ground** (not the more saturated `#030807` shown in BRANDS dictionary — that's the wireframe background, distinct from the body void).

### Text
| Token | Hex | Use |
|---|---|---|
| `ink.000` | `#FAFAFA` | Primary text (off-white, not pure white) |
| `ink.100` | `#5B6270` | Secondary text (muted) |

### Signal colors (universal, NOT emitter-locked)
- `#3DDC84` — VERIFIED (green checkmark UI)
- `#FFB020` — DRIFT (yellow warning)
- `#FF6B6B` / `#FF1621` — CRITICAL / NEVER SKIP A TIER (red)

---

## 3. TYPOGRAPHY (CANONICAL)

| Family | Source | Weights | Use |
|---|---|---|---|
| **Instrument Sans** | Google Fonts | 400 / 500 / 600 / 700 + italic 400 | Display + body |
| **IBM Plex Mono** | Google Fonts | 300 / 400 / 500 / 600 | Data + status + code |

**No Oswald, no Inter, no Space Mono** — those are stale memory values. The canonical stack is **Instrument Sans + IBM Plex Mono**.

### Common patterns
- Display: Instrument Sans 600-700, large size, `-webkit-font-smoothing: antialiased`
- Body: Instrument Sans 400-500, normal size
- Data/Status: IBM Plex Mono 400-500, `letter-spacing: .1em`, often UPPERCASE
- Labels: 9-11px, letter-spacing .1em, IBM Plex Mono

---

## 4. MOTION (CANONICAL)

```css
@keyframes tds-breathe {
  0%, 100% { opacity: .35 }
  50%      { opacity: 1 }
}

@keyframes tds-sweep {
  0%   { transform: translateX(-100%) }
  100% { transform: translateX(400%) }
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important }
}
```

**Standard easing**: 0.18s for hover, longer for reveals.
**Honor prefers-reduced-motion** — no exceptions.

---

## 5. GRIDERA SIGNATURE GEOMETRY

**Octahedral Cryptographic Shield** — 8-vertex polyhedron representing post-quantum lattice structure. Use as:
- Logo mark (bottom-left placement in hero compositions)
- Background motif (low-opacity wireframe behind content)
- Lattice pattern in card backgrounds
- Animated lattice particles (with `tds-breathe` opacity)

---

## 6. CORRECTED BRAND-LOCKED IMAGE PROMPT

```
Editorial dark cybersecurity hero image for GRIDERA (post-quantum compliance).
Single question dominating the frame in massive Instrument Sans display type,
700 weight, off-white #FAFAFA: HOW IS YOUR RSA-2048 TRAFFIC BEING PROTECTED?
Below: a single teal-cyan #00CCAA horizontal underline, 200px wide, 4px thick,
with subtle glow rgba(0,204,170,.55).
Background: void #030807 (deep black-green) with subtle addressable grid pattern
(1px lines, rgba(0,204,170,.15) wire color, 8% opacity).
Bottom-right: small IBM Plex Mono data string at 9.5px:
STATUS: // VULNERABLE // DEADLINE: 2027
Bottom-left: minimal geometric GRIDERA mark — octahedral cryptographic shield —
small wireframe polyhedron in teal-cyan #00CCAA.
No people. No faces. No stock photography.
Color palette locked: void #030807 primary, teal-cyan #00CCAA accent, off-white #FAFAFA text.
Mood: minimal, editorial, premium, post-quantum security product, dark editorial style.
16:9 aspect.
```

---

## 7. V1 → V2 ITERATION DIFF

| Field | V1 (stale memory) | V2 (design system v2) |
|---|---|---|
| Background | `#080A0F` | **`#030807`** |
| Accent | `#00F0FF` (neon teal) | **`#00CCAA`** (teal-cyan) |
| Text | not specified | **`#FAFAFA`** (off-white) |
| Wire color | not specified | `rgba(0,204,170,.15)` |
| Glow | not specified | `rgba(0,204,170,.55)` |
| Display font | Oswald (wrong) | **Instrument Sans** |
| Data font | Space Mono (wrong) | **IBM Plex Mono** |
| Signature | not specified | **Octahedral Cryptographic Shield** |
| Motion | not specified | **tds-breathe + tds-sweep** |

---

## 8. ASSETS INDEXED THIS TURN (extracted from Brand Kit zip)

| File | Size | Notes |
|---|---|---|
| TAURUS AI Design System v2.dc.html | 966 lines | **CANONICAL brand DNA** |
| TAURUS AI Brand Kit.dc.html | 13 lines | shell wrapper |
| Taurus AI Brand Kit.dc.html | 13 lines | duplicate shell |
| uploads/01-sales-ops.md | (sales ops use case) | content reference |
| uploads/02-marketing-automation.md | | content reference |
| uploads/03-webapp-devops.md | | content reference |
| uploads/04-india-fintech.md | | content reference |
| uploads/05-deeptech-research.md | | content reference |
| uploads/06-compliance-regtech.md | | content reference |
| uploads/07-security-ops.md | | content reference |
| uploads/08-data-intelligence.md | | content reference |
| uploads/09-launch-ops.md | | content reference |
| uploads/10-blockchain-ops.md | | content reference |
| uploads/GRIDERA LOGO.jpg | (extracted) | logo asset |
| uploads/Gridera 3D logo -1.jpg | | 3D variant |
| uploads/Untitled 21/22/23.jpg | | design references |
| uploads/assets-1785567408277.jpg | | design references |
| uploads/assets-1785567412344.jpg | | design references |
| uploads/assets-1785567425499.jpg | | design references |

Plus from Gridera_claude_landing.zip:
| File | Size | Notes |
|---|---|---|
| Gridera Landing.html | 28 KB | production landing |
| assets/gridera.css | (CSS) | GRIDERA styles |
| assets/styles.css | (CSS) | common styles |
| assets/lattice.js | (JS) | lattice animation |
| assets/quantum-demo.js | (JS) | quantum demo |
| assets/img/lattice-{portrait,tall,wide}.jpg | (3 images) | lattice visual |
| uploads/taurus-logo-full.svg | | full logo SVG |
| uploads/business-card.svg | | business card |
| uploads/letterhead.svg | | letterhead |
| uploads/invoice-template.svg | | invoice |
| uploads/og-image-template.svg | | OG image |
| uploads/twitter-header.svg | | Twitter header |
| uploads/linkedin-slide-{dark,light}.html | (2 slides) | LinkedIn |
| uploads/email-header.html | | email |
| uploads/presentation-slide.html | | presentation |
| uploads/AGENTS.md | | agent docs |
| uploads/HANDOVER_TO_CLAUDE_CODE.md | | handover notes |
| uploads/Untitled 2.jpg | | design ref |

---

## 9. NEXT ITERATION PROMPTS (V3 candidates)

Once you approve V2, I'll iterate to V3 with:

1. **Stronger octahedral lattice** — make the cryptographic shield more visible/prominent
2. **Sample 2 variations** — alternative layouts (centered type vs left-aligned, etc.)
3. **Aspect 1:1 variant** — for Instagram from same prompt
4. **Color test** — verify #00CCAA renders as teal-cyan (not neon #00F0FF)
5. **Type test** — if Instrument Sans isn't available in gpt_image_2, fall back to generic sans display

---

## 10. DELIVERABLES THIS TURN

| File | Location | Size |
|---|---|---|
| H_GRIDERA_HERO_V2_2026-08-09.png | 1_inbox/ | 4.0 MB |
| H_GRIDERA_HONEST_QUESTION_HERO_2026-08-09.png | 1_inbox/ | 5.5 MB (V1, superseded) |
| GRIDERA-BRAND-DNA-EXTRACTED-2026-08-09.md | output/ | this file |

**Note:** V1 image is technically superseded but kept on disk for comparison. Delete or archive as you prefer.

---

— END DNA EXTRACTION —