import { Button } from "@/components/ui/button";

const TeamStore = () => (
  <section id="store" className="bg-card px-4 py-16 text-center">
    <div className="container-narrow mx-auto max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Team Store
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Support Reno Sparks MTB and rep the team on and off the trail. Every purchase helps fund
        practices, race weekends, and team gear.
      </p>
      <Button asChild size="lg" className="mt-8">
        <a href="https://renosparksmtb.printful.me/" target="_blank" rel="noopener noreferrer">
          Shop Merch
        </a>
      </Button>
    </div>
  </section>
);

export default TeamStore;
