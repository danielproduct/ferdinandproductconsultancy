import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ferdinandproductconsultancy.com/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
