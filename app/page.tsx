/**
 * MAIN PAGE
 * 
 * Single-page landing site for Responsible AI OK.
 * Composes all sections into a cohesive experience.
 * 
 * Architecture:
 * - Navigation (sticky)
 * - Hero
 * - Mission
 * - Activities
 * - Why It Matters
 * - About
 * - Get Involved
 * - Footer
 * 
 * All sections are imported as separate components for:
 * - Better code organization
 * - Easier maintenance
 * - Clear separation of concerns
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import AboutSection from "@/components/AboutSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* ============================================
          NAVIGATION
          ============================================
          
          Sticky navigation with scroll tracking.
          Always visible at top of viewport.
          ============================================ */}
      <Navigation />

      {/* ============================================
          MAIN CONTENT
          ============================================
          
          All sections stacked vertically.
          Each section has its own ID for anchor navigation.
          ============================================ */}
      <main>
        {/* Hero - Above the fold, first impression */}
        <HeroSection />

        {/* Mission - Concise organizational purpose */}
        <MissionSection />

        {/* Activities - What we do (not "programs") */}
        <ActivitiesSection />

        {/* Why It Matters - Impact narrative */}
        <WhyItMattersSection />

        {/* About - Organizational credibility */}
        <AboutSection />

        {/* Get Involved - HubSpot form integration */}
        <GetInvolvedSection />
      </main>

      {/* ============================================
          FOOTER
          ============================================
          
          Contact info, social links, copyright.
          ============================================ */}
      <Footer />
    </>
  );
}
