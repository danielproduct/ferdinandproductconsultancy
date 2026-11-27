import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ferdinandproductconsultancy.com/",
      changeFrequency: "monthly",
      priority: 1,
    },
    { url: "https://ferdinandproductconsultancy.com/services/interim-product-leadership/", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://ferdinandproductconsultancy.com/services/product-strategy-consultancy/", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://ferdinandproductconsultancy.com/experience/", changeFrequency: "monthly", priority: 0.7 },
  ];
}
