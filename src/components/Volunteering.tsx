const WAYS = [
  { icon: "🚲", text: "Practice support & ride assistance" },
  { icon: "🍕", text: "Food and logistics coordination" },
  { icon: "🏁", text: "Race-day volunteering (parking, course marshals)" },
  { icon: "🎓", text: "Become a coach — no experience required, just enthusiasm!" },
];

const Volunteering = () => (
  <section id="volunteering" className="section-padding bg-background">
    <div className="container-narrow">
      <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">Parents &amp; Volunteers</h2>
      <p className="mb-8 max-w-2xl text-lg text-foreground/85">
        We <strong>love</strong> parent involvement and could not do this without our families. There are
        so many ways to help — and many parents end up becoming coaches!
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {WAYS.map((w) => (
          <div
            key={w.text}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <span className="text-2xl">{w.icon}</span>
            <span className="text-foreground/90">{w.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Volunteering;
