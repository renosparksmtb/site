const CORE_VALUES = [
  { icon: "🎉", label: "Fun" },
  { icon: "🤝", label: "Inclusivity" },
  { icon: "⚖️", label: "Equity" },
  { icon: "🙏", label: "Respect" },
  { icon: "🏘️", label: "Community" },
];

const WhoWeAre = () => (
  <section id="who" className="section-padding bg-background">
    <div className="container-narrow">
      <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">Who We Are</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            We are a co‑ed youth mountain biking team that competes through the{" "}
            <strong>National Interscholastic Cycling Association (NICA)</strong>.
          </p>
          <p>
            We accept student‑athletes from <strong>5th through 12th grade</strong>, both female and male,
            and our culture is built on inclusivity, fun, and respect.
          </p>
          <p>
            We train from <strong>July through October</strong> and compete with other local high school
            teams in the <strong>Nevada North Cycling League</strong>.
          </p>
           <p>
            The Reno‑Sparks Composite MTB Team is a <strong>composite team</strong>, meaning we serve
            students in the Reno‑Sparks area whose high school does not have a mountain bike team of its
            own. This includes 5th–8th grade students who are zoned for a high school that does not yet
            have a team.
          </p>
          <p>
            As of 2026, Washoe County schools without a NICA team include Hug, Wooster, Sparks, Reed,
            Spanish Springs, North Valleys, and Debbie Smith. If you attend, plan to attend, or are zoned
            for one of these schools, Reno‑Sparks Composite MTB is your team.
          </p>
          <p>
            Serving youth and families across Reno, Sparks, Washoe County, and the greater Northern Nevada
            region, our team is proud to be part of the growing mountain biking community in the area.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-primary">NICA Core Values</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {CORE_VALUES.map((v) => (
              <div
                key={v.label}
                className="flex flex-col items-center gap-2 rounded-xl bg-blue-light p-5 text-center shadow-sm"
              >
                <span className="text-3xl">{v.icon}</span>
                <span className="text-sm font-semibold text-primary">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
