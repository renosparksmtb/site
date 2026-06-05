import SiteNav from "@/components/SiteNav";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import PracticeSection from "@/components/PracticeSection";
import SeasonRaces from "@/components/SeasonRaces";
import JoinSection from "@/components/JoinSection";
import DonateSection from "@/components/DonateSection";
import Volunteering from "@/components/Volunteering";
import GritSection from "@/components/GritSection";
import GearSection from "@/components/GearSection";
import TeamStore from "@/components/TeamStore";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import AnnouncementBanner from "@/components/AnnouncementBanner";

const Index = () => (
  <>
    <AnnouncementBanner />
    <SiteNav />
    <main>
      <HeroSection />
      <ScrollReveal><WhoWeAre /></ScrollReveal>
      <ScrollReveal><PracticeSection /></ScrollReveal>
      <ScrollReveal><SeasonRaces /></ScrollReveal>
      <ScrollReveal><JoinSection /></ScrollReveal>
      <ScrollReveal><Volunteering /></ScrollReveal>
      <ScrollReveal><GritSection /></ScrollReveal>
      <ScrollReveal><GearSection /></ScrollReveal>
      <ScrollReveal><FaqSection /></ScrollReveal>
      <ScrollReveal><TeamStore /></ScrollReveal>
      <ScrollReveal><ContactSection /></ScrollReveal>
      <ScrollReveal><DonateSection /></ScrollReveal>
    </main>
    <SiteFooter />
    <BackToTop />
  </>
);

export default Index;
