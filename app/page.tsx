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
  title: "Taurus AI Corp — Three Platforms. One Intelligence Fabric.",
  description:
    "GRIDERA post-quantum compliance, NEXUS marketing studio, and SENTINEL pediatric ADHD wellness — unified by PQC and Hedera audit. Live CORE: GRIDERA|Scan, Comply, Guard, Migrate.",
  openGraph: {
    type: "website",
    url: "https://taurusai.io",
    title: "Taurus AI Corp — Three Platforms. One Intelligence Fabric.",
    description:
      "Enterprise quantum-safe compliance (GRIDERA), coded marketing (NEXUS), and bio-foundry wellness (SENTINEL). NIST PQC + Hedera HCS.",
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
    title: "Taurus AI Corp — Three Platforms. One Intelligence Fabric.",
    description:
      "GRIDERA, NEXUS, and SENTINEL under one PQC + Hedera intelligence fabric.",
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
