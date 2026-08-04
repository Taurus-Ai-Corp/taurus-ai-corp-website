import { platformFamilies } from "@/@data/platforms";
import SectionContainer from "../section-container";
import SectionHeader from "../section-header";
import { PlatformFamily } from "../platforms/platform-family";

export const BenefitsSection = () => {
  return (
    <SectionContainer id="platforms">
      <SectionHeader
        subTitle="The Platform"
        title="Three Platforms. One Intelligence Fabric."
        description="GRIDERA leads with live post-quantum compliance. NEXUS covers marketing and ops studio tools. SENTINEL is pediatric ADHD wellness biofeedback — stage-labeled honestly, not sold as equal production SaaS."
      />
      <div className="mx-auto flex w-full max-w-(--breakpoint-xl) flex-col gap-8">
        {platformFamilies.map((family, index) => (
          <PlatformFamily key={family.id} family={family} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
};
