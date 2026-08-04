/**
 * NEXUS — marketing / creative / ops studio.
 * Creative studio modules live under NEXUS; OpsFlow is the ops module name.
 */
import type { PlatformFamily } from "./types";

export const nexusFamily: PlatformFamily = {
  id: "nexus",
  name: "NEXUS",
  brand: "Coded Vibe Marketing Studio",
  description:
    "Campaign generation, social orchestration, and studio tools for founders and agencies - with agentic workflows under the hood.",
  lead: false,
  href: "https://nexus.taurusai.io",
  icon: "Sparkles",
  image: "/images/platforms/family-nexus.jpg",
  subProducts: [
    {
      id: "marketing-studio",
      name: "Marketing Studio",
      tagline: "B2B portal and campaign hub",
      description:
        "Primary NEXUS surface for marketing automation and multi-channel creative workflows.",
      stage: "beta",
      href: "https://nexus.taurusai.io",
      external: true,
      icon: "Megaphone"
    },
    {
      id: "pro-assess",
      name: "Pro Assess",
      tagline: "Dubai real estate assessment",
      description:
        "Property assessment toolkit for UAE real-estate workflows and NRI investment contexts.",
      stage: "beta",
      icon: "Building2"
    },
    {
      id: "opsflow",
      name: "OpsFlow",
      tagline: "Agentic ops and MCP tools",
      description:
        "Workflow automation and multi-agent ops under the NEXUS family (OpsFlow naming).",
      stage: "beta",
      icon: "Workflow"
    },
    {
      id: "social-suite",
      name: "Social Suite",
      tagline: "Social and ads orchestration",
      description: "Dashboards and campaign tooling for multi-network social delivery.",
      stage: "lab",
      icon: "Share2"
    },
    {
      id: "creative",
      name: "Creative",
      tagline: "Editorial and campaign craft",
      description: "Creative-agency style generation and editorial surfaces under NEXUS.",
      stage: "lab",
      icon: "Palette"
    },
    {
      id: "freelance",
      name: "Freelance",
      tagline: "Freelancer workspace",
      description: "Secure freelancer design workspace concepts under the NEXUS family.",
      stage: "lab",
      icon: "Users"
    },
    {
      id: "intel",
      name: "Intel",
      tagline: "Competitive intelligence",
      description: "Market and competitor research loops for GTM teams.",
      stage: "lab",
      icon: "Search"
    }
  ]
};

export const nexusProducts = nexusFamily.subProducts;
