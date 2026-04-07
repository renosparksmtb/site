import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const TeamStore = () => (
  <section id="store" className="bg-card px-4 py-16 text-center">
    <div className="container-narrow mx-auto max-w-2xl">
      <FontAwesomeIcon icon={faStore} className="mb-4 h-10 w-10 text-primary" />
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
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 h-3.5 w-3.5" />
        </a>
      </Button>
    </div>
  </section>
);

export default TeamStore;
