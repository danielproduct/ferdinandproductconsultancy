"use client";

import { useEffect, useState } from "react";

const GA_ID = "G-K7SW3V7FHM";
const CONSENT_KEY = "fpc_analytics_consent_v1";
type Choice = "accepted" | "rejected";

function enableAnalytics() {
  if (document.getElementById("fpc-ga4-script")) return;
  const w = window as Window & { dataLayer?: unknown[][]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = (...args: unknown[]) => { w.dataLayer?.push(args); };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID, { anonymize_ip: true });
  const script = document.createElement("script");
  script.id = "fpc-ga4-script";
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(script);
}

function eraseAnalyticsCookies() {
  const names = document.cookie.split(";").map((part) => part.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));
  for (const name of names) {
    for (const domain of ["", ";domain=." + window.location.hostname.replace(/^www\./, "")]) {
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/" + domain;
    }
  }
}

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    const initial = saved === "accepted" || saved === "rejected" ? saved : null;
    setChoice(initial);
    setOpen(initial === null);
    setReady(true);
    if (initial === "accepted") enableAnalytics();
  }, []);

  useEffect(() => {
    if (choice !== "accepted") return;
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      let action: string | null = null;
      if (href.startsWith("mailto:")) action = "email";
      else if (href.startsWith("tel:")) action = "telephone";
      else if (href.startsWith("https://wa.me/")) action = "whatsapp";
      if (action) {
        const w = window as Window & { gtag?: (...args: unknown[]) => void };
        w.gtag?.("event", "contact_click", { contact_method: action });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [choice]);

  function save(next: Choice) {
    window.localStorage.setItem(CONSENT_KEY, next);
    if (next === "rejected" && choice === "accepted") {
      eraseAnalyticsCookies();
      window.location.reload();
      return;
    }
    setChoice(next);
    setOpen(false);
    if (next === "accepted") enableAnalytics();
  }

  if (!ready) return null;
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}
        style={{ position: "fixed", bottom: 12, left: 12, zIndex: 90, background: "#171322", color: "#fff", border: "1px solid #9876dd", padding: "9px 12px", fontSize: 12, cursor: "pointer" }}>
        Cookie settings
      </button>
      {open && <section aria-label="Analytics cookie choices" role="dialog" aria-modal="false"
        style={{ position: "fixed", zIndex: 100, bottom: 12, left: 12, right: 12, maxWidth: 520, padding: 22, background: "#171322", color: "#fff", border: "1px solid #8d6bcc", boxShadow: "0 10px 35px #0008", fontFamily: "Arial, sans-serif" }}>
        <h2 style={{ fontSize: 20, margin: "0 0 10px" }}>Help us improve this website</h2>
        <p style={{ fontSize: 14, lineHeight: 1.6, margin: "0 0 16px", color: "#eee9fa" }}>
          With your permission, we use Google Analytics cookies to understand visits and which contact options people use. Analytics is optional and stays off unless you accept. You can change your choice using Cookie settings.
        </p>
        <p style={{ fontSize: 12, margin: "0 0 16px" }}><a href="/privacy" style={{ color: "#d5bbff", textDecoration: "underline" }}>Privacy and cookies information</a></p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <button type="button" onClick={() => save("rejected")} style={{ flex: "1 1 160px", padding: "12px 14px", background: "#242030", border: "1px solid #d0bae9", color: "#fff", cursor: "pointer", fontWeight: 700 }}>Reject analytics</button>
          <button type="button" onClick={() => save("accepted")} style={{ flex: "1 1 160px", padding: "12px 14px", background: "#b994ff", border: "1px solid #b994ff", color: "#171322", cursor: "pointer", fontWeight: 700 }}>Accept analytics</button>
        </div>
      </section>}
    </>
  );
}
