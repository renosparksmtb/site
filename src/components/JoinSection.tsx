const JoinSection = () => (
  <section id="join" className="section-padding bg-gold-light">
    <div className="container-narrow">
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">Try the Team — No Pressure</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              Not sure if this is a fit? That's okay.
            </p>
            <p>
              Many families want to see what the team is like before committing — and that's exactly what "Try the Team" is for.
            </p>

            <h3 className="pt-2 text-lg font-semibold text-primary">What "No Pressure" Actually Means</h3>
            <ul className="space-y-1.5 text-foreground/85">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">•</span>
                <span>No tryouts or cuts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">•</span>
                <span>No racing required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">•</span>
                <span>No long‑term commitment just to try a practice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">•</span>
                <span>No expectation to buy new gear right away</span>
              </li>
            </ul>

            <h3 className="pt-2 text-lg font-semibold text-primary">What a Try‑It Practice Looks Like</h3>
            <ul className="space-y-1.5 text-foreground/85">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">•</span>
                <span>Meet the coaches and other riders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">•</span>
                <span>Easy warm‑up and basic skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">•</span>
                <span>Riders grouped by comfort and ability — no one gets left behind</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-secondary font-bold">•</span>
                <span>Trail riding focused on fun, confidence, and encouragement</span>
              </li>
            </ul>

            <h3 className="pt-2 text-lg font-semibold text-primary">New to mountain biking?</h3>
            <p>
              You're in the right place. Many of our riders started with little or no trail experience.
            </p>
            <p>
              Most families try one or two practices before deciding — and many are surprised how quickly their kids feel at home.
            </p>
            <p className="font-semibold">
              Come ride with us and see if it's a fit.
            </p>
            <p>
              Questions first? Just reach out — we're happy to help.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfcGQ5MNu8trNOgcREDMRtdNDmN-yNkEZa1_ievRYlSNOeP8w/viewform?usp=sharing&ouid=118424864578261391050"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-secondary px-8 py-3.5 text-base font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Try the Team
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
        <ul className="mt-4 space-y-2 text-foreground/85">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-secondary font-bold">•</span>
            <span>If you need a mountain bike, you may be able to loan one for the season from the{" "}
              <a href="https://nevadanorthmtb.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline hover:text-primary/80">
                Nevada North Interscholastic Cycling League (NNICL)
              </a>.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-secondary font-bold">•</span>
            <span>Scholarships to help cover registration fees are available through{" "}
              <a href="https://nevadanorthmtb.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline hover:text-primary/80">
                NNICL
              </a>.
            </span>
          </li>
        </ul>
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
