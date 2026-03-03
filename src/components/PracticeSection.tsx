const CHECKLIST = [
  "Properly fitting helmet (mandatory)",
  "Mountain bike in good working order",
  "At least two water bottles or a hydration pack",
  "Snack for longer rides",
  "Sunscreen & sunglasses",
  "Closed-toe shoes (no sandals)",
  "Positive attitude!",
];

const PracticeSection = () => (
  <section id="practice" className="section-padding bg-blue-light">
    <div className="container-narrow">
      <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">Practice – When &amp; Where</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-primary">Preseason</h3>
            <p className="text-foreground/85">4–6 preseason practices held in May and June. Dates and times TBD — stay tuned!</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-primary">Regular Season</h3>
            <p className="mb-2 text-foreground/85">Season officially begins <strong>July 1</strong>.</p>
            <ul className="space-y-1 text-foreground/85">
              <li>📅 <strong>Tuesdays &amp; Thursdays:</strong> 5:30 pm – 7:30 pm</li>
              <li>📅 <strong>Some Saturdays:</strong> 9:00 am – 11:30 am</li>
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              Locations vary throughout the Reno / Sparks area. Practice locations may change based on trail conditions, weather, and daylight. Weekly updates are shared with registered families.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Weekday practices are usually held in either the Peavine area or the Galena area, with the goal of making practices accessible for families. Weekend practices may be held in the Carson City, Mt. Rose / Incline Village, and Truckee areas.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-primary">What to Expect at Practice</h3>
            <ul className="space-y-2 text-foreground/85">
              <li>✅ Riders are grouped by ability — no one gets left behind</li>
              <li>✅ Mix of skills drills and trail riding</li>
              <li>✅ Fun-first culture — we cheer, we encourage, we ride together</li>
              <li>✅ Experienced coaches and ride leaders at every session</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-primary">Practice Ready Checklist</h3>
            <ul className="space-y-1.5 text-foreground/85">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-secondary font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PracticeSection;
