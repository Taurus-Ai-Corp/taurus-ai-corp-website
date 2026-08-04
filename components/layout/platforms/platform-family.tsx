"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ExternalLink } from "lucide-react";

import type { PlatformFamily as PlatformFamilyType } from "@/@data/types";
import { productionSubProducts } from "@/@data/platforms";
import Icon from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SubProductCard } from "./sub-product-card";

type PlatformFamilyProps = {
  family: PlatformFamilyType;
  index: number;
};

export function PlatformFamily({ family, index }: PlatformFamilyProps) {
  const core = productionSubProducts(family);
  const secondary = family.subProducts.filter((p) => p.stage !== "production");
  const [showSecondary, setShowSecondary] = useState(false);
  const primary =
    core.length > 0
      ? core
      : family.subProducts.filter((p) => p.stage === "beta" || p.stage === "lab").slice(0, 4);
  const rest =
    core.length > 0
      ? secondary
      : family.subProducts.filter((p) => !primary.some((x) => x.id === p.id));

  return (
    <article
      id={`platform-${family.id}`}
      className={cn(
        "overflow-hidden border bg-card/30",
        family.lead && "border-primary/30 ring-1 ring-primary/15"
      )}>
      {family.image ? (
        <div className="relative aspect-[21/7] w-full border-b md:aspect-[24/7]">
          <Image
            src={family.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority={family.lead}
          />
          <div className="from-background via-background/70 absolute inset-0 bg-gradient-to-t to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground mono-label text-xs">0{index + 1}</span>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{family.name}</h3>
              {family.lead ? (
                <Badge className="mono-label rounded-none text-[10px] uppercase">Lead</Badge>
              ) : null}
            </div>
            <p className="text-primary mt-1 text-sm font-medium md:text-base">{family.brand}</p>
          </div>
        </div>
      ) : null}

      <div className="p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-4">
            {!family.image ? (
              <div className="bg-primary/10 text-primary ring-primary/10 flex size-12 shrink-0 items-center justify-center ring-8">
                <Icon name={family.icon} className="size-6" />
              </div>
            ) : null}
            <div className="space-y-2">
              {!family.image ? (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-muted-foreground mono-label text-xs">0{index + 1}</span>
                  <h3 className="text-2xl font-bold tracking-tight">{family.name}</h3>
                  {family.lead ? (
                    <Badge className="mono-label rounded-none text-[10px] uppercase">Lead</Badge>
                  ) : null}
                </div>
              ) : null}
              {!family.image ? (
                <p className="text-primary text-sm font-medium">{family.brand}</p>
              ) : null}
              <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed md:text-base">
                {family.description}
              </p>
            </div>
          </div>
          <Button variant="outline" className="shrink-0 rounded-none" asChild>
            <Link href={family.href} target="_blank" rel="noopener noreferrer">
              Visit {family.name}
              <ExternalLink className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {primary.map((product) => (
            <SubProductCard key={product.id} product={product} />
          ))}
        </div>

        {rest.length > 0 ? (
          <div className="mt-6">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground mb-4 rounded-none px-0"
              onClick={() => setShowSecondary((v) => !v)}
              aria-expanded={showSecondary}>
              <ChevronDown
                className={cn("size-4 transition-transform", showSecondary && "rotate-180")}
              />
              {showSecondary ? "Hide" : "Show"} lab & planned ({rest.length})
            </Button>
            {showSecondary ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {rest.map((product) => (
                  <SubProductCard key={product.id} product={product} muted />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
