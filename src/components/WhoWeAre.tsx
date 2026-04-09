import { Link } from "react-router-dom";
import { faFaceSmile, faUsers, faScaleBalanced, faHandshake, faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import Icon from "@/components/Icon";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const CORE_VALUES: { icon: IconDefinition; label: string }[] = [
  { icon: faFaceSmile, label: "Fun" },
  { icon: faUsers, label: "Inclusivity" },
  { icon: faScaleBalanced, label: "Equity" },
  { icon: faHandshake, label: "Respect" },
  { icon: faHouseChimney, label: "Community" },
];

const WhoWeAre = () => (
  <section id="who" className="section-padding bg-background">
    <div className="container-narrow">
      <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">Who We Are</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            We are a co‑ed youth mountain biking team that competes through the{" "}
            <a href="https://nationalmtb.org/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-secondary"><strong>National Interscholastic Cycling Association (NICA)</strong></a>.
          </p>
          <p>
            We accept student‑athletes from <strong>5th through 12th grade</strong>, both female and male,
            and our culture is built on inclusivity, fun, and respect.
          </p>
          <p>
            We train from <strong>July through October</strong> and compete with other local high school
            teams in the <a href="https://nevadanorthmtb.org/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-secondary"><strong>Nevada North Cycling League</strong></a>.
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
            Learn more about our{" "}
            <Link to="/reno-youth-mountain-bike" className="underline font-semibold text-primary hover:text-secondary">
              Reno youth mountain bike team
            </Link>{" "}
            and what makes us different.
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
                <Icon icon={v.icon} className="text-3xl text-primary" />
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
