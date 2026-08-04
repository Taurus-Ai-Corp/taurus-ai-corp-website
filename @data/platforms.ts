import { grideraFamily } from "./gridera-products";
import { nexusFamily } from "./nexus-products";
import { sentinelFamily } from "./sentinel-products";
import type { PlatformFamily, ProductStage } from "./types";

export type { PlatformFamily, ProductStage, SubProduct } from "./types";

/** Ordered for corporate site: GRIDERA lead, then NEXUS, then SENTINEL */
export const platformFamilies: PlatformFamily[] = [
  grideraFamily,
  nexusFamily,
  sentinelFamily
];

export function productionSubProducts(family: PlatformFamily) {
  return family.subProducts.filter((p) => p.stage === "production");
}

export function stageLabel(stage: ProductStage): string {
  switch (stage) {
    case "production":
      return "Live";
    case "beta":
      return "Beta";
    case "lab":
      return "Lab";
    case "planned":
      return "Planned";
  }
}
