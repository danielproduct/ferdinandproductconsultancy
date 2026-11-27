import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contract & Interim Product Leadership | Ferdinand Product Consultancy",
  description: "Senior hands-on product leadership for UK businesses: interim Product Manager and Product Director support, contract engagements and fractional product leadership.",
  alternates: { canonical: "/services/interim-product-leadership/" },
};

export default function InterimLeadershipPage() {
  return (
    <main className="service-page">
      <div className="service-page-inner">
        <Link className="service-back" href="/">← Ferdinand Product Consultancy</Link>
        <p className="service-eyebrow">FOR RECRUITERS, HIRING MANAGERS AND LEADERS</p>
        <h1>Contract & interim<br/><em>product leadership.</em></h1>
        <p className="service-lead">Experienced product leadership when a team needs focus, continuity or momentum—without waiting for a permanent hire.</p>
        <div className="service-page-grid">
          <section><h2>When this makes sense</h2><p>A leadership gap, a time-sensitive delivery challenge, a product that has lost direction, or a team that needs someone to take ownership and move decisions forward.</p><h2>How I can help</h2><ul><li>Interim senior product management and product direction</li><li>Product vision, priorities and roadmap ownership</li><li>Stakeholder alignment and cross-functional delivery leadership</li><li>Discovery, proposition definition and commercial decision-making</li><li>Support for delivery recovery and product improvement</li></ul></section>
          <section><h2>Ways to engage</h2><p>Contract, interim and fractional arrangements can be discussed around the business need, duration and team structure. UK-based, with remote and on-site arrangements considered.</p><h2>What you can expect</h2><p>A hands-on, outcome-led approach: understand the actual problem, make priorities clear and build delivery momentum with the people already in place.</p><p>Dan Ferdinand has worked across digital media, legal technology and sport, including senior product management and consultancy roles.</p></section>
        </div>
        <div className="service-cta"><h2>Need senior product leadership?</h2><p>Tell me about the problem, team and timeframe. We can establish quickly whether there is a fit.</p><a href="mailto:ferdinandproductconsultancy@gmail.com?subject=Interim%20product%20leadership%20enquiry">Discuss a contract role →</a></div>
        <nav className="service-related" aria-label="Related pages"><Link href="/services/product-strategy-consultancy/">Explore fixed-scope consultancy →</Link><Link href="/experience/">Review experience and outcomes →</Link></nav>
      </div>
    </main>
  );
}
