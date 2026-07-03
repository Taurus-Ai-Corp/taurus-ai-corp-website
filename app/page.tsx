import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata = {
  title: "Taurus AI Corp — Orchestrated Agentic Intelligence",
  description:
    "Enterprise-grade quantum-safe infrastructure delivered as a service. Deploy AI-powered automation, blockchain integration, and post-quantum cryptography — all managed, scalable, and ready in days, not months.",
  openGraph: {
    type: "website",
    url: "https://taurusai.io",
    title: "Taurus AI Corp — Orchestrated Agentic Intelligence",
    description:
      "Enterprise-grade quantum-safe infrastructure for financial services and enterprise automation. NIST PQC compliant, SWIFT 2027 ready.",
    images: [
      {
        url: "/images/taurus-ecosystem.png",
        width: 1200,
        height: 630,
        alt: "Taurus AI Corp platform ecosystem"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@TaurusAI_",
    title: "Taurus AI Corp — Orchestrated Agentic Intelligence",
    description:
      "Enterprise-grade quantum-safe infrastructure for financial services and enterprise automation.",
    images: ["/images/taurus-ecosystem.png"]
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
