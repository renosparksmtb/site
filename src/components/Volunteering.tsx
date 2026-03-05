import { faBicycle, faUtensils, faFlagCheckered, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import Icon from "@/components/Icon";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const WAYS: { icon: IconDefinition; text: string }[] = [
  { icon: faBicycle, text: "Practice support & ride assistance" },
  { icon: faUtensils, text: "Food and logistics coordination" },
  { icon: faFlagCheckered, text: "Race-day volunteering (parking, course marshals)" },
  { icon: faChalkboardUser, text: "Become a coach — no experience required, just enthusiasm!" },
];

const Volunteering = () => (
  <section id="volunteering" className="section-padding bg-background">
    <div className="container-narrow">
      <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">Parents &amp; Volunteers</h2>
      <p className="mb-8 max-w-2xl text-lg text-foreground/85">
        We <strong>love</strong> parent involvement and could not do this without our families. There are
        so many ways to help — and many parents end up becoming coaches!
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {WAYS.map((w) => (
          <div
            key={w.text}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
          >
            <Icon icon={w.icon} className="text-2xl text-primary" />
            <span className="text-foreground/90">{w.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Volunteering;
