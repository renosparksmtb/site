import gritLogo from "@/assets/grit-logo.png";

const GritSection = () => (
  <section id="grit" className="section-padding bg-blue-light">
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
              <span className="text-secondary font-bold">★</span>
              <span>Girls‑only rides in a supportive setting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold">★</span>
              <span>GRiT Camp for immersive skill-building</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold">★</span>
              <span>Confidence‑focused events and mentorship</span>
            </li>
          </ul>
          <p className="rounded-lg bg-secondary/15 p-4 text-sm font-medium text-foreground">
            GRiT events are open to girls <strong>and</strong> moms — come ride with us!
          </p>
          <a href="https://nevadanorthmtb.org/grit-program/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary/90 transition-colors">
            Nevada North GRiT Program
          </a>
        </div>
        <div className="flex items-center justify-center">
          <img src={gritLogo} alt="GRiT – Girls Riding Together logo" className="h-48 w-48 object-contain" />
        </div>
      </div>
    </div>
  </section>
);

export default GritSection;
