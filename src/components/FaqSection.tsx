import { useState } from "react";

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
                <svg
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
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
