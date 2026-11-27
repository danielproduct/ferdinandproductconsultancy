import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Leadership Experience | Dan Ferdinand | FPC",
  description: "Dan Ferdinand's product leadership experience spans digital media, legal technology and sport, with evidence of revenue growth, customer experience improvement and product launches.",
  alternates: { canonical: "/experience/" },
};

export default function ExperiencePage() {
  return (
    <main className="service-page">
      <div className="service-page-inner">
        <Link className="service-back" href="/">← Ferdinand Product Consultancy</Link>
        <p className="service-eyebrow">ABOUT DAN FERDINAND</p>
        <h1>Product experience<br/><em>backed by outcomes.</em></h1>
        <p className="service-lead">Nearly two decades working across digital products, from strategy and discovery to launch, improvement and commercial performance.</p>
        <div className="service-page-grid">
          <section><h2>Digital media and streaming</h2><p>During my time at Perform Group and DAZN Media, I worked on digital video products and advertising platforms spanning international markets. My responsibilities included the ePlayer product and product strategy, delivery and commercial performance.</p><h2>Legal technology</h2><p>At Rocket Lawyer, I worked on its mobile app and RocketSign, including growth, reliability, experience and international product development.</p></section>
          <section><h2>Selected career outcomes</h2><ul><li>Rocket Lawyer Mobile App: gross revenue rose from around $580,000 to over $1.3 million year on year, reported as 105% growth in my CV.</li><li>Mobile app rating increased from 3.7 to 4.8 stars, alongside reductions in critical crashes.</li><li>RocketSign journey improvements generated 7,000 new paid subscribers, as described in my CV.</li></ul><p>These results relate to Dan's previous employment, not client results claimed by Ferdinand Product Consultancy.</p></section>
        </div>
        <div className="service-cta"><h2>What this means for your business</h2><p>Strategic thinking grounded in delivery, commercial outcomes and practical experience across different sectors.</p><a href="mailto:ferdinandproductconsultancy@gmail.com?subject=FPC%20experience%20enquiry">Start a conversation →</a></div>
        <nav className="service-related" aria-label="Related pages"><Link href="/services/interim-product-leadership/">Contract and interim work →</Link><Link href="/services/product-strategy-consultancy/">Product consultancy →</Link></nav>
      </div>
    </main>
  );
}
