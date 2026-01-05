/**
 * MAIN PAGE
 * 
 * Single-page landing site for Responsible AI OK.
 * Composes all sections into a cohesive experience.
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <HeroSection />
        <MissionSection />
        <ActivitiesSection />
        <WhyItMattersSection />
        <AboutSection />
        <TeamSection />
        <GetInvolvedSection />
      </main>

      <Footer />
    </>
  );
}
