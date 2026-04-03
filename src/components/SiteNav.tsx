import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useHashScroll } from "@/hooks/use-hash-scroll";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/#who" },
  { label: "Practice in Reno & Sparks", href: "/#practice" },
  { label: "Youth MTB Racing", href: "/#races" },
  { label: "2026 Season", href: "/2026" },
  { label: "Join", href: "/#join" },
  { label: "Volunteering", href: "/#volunteering" },
  { label: "GRiT", href: "/#grit" },
  { label: "Gear", href: "/#gear" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const SiteNav = () => {
  const [active, setActive] = useState("/");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useHashScroll();

  // Intersection observer for homepage section highlighting
  useEffect(() => {
    if (location.pathname !== "/") {
      setActive(location.pathname);
      return;
    }

    // On homepage, default to "/"
    setActive(location.hash ? "/#" + location.hash.slice(1) : "/");

    const sectionIds = NAV_ITEMS
      .filter((n) => n.href.startsWith("/#"))
      .map((n) => n.href.slice(1)); // e.g. "#who"

    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean) as Element[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive("/#" + e.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname, location.hash]);

  const handleNav = (href: string) => {
    setOpen(false);

    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("/#")) {
      const hash = href.slice(1); // "#section"
      if (location.pathname === "/") {
        // Already on homepage, just scroll
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        // Update URL hash without full navigation
        window.history.replaceState(null, "", href);
        setActive(href);
      } else {
        // Navigate to homepage with hash
        navigate("/" + hash);
      }
      return;
    }

    // Regular route like /2026
    navigate(href);
  };

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/" && !active.startsWith("/#")) return true;
    return active === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <nav className="container-narrow flex items-center justify-between px-4 py-2">
        <button
          onClick={() => handleNav("/")}
          className="flex items-center gap-2"
          aria-label="Go to homepage"
        >
          <img src={logo} alt="Reno-Sparks MTB logo" className="h-10" />
        </button>
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
              <button
                onClick={() => handleNav(n.href)}
                className={`rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive(n.href)
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <ul className="container-narrow flex flex-col gap-1 px-4 py-3">
            {NAV_ITEMS.map((n) => (
              <li key={n.href}>
                <button
                  onClick={() => handleNav(n.href)}
                  className={`block w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(n.href)
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
