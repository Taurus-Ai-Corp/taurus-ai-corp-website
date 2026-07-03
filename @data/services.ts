export enum ProService {
  YES = 1,
  NO = 0
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

export const serviceList: ServiceProps[] = [
  {
    title: "Banking & Financial Services",
    description:
      "Quantum-safe infrastructure for the financial services industry. Leading the transition to post-quantum security ahead of the SWIFT 2027 mandate.",
    pro: 0
  },
  {
    title: "Government & Public Sector",
    description:
      "Transform public sector operations with AI-driven automation, citizen services optimization, and data-driven policy making.",
    pro: 0
  },
  {
    title: "Healthcare",
    description:
      "Advanced AI integration for healthcare triage systems and electronic health records, improving patient outcomes and operational efficiency.",
    pro: 0
  },
  {
    title: "Retail & E-Commerce",
    description:
      "End-to-end retail automation including inventory management, customer analytics, personalization, and omnichannel orchestration.",
    pro: 0
  },
  {
    title: "Education",
    description:
      "Integrated educational management systems with AI-powered learning analytics and student engagement tools for modern institutions.",
    pro: 0
  },
  {
    title: "Agriculture",
    description:
      "AI-driven crop optimization, precision farming, and sustainable agriculture leveraging IoT sensors and predictive analytics.",
    pro: 0
  }
];
