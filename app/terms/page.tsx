import { FooterSection } from "@/components/layout/sections/footer";

export const metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the Taurus AI Corp website and services."
};

export default function TermsOfServicePage() {
  return (
    <>
      <main className="container py-16 lg:py-24">
        <article className="article mx-auto max-w-(--breakpoint-md)">
          <div className="mono-label text-primary mb-4 text-xs">{"/// Legal"}</div>
          <h1>Terms of Service</h1>
          <p>
            <strong>Effective date:</strong> July 3, 2026
          </p>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the taurusai.io
            website operated by Taurus AI Corp (&ldquo;Taurus AI&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;). By accessing the site you agree to these Terms.
          </p>

          <h2>Use of the Website</h2>
          <p>
            You may use this website for lawful purposes only. You agree not to attempt to
            gain unauthorized access to any systems, to interfere with the site&rsquo;s
            operation, or to use automated means to scrape or overload the site.
          </p>

          <h2>Products & Services</h2>
          <p>
            Descriptions of our platforms — including BizFlow™, Q-Grid™, AssetGrid™, and
            Neovibe™ — are provided for general information. Access to and use of Taurus AI
            products is governed by separate written agreements between you and Taurus AI
            Corp. Nothing on this website constitutes an offer, commitment, or warranty of
            specific features, performance, certification status, or availability.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and software — is
            the property of Taurus AI Corp or its licensors and is protected by intellectual
            property law. You may not reproduce or distribute it without our prior written
            consent.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            The site may link to third-party websites. We are not responsible for their
            content or privacy practices.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            This website is provided &ldquo;as is&rdquo; without warranties of any kind,
            express or implied. Taurus AI Corp does not warrant that the site will be
            uninterrupted, error-free, or free of harmful components.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Taurus AI Corp shall not be liable for
            any indirect, incidental, special, or consequential damages arising from your use
            of this website.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Province of Ontario and the federal
            laws of Canada applicable therein, without regard to conflict-of-law principles.
          </p>

          <h2>Changes</h2>
          <p>
            We may revise these Terms at any time. Continued use of the site after changes
            are posted constitutes acceptance of the revised Terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms:{" "}
            <a href="mailto:admin@taurusai.io">admin@taurusai.io</a>
          </p>
        </article>
      </main>
      <FooterSection />
    </>
  );
}
