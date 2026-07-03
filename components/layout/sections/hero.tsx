import Link from "next/link";
import { CheckIcon, ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/extras/background-beams-with-collision";

export const HeroSection = () => {
  return (
    <section className="container w-full">
      <div className="mx-auto grid place-items-center py-16 pb-8 md:py-32 md:pb-14 lg:max-w-(--breakpoint-xl)">
        <BackgroundBeamsWithCollision>
          <div className="space-y-8 pb-8 text-center lg:pb-20">
            <Badge variant="outline" className="mono-label bg-muted py-2 text-xs">
              <span className="text-primary">{"///"}</span>
              <span className="ml-2">Quantum-Safe Enterprise AI</span>
            </Badge>
            <div className="mx-auto max-w-(--breakpoint-md) text-center text-4xl font-bold md:text-6xl">
              <h1>
                Orchestrated Agentic <span className="text-primary">Intelligence</span>
              </h1>
            </div>
            <p className="text-muted-foreground mx-auto max-w-(--breakpoint-sm) text-xl">
              Enterprise-grade quantum-safe infrastructure delivered as a service. Deploy
              AI-powered automation, blockchain integration, and post-quantum cryptography — all
              managed, scalable, and ready in days, not months.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row!">
              <Button className="h-12 px-10 text-base" asChild>
                <Link href="/#contact">
                  Request a Demo
                  <ChevronRight />
                </Link>
              </Button>
              <Button variant="outline" className="h-12 px-10 text-base" asChild>
                <Link href="/#platforms">Explore the Platform</Link>
              </Button>
            </div>
            <div className="text-muted-foreground mt-6 flex flex-col items-center justify-center gap-4 text-sm md:flex-row!">
              <div className="flex items-center gap-1">
                <CheckIcon className="text-primary size-4" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckIcon className="text-primary size-4" />
                <span>10,000+ TPS on Hedera</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckIcon className="text-primary size-4" />
                <span>NIST PQC Compliant</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckIcon className="text-primary size-4" />
                <span>SWIFT 2027 Ready</span>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </section>
  );
};
