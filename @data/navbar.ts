import { platformFamilies } from "./platforms";

interface RouteProps {
  href: string;
  label: string;
}

export interface ProductProps {
  title: string;
  icon: string;
  description: string;
  href: string;
  external?: boolean;
  lead?: boolean;
}

export const routeList: RouteProps[] = [
  {
    href: "/#technology",
    label: "Technology"
  },
  {
    href: "/#solutions",
    label: "Industries"
  },
  {
    href: "/blog",
    label: "Insights"
  },
  {
    href: "/#team",
    label: "Team"
  },
  {
    href: "/#contact",
    label: "Contact"
  }
];

/** Mega-menu: three families from INVENTORY-VALIDATED (no BizFlow / NeoVibe pillars) */
export const productList: ProductProps[] = platformFamilies.map((family) => ({
  title: family.name,
  icon: family.icon,
  description: family.brand,
  href: family.href,
  external: true,
  lead: family.lead
}));
