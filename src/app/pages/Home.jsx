import HeroSlider from "../LandingPage/HeroSlider";
import ExpertGuidanceSection from "../LandingPage/ExpertGuidanceSection";
import AboutSection from "../LandingPage/AboutSection";
import ServicesSection from "../LandingPage/ServicesSection";
import ServiceFinder from "../LandingPage/ServiceFinder";
import ExperienceLandmarkSection from "../LandingPage/ExperienceLandmarkSection";
import ExpertiseSection from "../LandingPage/ExpertiseSection";
import StatShowcase from "../LandingPage/StatShowcase";
import PartnersShowcase from "../LandingPage/PartnersShowcase";

import Footer from "../LandingPage/Footer";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ServiceFinder />
      <ExpertGuidanceSection />
      <ExperienceLandmarkSection />
      <ExpertiseSection />
      <StatShowcase />
      <PartnersShowcase />
      <Footer />
    </div>
  );
}
