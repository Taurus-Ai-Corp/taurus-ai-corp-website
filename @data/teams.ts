interface SocialNetworkProps {
  name: string;
  url: string;
}

export interface TeamProps {
  initials: string;
  firstName: string;
  lastName: string;
  positions: string[];
  bio: string;
  socialNetworks: SocialNetworkProps[];
}

export const teamList: TeamProps[] = [
  {
    initials: "EF",
    firstName: "Effin",
    lastName: "Fernandez",
    positions: ["CEO & Founder"],
    bio: "Founder & CEO driving quantum-safe enterprise AI innovation. Architect of Taurus AI's orchestrated agentic intelligence platform. Pioneering post-quantum cryptography adoption across financial services and enterprise automation.",
    socialNetworks: []
  },
  {
    initials: "AW",
    firstName: "Ash",
    lastName: "Wyatt",
    positions: ["CTO"],
    bio: "Leading cryptographer specializing in post-quantum algorithms. PhD in Computer Science from MIT. Published 40+ research papers on quantum-safe cryptography.",
    socialNetworks: []
  },
  {
    initials: "HK",
    firstName: "Hari S",
    lastName: "Kurup",
    positions: ["Tech Admin"],
    bio: "Infrastructure architect specializing in cloud-native systems and DevOps. Expert in Kubernetes, microservices, and CI/CD pipelines.",
    socialNetworks: []
  },
  {
    initials: "TKA",
    firstName: "Tejas Karan",
    lastName: "Agrawal",
    positions: ["Performance & Growth Marketer"],
    bio: "Performance and growth marketer who ships production AI. Based in Toronto, ON — driving GTM, acquisition, and growth systems that go live, not deck-only.",
    socialNetworks: [
      { name: "Website", url: "https://tejaskaranagrawal.com/" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/tejas-karan-agrawal" },
      { name: "GitHub", url: "https://github.com/floating-astronaut" },
      { name: "Email", url: "mailto:tejaskagrawalgwl@gmail.com" }
    ]
  }
];
