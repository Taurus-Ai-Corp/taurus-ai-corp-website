import Link from "next/link";
import { GithubIcon, LinkedinIcon, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/layout/logo";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container space-y-4 pb-4 lg:pb-8">
      <div className="bg-muted border p-10">
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-4 xl:grid-cols-6">
          <div className="col-span-full space-y-4 xl:col-span-2">
            <Logo />
            <p className="text-muted-foreground">
              Enterprise-grade quantum-safe infrastructure for financial services and enterprise
              automation. Post-quantum cryptography, Hedera DLT, and autonomous AI agents —
              delivered as a service.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-bold">Platforms</h3>
            <div>
              <Link
                href="https://q-grid.net"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100">
                GRIDERA
              </Link>
            </div>
            <div>
              <Link
                href="https://nexus.taurusai.io"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100">
                NEXUS
              </Link>
            </div>
            <div>
              <Link href="/#platform-sentinel" className="opacity-60 hover:opacity-100">
                SENTINEL
              </Link>
            </div>
            <div>
              <Link href="/#platforms" className="opacity-60 hover:opacity-100">
                All platforms
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-bold">Company</h3>
            <div>
              <Link href="/#technology" className="opacity-60 hover:opacity-100">
                Technology
              </Link>
            </div>
            <div>
              <Link href="/#team" className="opacity-60 hover:opacity-100">
                Team
              </Link>
            </div>
            <div>
              <Link href="/blog" className="opacity-60 hover:opacity-100">
                Insights
              </Link>
            </div>
            <div>
              <Link href="/#contact" className="opacity-60 hover:opacity-100">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-bold">Industries</h3>
            <div>
              <Link href="/#solutions" className="opacity-60 hover:opacity-100">
                Financial Services
              </Link>
            </div>
            <div>
              <Link href="/#solutions" className="opacity-60 hover:opacity-100">
                Public Sector
              </Link>
            </div>
            <div>
              <Link href="/#solutions" className="opacity-60 hover:opacity-100">
                Healthcare
              </Link>
            </div>
            <div>
              <Link href="/#solutions" className="opacity-60 hover:opacity-100">
                Retail
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-bold">Legal</h3>
            <div>
              <Link href="/privacy" className="opacity-60 hover:opacity-100">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link href="/terms" className="opacity-60 hover:opacity-100">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 sm:flex-row!">
        <div className="text-muted-foreground flex items-center justify-center gap-1 text-sm sm:justify-start">
          <span>&copy; {new Date().getFullYear()} Taurus AI Corp. All rights reserved.</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button size="icon" variant="ghost" className="hover:opacity-50" asChild>
            <Link href="https://ca.linkedin.com/company/taurus-ai" target="_blank">
              <LinkedinIcon />
            </Link>
          </Button>
          <Button size="icon" variant="ghost" className="hover:opacity-50" asChild>
            <Link href="https://x.com/taurusai_" target="_blank">
              <Twitter />
            </Link>
          </Button>
          <Button size="icon" variant="ghost" className="hover:opacity-50" asChild>
            <Link href="https://github.com/Taurus-Ai-Corp" target="_blank">
              <GithubIcon />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};
