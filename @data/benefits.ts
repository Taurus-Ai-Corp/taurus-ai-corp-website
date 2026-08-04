import { platformFamilies } from "./platforms";

/**
 * Legacy flat benefit cards — kept for any secondary consumers.
 * Primary platforms UI uses platformFamilies + PlatformFamily section.
 */
export interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export const benefitList: BenefitsProps[] = platformFamilies.map((family) => ({
  icon: family.icon,
  title: `${family.name} — ${family.brand}`,
  description: family.description,
  href: family.href
}));
