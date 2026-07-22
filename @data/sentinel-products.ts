/**
 * SENTINEL — Bio-foundry / pediatric ADHD wellness biofeedback.
 * Stage honesty: stack + GTM SKUs; not claimed as full SaaS production yet.
 */
import type { PlatformFamily } from "./types";

export const sentinelFamily: PlatformFamily = {
  id: "sentinel",
  name: "SENTINEL",
  brand: "Pediatric ADHD Wellness Biofeedback",
  description:
    "EEG + closed-loop neuroacoustic coherence for ADHD wellness: hardware, core engine, and Canadian-sovereign cloud path.",
  lead: false,
  href: "https://huggingface.co/spaces/Q-GRID-NET/GLOBAL_BIO_FOUNDRY",
  icon: "Activity",
  subProducts: [
    {
      id: "headset",
      name: "SENTINEL Headset",
      tagline: "8ch EEG + 40Hz entrainment",
      description:
        "Research-grade OpenBCI Cyton path, pediatric electrodes, Bluetooth session hardware.",
      stage: "beta",
      icon: "Cpu"
    },
    {
      id: "core",
      name: "SENTINEL Core",
      tagline: "PAC to GCR engine",
      description:
        "Real-time coherence pipeline (MNE / BrainFlow) powering session feedback.",
      stage: "beta",
      icon: "Brain"
    },
    {
      id: "cloud",
      name: "SENTINEL Cloud",
      tagline: "Canadian-sovereign path",
      description:
        "PHIPA-oriented residency story (OVH / Canadian partners) with tamper-evident audit options.",
      stage: "lab",
      icon: "Cloud"
    },
    {
      id: "dtc",
      name: "DTC Consumer",
      tagline: "Hardware + yearly wellness",
      description: "Direct-to-consumer SKU for families (pricing per latest pitch - pilot stage).",
      stage: "planned",
      icon: "Home"
    },
    {
      id: "clinic",
      name: "Clinic SKU",
      tagline: "Practitioner seats",
      description: "Clinic hardware plus monthly seats for neurofeedback practices.",
      stage: "planned",
      icon: "Stethoscope"
    },
    {
      id: "school",
      name: "School Pilot",
      tagline: "Classroom / district",
      description: "School-board pilots after clinic proof points.",
      stage: "planned",
      icon: "GraduationCap"
    },
    {
      id: "pharma",
      name: "Pharma Trials",
      tagline: "Trial enrichment",
      description: "ADHD trial stratification and endpoint enrichment SKU (future).",
      stage: "planned",
      icon: "FlaskConical"
    },
    {
      id: "data",
      name: "Data-as-a-Service",
      tagline: "Federated academic access",
      description: "Research data access path tied to open science artifacts.",
      stage: "planned",
      icon: "Database"
    }
  ]
};

export const sentinelProducts = sentinelFamily.subProducts;
