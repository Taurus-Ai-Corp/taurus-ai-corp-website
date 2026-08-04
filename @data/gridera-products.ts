/**
 * GRIDERA — validated CORE + LABS (not uncorrected "6 equal production" list).
 * Source: INVENTORY-VALIDATED.md + GRIDERA-PRODUCT-TAXONOMY.md
 */
import type { PlatformFamily } from "./types";

export const grideraFamily: PlatformFamily = {
  id: "gridera",
  name: "GRIDERA",
  brand: "Post-Quantum Compliance",
  description:
    "Scan, assess, and migrate to NIST PQC with ML-DSA-65 signing and Hedera HCS audit trails. Multi-jurisdiction cells (EU, Canada, and more) on one monorepo.",
  lead: true,
  href: "https://q-grid.net",
  icon: "ShieldCheck",
  image: "/images/platforms/family-gridera.jpg",
  subProducts: [
    {
      id: "scan",
      name: "GRIDERA|Scan",
      tagline: "Free PQC vulnerability scanner",
      description:
        "Scan any domain for quantum-vulnerable TLS and certificate algorithms. Quantum Readiness Score (QRS) in seconds.",
      stage: "production",
      href: "https://q-grid.net/scan",
      external: true,
      icon: "Radar",
      image: "/images/platforms/core-scan.jpg"
    },
    {
      id: "comply",
      name: "GRIDERA|Comply",
      tagline: "Assessments, matrix, CA pack",
      description:
        "Jurisdiction-scoped compliance shell: systems, assessments, reports, and executive view. Live on eu.q-grid.net; Canada cell on path.",
      stage: "production",
      href: "https://eu.q-grid.net",
      external: true,
      icon: "FileCheck",
      image: "/images/platforms/core-comply.jpg"
    },
    {
      id: "guard",
      name: "GRIDERA|Guard",
      tagline: "PQC-signed LLM guardrails",
      description:
        "Every LLM call attested with ML-DSA-65. Served via Comply host rewrite — not a dead standalone domain.",
      stage: "production",
      href: "https://eu.q-grid.net/guard",
      external: true,
      icon: "Shield",
      image: "/images/platforms/core-guard.jpg"
    },
    {
      id: "migrate",
      name: "GRIDERA|Migrate",
      tagline: "Org crypto migration path",
      description:
        "In-app migration wizard and policies inside Comply. Swarm engines support refactor; not a separate product deploy.",
      stage: "production",
      href: "https://eu.q-grid.net/dashboard/security",
      external: true,
      icon: "GitBranch",
      image: "/images/platforms/core-migrate.jpg"
    },
    {
      id: "lend",
      name: "GRIDERA|Lend",
      tagline: "MSME lending (lab)",
      description:
        "Quantum-safe credit scoring and KYC for emerging markets. Separate surface — not A-track CORE.",
      stage: "lab",
      href: "https://q-grid.net/lend",
      external: true,
      icon: "Landmark"
    },
    {
      id: "pay",
      name: "GRIDERA|Pay",
      tagline: "Payments / CBDC path (lab)",
      description:
        "India offline CBDC and crypto payment surfaces under GRIDERA. Lab stage — not CORE A-track.",
      stage: "lab",
      icon: "Wallet"
    },
    {
      id: "asset",
      name: "GRIDERA|Asset",
      tagline: "RWA / custody (lab)",
      description:
        "Hedera-oriented asset and custody demos. Secondary to Scan and Comply revenue path.",
      stage: "lab",
      href: "https://q-grid.net/asset",
      external: true,
      icon: "Database"
    }
  ]
};

/** Convenience export matching greenfield plan naming */
export const grideraProducts = grideraFamily.subProducts;
