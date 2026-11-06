"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown, Compass, Mail, Menu, MessageCircle, MoveUpRight, Phone, X } from "lucide-react";

const contactEmail = "ferdinandproductconsultancy@gmail.com";
const whatsappUrl = "https://wa.me/447969071670?text=Hello%20Dan%2C%20I%27d%20like%20to%20discuss%20a%20product%20challenge.";

const services = [
  { number: "01", title: "Interim product leadership", detail: "Senior, hands-on leadership when the stakes are high and momentum matters.", tags: "Direction / Teams / Delivery" },
  { number: "02", title: "Product strategy & discovery", detail: "Cut through uncertainty. Find the opportunity, define the priorities and build a plan that holds up.", tags: "Research / Roadmaps / Validation" },
  { number: "03", title: "Digital product transformation", detail: "Bring clarity and pace to established products, platforms and complex delivery programmes.", tags: "Modernisation / Growth / Execution" },
  { number: "04", title: "AI & data product opportunities", detail: "Turn emerging technology into grounded product propositions with a clear business purpose.", tags: "Opportunity / Definition / Value" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ferdinand Product Consultancy home" onClick={close}>
          <span className="brand-mark">f<span>.</span></span>
          <span className="brand-name">FERDINAND<span>PRODUCT CONSULTANCY</span></span>
        </a>
        <nav className={menuOpen ? "navigation navigation-open" : "navigation"} aria-label="Main navigation">
          <a onClick={close} href="#services">Expertise</a>
          <a onClick={close} href="#approach">How I work</a>
          <a onClick={close} href="#experience">Experience</a>
          <a onClick={close} href="#about">About</a>
          <a onClick={close} className="mobile-contact" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
        </nav>
        <a className="header-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
        <button type="button" className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main id="top">
        <section className="hero section-frame">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow"><span className="signal-dot"/> INDEPENDENT PRODUCT LEADERSHIP <span className="eyebrow-line"/> UK & REMOTE</div>
            <h1>Product leadership<br/>that <span>delivers<span className="punctuation">.</span></span></h1>
            <p className="hero-description">From big-picture strategy to hands-on delivery, I help ambitious organisations turn complex digital challenges into products that perform.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Discuss a project <ArrowUpRight size={19}/></a>
              <a className="button button-text" href="#contracts">Explore contract leadership <ArrowRight size={19}/></a>
            </div>
          </div>
          <div className="hero-footer"><span>STRATEGY <i/> LEADERSHIP <i/> DELIVERY</span><span>SCROLL TO EXPLORE <ChevronDown size={15}/></span></div>
          <div className="hero-watermark" aria-hidden="true">F<span>.</span></div>
        </section>

        <section className="intro-strip section-frame">
          <div className="intro-label"><span className="tiny-square"/> A DIFFERENT KIND OF CONSULTANCY</div>
          <p>No unnecessary layers. No endless PowerPoints. Just experienced product thinking, clear decisions and the drive to <em>make things happen.</em></p>
          <div className="intro-arrow"><ArrowUpRight size={30}/></div>
        </section>

        <section id="services" className="services-section section-frame content-section">
          <div className="section-heading"><div><span className="section-kicker">01 / WHAT I DO</span><h2>Expertise built<br/>around <em>outcomes.</em></h2></div><p>Whether you need a leader to take ownership or a partner to solve a defined challenge, I bring strategic perspective and practical delivery experience.</p></div>
          <div className="services-grid">{services.map(s => <article className="service-card" key={s.number}><div className="service-top"><span>{s.number} /</span><Compass size={22} strokeWidth={1.4}/></div><h3>{s.title}</h3><p>{s.detail}</p><div className="service-bottom"><span>{s.tags}</span><ArrowUpRight size={21}/></div></article>)}</div>
        </section>

        <section id="contracts" className="engagement-section section-frame">
          <div className="engagement-copy"><span className="section-kicker light">02 / WAYS TO WORK TOGETHER</span><h2>The right expertise.<br/><em>On your terms.</em></h2><p>Different challenges need different kinds of support. Two straightforward ways to get senior product experience working for your business.</p></div>
          <div className="engagement-options">
            <article><span className="option-label">FOR RECRUITERS & HIRING MANAGERS</span><h3>Contract & interim leadership</h3><p>Hands-on senior product capability embedded in your organisation. Available for discussions around day-rate engagements and interim roles.</p><a href={`mailto:${contactEmail}?subject=Contract%20leadership%20enquiry`}>Discuss a contract role <ArrowUpRight size={18}/></a></article>
            <article><span className="option-label">FOR BUSINESSES & FOUNDERS</span><h3>Fixed-scope consultancy</h3><p>A defined challenge, a clear set of deliverables and an agreed scope. Focused strategic support without an open-ended commitment.</p><a href={`mailto:${contactEmail}?subject=Project%20consultancy%20enquiry`}>Discuss a project <ArrowUpRight size={18}/></a></article>
          </div>
        </section>

        <section id="experience" className="proof-section section-frame content-section"><div className="section-heading"><div><span className="section-kicker">03 / REAL-WORLD EXPERIENCE</span><h2>Not just ideas.<br/><em>Experience in action.</em></h2></div><p>I've worked on products across digital media, legal technology and sport, from new propositions to platforms serving international audiences.</p></div><div className="proof-grid"><div><span className="proof-number">20<span>−</span></span><p>Nearly two decades working across digital products and commercial challenges</p></div><div><span className="proof-number">0<span>→</span>1</span><p>Taking ideas through discovery, launch, scale and continuous improvement</p></div><div><span className="proof-number">B2B<span>+</span></span><p>Experience with consumer products, partner platforms and complex stakeholder teams</p></div></div><p className="proof-note">Specific client outcomes and case studies can be shared in conversation, subject to confidentiality.</p></section>

        <section id="approach" className="approach-section section-frame content-section"><div className="approach-side"><span className="section-kicker">04 / HOW I WORK</span><h2>Clarity first.<br/><em>Momentum always.</em></h2><p>I believe good product leadership should make the complicated feel manageable, without losing sight of commercial reality.</p></div><div className="approach-list"><div><span>01</span><div><h3>Understand the real problem</h3><p>Get close to customers, stakeholders and the evidence before prescribing a solution.</p></div></div><div><span>02</span><div><h3>Make the important decisions</h3><p>Align teams around clear priorities, outcomes and a realistic route forward.</p></div></div><div><span>03</span><div><h3>Deliver, learn and improve</h3><p>Turn direction into action with accountable, collaborative product leadership.</p></div></div></div></section>

        <section id="about" className="about-section section-frame"><div className="about-visual"><div className="portrait-frame"><Image src="/dan-ferdinand.jpg" alt="Dan Ferdinand, founder of Ferdinand Product Consultancy" width={512} height={512}/></div><div className="logo-frame"><Image src="/fpc-logo.png" alt="Ferdinand Product Consultancy logo" width={800} height={800}/></div></div><div className="about-copy"><span className="section-kicker">05 / THE PERSON BEHIND FPC</span><h2>Senior thinking.<br/><em>Personal commitment.</em></h2><p>I'm Dan Ferdinand. I enjoy taking complicated product challenges and making them easier to understand, decide on and deliver.</p><p>Over nearly two decades I've worked across digital media, legal technology and sport, helping teams take products from early ideas to established services. I bring the strategic view, but I'm just as comfortable rolling up my sleeves and working through the detail.</p><p>When you work with FPC, you work directly with me. No extra layers. Just an honest conversation about what needs to happen next.</p><a className="inline-link" href="#contact">Start a conversation <ArrowUpRight size={18}/></a></div></section>

        <section className="faq-section section-frame content-section"><div><span className="section-kicker">06 / GOOD TO KNOW</span><h2>Clear answers.<br/><em>No guesswork.</em></h2></div><div className="faq-list">{[{q:"Do you take on both contract roles and projects?",a:"Yes. FPC is open to conversations about embedded contract or interim product leadership, as well as clearly scoped consultancy projects."},{q:"Can you help with an early-stage product idea?",a:"Yes. Discovery, opportunity assessment, product definition and early roadmapping can form a focused project."},{q:"Do you work remotely?",a:"Remote working and on-site arrangements can be discussed based on the role or project requirements."}].map((item,i)=><div className="faq-item" key={item.q}><button type="button" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{item.q}</span><span className="faq-toggle">{openFaq===i?"−":"+"}</span></button>{openFaq===i&&<p>{item.a}</p>}</div>)}</div></section>

        <section id="contact" className="contact-section section-frame"><div className="contact-orbit" aria-hidden="true"/><span className="section-kicker light">LET'S MAKE SOMETHING HAPPEN</span><h2>Have a challenge<br/>worth <em>solving?</em></h2><p>Whether you're looking for a senior product contractor or need a partner for a defined project, let's start with a conversation.</p><div className="contact-actions"><a className="button button-white" href={`mailto:${contactEmail}?subject=FPC%20enquiry`}><Mail size={19}/> Email Dan <ArrowUpRight size={19}/></a><a className="button button-outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={19}/> WhatsApp <ArrowUpRight size={19}/></a></div><div className="contact-details"><a href={`mailto:${contactEmail}`}>{contactEmail}</a><a href="tel:+447969071670"><Phone size={15}/> 07969 071670</a></div></section>
      </main>
      <footer className="site-footer section-frame"><a className="brand footer-brand" href="#top"><span className="brand-mark">f<span>.</span></span><span className="brand-name">FERDINAND<span>PRODUCT CONSULTANCY</span></span></a><p>Independent product leadership.<br/>Built around outcomes.</p><div className="footer-end"><span>© {new Date().getFullYear()} Ferdinand Product Consultancy</span><a href="https://www.linkedin.com/company/ferdinand-product-consultancy/" target="_blank" rel="noreferrer">LinkedIn <MoveUpRight size={14}/></a></div></footer>
    </>
  );
}
