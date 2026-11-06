import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ferdinand Product Consultancy | Product Leadership That Delivers",
  description:
    "Senior product leadership, digital product strategy and delivery. Flexible contract leadership and clearly scoped consultancy projects.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
