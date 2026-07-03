import React from "react";

import { teamList } from "@/@data/teams";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import SectionContainer from "@/components/layout/section-container";
import SectionHeader from "@/components/layout/section-header";

export function TeamSection() {
  return (
    <SectionContainer id="team">
      <SectionHeader
        subTitle="Leadership"
        title="Meet Our Leadership Team"
        description="Visionary leaders driving quantum-safe innovation in enterprise AI."
      />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {teamList.map(({ initials, firstName, lastName, positions, bio }, index) => (
          <Card key={index} className="bg-muted flex h-full flex-col">
            <CardHeader>
              <div className="bg-primary/10 text-primary font-heading mb-4 flex size-16 items-center justify-center border text-2xl font-bold">
                {initials}
              </div>
              <CardTitle className="text-lg">
                {firstName}
                <span className="text-primary ml-1">{lastName}</span>
              </CardTitle>
              <CardDescription className="mono-label text-xs">
                {positions.join(", ")}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed">
              {bio}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
