import { useState } from "react";
import Icon from "@/components/Icon";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FAQS = [
  {
    q: "Who can join?",
    a: "Any student in grades 5–12 in the Reno‑Sparks area, regardless of experience level. All genders welcome!",
  },
  {
    q: "What is a composite team?",
    a: "A composite team serves students whose school doesn't have its own mountain bike team. We bring riders from multiple schools together under one team.",
  },
  {
    q: "Does my child need race experience?",
    a: "Not at all! Many of our riders are brand new to mountain biking. Our coaches work with every ability level.",
  },
  {
    q: "Is racing required?",
    a: "No. Racing is encouraged but never required. Many riders come for the training, friendships, and fun.",
  },
  {
    q: "How do we try the team?",
    a: "Through NICA's 3‑Time Agreement to Participate, new riders can attend up to three events before officially registering. Just email us and show up!",
  },
  {
    q: "How do families get updates?",
    a: "Registered families receive weekly emails with practice locations, schedule changes, and race info. We also use team communication tools to keep everyone in the loop.",
  },
  {
    q: "Will my kid like it — and how much should I expect to pay for a beginner bike?",
    a: "This is a very common and totally valid question. Many families don't want to invest heavily in gear before knowing if their child will enjoy mountain biking. That's exactly why our program is fun‑first, inclusive, and low‑pressure — many kids discover they love riding once they experience practices with teammates and supportive coaches.\n\nHere's a simple guide to beginner bike options and typical costs:\n\nLOW‑COST (used or refurbished): about $150–$500 (most families land around $300–$400)\n• Reno Bike Project — a local nonprofit community bike shop that refurbishes donated bikes and sells used bikes at affordable price points.\n• Facebook Marketplace — a great place to find local used bikes at a wide range of prices.\nTip: If buying used, we recommend a quick safety check at a bike shop before the first practice.\n\nMID‑RANGE (new entry‑level hardtail): about $800–$1,200 (average around $1,000)\nA new hardtail mountain bike (front suspension only) is the best value for most new riders and is easier to maintain than full suspension. Our local bike partners can help with sizing and selection:\n• Sierra Bike Supply\n• TREK Bike Store\n\nHIGH‑END (new full suspension): about $4,000–$7,000+\nFull suspension bikes can be great for more advanced riders, but they are not required to get started. The same local partners above can help families explore this option when appropriate.\n\nRegistered NICA Benefit:\nBoth of our bike partners participate in registered NICA discount programs, which can offer up to 25% off new bikes for licensed NICA student‑athletes. Discounts vary by brand, model, and availability, and require a valid NICA registration at the time of purchase.\n\nPrices vary by season and inventory, but these ranges should help with planning.",
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-blue-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <div className="container-narrow">
        <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">Frequently Asked Questions</h2>
        <div className="space-y-3 max-w-3xl">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-foreground hover:bg-muted/50 transition-colors"
                aria-expanded={openIdx === i}
              >
                <span>{faq.q}</span>
                <Icon
                  icon={faChevronDown}
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIdx === i && (
                <div className="px-6 pb-4 text-foreground/85 leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
