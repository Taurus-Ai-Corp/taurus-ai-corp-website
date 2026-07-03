import React from "react";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Jura } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const jura = Jura({
  subsets: ["latin"],
  variable: "--font-jura"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taurusai.io"),
  title: {
    default: "Taurus AI Corp — Orchestrated Agentic Intelligence",
    template: "%s | Taurus AI Corp"
  },
  description:
    "Enterprise-grade quantum-safe infrastructure delivered as a service. AI-powered automation, blockchain integration, and post-quantum cryptography — managed, scalable, and ready in days, not months."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn("bg-background min-h-screen antialiased", jura.variable)}
        suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
