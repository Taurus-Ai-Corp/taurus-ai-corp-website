/** Shared product-stage typing for platform families. */

export type ProductStage = "production" | "beta" | "lab" | "planned";

export type SubProduct = {
  id: string;
  /** Display name, e.g. GRIDERA|Scan */
  name: string;
  tagline: string;
  description: string;
  stage: ProductStage;
  /** Only real URLs - omit if no public surface */
  href?: string;
  external?: boolean;
  icon?: string;
  /** Optional tile image under /public (e.g. /images/platforms/core-scan.jpg) */
  image?: string;
};

export type PlatformFamily = {
  id: "gridera" | "nexus" | "sentinel";
  name: string;
  brand: string;
  description: string;
  /** Lead platform on corporate site */
  lead: boolean;
  href: string;
  icon: string;
  /** Optional family hero under /public */
  image?: string;
  subProducts: SubProduct[];
};
