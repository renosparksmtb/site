const JoinSection = () => (
  <section id="join" className="section-padding bg-gold-light">
    <div className="container-narrow">
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">Try the Team – No Pressure</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              Thanks to NICA's <strong>3‑Time Agreement to Participate</strong>, new riders can attend up
              to <strong>three team events</strong> — practices, skills clinics, or rides — before
              officially registering in the NICA Pit Zone.
            </p>
            <p>
              This is a fun, pressure‑free way to meet coaches and athletes and see if the Reno‑Sparks
              Composite MTB Team is the right fit for your family.
            </p>
            <h3 className="pt-2 text-lg font-semibold text-primary">How to Get Started</h3>
            <ol className="list-decimal space-y-2 pl-5 text-foreground/85">
              <li>Fill out the online waiver form (link below)</li>
              <li>Email the team to let us know you'd like to attend a few practices</li>
              <li>Show up, ride, and have fun!</li>
            </ol>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <a
              href="mailto:renosparksmtb@gmail.com?subject=We%20want%20to%20try%20the%20team!"
              className="inline-flex rounded-lg bg-secondary px-8 py-3.5 text-base font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Try the Team
            </a>
            <a
              href="#"
              className="inline-flex rounded-lg border-2 border-primary px-8 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Fill Out Waiver Form
            </a>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">Registration &amp; Fees</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border-2 border-secondary bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold text-secondary">Early Bird</p>
            <p className="mt-1 text-3xl font-extrabold text-primary">$370</p>
            <p className="mt-2 text-sm text-muted-foreground">Register early and save</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold text-primary">Standard</p>
            <p className="mt-1 text-3xl font-extrabold text-primary">$385</p>
            <p className="mt-2 text-sm text-muted-foreground">June 1 – October 20</p>
          </div>
          <div className="flex flex-col justify-center rounded-xl border border-border bg-card p-6 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold text-primary">Included</p>
            <p className="mt-1 text-foreground/85">All Nevada North NICA race fees are <strong>included</strong> in registration.</p>
          </div>
        </div>
        <p className="mt-6 text-foreground/85">
          Registration is completed through the <strong>NICA Pit Zone</strong>. Riders must be fully
          registered to continue beyond the 3‑ride waiver.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://pitzone.nationalmtb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            Register in Pit Zone
          </a>
          <a
            href="mailto:renosparksmtb@gmail.com?subject=Registration%20Question"
            className="inline-flex rounded-lg border-2 border-primary px-8 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Email Team Director
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default JoinSection;
