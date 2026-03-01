const SiteFooter = () => (
  <footer className="border-t border-border bg-card px-4 py-8 text-center">
    <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
      This site provides team information only. Official rules, schedules, and registration are managed
      through NICA and the Nevada North Cycling League.
    </p>
    <p className="mt-3 text-xs text-muted-foreground/60">
      © {new Date().getFullYear()} Reno‑Sparks Composite MTB Team
    </p>
  </footer>
);

export default SiteFooter;
