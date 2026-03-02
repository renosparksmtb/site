import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Who We Are", href: "#who" },
  { label: "Practice", href: "#practice" },
  { label: "Season & Races", href: "#races" },
  { label: "Join", href: "#join" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "GRiT", href: "#grit" },
  { label: "Gear", href: "#gear" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SiteNav = () => {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.querySelector(n.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <nav className="container-narrow flex items-center justify-between px-4 py-2">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Reno-Sparks MTB logo" className="h-10" />
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
        <ul className="hidden gap-1 lg:flex">
          {NAV_ITEMS.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className={`rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
                  active === n.href
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <ul className="container-narrow flex flex-col gap-1 px-4 py-3">
            {NAV_ITEMS.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active === n.href
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
