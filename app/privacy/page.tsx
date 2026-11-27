import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy and Cookies | Ferdinand Product Consultancy",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 780, margin: "0 auto", padding: "60px 24px 100px", fontFamily: "Arial, sans-serif", lineHeight: 1.7, color: "#15121e" }}>
      <a href="/" style={{ color: "#7141b7" }}>← Ferdinand Product Consultancy</a>
      <h1>Privacy and cookies</h1>
      <p>Ferdinand Product Consultancy can be contacted at <a href="mailto:ferdinandproductconsultancy@gmail.com">ferdinandproductconsultancy@gmail.com</a> about this website and privacy enquiries.</p>
      <h2>Information you choose to share</h2>
      <p>If you contact us by email, phone or WhatsApp, we use the information you provide to respond to your enquiry and communicate about a potential contract or project. Those services may also process your information under their own policies. We do not operate a contact form on this site.</p>
      <h2>Optional Google Analytics</h2>
      <p>If you select “Accept analytics”, this website loads Google Analytics 4 (measurement ID G-K7SW3V7FHM), provided by Google, to measure website visits and interactions with email, telephone and WhatsApp links. Analytics may use cookies and process device, usage and approximate location information. Google may process this information outside the UK. We do not load Google Analytics before you opt in.</p>
      <p>If you reject analytics, Google Analytics is not loaded by this website. Your preference is stored locally in your browser and can be changed using the Cookie settings button. Withdrawing consent stops future Analytics collection from this site and attempts to clear the site's Google Analytics cookies, but does not erase data previously received by Google.</p>
      <h2>Your choices and rights</h2>
      <p>You may ask about personal information held in relation to your enquiry or request correction or deletion where applicable. Email us using the address above. You can also review <a href="https://policies.google.com/privacy">Google's privacy policy</a> for information about Google's processing.</p>
      <p>This notice describes the website's currently configured analytics and contact features. Additional services will require an updated notice if introduced.</p>
    </main>
  );
}
