import Link from "next/link";
import { ExternalLink } from "lucide-react";

import type { SubProduct } from "@/@data/types";
import { stageLabel } from "@/@data/platforms";
import Icon from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stageBadgeClass: Record<SubProduct["stage"], string> = {
  production: "border-primary/40 bg-primary/10 text-primary",
  beta: "border-border bg-muted text-foreground",
  lab: "border-border bg-muted/60 text-muted-foreground",
  planned: "border-dashed border-border bg-transparent text-muted-foreground"
};

type SubProductCardProps = {
  product: SubProduct;
  /** Dim lab/planned tiles vs production */
  muted?: boolean;
};

export function SubProductCard({ product, muted }: SubProductCardProps) {
  const isMuted = muted ?? product.stage !== "production";
  const body = (
    <Card
      className={cn(
        "h-full rounded-none border transition-colors",
        isMuted ? "bg-muted/40 opacity-90" : "bg-muted group hover:border-primary/40"
      )}>
      <CardHeader className="gap-3">
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              "mb-1 flex size-10 items-center justify-center ring-8",
              isMuted
                ? "bg-muted text-muted-foreground ring-border/40"
                : "bg-primary/10 text-primary ring-primary/10"
            )}>
            {product.icon ? <Icon name={product.icon} className="size-5" /> : null}
          </div>
          <Badge
            variant="outline"
            className={cn("mono-label text-[10px] uppercase tracking-wide", stageBadgeClass[product.stage])}>
            {stageLabel(product.stage)}
          </Badge>
        </div>
        <div className="space-y-1">
          <CardTitle className="flex items-center gap-2 text-base">
            <span>{product.name}</span>
            {product.href ? (
              <ExternalLink className="text-muted-foreground size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
            ) : null}
          </CardTitle>
          <p className="text-primary/90 text-sm font-medium">{product.tagline}</p>
        </div>
      </CardHeader>
      <CardContent className="text-muted-foreground text-sm leading-relaxed">
        {product.description}
      </CardContent>
    </Card>
  );

  if (!product.href) {
    return body;
  }

  return (
    <Link
      href={product.href}
      target={product.external ? "_blank" : undefined}
      rel={product.external ? "noopener noreferrer" : undefined}
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
      {body}
    </Link>
  );
}
