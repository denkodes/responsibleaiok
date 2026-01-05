/**
 * MAIN PAGE
 * 
 * Single-page landing site for Responsible AI OK.
 * Composes all sections into a cohesive narrative experience.
 * 
 * NARRATIVE ARC:
 * 1. Hero - First impression
 * 2. Why It Matters - Immediate relevance
 * 3. Mission - What we do about it
 * 4. Activities - Proof of action
 * 5. Team - Credibility
 * 6. About - Organizational context
 * 7. Get Involved - Action
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
        <WhyItMattersSection />
        <MissionSection />
        <ActivitiesSection />
        <TeamSection />
        <AboutSection />
        <GetInvolvedSection />
      </main>

      <Footer />
    </>
  );
}
