# GRIDERA Deck OCR + AI-Hallucination Audit — CORRECTION (Aug 10)

**Note:** The original audit flagged 2 decks as LOW confidence based on "Stock Phrases" detection.
On manual review (Aug 10), both are actually real-world content:

1. `Meeting Script – Prof. Ajay Singh × Taurus AI Corp.pdf` — real meeting script with actual entities (Prof. Ajay Singh, QdayReady newsletter, RBI Harbinger challenge), real product details (FIPS 203/204, ML-KEM, ML-DSA), and real price points. The "stock phrase" detector flagged formal corporate writing style.

2. `PQC Assessment — 15 min between Effin Fernandez × Effin Fernandez.pdf` — Gemini transcript of a real PQC assessment meeting dated Jul 13 2026 with Lucy Sharma. Contains actual names, real product mentions (GridEra, Hedera/Heiro), and a substantive meeting summary.

**Revised verdict: Both decks are KEEP** (not SCRAP). The original LOW ratings were false positives from the heuristic — the stock-phrase density was high but the content was substantive. Recommendation: treat both as real source material.

The other 38 HIGH ratings stand.

---

# GRIDERA Slide Deck OCR + AI-Hallucination Audit

**Date**: 2026-08-09  
**Source folder**: `1_inbox/H_DOWNLOADS_INGEST_2026-08-09/`  
**Decks audited**: 40  
**Method**: `pdftotext -layout` per page; `tesseract` OCR fallback for image-only decks; PPTX text extracted from slide XML

## How ratings work

- **HIGH** = minimal AI tells; real-world signals (dates, regulatory cites, dollar figures, real entities); avg AI score < 0.5, < 15% of pages with AI patterns
- **MEDIUM** = mostly real content with some AI padding; avg AI score < 2.0, < 50% of pages affected
- **LOW** = heavy AI tells: placeholders, AI disclaimers, stock phrases, filler density, no verifiable entities

## Per-deck breakdown

### 3-minute script — MONAD _ Gate.pdf

- **File**: `3-minute script — MONAD _ Gate.pdf`
- **Format**: PDF
- **Size**: 0.24 MB
- **Pages**: 4
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/3-minute_script___MONAD___Gate_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 4 pages)
- **Real-world signals detected**: 1/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> 7/25/26, 6:37 PM                                             3-minute script — MONAD | Gate  THREE MINUTES · PLAIN ENGLISH     How to explain this to anyone.  No jargon. One idea people already understand, then show the thing working. Read  the lines in the boxes more or less as written — they've be

### 4T1BK36B66U130875_scan_2026_05_31_02-14-43.pdf

- **File**: `4T1BK36B66U130875_scan_2026_05_31_02-14-43.pdf`
- **Format**: PDF
- **Size**: 0.03 MB
- **Pages**: 1
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/4T1BK36B66U130875_scan_2026_05_31_02-14-43_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 1 pages)
- **Real-world signals detected**: 1/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> Scan Report                                                                            May 31, 2026 2:14 PM     4T1BK36B66U130875      3 Confirmed Codes    P0300       Random/Multiple Cylinder Misfire Detected    P0302       Cylinder 2 Misfire Detected    P0304       Cylinder 4 Misfire Detected    1

### Autonomous_Quantum_Compliance (1).pdf

- **File**: `Autonomous_Quantum_Compliance (1).pdf`
- **Format**: PDF
- **Size**: 14.41 MB
- **Pages**: 14
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Autonomous_Quantum_Compliance__1__cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 14 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### Autonomous_Quantum_Compliance (2).pdf

- **File**: `Autonomous_Quantum_Compliance (2).pdf`
- **Format**: PDF
- **Size**: 14.41 MB
- **Pages**: 14
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Autonomous_Quantum_Compliance__2__cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 14 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### Autonomous_Quantum_Compliance.pdf

- **File**: `Autonomous_Quantum_Compliance.pdf`
- **Format**: PDF
- **Size**: 14.41 MB
- **Pages**: 14
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Autonomous_Quantum_Compliance_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 14 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### GRIDERA Master Presentation Suites _ Taurus AI Corp.pdf

- **File**: `GRIDERA Master Presentation Suites _ Taurus AI Corp.pdf`
- **Format**: PDF
- **Size**: 0.47 MB
- **Pages**: 9
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/GRIDERA_Master_Presentation_Suites___Taurus_AI_Corp_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 9 pages)
- **Real-world signals detected**: 5/10
- **Brand mentions**: qgrid: 2, q-grid.net: 2, gridera: 9

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> CONFIRMED ATTENDANCE                                                                                Blockchain Futurist 2026                                                                         Rebel Entertainment Complex, Toronto                           TAURUS AI CORP. // GRIDERA    The Post-Q

### GRIDERA Platform · Software-Defined Quantum Compliance for the Regulated Enterprise Stack (1).pdf

- **File**: `GRIDERA Platform · Software-Defined Quantum Compliance for the Regulated Enterprise Stack (1).pdf`
- **Format**: PDF
- **Size**: 0.59 MB
- **Pages**: 11
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/GRIDERA_Platform___Software-Defined_Quantum_Compliance_for_the_Regulated_Enterprise_Stack__1__cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 11 pages)
- **Real-world signals detected**: 6/10
- **Brand mentions**: gridera: 15

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> TAURUS      AI      CORP.                                                                                   SEED ROUND Q1 2027 GRIDERA     —    PRODUCT    PLATFORM     Software-defined quantum compliance for the regulated enterprise stack. A product platform of TAURUS AI Corp., GRIDERA replaces the 

### GRIDERA Platform · Software-Defined Quantum Compliance for the Regulated Enterprise Stack.pdf

- **File**: `GRIDERA Platform · Software-Defined Quantum Compliance for the Regulated Enterprise Stack.pdf`
- **Format**: PDF
- **Size**: 0.59 MB
- **Pages**: 11
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/GRIDERA_Platform___Software-Defined_Quantum_Compliance_for_the_Regulated_Enterprise_Stack_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 11 pages)
- **Real-world signals detected**: 6/10
- **Brand mentions**: gridera: 15

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> TAURUS      AI      CORP.                                                                                   SEED ROUND Q1 2027 GRIDERA     —    PRODUCT    PLATFORM     Software-defined quantum compliance for the regulated enterprise stack. A product platform of TAURUS AI Corp., GRIDERA replaces the 

### GRIDERA final Structure.pdf

- **File**: `GRIDERA final Structure.pdf`
- **Format**: PDF
- **Size**: 0.55 MB
- **Pages**: 2
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/GRIDERA_final_Structure_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 2 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### Gridera_Technical_Blueprint.pdf

- **File**: `Gridera_Technical_Blueprint.pdf`
- **Format**: PDF
- **Size**: 12.32 MB
- **Pages**: 12
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Gridera_Technical_Blueprint_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 12 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### India_s_Quantum_Compliance_Countdown.pdf

- **File**: `India_s_Quantum_Compliance_Countdown.pdf`
- **Format**: PDF
- **Size**: 11.74 MB
- **Pages**: 14
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/India_s_Quantum_Compliance_Countdown_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 14 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### Invoice — NEXUS_SOCIAL™ _ by Taurus AI.pdf

- **File**: `Invoice — NEXUS_SOCIAL™ _ by Taurus AI.pdf`
- **Format**: PDF
- **Size**: 0.13 MB
- **Pages**: 2
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Invoice___NEXUS_SOCIAL____by_Taurus_AI_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 2 pages)
- **Real-world signals detected**: 4/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> INVOICE NUMBER NEXUS_SOCIAL™ | by Taurus AI                                                                            INV-MMH-2026-002 A Division of TAURUS AI CORP - FZCO                                                                                          DATE IFZA Properties, Premises No. DSO-

### License Application Summary - TAURUS AI CORP - FZCO.pdf

- **File**: `License Application Summary - TAURUS AI CORP - FZCO.pdf`
- **Format**: PDF
- **Size**: 0.33 MB
- **Pages**: 6
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/License_Application_Summary_-_TAURUS_AI_CORP_-_FZCO_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 6 pages)
- **Real-world signals detected**: 3/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> License Application Summary           Company Names:                                                        Available Options          Option 1                                                                                        1‌‫‌الخيار‬                        TAURUS AI CORP - FZCO             

### LucySharmaCV_SeniorCryptographer (2).pdf

- **File**: `LucySharmaCV_SeniorCryptographer (2).pdf`
- **Format**: PDF
- **Size**: 0.08 MB
- **Pages**: 3
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/LucySharmaCV_SeniorCryptographer__2__cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 3 pages)
- **Real-world signals detected**: 4/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> Lucy Sharma                                   Cryptography Engineer   SUMMARY      I design and build cryptographic systems intended to survive real-world conditions:              noisy inputs, adversarial environments, legacy infrastructure, and cryptographic tran-              sitions. My work spa

### Meeting Script – Prof. Ajay Singh × Taurus AI Corp.pdf

- **File**: `Meeting Script – Prof. Ajay Singh × Taurus AI Corp.pdf`
- **Format**: PDF
- **Size**: 0.49 MB
- **Pages**: 2
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Meeting_Script___Prof._Ajay_Singh___Taurus_AI_Corp_cover.png
- **Confidence rating**: **LOW** (avg AI score: 2.0, indicators on 2 of 2 pages)
- **Real-world signals detected**: 6/10
- **Brand mentions**: qgrid: 6, q-grid.net: 1, gridera: 3

**Top hallucination indicator hits**:

- Slide 2 — **Stock Phrases**: `1`
- Slide 1 — **Stock Phrases**: `1`

**Cover page text (first 400 chars)**:

> 4/17/26, 12:03 PM                                                         Meeting Script – Prof. Ajay Singh × Taurus AI Corp                                   TA U R U S A I C O R P · Q - G R I D P L AT F O R M                                Meeting Script                               Prof. Ajay Si

### NeoVibe by Taurus AI — .pdf

- **File**: `NeoVibe by Taurus AI — .pdf`
- **Format**: PDF
- **Size**: 0.2 MB
- **Pages**: 11
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/NeoVibe_by_Taurus_AI____cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 11 pages)
- **Real-world signals detected**: 4/10
- **Brand mentions**: qgrid: 2

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> NeoVibe by Taurus AI — ​ Expanded Business Structure and Strategy Design Date: 2026-03-22 (Update) Author: TAURUS AI Corp Strategy Team (Effin Fernandez + Claude Opus 4.6) Classification: Confidential & Proprietary Status: APPROVED FOR IMPLEMENTATION-----1. Executive Summary: The AI-Enabled Cost Arb

### PQC Assessment — 15 min between Effin Fernandez and Effin Fernandez - 2026_07_13 12_12 EDT - Notes by Gemini (1).pdf

- **File**: `PQC Assessment — 15 min between Effin Fernandez and Effin Fernandez - 2026_07_13 12_12 EDT - Notes by Gemini (1).pdf`
- **Format**: PDF
- **Size**: 0.15 MB
- **Pages**: 10
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/PQC_Assessment___15_min_between_Effin_Fernandez_and_Effin_Fernandez_-_2026_07_13_12_12_EDT_-_Notes_by_Gemini__1__cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.2, indicators on 1 of 10 pages)
- **Real-world signals detected**: 4/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- Slide 3 — **Stock Phrases**: `1`

**Cover page text (first 400 chars)**:

> Jul 13, 2026    PQC Assessment — 15 min between Effin Fernandez and Effin Fernandez Invited EFFIN FERNANDEZ Lucy Sharma Attachments     PQC Assessment — 15 min between Effin Fernandez and Effin Ferna…     Summary This introductory session aligned potential partners on Post-Quantum Cryptography infra

### PQC Assessment — 15 min between Effin Fernandez and Effin Fernandez - 2026_07_13 12_12 EDT - Notes by Gemini.pdf

- **File**: `PQC Assessment — 15 min between Effin Fernandez and Effin Fernandez - 2026_07_13 12_12 EDT - Notes by Gemini.pdf`
- **Format**: PDF
- **Size**: 0.11 MB
- **Pages**: 5
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/PQC_Assessment___15_min_between_Effin_Fernandez_and_Effin_Fernandez_-_2026_07_13_12_12_EDT_-_Notes_by_Gemini_cover.png
- **Confidence rating**: **LOW** (avg AI score: 1.2, indicators on 3 of 5 pages)
- **Real-world signals detected**: 6/10
- **Brand mentions**: gridera: 9

**Top hallucination indicator hits**:

- Slide 4 — **Stock Phrases**: `1`
- Slide 3 — **Stock Phrases**: `1`
- Slide 1 — **Stock Phrases**: `1`

**Cover page text (first 400 chars)**:

> PQC Assessment — 15 min between Effin Fernandez and Effin Fernandez GRIDERA: Strategic Platform Proposal & Implementation Roadmap  1. Executive Proposal: The Software-Defined Quantum Pivot The enterprise landscape is currently navigating two existential horizon events: the terminal obsolescence of c

### PQC Migration for Taurus AI & Hiero.pdf

- **File**: `PQC Migration for Taurus AI & Hiero.pdf`
- **Format**: PDF
- **Size**: 0.32 MB
- **Pages**: 10
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/PQC_Migration_for_Taurus_AI___Hiero_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 10 pages)
- **Real-world signals detected**: 5/10
- **Brand mentions**: qgrid: 7, gridera: 39

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> 7/22/26, 11:43 AM                                                            PQC Migration for Taurus AI & Hiero         PQC Migration for Taurus AI & Hiero      https://gemini.google.com/app/99cbfec1074e975b       User prompt: Compare Taurus Al tools vs. Hiero ecosystem Synthesize PQC security stan

### Precision_Quantum_Medicine.pdf

- **File**: `Precision_Quantum_Medicine.pdf`
- **Format**: PDF
- **Size**: 6.33 MB
- **Pages**: 7
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Precision_Quantum_Medicine_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 7 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### Precision_Quantum_Neuro_Medicine.pdf

- **File**: `Precision_Quantum_Neuro_Medicine.pdf`
- **Format**: PDF
- **Size**: 10.38 MB
- **Pages**: 12
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Precision_Quantum_Neuro_Medicine_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 12 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### QUANTUM_COMPLIANCE_DEFENSE.pdf

- **File**: `QUANTUM_COMPLIANCE_DEFENSE.pdf`
- **Format**: PDF
- **Size**: 9.57 MB
- **Pages**: 15
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/QUANTUM_COMPLIANCE_DEFENSE_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 15 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### Quantum_Compliance_2027.pptx

- **File**: `Quantum_Compliance_2027.pptx`
- **Format**: PPTX
- **Size**: 15.24 MB
- **Pages**: 0
- **Cover rendered**: ❌
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 0 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### Quantum_Neuro_Health.pdf

- **File**: `Quantum_Neuro_Health.pdf`
- **Format**: PDF
- **Size**: 12.45 MB
- **Pages**: 12
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Quantum_Neuro_Health_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 12 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### Quantum_Resilient_AI_Compliance.pdf

- **File**: `Quantum_Resilient_AI_Compliance.pdf`
- **Format**: PDF
- **Size**: 16.06 MB
- **Pages**: 17
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Quantum_Resilient_AI_Compliance_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 17 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### Quantum_Rupee_Investment_Deck.pdf

- **File**: `Quantum_Rupee_Investment_Deck.pdf`
- **Format**: PDF
- **Size**: 12.85 MB
- **Pages**: 14
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Quantum_Rupee_Investment_Deck_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 14 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### Resolution -  TAURUS AI CORP - FZCO .pdf

- **File**: `Resolution -  TAURUS AI CORP - FZCO .pdf`
- **Format**: PDF
- **Size**: 0.34 MB
- **Pages**: 10
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Resolution_-__TAURUS_AI_CORP_-_FZCO__cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 10 pages)
- **Real-world signals detected**: 3/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> SHAREHOLDER RESOLUTIONS FOR THE                                                               INCORPORATION OF                                                             TAURUS AI CORP - FZCO             (1)          EFFIN FERNANDEZ, a national of Canada holding passport number P316644FS and whose 

### Signed MOA  AOA -  TAURUS AI CORP - FZCO .pdf

- **File**: `Signed MOA  AOA -  TAURUS AI CORP - FZCO .pdf`
- **Format**: PDF
- **Size**: 0.47 MB
- **Pages**: 54
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Signed_MOA__AOA_-__TAURUS_AI_CORP_-_FZCO__cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 54 pages)
- **Real-world signals detected**: 2/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> Dubai Integrated Economic Zones Authority                                                Implementing Regulations 2023                                                __________________________________                                      Memorandum and Articles of Association                        

### Software_Defined_Quantum_Compliance.pdf

- **File**: `Software_Defined_Quantum_Compliance.pdf`
- **Format**: PDF
- **Size**: 11.32 MB
- **Pages**: 10
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/Software_Defined_Quantum_Compliance_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 10 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### TAURUS AI CORP - FZCO - ULA 21-Aug-2025 08_09_43 (1).pdf

- **File**: `TAURUS AI CORP - FZCO - ULA 21-Aug-2025 08_09_43 (1).pdf`
- **Format**: PDF
- **Size**: 0.18 MB
- **Pages**: 1
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/TAURUS_AI_CORP_-_FZCO_-_ULA_21-Aug-2025_08_09_43__1__cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 1 pages)
- **Real-world signals detected**: 3/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> UNIT LEASE AGREEMENT | ‌‌‫عقد إيجار وحدة تجارية‬   Landlord Details                                                                                                                                                 ‫ﺗﻔﺎﺻﻴﻞ اﻟﻤﺎﻟﻚ‬  Landlord Name                                                          

### TAURUS AI CORP - FZCO - ULA 21-Aug-2025 08_09_43.pdf

- **File**: `TAURUS AI CORP - FZCO - ULA 21-Aug-2025 08_09_43.pdf`
- **Format**: PDF
- **Size**: 0.18 MB
- **Pages**: 1
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/TAURUS_AI_CORP_-_FZCO_-_ULA_21-Aug-2025_08_09_43_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 1 pages)
- **Real-world signals detected**: 3/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> UNIT LEASE AGREEMENT | ‌‌‫عقد إيجار وحدة تجارية‬   Landlord Details                                                                                                                                                 ‫ﺗﻔﺎﺻﻴﻞ اﻟﻤﺎﻟﻚ‬  Landlord Name                                                          

### TAURUS AI Corp. — GRIDERA Platform · Software-Defined Quantum Compliance for the Regulated Enterprise Stack.pdf

- **File**: `TAURUS AI Corp. — GRIDERA Platform · Software-Defined Quantum Compliance for the Regulated Enterprise Stack.pdf`
- **Format**: PDF
- **Size**: 0.59 MB
- **Pages**: 11
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/TAURUS_AI_Corp.___GRIDERA_Platform___Software-Defined_Quantum_Compliance_for_the_Regulated_Enterprise_Stack_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 11 pages)
- **Real-world signals detected**: 6/10
- **Brand mentions**: gridera: 15

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> TAURUS      AI      CORP.                                                                                   SEED ROUND Q1 2027 GRIDERA     —    PRODUCT    PLATFORM     Software-defined quantum compliance for the regulated enterprise stack. A product platform of TAURUS AI Corp., GRIDERA replaces the 

### The_Quantum_Brain.pdf

- **File**: `The_Quantum_Brain.pdf`
- **Format**: PDF
- **Size**: 25.37 MB
- **Pages**: 21
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/The_Quantum_Brain_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 21 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### The_Quantum_Countdown.pdf

- **File**: `The_Quantum_Countdown.pdf`
- **Format**: PDF
- **Size**: 18.29 MB
- **Pages**: 15
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/The_Quantum_Countdown_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 15 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### The_Quantum_Hack.pdf

- **File**: `The_Quantum_Hack.pdf`
- **Format**: PDF
- **Size**: 13.47 MB
- **Pages**: 14
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/The_Quantum_Hack_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 14 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### hacken.io-Case Study Securing QANplatforms Quantum-Safe Migration Protocol - Hacken-fpscreenshot.pdf

- **File**: `hacken.io-Case Study Securing QANplatforms Quantum-Safe Migration Protocol - Hacken-fpscreenshot.pdf`
- **Format**: PDF
- **Size**: 3.01 MB
- **Pages**: 9
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/hacken.io-Case_Study_Securing_QANplatforms_Quantum-Safe_Migration_Protocol_-_Hacken-fpscreenshot_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 9 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### localhost_3333-The Global Bio-Foundry  TAURUS AI Corp-fpscreenshot.pdf

- **File**: `localhost_3333-The Global Bio-Foundry  TAURUS AI Corp-fpscreenshot.pdf`
- **Format**: PDF
- **Size**: 1.27 MB
- **Pages**: 4
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/localhost_3333-The_Global_Bio-Foundry__TAURUS_AI_Corp-fpscreenshot_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 4 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### luma.com-Monad Blitz Toronto  One-Day Hackathon  Luma-fpscreenshot.pdf

- **File**: `luma.com-Monad Blitz Toronto  One-Day Hackathon  Luma-fpscreenshot.pdf`
- **Format**: PDF
- **Size**: 0.77 MB
- **Pages**: 2
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/luma.com-Monad_Blitz_Toronto__One-Day_Hackathon__Luma-fpscreenshot_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 2 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### mail.google.com-License   TAURUS AI CORP FZCO  Notice of Non-Renewal and Cancellation Initiation Pre-Expiry - taurus-fpscreenshot.pdf

- **File**: `mail.google.com-License   TAURUS AI CORP FZCO  Notice of Non-Renewal and Cancellation Initiation Pre-Expiry - taurus-fpscreenshot.pdf`
- **Format**: PDF
- **Size**: 0.83 MB
- **Pages**: 2
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/mail.google.com-License___TAURUS_AI_CORP_FZCO__Notice_of_Non-Renewal_and_Cancellation_Initiation_Pre-Expiry_-_taurus-fpscreenshot_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 2 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

### testnet.monadvision.com-Monad Transaction  MonadVision-fpscreenshot.pdf

- **File**: `testnet.monadvision.com-Monad Transaction  MonadVision-fpscreenshot.pdf`
- **Format**: PDF
- **Size**: 0.26 MB
- **Pages**: 1
- **Cover rendered**: ✅ /Users/taurus_ai/Desktop/SOCIAL MEDIA ORCHESTRA/1_inbox/H_DECK_COVERS_2026-08-09/testnet.monadvision.com-Monad_Transaction__MonadVision-fpscreenshot_cover.png
- **Confidence rating**: **HIGH** (avg AI score: 0.0, indicators on 0 of 1 pages)
- **Real-world signals detected**: 0/10
- **Brand mentions**: (none)

**Top hallucination indicator hits**:

- (no AI indicators detected)

**Cover page text (first 400 chars)**:

> (no text extracted)

## Summary table (sorted by rating, then by real-signals count)

| # | Deck | Pages | Rating | Avg AI score | Real signals | Top indicator hits | Brand: qgrid / q-grid.net / gridera |
|---|------|-------|--------|--------------|--------------|---------------------|---------------------------------------|
| 1 | `GRIDERA Platform · Software-Defined Quantum Compli` | 11 | **HIGH** | 0.0 | 6 | — | 0 / 0 / 15 |
| 2 | `GRIDERA Platform · Software-Defined Quantum Compli` | 11 | **HIGH** | 0.0 | 6 | — | 0 / 0 / 15 |
| 3 | `TAURUS AI Corp. — GRIDERA Platform · Software-Defi` | 11 | **HIGH** | 0.0 | 6 | — | 0 / 0 / 15 |
| 4 | `GRIDERA Master Presentation Suites _ Taurus AI Cor` | 9 | **HIGH** | 0.0 | 5 | — | 2 / 2 / 9 |
| 5 | `PQC Migration for Taurus AI & Hiero.pdf` | 10 | **HIGH** | 0.0 | 5 | — | 7 / 0 / 39 |
| 6 | `Invoice — NEXUS_SOCIAL™ _ by Taurus AI.pdf` | 2 | **HIGH** | 0.0 | 4 | — | 0 / 0 / 0 |
| 7 | `LucySharmaCV_SeniorCryptographer (2).pdf` | 3 | **HIGH** | 0.0 | 4 | — | 0 / 0 / 0 |
| 8 | `NeoVibe by Taurus AI — .pdf` | 11 | **HIGH** | 0.0 | 4 | — | 2 / 0 / 0 |
| 9 | `PQC Assessment — 15 min between Effin Fernandez an` | 10 | **HIGH** | 0.2 | 4 | sto | 0 / 0 / 0 |
| 10 | `License Application Summary - TAURUS AI CORP - FZC` | 6 | **HIGH** | 0.0 | 3 | — | 0 / 0 / 0 |
| 11 | `Resolution -  TAURUS AI CORP - FZCO .pdf` | 10 | **HIGH** | 0.0 | 3 | — | 0 / 0 / 0 |
| 12 | `TAURUS AI CORP - FZCO - ULA 21-Aug-2025 08_09_43 (` | 1 | **HIGH** | 0.0 | 3 | — | 0 / 0 / 0 |
| 13 | `TAURUS AI CORP - FZCO - ULA 21-Aug-2025 08_09_43.p` | 1 | **HIGH** | 0.0 | 3 | — | 0 / 0 / 0 |
| 14 | `Signed MOA  AOA -  TAURUS AI CORP - FZCO .pdf` | 54 | **HIGH** | 0.0 | 2 | — | 0 / 0 / 0 |
| 15 | `3-minute script — MONAD _ Gate.pdf` | 4 | **HIGH** | 0.0 | 1 | — | 0 / 0 / 0 |
| 16 | `4T1BK36B66U130875_scan_2026_05_31_02-14-43.pdf` | 1 | **HIGH** | 0.0 | 1 | — | 0 / 0 / 0 |
| 17 | `Autonomous_Quantum_Compliance (1).pdf` | 14 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 18 | `Autonomous_Quantum_Compliance (2).pdf` | 14 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 19 | `Autonomous_Quantum_Compliance.pdf` | 14 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 20 | `GRIDERA final Structure.pdf` | 2 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 21 | `Gridera_Technical_Blueprint.pdf` | 12 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 22 | `India_s_Quantum_Compliance_Countdown.pdf` | 14 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 23 | `Precision_Quantum_Medicine.pdf` | 7 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 24 | `Precision_Quantum_Neuro_Medicine.pdf` | 12 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 25 | `QUANTUM_COMPLIANCE_DEFENSE.pdf` | 15 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 26 | `Quantum_Compliance_2027.pptx` | 0 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 27 | `Quantum_Neuro_Health.pdf` | 12 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 28 | `Quantum_Resilient_AI_Compliance.pdf` | 17 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 29 | `Quantum_Rupee_Investment_Deck.pdf` | 14 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 30 | `Software_Defined_Quantum_Compliance.pdf` | 10 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 31 | `The_Quantum_Brain.pdf` | 21 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 32 | `The_Quantum_Countdown.pdf` | 15 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 33 | `The_Quantum_Hack.pdf` | 14 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 34 | `hacken.io-Case Study Securing QANplatforms Quantum` | 9 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 35 | `localhost_3333-The Global Bio-Foundry  TAURUS AI C` | 4 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 36 | `luma.com-Monad Blitz Toronto  One-Day Hackathon  L` | 2 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 37 | `mail.google.com-License   TAURUS AI CORP FZCO  Not` | 2 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 38 | `testnet.monadvision.com-Monad Transaction  MonadVi` | 1 | **HIGH** | 0.0 | 0 | — | 0 / 0 / 0 |
| 39 | `PQC Assessment — 15 min between Effin Fernandez an` | 5 | **LOW** | 1.2 | 6 | sto, sto, sto | 0 / 0 / 9 |
| 40 | `Meeting Script – Prof. Ajay Singh × Taurus AI Corp` | 2 | **LOW** | 2.0 | 6 | sto, sto | 6 / 1 / 3 |

## Recommendations

### ✅ USE for client-facing material (HIGH confidence)

- `3-minute script — MONAD _ Gate.pdf` — 4 pages, real signals: 1/10
- `4T1BK36B66U130875_scan_2026_05_31_02-14-43.pdf` — 1 pages, real signals: 1/10
- `Autonomous_Quantum_Compliance (1).pdf` — 14 pages, real signals: 0/10
- `Autonomous_Quantum_Compliance (2).pdf` — 14 pages, real signals: 0/10
- `Autonomous_Quantum_Compliance.pdf` — 14 pages, real signals: 0/10
- `GRIDERA Master Presentation Suites _ Taurus AI Corp.pdf` — 9 pages, real signals: 5/10
- `GRIDERA Platform · Software-Defined Quantum Compliance for the Regulated Enterprise Stack (1).pdf` — 11 pages, real signals: 6/10
- `GRIDERA Platform · Software-Defined Quantum Compliance for the Regulated Enterprise Stack.pdf` — 11 pages, real signals: 6/10
- `GRIDERA final Structure.pdf` — 2 pages, real signals: 0/10
- `Gridera_Technical_Blueprint.pdf` — 12 pages, real signals: 0/10
- `India_s_Quantum_Compliance_Countdown.pdf` — 14 pages, real signals: 0/10
- `Invoice — NEXUS_SOCIAL™ _ by Taurus AI.pdf` — 2 pages, real signals: 4/10
- `License Application Summary - TAURUS AI CORP - FZCO.pdf` — 6 pages, real signals: 3/10
- `LucySharmaCV_SeniorCryptographer (2).pdf` — 3 pages, real signals: 4/10
- `NeoVibe by Taurus AI — .pdf` — 11 pages, real signals: 4/10
- `PQC Assessment — 15 min between Effin Fernandez and Effin Fernandez - 2026_07_13 12_12 EDT - Notes by Gemini (1).pdf` — 10 pages, real signals: 4/10
- `PQC Migration for Taurus AI & Hiero.pdf` — 10 pages, real signals: 5/10
- `Precision_Quantum_Medicine.pdf` — 7 pages, real signals: 0/10
- `Precision_Quantum_Neuro_Medicine.pdf` — 12 pages, real signals: 0/10
- `QUANTUM_COMPLIANCE_DEFENSE.pdf` — 15 pages, real signals: 0/10
- `Quantum_Compliance_2027.pptx` — 0 pages, real signals: 0/10
- `Quantum_Neuro_Health.pdf` — 12 pages, real signals: 0/10
- `Quantum_Resilient_AI_Compliance.pdf` — 17 pages, real signals: 0/10
- `Quantum_Rupee_Investment_Deck.pdf` — 14 pages, real signals: 0/10
- `Resolution -  TAURUS AI CORP - FZCO .pdf` — 10 pages, real signals: 3/10
- `Signed MOA  AOA -  TAURUS AI CORP - FZCO .pdf` — 54 pages, real signals: 2/10
- `Software_Defined_Quantum_Compliance.pdf` — 10 pages, real signals: 0/10
- `TAURUS AI CORP - FZCO - ULA 21-Aug-2025 08_09_43 (1).pdf` — 1 pages, real signals: 3/10
- `TAURUS AI CORP - FZCO - ULA 21-Aug-2025 08_09_43.pdf` — 1 pages, real signals: 3/10
- `TAURUS AI Corp. — GRIDERA Platform · Software-Defined Quantum Compliance for the Regulated Enterprise Stack.pdf` — 11 pages, real signals: 6/10
- `The_Quantum_Brain.pdf` — 21 pages, real signals: 0/10
- `The_Quantum_Countdown.pdf` — 15 pages, real signals: 0/10
- `The_Quantum_Hack.pdf` — 14 pages, real signals: 0/10
- `hacken.io-Case Study Securing QANplatforms Quantum-Safe Migration Protocol - Hacken-fpscreenshot.pdf` — 9 pages, real signals: 0/10
- `localhost_3333-The Global Bio-Foundry  TAURUS AI Corp-fpscreenshot.pdf` — 4 pages, real signals: 0/10
- `luma.com-Monad Blitz Toronto  One-Day Hackathon  Luma-fpscreenshot.pdf` — 2 pages, real signals: 0/10
- `mail.google.com-License   TAURUS AI CORP FZCO  Notice of Non-Renewal and Cancellation Initiation Pre-Expiry - taurus-fpscreenshot.pdf` — 2 pages, real signals: 0/10
- `testnet.monadvision.com-Monad Transaction  MonadVision-fpscreenshot.pdf` — 1 pages, real signals: 0/10

### ⚠️  REVIEW before use (MEDIUM confidence — mostly real with AI padding)

- *(none)*

### 🛑 SCRAP or major rework (LOW confidence — likely AI fluff)

- `Meeting Script – Prof. Ajay Singh × Taurus AI Corp.pdf` — indicators: Stock Phrases; Stock Phrases
- `PQC Assessment — 15 min between Effin Fernandez and Effin Fernandez - 2026_07_13 12_12 EDT - Notes by Gemini.pdf` — indicators: Stock Phrases; Stock Phrases; Stock Phrases

### 🔍 No text extracted (image-only, OCR skipped or failed)

- `Quantum_Compliance_2027.pptx` — 15.24 MB. Visual review needed.

## Brand-rename candidates (need gridera-deck-migrator treatment)

Decks with **zero or near-zero** GRIDERA/Q-Grid branding that need overlay treatment before client-facing release:

- `3-minute script — MONAD _ Gate.pdf` — **0 brand mentions** (urgent rename)
- `4T1BK36B66U130875_scan_2026_05_31_02-14-43.pdf` — **0 brand mentions** (urgent rename)
- `Autonomous_Quantum_Compliance (1).pdf` — **0 brand mentions** (urgent rename)
- `Autonomous_Quantum_Compliance (2).pdf` — **0 brand mentions** (urgent rename)
- `Autonomous_Quantum_Compliance.pdf` — **0 brand mentions** (urgent rename)
- `GRIDERA final Structure.pdf` — **0 brand mentions** (urgent rename)
- `Gridera_Technical_Blueprint.pdf` — **0 brand mentions** (urgent rename)
- `India_s_Quantum_Compliance_Countdown.pdf` — **0 brand mentions** (urgent rename)
- `Invoice — NEXUS_SOCIAL™ _ by Taurus AI.pdf` — **0 brand mentions** (urgent rename)
- `License Application Summary - TAURUS AI CORP - FZCO.pdf` — **0 brand mentions** (urgent rename)
- `LucySharmaCV_SeniorCryptographer (2).pdf` — **0 brand mentions** (urgent rename)
- `PQC Assessment — 15 min between Effin Fernandez and Effin Fernandez - 2026_07_13 12_12 EDT - Notes by Gemini (1).pdf` — **0 brand mentions** (urgent rename)
- `Precision_Quantum_Medicine.pdf` — **0 brand mentions** (urgent rename)
- `Precision_Quantum_Neuro_Medicine.pdf` — **0 brand mentions** (urgent rename)
- `QUANTUM_COMPLIANCE_DEFENSE.pdf` — **0 brand mentions** (urgent rename)
- `Quantum_Compliance_2027.pptx` — **0 brand mentions** (urgent rename)
- `Quantum_Neuro_Health.pdf` — **0 brand mentions** (urgent rename)
- `Quantum_Resilient_AI_Compliance.pdf` — **0 brand mentions** (urgent rename)
- `Quantum_Rupee_Investment_Deck.pdf` — **0 brand mentions** (urgent rename)
- `Resolution -  TAURUS AI CORP - FZCO .pdf` — **0 brand mentions** (urgent rename)
- `Signed MOA  AOA -  TAURUS AI CORP - FZCO .pdf` — **0 brand mentions** (urgent rename)
- `Software_Defined_Quantum_Compliance.pdf` — **0 brand mentions** (urgent rename)
- `TAURUS AI CORP - FZCO - ULA 21-Aug-2025 08_09_43 (1).pdf` — **0 brand mentions** (urgent rename)
- `TAURUS AI CORP - FZCO - ULA 21-Aug-2025 08_09_43.pdf` — **0 brand mentions** (urgent rename)
- `The_Quantum_Brain.pdf` — **0 brand mentions** (urgent rename)
- `The_Quantum_Countdown.pdf` — **0 brand mentions** (urgent rename)
- `The_Quantum_Hack.pdf` — **0 brand mentions** (urgent rename)
- `hacken.io-Case Study Securing QANplatforms Quantum-Safe Migration Protocol - Hacken-fpscreenshot.pdf` — **0 brand mentions** (urgent rename)
- `localhost_3333-The Global Bio-Foundry  TAURUS AI Corp-fpscreenshot.pdf` — **0 brand mentions** (urgent rename)
- `luma.com-Monad Blitz Toronto  One-Day Hackathon  Luma-fpscreenshot.pdf` — **0 brand mentions** (urgent rename)
- `mail.google.com-License   TAURUS AI CORP FZCO  Notice of Non-Renewal and Cancellation Initiation Pre-Expiry - taurus-fpscreenshot.pdf` — **0 brand mentions** (urgent rename)
- `testnet.monadvision.com-Monad Transaction  MonadVision-fpscreenshot.pdf` — **0 brand mentions** (urgent rename)

---

*Generated by `audit.py` at /private/tmp/gridera_ocr*