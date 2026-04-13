import { Link } from "react-router-dom";
import seoHero from "@/assets/seo-hero.jpg";
import { Helmet } from "react-helmet-async";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import Icon from "@/components/Icon";
import {
  faArrowLeft,
  faCheck,
  faXmark,
  faShieldAlt,
  faBicycle,
  faUsers,
  faHeart,
  faMedal,
  faMountain,
  faHandsHelping,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const WHAT_WE_ARE = [
  "A co‑ed youth mountain bike team for grades 5–12",
  "Beginner‑friendly, with no prior MTB experience required",
  "Focused on fun, skills, confidence, and community",
  "A NICA‑affiliated team with trained coaches",
  "Based in Reno & Sparks, serving Washoe County families",
];

const WHAT_WERE_NOT = [
  "Not an elite‑only or invite‑only race program",
  "Not a drop‑off day camp or short‑term clinic",
  "Not a program where racing is required",
  "Not a place where kids get left behind",
  "Not a program that requires expensive bikes to get started",
];

const PAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: "Reno-Sparks Composite MTB Team",
  sport: "Mountain Biking",
  description:
    "A beginner-friendly youth mountain bike team in Reno & Sparks for grades 5–12. No experience required. Racing optional. Try the team before committing.",
  url: "https://renosparksmtb.org/reno-youth-mountain-bike",
  areaServed: {
    "@type": "Place",
    name: "Reno-Sparks, Washoe County, Northern Nevada",
  },
  memberOf: {
    "@type": "SportsOrganization",
    name: "National Interscholastic Cycling Association (NICA)",
    url: "https://nationalmtb.org/",
  },
};

const RenoYouthMountainBike = () => (
  <>
    <Helmet>
      <title>Reno Youth Mountain Bike Team | Grades 5–12 | Reno &amp; Sparks</title>
      <meta
        name="description"
        content="A beginner‑friendly youth mountain bike team in Reno & Sparks for grades 5–12. No experience required. Racing optional. Try the team before committing."
      />
      <link rel="canonical" href="https://renosparksmtb.org/reno-youth-mountain-bike" />
      <meta name="keywords" content="reno youth mountain bike, kids mountain biking reno, youth mtb reno nevada, middle school mountain bike reno, NICA reno sparks" />
    </Helmet>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_JSONLD) }}
    />

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
          src={seoHero}
          alt="Youth mountain bikers riding trails near Reno with mountain backdrop"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container-narrow text-center section-padding">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Reno Youth Mountain Bike Team (Grades&nbsp;5–12)
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/85 leading-relaxed">
            The Reno‑Sparks Composite MTB Team is a beginner‑friendly youth mountain bike team
            serving kids and teens in Reno and Sparks, Nevada. We welcome riders in grades 5–12,
            including those who are brand new to mountain biking.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/85 leading-relaxed">
            Our focus is on fun, skill development, confidence, and community. Racing through the{" "}
            <a
              href="https://nationalmtb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold hover:text-secondary"
            >
              National Interscholastic Cycling Association (NICA)
            </a>{" "}
            is available, but never required.
          </p>
        </div>
      </section>

      {/* Youth Mountain Biking in Reno & Sparks */}
      <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <h2 className="mb-6 text-3xl font-bold text-primary sm:text-4xl">
              Youth Mountain Biking in Reno &amp; Sparks
            </h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Reno and Sparks are surrounded by some of the best mountain biking terrain in the
                country — and our team gives kids in grades 5 through 12 a chance to experience it
                with trained coaches, supportive teammates, and a culture that puts fun first.
              </p>
              <p>
                We train from July through October and ride trails across the Reno‑Sparks area,
                building skills, endurance, and confidence along the way. Whether your child is
                picking up a mountain bike for the first time or already loves riding, there's a
                place for them on our team.
              </p>
              <p>
                Our team competes in the{" "}
                <a
                  href="https://nevadanorthmtb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-primary hover:text-secondary"
                >
                  Nevada North Cycling League
                </a>
                , but racing is always optional. Many riders join simply for the{" "}
                <Link to="/#practice" className="underline font-semibold text-primary hover:text-secondary">
                  practices
                </Link>
                , friendships, and outdoor adventure.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>




      {/* Beginners Welcome */}
      <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="flex items-start gap-4 mb-6">
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Icon icon={faHeart} className="text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                  Beginners Welcome – No Experience Required
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Many of our riders have never been on a mountain bike before joining the team — and
                that's perfectly fine. Our NICA‑licensed coaches are trained to work with every
                ability level, from first‑time riders to experienced racers.
              </p>
              <p>
                Practices are structured so that beginners build skills at their own pace while
                still feeling like part of the group. By the end of the season, most new riders are
                amazed at how far they've come.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* No One Gets Left Behind */}
      <ScrollReveal>
        <section className="section-padding bg-gold-light">
          <div className="container-narrow">
            <div className="flex items-start gap-4 mb-6">
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Icon icon={faHandsHelping} className="text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                  No One Gets Left Behind
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                At every practice, riders are grouped by ability so everyone rides at a pace that
                challenges them without overwhelming them. Beginners ride with beginners. More
                experienced riders push each other to grow.
              </p>
              <p>
                Every group has experienced coaches and ride leaders who know the trails, the
                riders, and how to keep things fun. Our culture is encouraging, supportive, and
                built around the idea that every kid belongs on the trail.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Is Mountain Biking Safe for Kids? */}
      <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="flex items-start gap-4 mb-6">
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon icon={faShieldAlt} className="text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                  Is Mountain Biking Safe for Kids?
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Safety is a top priority. All NICA coaches are background‑checked and complete
                training in first aid, risk management, and youth development. Riders are grouped
                by ability, helmets are mandatory, and every practice follows NICA's safety
                guidelines.
              </p>
              <p>
                NICA also provides insurance coverage for all registered student‑athletes during
                official team practices and league events. Mountain biking teaches kids to assess
                terrain, manage risk, and make smart decisions — skills that carry well beyond the
                trail.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Racing Is Optional */}
      <ScrollReveal>
        <section className="section-padding bg-blue-light">
          <div className="container-narrow">
            <div className="flex items-start gap-4 mb-6">
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Icon icon={faMedal} className="text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                  Racing Is Optional (Fun Comes First)
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                While our team competes in Nevada North NICA races, participation in race events is
                never required. Many riders join for the training, the friendships, and the chance
                to explore trails with a supportive crew. If your child decides they want to race,
                great — we'll be there cheering them on. If not, they'll still get the full team
                experience.
              </p>
              <p>
                Check out the{" "}
                <Link to="/#races" className="underline font-semibold text-primary hover:text-secondary">
                  race schedule
                </Link>{" "}
                to see what NICA events look like.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Youth MTB Team vs Camps, Clinics, and Lessons */}
      <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="flex items-start gap-4 mb-6">
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon icon={faCalendarAlt} className="text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                  Youth MTB Team vs Camps, Clinics, and Lessons
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                If you're searching for youth mountain biking options in Reno, you'll find teams,
                camps, clinics, and private coaching. Here's how they differ:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Youth MTB teams</strong> (like ours) meet regularly over a full season —
                  typically July through October. Riders build skills, fitness, and friendships over
                  time, with the option to race.
                </li>
                <li>
                  <strong>Camps and clinics</strong> are short‑term programs, usually lasting a few
                  days to a week. They're great for focused skill instruction and introduction to
                  the sport.
                </li>
                <li>
                  <strong>Private coaching</strong> is one‑on‑one instruction focused on specific
                  skills or race preparation.
                </li>
              </ul>
              <p>
                Many families use camps or clinics alongside being on a team — they complement each
                other well. A team provides the ongoing community, structure, and season‑long
                progression that short‑term programs can't offer.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Is This the Right Fit? */}
      <ScrollReveal>
        <section className="section-padding bg-gold-light">
          <div className="container-narrow">
            <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">
              Is This the Right Fit for My Child?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* What We Are */}
              <div className="rounded-xl border-2 border-secondary bg-card p-6 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
                  <Icon icon={faCheck} className="text-secondary" />
                  What We Are
                </h3>
                <ul className="space-y-3">
                  {WHAT_WE_ARE.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground/90">
                      <Icon icon={faCheck} className="mt-1 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We're Not */}
              <div className="rounded-xl border-2 border-muted bg-card p-6 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
                  <Icon icon={faXmark} className="text-muted-foreground" />
                  What We're Not
                </h3>
                <ul className="space-y-3">
                  {WHAT_WERE_NOT.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground/90">
                      <Icon icon={faXmark} className="mt-1 shrink-0 text-muted-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-secondary/30 bg-secondary/10 p-5">
              <p className="text-foreground/90 leading-relaxed">
                <strong>If you're unsure</strong>, your child can attend up to three practices
                before committing to see if it's a good fit. Learn more about our{" "}
                <Link to="/#join" className="underline font-semibold text-primary hover:text-secondary">
                  3‑practice trial
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Bikes, Gear, and Cost */}
      <ScrollReveal>
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="flex items-start gap-4 mb-6">
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon icon={faBicycle} className="text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                  Bikes, Gear, and Cost Expectations
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                You don't need an expensive bike to get started. Many families begin with a used
                hardtail in the $300–$500 range, and our local bike shop partners offer NICA
                discounts of up to 25% on new bikes.
              </p>
              <p>
                Essential gear includes a properly fitting helmet, gloves, eye protection, and
                closed‑toe shoes. Check out our full{" "}
                <Link to="/#gear" className="underline font-semibold text-primary hover:text-secondary">
                  gear checklist
                </Link>{" "}
                for everything riders need.
              </p>
              <p>
                A limited{" "}
                <a href="https://nevadanorthmtb.org/participation-fees/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-primary hover:text-secondary">
                  loaner bike program
                </a>{" "}
                may be available for registered NICA student‑athletes who are just getting started.{" "}
                <a href="https://nevadanorthmtb.org/participation-fees/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-primary hover:text-secondary">
                  Scholarships
                </a>{" "}
                are also available to help cover registration fees. Visit the{" "}
                <Link to="/#faq" className="underline font-semibold text-primary hover:text-secondary">
                  FAQ
                </Link>{" "}
                for detailed cost breakdowns and options.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Who Can Join */}
      <ScrollReveal>
        <section className="section-padding bg-blue-light">
          <div className="container-narrow">
            <h2 className="mb-6 text-3xl font-bold text-primary sm:text-4xl">
              Who Can Join the Reno‑Sparks Composite MTB Team
            </h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Any student in grades 5 through 12 in the Reno‑Sparks area can join — all genders
                welcome, all experience levels.
              </p>
              <p>
                We are a <strong>composite team</strong>, which means we serve students in the
                Reno‑Sparks area whose school does not currently have its own NICA mountain bike
                team. This allows more kids to participate in youth mountain biking, regardless of
                school.
              </p>
              <p>
                To confirm whether your student‑athlete qualifies for the Reno‑Sparks Composite MTB
                Team, families should use the Nevada North Cycling League's official "Find a Team"
                tool.
              </p>
              <a
                href="https://nevadanorthmtb.org/find-a-team/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                Find My Team
              </a>
              <p>
                Learn more about{" "}
                <Link to="/#who" className="underline font-semibold text-primary hover:text-secondary">
                  who we are
                </Link>{" "}
                and the NICA core values that guide our team, or check the{" "}
                <Link to="/#faq" className="underline font-semibold text-primary hover:text-secondary">
                  FAQ
                </Link>{" "}
                for common questions about eligibility and getting started.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding bg-blue-light">
          <div className="container-narrow">
            <div className="flex items-start gap-4 mb-6">
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Icon icon={faMountain} className="text-2xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary sm:text-4xl">
                  Try the Team — No Commitment Required
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Not sure if your child is ready to commit? No problem. Through NICA's{" "}
                <strong>3‑Time Agreement to Participate</strong>, new riders can attend up to three
                team events — practices, skills clinics, or group rides — before officially
                registering.
              </p>
              <p>
                It's a no‑pressure, beginner‑friendly way to see if mountain biking is right for
                your family. Families can evaluate fit before making any financial commitment.
              </p>
              <p>
                All you need to do is complete a{" "}
                <a
                  href="https://nationalmtb.org/agreement-to-participate-and-release-of-liability-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-primary hover:text-secondary"
                >
                  NICA participation waiver
                </a>
                , email our Team Director to let us know you're coming, and show up ready to ride.
                Learn more about{" "}
                <Link to="/#join" className="underline font-semibold text-primary hover:text-secondary">
                  how to join
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <Icon icon={faUsers} className="mb-4 text-4xl text-secondary" />
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Try the Team – Email the Team Director
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/85">
              Ready to get your child on the trails? Have questions about the team, gear, or what
              to expect? Reach out — we'd love to hear from you.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:renosparksmtb@gmail.com?subject=Interested%20in%20the%20Reno-Sparks%20Youth%20MTB%20Team"
                className="inline-flex rounded-lg bg-secondary px-10 py-4 text-lg font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
              >
                Email the Team Director
              </a>
              <Link
                to="/#join"
                className="inline-flex rounded-lg border-2 border-primary-foreground/40 px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                How to Join
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>

    <SiteFooter />
    <BackToTop />
  </>
);

export default RenoYouthMountainBike;
