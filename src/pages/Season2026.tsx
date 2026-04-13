import { Link } from "react-router-dom";
import seasonHero from "@/assets/season-hero.jpg";
import { Helmet } from "react-helmet-async";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";

import Icon from "@/components/Icon";
import {
  faCalendarCheck,
  faDollarSign,
  faShieldAlt,
  faHandHoldingDollar,
  faBicycle,
  faCircleCheck,
  faTriangleExclamation,
  faArrowLeft,
  faFlag,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const KEY_DATES = [
  { label: "Registration Open", value: "Now", icon: faCalendarCheck, highlight: true },
  { label: "Early Bird Deadline", value: "June 1, 2026 — $370", icon: faDollarSign, highlight: false },
  { label: "Price After June 1", value: "$385", icon: faDollarSign, highlight: false },
  { label: "Official Practices Begin", value: "July 1, 2026", icon: faCalendarDays, highlight: false },
];

const CHECKLIST = [
  "Completed registration info in Pit Zone",
  "Paid NICA + league fee",
  "Signed electronic waivers",
];

const COVERAGE = [
  "NICA national registration",
  "NICA tech fee",
  "Nevada North league registration",
  "Insurance coverage for team practices and league events",
  "Race weekends + GRiT events + Teen Trail Corps + additional league programming",
];

const RACE_SCHEDULE = [
  { date: "Aug 22–23", name: "Kirkwood Krank", location: "Kirkwood, CA" },
  { date: "Sept 12–13", name: "Northstar Navigator", location: "Truckee, CA" },
  { date: "Sept 19–20", name: "Capital City Crusher", location: "Carson City, NV" },
  { date: "Oct 3–4", name: "High Sierra Showdown", location: "Mammoth Lakes, CA" },
  { date: "Oct 17–18", name: "Tahoe Donner Dash", location: "Truckee, CA" },
  { date: "Nov 14–15", name: "NICA Western Regionals", location: "St. George, UT" },
];

const Season2026 = () => (
  <>
    <Helmet>
      <title>2026 Season & Registration | Reno-Sparks NICA MTB Team</title>
      <meta
        name="description"
        content="2026 Reno-Sparks Composite MTB season info: Pit Zone registration, key dates, Practice Ready checklist, race schedule, and Nevada North League details for youth mountain biking in Reno."
      />
      <link rel="canonical" href="https://renosparksmtb.org/2026" />
    </Helmet>

    <AnnouncementBanner />
    <SiteNav />

    <main className="pt-16">
      {/* Back link */}
      <div className="container-narrow px-4 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <Icon icon={faArrowLeft} className="h-3 w-3" /> Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <img
          src={seasonHero}
          alt="NICA youth mountain bikers racing through pine forest trail"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container-narrow text-center section-padding">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl">
            2026 Season &amp; Registration
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/85">
            Everything you need to know about the 2026 Nevada North NICA season — registration, key dates, costs, and the race schedule.
          </p>
        </div>
      </section>

      {/* A) Registration is Open */}
      <ScrollReveal>
        <section className="section-padding bg-gold-light">
          <div className="container-narrow">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">Registration is Open</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Families should look for a <strong>Pit Zone invitation</strong> from the Team Director. If you haven't received one, reach out via email and we'll get you set up right away.
              </p>
              <p>
                All registration is completed through NICA's <strong>Pit Zone</strong> platform — this is where you'll manage waivers, payments, and rider information.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://pitzone.nationalmtb.org/users/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
                aria-label="Log into NICA Pit Zone registration portal"
              >
                Pit Zone Login
              </a>
              <a
                href="mailto:renosparksmtb@gmail.com?subject=Registration%20Question"
                className="inline-flex rounded-lg border-2 border-primary px-8 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Email the Reno-Sparks MTB Team Director"
              >
                Email Team Director
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* B) Key Dates */}
      <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">Key Dates</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {KEY_DATES.map((d) => (
                <div
                  key={d.label}
                  className={`rounded-xl border-2 p-6 shadow-sm ${
                    d.highlight
                      ? "border-secondary bg-secondary/10"
                      : "border-border bg-card"
                  }`}
                >
                  <Icon icon={d.icon} className="mb-2 text-2xl text-primary" />
                  <p className="text-sm font-semibold text-muted-foreground">{d.label}</p>
                  <p className="mt-1 text-xl font-extrabold text-primary">{d.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Teams may charge separate team fees. Contact the Team Director for details specific to Reno‑Sparks Composite MTB.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* C) Practice Ready Checklist */}
      <ScrollReveal>
        <section className="section-padding bg-blue-light">
          <div className="container-narrow">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
              Get "Practice Ready"
            </h2>
            <p className="mb-6 text-foreground/90 leading-relaxed">
              Before your rider can join official team practices, the following must be completed in Pit Zone:
            </p>
            <div className="max-w-lg space-y-3">
              {CHECKLIST.map((item) => (
                <label
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
                >
                  <span className="mt-0.5 text-secondary">
                    <Icon icon={faCircleCheck} className="text-lg" />
                  </span>
                  <span className="text-foreground/90 font-medium">{item}</span>
                </label>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-secondary/30 bg-secondary/10 p-5">
              <p className="text-sm text-foreground/85">
                <strong>How to confirm:</strong> In Pit Zone, if there are no waiver or payment alerts remaining and your rider's profile shows{" "}
                <span className="rounded bg-secondary/20 px-1.5 py-0.5 font-bold text-primary">
                  Practice Ready: YES
                </span>{" "}
                under Rider Information, you're all set!
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* D) What Your Registration Covers */}
      <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <h2 className="mb-6 text-3xl font-bold text-primary sm:text-4xl">
              What Your Registration Covers
            </h2>
            <ul className="max-w-2xl space-y-3">
              {COVERAGE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/90">
                  <Icon icon={faShieldAlt} className="mt-1 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* E) Financial Assistance & Loaner Bikes */}
      <ScrollReveal>
        <section className="section-padding bg-gold-light">
          <div className="container-narrow">
            <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">
              Financial Assistance &amp; Loaner Bikes
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border-2 border-secondary bg-card p-6 shadow-sm">
                <Icon icon={faHandHoldingDollar} className="mb-3 text-3xl text-secondary" />
                <h3 className="mb-2 text-lg font-bold text-primary">Financial Assistance</h3>
                <p className="text-foreground/85 leading-relaxed">
                  Scholarships and financial assistance are available to help cover registration fees. We encourage families to apply as early as possible — funding is limited and awarded on a first‑come basis.
                </p>
                <a
                  href="https://nevadanorthmtb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-lg bg-secondary px-6 py-2.5 text-sm font-bold text-secondary-foreground transition-transform hover:scale-105"
                >
                  Nevada North Resources
                </a>
              </div>
              <div className="rounded-xl border-2 border-primary/20 bg-card p-6 shadow-sm">
                <Icon icon={faBicycle} className="mb-3 text-3xl text-primary" />
                <h3 className="mb-2 text-lg font-bold text-primary">Loaner Bike Program</h3>
                <p className="text-foreground/85 leading-relaxed">
                  Need a mountain bike? The Nevada North Interscholastic Cycling League offers a loaner bike program for the season. Request early — availability is limited.
                </p>
                <a
                  href="https://nevadanorthmtb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-lg border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 2026 Race Schedule */}
      <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">
              2026 Nevada North Fall Race Schedule
            </h2>
            <div className="space-y-3">
              {RACE_SCHEDULE.map((r) => (
                <div
                  key={r.name}
                  className="flex flex-col gap-1 rounded-xl border border-border bg-card px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:gap-4"
                >
                  <span className="shrink-0 text-sm font-bold text-secondary sm:w-28">
                    {r.date}
                  </span>
                  <span className="font-semibold text-foreground">{r.name}</span>
                  <span className="text-sm text-muted-foreground sm:ml-auto">{r.location}</span>
                </div>
              ))}
            </div>
            <a
              href="https://nevadanorthmtb.org/fall-race-schedule/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              aria-label="View full Nevada North League race schedule"
            >
              View Full League Race Details
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* Paydirt */}
      <ScrollReveal>
        <section className="section-padding bg-gold-light">
          <div className="container-narrow">
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
              Off-Season Bonus Event: Stetina's Paydirt
            </h2>
            <p className="mb-2 text-lg font-semibold text-muted-foreground">
              May 16, 2026 — Carson City, NV
            </p>
            <ul className="mt-4 max-w-2xl space-y-2 text-foreground/90">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-secondary">•</span>
                Juniors (including NICA student‑athletes) race FREE in a dedicated junior category
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-secondary">•</span>
                Junior podiums, prizes, and a Nevada North lounge on-site
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 font-bold text-secondary">•</span>
                Volunteer encouragement — aid station shifts help support the league
              </li>
            </ul>
            <div className="mt-6 rounded-xl border-2 border-destructive/40 bg-destructive/5 p-5">
              <p className="flex items-start gap-2 text-sm font-semibold text-destructive">
                <Icon icon={faTriangleExclamation} className="mt-0.5 shrink-0" />
                <span>
                  This is <strong>NOT</strong> a NICA event. Participants are not covered under NICA insurance and ride as independent individuals.
                </span>
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://www.stetinaspaydirt.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
                aria-label="Stetina's Paydirt event information and registration"
              >
                Paydirt Event Info / Registration
              </a>
              <a
                href="mailto:volunteer@bikemonkey.net?subject=Paydirt%20Volunteer"
                className="inline-flex rounded-lg border-2 border-primary px-8 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Email to volunteer at Paydirt event"
              >
                Volunteer
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Western Regionals */}
      <ScrollReveal>
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <Icon icon={faFlag} className="mb-4 text-4xl text-secondary" />
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Western Regionals — Save the Date
            </h2>
            <p className="mx-auto mb-2 max-w-2xl text-lg text-primary-foreground/85">
              <strong>November 14–15, 2026</strong> — the first-ever NICA Western Regionals in Vernal, UT
            </p>
            <p className="mx-auto max-w-2xl text-sm text-primary-foreground/70">
              High school riders (9th–12th grade) are eligible. Middle school student‑athletes racing in the HS category must wait until 9th grade to qualify.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex rounded-lg bg-secondary px-8 py-3.5 text-base font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
              aria-label="Learn more about Western Regionals or subscribe for updates"
            >
              Learn More / Subscribe for Updates
            </a>
          </div>
        </section>
      </ScrollReveal>
    </main>

    <SiteFooter />
    <BackToTop />
  </>
);

export default Season2026;
