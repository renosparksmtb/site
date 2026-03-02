const ContactSection = () => (
  <section id="contact" className="section-padding bg-primary text-primary-foreground">
    <div className="container-narrow text-center">
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Get in Touch</h2>
      <p className="mb-2 text-lg text-primary-foreground/85">
        Team Director: <strong>Rochelle Wolcott</strong>
      </p>
      <p className="mb-8 text-primary-foreground/70">renosparksmtb@gmail.com</p>
      <a
        href="mailto:renosparksmtb@gmail.com?subject=Question%20about%20Reno-Sparks%20Composite%20MTB"
        className="inline-flex rounded-lg bg-secondary px-10 py-4 text-lg font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
      >
        Email Reno‑Sparks Composite MTB
      </a>
    </div>
  </section>
);

export default ContactSection;
