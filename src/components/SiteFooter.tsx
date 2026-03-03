const SiteFooter = () => (
  <footer className="border-t border-border bg-card px-4 py-8 text-center">
    <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
      This site provides team information only. Official rules, schedules, and registration are managed
      through NICA and the Nevada North Cycling League.
    </p>
    <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
      <a href="https://nevadanorthmtb.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
        Nevada North Interscholastic Cycling League
      </a>
      <a href="https://nationalmtb.org/agreement-to-participate-and-release-of-liability-form" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
        NICA Participation Waiver
      </a>
      <a href="https://pitzone.nationalmtb.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
        NICA Pit Zone Registration
      </a>
    </div>
    <p className="mt-3 text-xs text-muted-foreground/60">
      © {new Date().getFullYear()} Reno‑Sparks Composite MTB Team
    </p>
  </footer>
);

export default SiteFooter;
