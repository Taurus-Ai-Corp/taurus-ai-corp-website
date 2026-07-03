interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQList: FAQProps[] = [
  {
    question: "What is Orchestrated Agentic Intelligence?",
    answer:
      "It is Taurus AI's approach to enterprise automation: autonomous AI agents that collect data from multiple sources, analyze patterns, make decisions with human oversight, execute tasks, and continuously improve through feedback loops — all coordinated by a central quantum-safe orchestration platform.",
    value: "item-1"
  },
  {
    question: "What does \"quantum-safe\" actually mean?",
    answer:
      "Our infrastructure uses post-quantum cryptography — the ML-KEM, ML-DSA, and SLH-DSA algorithms standardized by NIST in FIPS 203 and 204. These protect your data against future quantum computers, including \"harvest now, decrypt later\" attacks where adversaries store encrypted data today to decrypt it once quantum hardware matures.",
    value: "item-2"
  },
  {
    question: "Why does the SWIFT 2027 mandate matter?",
    answer:
      "SWIFT requires its 11,000+ member institutions to transition to post-quantum cryptographic standards by 2027. Any organization that handles cross-border financial messaging needs a migration plan now — Taurus AI provides the infrastructure and autonomous compliance agents to get there in days, not months.",
    value: "item-3"
  },
  {
    question: "How fast can we deploy?",
    answer:
      "The platform is delivered as a managed service. Typical deployments are production-ready in days rather than months — no hardware procurement, no key ceremonies, and seamless integration with your existing local systems.",
    value: "item-4"
  },
  {
    question: "Which industries do you serve?",
    answer:
      "Banking and financial services are our core focus, alongside government and public sector, healthcare, retail and e-commerce, education, and agriculture. Each vertical gets purpose-built AI modules on the same quantum-safe foundation.",
    value: "item-5"
  },
  {
    question: "How do the audit trails work?",
    answer:
      "Every compliance event, key rotation, and policy change is anchored to the Hedera Consensus Service — tamper-evident, timestamped, and verifiable by any auditor without trusting our servers. The network sustains 10,000+ TPS with 3–5 second finality.",
    value: "item-6"
  }
];
