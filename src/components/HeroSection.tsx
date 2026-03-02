import heroImg from "@/assets/hero-mtb.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => (
  <section
    id="home"
    className="relative flex min-h-[85vh] items-center justify-center overflow-hidden"
  >
    <img
      src={heroImg}
      alt="Youth mountain bikers riding through pine forest trail at golden hour"
      className="absolute inset-0 h-full w-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-primary/75" />
    <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
      <img src={logo} alt="Reno-Sparks MTB logo" className="mx-auto mb-6 h-28 sm:h-36 animate-fade-in-up" />
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl animate-fade-in-up">
        Join the Reno‑Sparks Composite MTB Team
      </h1>
      <p className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/85 sm:text-xl">
        A co‑ed youth mountain bike team for grades 5–12 in the Reno‑Sparks area
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href="#join"
          className="inline-flex rounded-lg bg-secondary px-8 py-3.5 text-base font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
        >
          Try the Team
        </a>
        <a
          href="mailto:renosparksmtb@gmail.com?subject=Question%20about%20Reno-Sparks%20MTB"
          className="inline-flex rounded-lg border-2 border-primary-foreground/40 px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
        >
          Email the Team Director
        </a>
      </div>
    </div>
    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 60L1440 60L1440 20C1200 50 960 0 720 30C480 60 240 10 0 40L0 60Z" fill="hsl(40 20% 97%)" />
    </svg>
  </section>
);

export default HeroSection;
