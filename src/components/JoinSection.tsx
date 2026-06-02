import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import { faFileSignature, faEnvelope, faBiking } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const JoinSection = () => (
  <section id="join" className="section-padding bg-gold-light">
    <div className="container-narrow">
      <div className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">Try the Team – No Pressure</h2>
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
            <p>
              New riders must complete NICA's Agreement to Participate and Release of Liability before attending any team events.
            </p>
            <a
              href="https://nationalmtb.org/agreement-to-participate-and-release-of-liability-form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Complete NICA Participation Waiver
            </a>
            <h3 className="pt-2 text-lg font-semibold text-primary">How to Get Started</h3>
            <ol className="list-decimal space-y-2 pl-5 text-foreground/85">
              <li><strong>Complete the waiver</strong> — Fill out NICA's Agreement to Participate and Release of Liability form using the link above. This is required before attending any team events.</li>
              <li><strong>Email the team</strong> — Send us a quick note at <a href="mailto:renosparksmtb@gmail.com" className="font-semibold text-primary underline hover:text-primary/80">renosparksmtb@gmail.com</a> to let us know you'd like to come out for a ride.</li>
              <li><strong>Show up &amp; ride!</strong> — Join us at practice, meet the coaches and athletes, and see if the team is the right fit. No gear? No problem — we can help.</li>
            </ol>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfcGQ5MNu8trNOgcREDMRtdNDmN-yNkEZa1_ievRYlSNOeP8w/viewform?usp=sharing&ouid=118424864578261391050"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-secondary px-8 py-3.5 text-base font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Try the Team
            </a>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-xs space-y-4 rounded-2xl border-2 border-primary/20 bg-card p-6 shadow-lg">
              <h3 className="text-center text-lg font-bold text-primary">Your 3 Free Rides</h3>
              {([
                { step: 1, label: "Complete the waiver", icon: faFileSignature },
                { step: 2, label: "Email the team", icon: faEnvelope },
                { step: 3, label: "Show up & ride!", icon: faBiking },
              ] as { step: number; label: string; icon: IconDefinition }[]).map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-3 rounded-xl border border-secondary/30 bg-secondary/10 p-3 transition-transform hover:scale-[1.02]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-secondary-foreground">
                    {item.step}
                  </div>
                  <span className="text-sm font-medium text-foreground/90">{item.label}</span>
                  <span className="ml-auto text-secondary">
                    <Icon icon={item.icon} className="text-lg" />
                  </span>
                </div>
              ))}
              <p className="text-center text-xs text-muted-foreground">No commitment until you're ready!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12 rounded-xl border-2 border-secondary bg-secondary/10 p-6">
        <p className="text-foreground/90 leading-relaxed">
          <strong>Registration is now open for the 2026 season.</strong> To participate beyond the 3‑ride waiver, families must complete Pit Zone registration and be Practice Ready.
        </p>
        <Link
          to="/2026"
          className="mt-4 inline-flex rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          2026 Season &amp; Registration
        </Link>
      </div>

      <div>
        <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">Registration &amp; Fees</h2>
        <div class-placeholder className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-primary bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold text-primary">Season Registration</p>
            <p className="mt-1 text-3xl font-extrabold text-primary">$385</p>
            <p className="mt-2 text-sm text-muted-foreground">Full season fee for the Reno‑Sparks Composite MTB Team</p>
          </div>
          <div className="flex flex-col justify-center rounded-xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm font-semibold text-primary">Included</p>
            <p className="mt-1 text-foreground/85">All Nevada North NICA race fees are <strong>included</strong> in registration.</p>
          </div>
        </div>
        <p className="mt-6 text-foreground/85">
          Registration is completed through the <strong>NICA Pit Zone</strong>. Riders must be fully
          registered to continue beyond the 3‑ride waiver. To confirm whether your student‑athlete
          qualifies for the Reno‑Sparks Composite MTB Team, use the Nevada North Cycling League's
          official{" "}
          <a href="https://nevadanorthmtb.org/find-a-team/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline hover:text-primary/80">
            Find a Team
          </a>{" "}
          tool.
        </p>
        <ul className="mt-4 space-y-2 text-foreground/85">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-secondary font-bold">•</span>
            <span>If you need a mountain bike, you may be able to{" "}
              <a href="https://nevadanorthmtb.org/participation-fees/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline hover:text-primary/80">
                loan one for the season
              </a>{" "}
              from the Nevada North Interscholastic Cycling League (NNICL).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-secondary font-bold">•</span>
            <span>
              <a href="https://nevadanorthmtb.org/participation-fees/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline hover:text-primary/80">
                Scholarships
              </a>{" "}
              to help cover registration fees are available through NNICL.
            </span>
          </li>
        </ul>
        <div className="mt-4 rounded-xl border-2 border-secondary bg-secondary/10 p-5">
          <p className="font-bold text-foreground mb-2">Need a bike or help with fees?</p>
          <a
            href="https://nevadanorthmtb.org/participation-fees/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-secondary px-8 py-3.5 text-base font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
          >
            Scholarships &amp; Loaner Bikes (Nevada North)
          </a>
        </div>
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
