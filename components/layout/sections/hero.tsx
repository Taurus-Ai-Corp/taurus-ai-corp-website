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
              <span className="ml-2">Three Platforms · PQC + Hedera Fabric</span>
            </Badge>
            <div className="mx-auto max-w-(--breakpoint-md) text-center text-4xl font-bold md:text-6xl">
              <h1>
                Three Platforms.{" "}
                <span className="text-primary">One Intelligence Fabric.</span>
              </h1>
            </div>
            <p className="text-muted-foreground mx-auto max-w-(--breakpoint-sm) text-xl">
              TAURUS AI Corp builds quantum-safe compliance, coded marketing systems, and
              bio-foundry wellness tools — unified by post-quantum cryptography and Hedera audit
              trails. Start with GRIDERA|Scan and GRIDERA|Comply; everything else is stage-labeled.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row!">
              <Button className="h-12 px-10 text-base" asChild>
                <Link href="https://q-grid.net/scan" target="_blank" rel="noopener noreferrer">
                  Free PQC Scan
                  <ChevronRight />
                </Link>
              </Button>
              <Button variant="outline" className="h-12 px-10 text-base" asChild>
                <Link href="/#platforms">Explore Platforms</Link>
              </Button>
            </div>
            <div className="text-muted-foreground mt-6 flex flex-col items-center justify-center gap-4 text-sm md:flex-row!">
              <div className="flex items-center gap-1">
                <CheckIcon className="text-primary size-4" />
                <span>GRIDERA CORE live</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckIcon className="text-primary size-4" />
                <span>NIST PQC (ML-DSA / ML-KEM)</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckIcon className="text-primary size-4" />
                <span>Hedera HCS audit</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckIcon className="text-primary size-4" />
                <span>EU + Canada path</span>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </section>
  );
};
