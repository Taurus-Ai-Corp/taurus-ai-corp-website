"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRightIcon, ExternalLink, Menu } from "lucide-react";

import { productList, routeList } from "@/@data/navbar";

import Icon from "@/components/icon";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import Logo from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ToggleTheme } from "@/components/layout/toogle-theme";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-2 z-40 lg:top-5">
      <div className="container">
        <div className="bg-background/70 flex items-center justify-between border p-3 backdrop-blur-sm">
          <Logo />
          {/* <!-- Mobile --> */}
          <div className="flex items-center lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer lg:hidden" />
              </SheetTrigger>

              <SheetContent
                side="left"
                className="bg-card border-secondary flex flex-col justify-between">
                <div>
                  <SheetHeader className="mb-4 ml-4">
                    <SheetTitle className="flex items-center">
                      <Logo />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-base">
                      <Link href="/#platforms">Platforms</Link>
                    </Button>
                    {productList.map(({ title, href }) => (
                      <Button
                        key={title}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="text-muted-foreground justify-start text-sm">
                        <Link href={href} target="_blank" rel="noopener noreferrer">
                          {title}
                        </Link>
                      </Button>
                    ))}
                    {routeList.map(({ href, label }) => (
                      <Button
                        key={href}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-base">
                        <Link href={href}>{label}</Link>
                      </Button>
                    ))}
                  </div>
                </div>

                <SheetFooter className="flex-col items-start justify-start sm:flex-col">
                  <Separator className="mb-2" />
                  <Button className="w-full" onClick={() => setIsOpen(false)} asChild>
                    <Link href="/#contact">
                      Request Demo
                      <ChevronRightIcon />
                    </Link>
                  </Button>
                  <ToggleTheme />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          {/* <!-- Desktop --> */}
          <NavigationMenu className="mx-auto hidden lg:block">
            <NavigationMenuList className="space-x-0">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Platforms
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-96 gap-4">
                    <ul className="flex flex-col">
                      {productList.map(({ title, description, icon, href, lead }) => (
                        <li key={title}>
                          <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-muted flex items-center gap-6 p-4 text-sm">
                            <div className="bg-primary/20 ring-primary/10 mb-4 flex size-8 items-center justify-center p-2 ring-8">
                              <Icon name={icon} className="text-primary size-5 shrink-0" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-foreground mb-1 flex items-center gap-2 leading-none font-semibold">
                                {title}
                                {lead ? (
                                  <span className="text-primary mono-label text-[10px] uppercase">
                                    Lead
                                  </span>
                                ) : null}
                                <ExternalLink className="text-muted-foreground size-3" />
                              </p>
                              <p className="text-muted-foreground line-clamp-2">{description}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t p-3">
                      <Link
                        href="/#platforms"
                        className="text-primary text-sm font-medium hover:underline">
                        Compare all platforms →
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                {routeList.map(({ href, label }) => (
                  <NavigationMenuLink
                    key={href}
                    asChild
                    className={cn(navigationMenuTriggerStyle(), "hover:bg-muted! bg-transparent!")}>
                    <Link href={href}>{label}</Link>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center lg:flex">
            <ToggleTheme />

            <div className="flex gap-2">
              <Button size="lg" asChild>
                <Link href="/#contact">
                  Request Demo
                  <ChevronRightIcon />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
