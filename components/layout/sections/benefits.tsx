import { benefitList } from "@/@data/benefits";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/icon";
import SectionContainer from "../section-container";
import SectionHeader from "../section-header";

export const BenefitsSection = () => {
  return (
    <SectionContainer id="platforms">
      <SectionHeader
        subTitle="The Platform"
        title="Four Platforms. One Intelligence Fabric."
        description="Four integrated platforms powering the future of enterprise technology — AI automation, post-quantum security, asset tokenization, and creative AI, orchestrated by a single quantum-safe core."
      />
      <div className="mx-auto grid w-full max-w-(--breakpoint-lg) gap-6 sm:grid-cols-2">
        {benefitList.map(({ icon, title, description }, index) => (
          <Card key={title} className="group/number bg-muted h-full">
            <CardHeader>
              <div className="flex justify-between">
                <Icon
                  name={icon}
                  className="text-primary bg-primary/10 ring-primary/10 mb-6 size-10 p-2 ring-8"
                />
                <span className="text-muted-foreground/20 group-hover/number:text-primary/60 font-heading text-5xl font-bold transition-all delay-75">
                  0{index + 1}
                </span>
              </div>
              <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{description}</CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};
