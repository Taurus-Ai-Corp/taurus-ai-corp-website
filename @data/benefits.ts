interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

export const benefitList: BenefitsProps[] = [
  {
    icon: "Workflow",
    title: "BizFlow™ — Workflow Automation",
    description:
      "Intelligent automation engine for complex business processes. Orchestrates multi-step operations, makes AI-driven decisions, and delivers measurable outcomes."
  },
  {
    icon: "ShieldCheck",
    title: "Q-Grid™ — Quantum-Resistant Security",
    description:
      "Post-quantum cryptography infrastructure for enterprise. ML-KEM, ML-DSA, and SLH-DSA algorithms protect your data against emerging quantum threats."
  },
  {
    icon: "Database",
    title: "AssetGrid™ — RWA Tokenization",
    description:
      "Hedera-powered real-world asset tokenization. Quantum-safe custody, token lifecycle management, and immutable audit trails for institutions."
  },
  {
    icon: "Sparkles",
    title: "Neovibe™ — Creative AI",
    description:
      "Next-generation AI for creative and marketing automation. Generate, optimize, and orchestrate content across channels at enterprise scale."
  }
];
