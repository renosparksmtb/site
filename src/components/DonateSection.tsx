import Icon from "@/components/Icon";
import { faHeart, faUsers, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

const DONATE_URL = "https://www.zeffy.com/en-US/donation-form/helping-kids-find-their-trail";

const DonateSection = () => (
  <section id="donate" className="section-padding bg-card">
    <div className="container-narrow">
      <div className="rounded-2xl border-2 border-primary/30 bg-gold-light p-8 shadow-lg sm:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">Support the Team</h2>
            <p className="text-foreground/90 leading-relaxed">
              Help us make youth mountain biking more accessible in Reno‑Sparks. Your donation
              supports coaching, equipment, and opportunities for every rider.
            </p>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-3.5 text-base font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
            >
              <Icon icon={faHeart} />
              Donate Now
            </a>
          </div>
          <ul className="space-y-3">
            {[
              { icon: faHandsHelping, text: "Helps cover costs for student‑athletes" },
              { icon: faUsers, text: "Supports coaching, trails, and team events" },
              { icon: faHeart, text: "Expands access for more kids in our community" },
            ].map((item) => (
              <li
                key={item.text}
                className="flex items-start gap-3 rounded-xl border border-primary/20 bg-card p-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon icon={item.icon} />
                </span>
                <span className="text-foreground/90 font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default DonateSection;
