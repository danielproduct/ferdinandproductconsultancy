const base = "https://ferdinandproductconsultancy.com";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": base + "/#organisation",
      name: "Ferdinand Product Consultancy",
      url: base + "/",
      description: "Independent UK consultancy providing senior product leadership, digital product strategy, discovery and delivery support.",
      email: "ferdinandproductconsultancy@gmail.com",
      founder: { "@id": base + "/#dan-ferdinand" },
      sameAs: ["https://www.linkedin.com/company/ferdinand-product-consultancy/"]
    },
    {
      "@type": "Person",
      "@id": base + "/#dan-ferdinand",
      name: "Daniel Ferdinand",
      alternateName: "Dan Ferdinand",
      jobTitle: "Product Consultant and Founder",
      worksFor: { "@id": base + "/#organisation" },
      url: base + "/#about",
      knowsAbout: [
        "Digital product management",
        "Product strategy and discovery",
        "Product delivery",
        "Interim product leadership"
      ]
    },
    {
      "@type": "WebSite",
      "@id": base + "/#website",
      url: base + "/",
      name: "Ferdinand Product Consultancy",
      publisher: { "@id": base + "/#organisation" },
      inLanguage: "en-GB"
    },
    {
      "@type": "Service",
      "@id": base + "/services/interim-product-leadership/#service",
      name: "Contract and interim product leadership",
      provider: { "@id": base + "/#organisation" },
      serviceType: "Interim product management and fractional product leadership",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: base + "/services/interim-product-leadership/"
    },
    {
      "@type": "Service",
      "@id": base + "/services/product-strategy-consultancy/#service",
      name: "Fixed-scope product strategy and digital consultancy",
      provider: { "@id": base + "/#organisation" },
      serviceType: "Digital product strategy, discovery and delivery consultancy",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: base + "/services/product-strategy-consultancy/"
    }
  ]
};

export default function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />;
}
