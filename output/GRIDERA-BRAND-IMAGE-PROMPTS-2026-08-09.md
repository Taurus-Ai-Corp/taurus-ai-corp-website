# GRIDERA Brand-Compliant Image Prompts — 5 Templates
**Date:** 2026-08-09
**For use with:** higgsfield CLI / imagegen-frontend-web / brandkit skill
**Brand palette LOCKED:** void #080A0F + GRIDERA neon teal #00F0FF + parchment #F4F0E8
**Fonts:** Oswald display + Inter body + Space Mono data
**Format constraints:** LinkedIn 1200x627 (1.91:1), Instagram 1080x1080 (1:1)

---

## PROMPT TEMPLATE 1 — Hero / Lead Post (LinkedIn)
**Use for:** LinkedIn Post 1 "The Honest Question"
**Format:** 1200x627 horizontal

```
Editorial dark-tech cybersecurity hero image for GRIDERA.
Single question dominating the frame in massive Oswald display type:
"HOW IS YOUR RSA-2048 TRAFFIC BEING PROTECTED?"
Below: a single GRIDERA neon teal #00F0FF horizontal underline, 200px wide, 4px thick.
Background: void #080A0F with subtle cipher grid texture (1px lines, 8% opacity).
Bottom-right: small Space Mono data string "STATUS: // VULNERABLE // DEADLINE: 2027".
No people. No logos except a minimal GRIDERA mark in bottom-left (geometric grid + key).
Color palette: void #080A0F primary, GRIDERA #00F0FF accent only.
Lighting: single edge light from upper-right.
Aspect 1200x627. Cinematic, sparse, premium, security-product.
```

---

## PROMPT TEMPLATE 2 — Threat Timeline (Instagram)
**Use for:** Instagram Post 1 "Your Encryption Has an Expiration Date"
**Format:** 1080x1080 square (Reel cover)

```
Editorial dark cybersecurity countdown visualization.
Massive countdown clock at center: "07:14:18:42" digits in GRIDERA neon teal #00F0FF.
Around the clock: thin radial lines suggesting quantum radiation, decaying from teal at center to void at edge.
Below clock: 5 horizontal timeline ticks with year labels: 2017 / 2022 / 2024 / 2027 / 2030.
Each tick in Space Mono data font, small, restrained.
Background: void #080A0F.
Top of frame: minimal "GRIDERA" wordmark in Oswald display, parchment #F4F0E8.
No face. No body. Pure typographic + data viz.
Aspect 1080x1080. Minimalist, premium, deadline-driven urgency.
```

---

## PROMPT TEMPLATE 3 — Sovereignty / Cells (Instagram carousel slide 1)
**Use for:** Instagram Post 2 "Quantum-Safe Signature"
**Format:** 1080x1080 square

```
Editorial dark cybersecurity world map with jurisdiction cells.
Map projection: equirectangular, low-contrast on void #080A0F background.
5 jurisdiction cells highlighted with GRIDERA neon teal #00F0FF:
- North America (cell "NA")
- European Union (cell "EU")
- India (cell "IN")
- UAE/GCC (cell "AE")
- Canada (cell "CA")
Each cell: a hexagonal border with the cell code centered in Space Mono font.
Cell labels: "DATA STAYS HERE // AUDIT TRAIL // HEDERA-ANCHORED".
Top: minimal "GRIDERA" wordmark, parchment.
Bottom: small Space Mono line "// SOVEREIGN CELLS. ONE PLATFORM. ZERO EXCUSES."
Aspect 1080x1080. Editorial, dark, sovereignty-as-product.
```

---

## PROMPT TEMPLATE 4 — Compliance Pillars (LinkedIn carousel cover)
**Use for:** LinkedIn Post 4 "Convergence Proof"
**Format:** 1200x627 horizontal

```
Editorial dark cybersecurity compliance proof grid.
4x4 grid of small cells, each containing a regulator/standard code in Space Mono:
FIPS 203 / FIPS 204 / FIPS 205 / NIST
ML-KEM-768 / ML-DSA-65 / SLH-DSA
HEDERA aBFT / NRC IRAP / ITSG-33
SWIFT CSP / EU AI ACT / EU QS 2030
CNSA 2.0 / IBM IBV / EBA
Cells in two states: 14 GRIDERA neon teal #00F0FF (validated), 1 muted gray (pending).
Center of grid: massive "14/15" number in Oswald display, parchment #F4F0E8.
Background: void #080A0F.
Top: minimal "GRIDERA" wordmark.
Bottom: "STANDARDS VALIDATED // ONE REPORT // ZERO THEATER" in Space Mono.
Aspect 1200x627. Dark editorial, proof-as-product, premium validation imagery.
```

---

## PROMPT TEMPLATE 5 — Audit Trail Visualization (Instagram carousel slide)
**Use for:** Instagram Post 3 "18-Month Migration That's Already Late"
**Format:** 1080x1080 square

```
Editorial dark cybersecurity horizontal timeline visualization.
Single horizontal axis at vertical center, GRIDERA neon teal #00F0FF.
8 milestone markers along the axis, each with:
- Year label (2024, 2025, 2026 Q1, 2026 Q3, 2027 Q1, 2027 Q4, 2028, 2030)
- Standard/regulator code (FIPS 203, FIPS 204, ML-DSA-65, ML-KEM-768, SWIFT CSP, EU AI ACT, EU QS 2030, CNSA 2.0)
- Small icon (geometric, minimal)
Above axis: "AUDIT TRAIL // HEDERA-ANCHORED // TAMPER-EVIDENT" in Space Mono.
Below axis: "// 18 MONTHS. EVERY ASSERTION WITNESSED." in Oswald display, parchment.
Background: void #080A0F.
Aspect 1080x1080. Dark editorial timeline, premium, deadline-driven.
```

---

## USAGE

Once `higgsfield auth login` is done, run each prompt via:
```
higgsfield generate create <model> --prompt "<prompt above>" --aspect-ratio 1200x627 --style dark
```

Where `<model>` is the model id from `higgsfield model list --image` (need to pick a style that handles dark editorial).

For LinkedIn posts: use Prompt 1 (hero), Prompt 4 (carousel cover), or rotate.
For Instagram posts: use Prompt 2 (Reel cover), Prompt 3 (cells), Prompt 5 (timeline).

All prompts enforce:
- void #080A0F + GRIDERA #00F0FF + parchment #F4F0E8 (brand-locked)
- Oswald display + Inter body + Space Mono data
- No people, no stock photography, no faces
- Minimal, editorial, premium, security-product aesthetic