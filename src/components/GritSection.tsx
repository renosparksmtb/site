const GritSection = () => (
  <section id="grit" className="section-padding bg-navy-light">
    <div className="container-narrow">
      <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
        GRiT – Girls Riding Together
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            Our GRiT program provides a supportive and empowering environment for female student‑athletes.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-accent">★</span>
              <span>Girls‑only rides in a supportive setting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent">★</span>
              <span>GRiT Camp for immersive skill-building</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent">★</span>
              <span>Confidence‑focused events and mentorship</span>
            </li>
          </ul>
          <p className="rounded-lg bg-accent/10 p-4 text-sm font-medium text-foreground">
            GRiT events are open to girls <strong>and</strong> moms — come ride with us!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex h-48 w-48 items-center justify-center rounded-full bg-secondary/10">
            <span className="text-7xl">💪</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GritSection;
