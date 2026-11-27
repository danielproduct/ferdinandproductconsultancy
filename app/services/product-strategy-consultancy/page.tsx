import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Strategy & Discovery Consultancy | Ferdinand Product Consultancy",
  description: "Fixed-scope product strategy, discovery, roadmap, digital transformation and delivery consultancy for founders, SMEs and established businesses in the UK.",
  alternates: { canonical: "/services/product-strategy-consultancy/" },
};

export default function ProductConsultancyPage() {
  return (
    <main className="service-page">
      <div className="service-page-inner">
        <Link className="service-back" href="/">← Ferdinand Product Consultancy</Link>
        <p className="service-eyebrow">FOR FOUNDERS, BUSINESSES AND PRODUCT TEAMS</p>
        <h1>Product strategy &<br/><em>fixed-scope consultancy.</em></h1>
        <p className="service-lead">A defined challenge, a clear outcome and the product experience needed to make progress without an open-ended engagement.</p>
        <div className="service-page-grid">
          <section><h2>Where I can help</h2><ul><li>Product discovery and opportunity validation</li><li>Product strategy and prioritisation</li><li>Roadmap definition and decision support</li><li>Digital product transformation and delivery planning</li><li>Evaluating AI and data product opportunities against real business needs</li></ul><h2>Typical starting points</h2><p>An idea that needs evidence, an existing product that needs a new direction, or a delivery problem that needs a focused external perspective.</p></section>
          <section><h2>A practical approach</h2><p>First, understand the customer, commercial and operational problem. Then agree scope, deliverables, stakeholders and success measures before starting work.</p><p>Depending on the assignment, outputs might include an opportunity assessment, product definition, prioritised roadmap, requirements, delivery plan or recommendations for next steps.</p><h2>How engagements work</h2><p>Work is tailored to the problem. Scope, timing and commercials are agreed in advance rather than presented as a one-size-fits-all package.</p></section>
        </div>
        <div className="service-cta"><h2>Have a product challenge?</h2><p>Share what needs fixing or deciding, and we'll explore a focused way forward.</p><a href="mailto:ferdinandproductconsultancy@gmail.com?subject=Product%20strategy%20consultancy%20enquiry">Discuss a project →</a></div>
        <nav className="service-related" aria-label="Related pages"><Link href="/services/interim-product-leadership/">Explore interim product leadership →</Link><Link href="/experience/">Review experience and outcomes →</Link></nav>
      </div>
    </main>
  );
}
