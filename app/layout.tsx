import type { Metadata } from "next";
import AnalyticsConsent from "./AnalyticsConsent";
import "./globals.css";

const siteUrl = "https://ferdinandproductconsultancy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ferdinand Product Consultancy | Product Leadership That Delivers",
  description:
    "Senior product leadership, digital product strategy and delivery. Flexible contract leadership and clearly scoped consultancy projects.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}<AnalyticsConsent /></body></html>;
}
