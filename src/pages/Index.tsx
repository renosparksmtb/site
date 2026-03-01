import SiteNav from "@/components/SiteNav";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import PracticeSection from "@/components/PracticeSection";
import SeasonRaces from "@/components/SeasonRaces";
import JoinSection from "@/components/JoinSection";
import Volunteering from "@/components/Volunteering";
import GritSection from "@/components/GritSection";
import GearSection from "@/components/GearSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => (
  <>
    <SiteNav />
    <main>
      <HeroSection />
      <WhoWeAre />
      <PracticeSection />
      <SeasonRaces />
      <JoinSection />
      <Volunteering />
      <GritSection />
      <GearSection />
      <FaqSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </>
);

export default Index;
