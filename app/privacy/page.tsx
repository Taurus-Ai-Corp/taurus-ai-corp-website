import { FooterSection } from "@/components/layout/sections/footer";

export const metadata = {
  title: "Privacy Policy",
  description: "How Taurus AI Corp collects, uses, and protects your information."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="container py-16 lg:py-24">
        <article className="article mx-auto max-w-(--breakpoint-md)">
          <div className="mono-label text-primary mb-4 text-xs">{"/// Legal"}</div>
          <h1>Privacy Policy</h1>
          <p>
            <strong>Effective date:</strong> July 3, 2026
          </p>
          <p>
            Taurus AI Corp (&ldquo;Taurus AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects
            your privacy. This policy describes what information we collect through
            taurusai.io, how we use it, and the choices you have.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>
              <strong>Contact information you provide</strong> — such as your name, email
              address, company, and message contents when you contact us, request a demo, or
              subscribe to updates.
            </li>
            <li>
              <strong>Usage information</strong> — standard technical data such as IP address,
              browser type, pages visited, and referring pages, collected through server logs
              and privacy-respecting analytics.
            </li>
          </ul>

          <h2>How We Use Information</h2>
          <ul>
            <li>To respond to your inquiries and schedule requested demos or consultations.</li>
            <li>To operate, secure, and improve our website and services.</li>
            <li>To send updates you have requested; you can opt out at any time.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>What We Do Not Do</h2>
          <ul>
            <li>We do not sell your personal information.</li>
            <li>We do not share your information with third parties for their marketing.</li>
          </ul>

          <h2>Data Retention & Security</h2>
          <p>
            We retain personal information only as long as needed for the purposes described
            above or as required by law. We apply enterprise-grade safeguards — including
            encryption in transit and at rest — to protect your information.
          </p>

          <h2>International Transfers</h2>
          <p>
            Taurus AI Corp is headquartered in Ontario, Canada, with offices in Dubai, Wyoming
            (USA), and India. Your information may be processed in these jurisdictions in
            accordance with applicable data-protection law, including PIPEDA and, where
            applicable, the GDPR.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, delete,
            or restrict the processing of your personal information, and to withdraw consent.
            To exercise these rights, contact us at{" "}
            <a href="mailto:admin@taurusai.io">admin@taurusai.io</a>.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be posted on
            this page with an updated effective date.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href="mailto:admin@taurusai.io">admin@taurusai.io</a>
          </p>
        </article>
      </main>
      <FooterSection />
    </>
  );
}
