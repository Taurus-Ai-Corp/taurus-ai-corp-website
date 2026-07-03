interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

export const featureList: FeaturesProps[] = [
  {
    icon: "ShieldCheck",
    title: "Post-Quantum Cryptography",
    description:
      "ML-KEM, ML-DSA, and SLH-DSA algorithms (NIST FIPS 203/204) built into every layer of the stack — protection against harvest-now, decrypt-later attacks."
  },
  {
    icon: "Network",
    title: "Hedera DLT Backbone",
    description:
      "10,000+ TPS with 3–5 second finality. Every critical event is anchored on-ledger for tamper-evident, independently verifiable audit trails."
  },
  {
    icon: "Bot",
    title: "Autonomous AI Agents",
    description:
      "Agents that collect, analyze, decide, and act on your behalf — with human oversight and self-improving feedback loops."
  },
  {
    icon: "Scale",
    title: "Regulation-Ready",
    description:
      "Aligned with the EU AI Act (Aug 2026), SWIFT CSP 2027, NIST AI RMF, and SOC 2 — compliance designed in, not bolted on."
  },
  {
    icon: "Globe",
    title: "Global Deployment",
    description:
      "Seamless integration with local systems and multilingual support for enterprise rollouts across diverse markets and regulatory environments."
  },
  {
    icon: "Layers",
    title: "Delivered as a Service",
    description:
      "Deployed, monitored, and scaled for you. Production-ready in days, not months — no procurement cycles, no hardware trap."
  }
];
