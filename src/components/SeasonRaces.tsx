import { faMountain, faTree, faLandmarkDome, faMountainSun, faHouseFlag, faCampground, faFlag, faBicycle, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import Icon from "@/components/Icon";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const VENUES: { name: string; icon: IconDefinition; url: string }[] = [
  { name: "Kirkwood", icon: faMountain, url: "https://www.kirkwood.com/" },
  { name: "Northstar", icon: faTree, url: "https://www.northstarcalifornia.com/" },
  { name: "Capital City (Carson City)", icon: faLandmarkDome, url: "https://visitcarsoncity.com/events/capital-city-crusher/" },
  { name: "Mammoth Mountain", icon: faMountainSun, url: "https://www.mammothmountain.com/" },
  { name: "Tahoe Donner", icon: faHouseFlag, url: "https://www.tahoedonner.com/" },
];

const SeasonRaces = () => (
  <section id="races" className="section-padding bg-background">
    <div className="container-narrow">
      <h2 className="mb-8 text-3xl font-bold text-primary sm:text-4xl">Race Season – What It's All About</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            The Nevada North Cycling League hosts <strong>five optional race weekends</strong> between
            August and October. Courses are designed by age and ability, and racing is encouraged but{" "}
            <strong>never required</strong>.
          </p>
          <p>
            Many riders attend races just for the fun, community, and team spirit — and that's totally okay!
          </p>

          <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-secondary">What a Race Weekend Is Like</h3>
            <ul className="space-y-2 text-foreground/85">
              <li className="flex items-center gap-2"><Icon icon={faCampground} className="w-4 text-primary" /> Team camping and bonding the night before</li>
              <li className="flex items-center gap-2"><Icon icon={faFlag} className="w-4 text-primary" /> Pit Zone — our team home base with food, shade, and cheering</li>
              <li className="flex items-center gap-2"><Icon icon={faBicycle} className="w-4 text-primary" /> Course preview rides with coaches</li>
              <li className="flex items-center gap-2"><Icon icon={faBullhorn} className="w-4 text-primary" /> Incredible energy from families and fellow teams</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-secondary">First Race? What to Expect</h3>
            <p className="text-foreground/85">
              Our coaches and veteran riders will walk you through everything — course preview, start
              procedure, fueling, and recovery. You'll never feel alone. The Pit Zone team area is a
              supportive, encouraging environment where everyone celebrates every finish.
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-secondary">2026 Fall Race Schedule</h3>
          <div className="space-y-3">
            {([
              { date: "Aug 22–23", name: "Kirkwood Krank", location: "Kirkwood, CA" },
              { date: "Sept 12–13", name: "Northstar Navigator", location: "Truckee, CA" },
              { date: "Sept 19–20", name: "Capital City Crusher", location: "Carson City, NV" },
              { date: "Oct 3–4", name: "High Sierra Showdown", location: "Mammoth Lakes, CA" },
              { date: "Oct 17–18", name: "Tahoe Donner Dash", location: "Truckee, CA" },
            ]).map((r) => (
              <div
                key={r.name}
                className="flex flex-col gap-1 rounded-xl border border-border bg-card px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:gap-4"
              >
                <span className="shrink-0 text-sm font-bold text-secondary sm:w-24">{r.date}</span>
                <span className="font-semibold text-foreground">{r.name}</span>
                <span className="text-sm text-muted-foreground sm:ml-auto">{r.location}</span>
              </div>
            ))}
          </div>
          <a
            href="https://nevadanorthmtb.org/fall-race-schedule/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            aria-label="View full Nevada North League race schedule"
          >
            View Full League Race Details
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SeasonRaces;
