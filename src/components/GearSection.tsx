import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

const GEAR = [
  "Mountain bike in good working condition",
  "Properly fitting helmet",
  "Gloves",
  "Glasses / eye protection",
  "Appropriate riding shoes (closed-toe)",
  "At least one team jersey",
  "Front facing light (1100 lumens min)",
  "Bike tube / repair kit",
];

const GearSection = () => (
  <section id="gear" className="section-padding bg-background">
    <div className="container-narrow">
      <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">What Riders Need</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <ul className="space-y-3">
            {GEAR.map((g) => (
              <li
                key={g}
                className="flex items-start gap-3 rounded-lg border border-border bg-card px-5 py-3 shadow-sm"
              >
                <span className="mt-0.5 text-accent font-bold">✓</span>
                <span className="text-foreground/90">{g}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Race kits (bibs, shorts) are optional and ordered separately. Jersey ordering info is sent
            after registration.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-secondary">Local Bike Shop Partners</h3>
          <p className="mb-4 text-sm text-muted-foreground">Both shops offer NICA team discounts!</p>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-foreground">
                <a href="https://www.sierrabikesupply.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary inline-flex items-center gap-1.5">
                  Sierra Bike Supply <FontAwesomeIcon icon={faStore} className="h-3.5 w-3.5" />
                </a>
              </p>
              <p className="text-sm text-muted-foreground">Contact: Lane Swall</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                <a href="https://www.trekbikes.com/us/en_US/retail/reno/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary inline-flex items-center gap-1.5">
                  Trek Bike Store <FontAwesomeIcon icon={faStore} className="h-3.5 w-3.5" />
                </a>
              </p>
              <p className="text-sm text-muted-foreground">Contact: Jeremy Call</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GearSection;
