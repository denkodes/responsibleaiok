/**
 * MISSION SECTION
 * 
 * Concise mission statement with centered layout.
 * 
 * Design Features:
 * - Centered text with optimal readability (42ch max-width)
 * - Generous whitespace surrounding content
 * - Clean typography hierarchy
 * - Subtle fade-in animation on scroll
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { MISSION_CONTENT } from "@/lib/constants";
import { cn, prefersReducedMotion } from "@/lib/utils";

export default function MissionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    /* ============================================
       SCROLL-TRIGGERED ANIMATION
       ============================================
       
       Uses Intersection Observer to detect when section
       enters viewport, then triggers fade-in animation.
       ============================================ */
    useEffect(() => {
        const shouldAnimate = !prefersReducedMotion();
        if (!shouldAnimate) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                // Trigger when 20% of section is visible
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="mission"
            ref={sectionRef}
            className="section-padding bg-white"
            aria-labelledby="mission-heading"
        >
            <div className="container-custom">
                {/* ============================================
            CENTERED CONTENT CONTAINER
            ============================================
            
            Swiss principle: Centered layout with breathing room
            Max-width ensures optimal readability
            ============================================ */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative z-10 space-y-12 text-center">
                        {/* ============================================
                  SECTION HEADING
                  ============================================ */}
                        <div className="space-y-6">
                            <h2
                                id="mission-heading"
                                className={cn(
                                    "text-3xl md:text-5xl font-black text-navy-deep tracking-tight",
                                    isVisible && "fade-in"
                                )}
                            >
                                {MISSION_CONTENT.heading}
                            </h2>
                            <div className={cn(
                                "h-[2px] w-12 bg-taupe-gold mx-auto transition-all duration-1000",
                                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                            )} />
                        </div>

                        {/* ============================================
                  MISSION STATEMENT
                  ============================================ */}
                        <div className={cn(
                            "max-w-3xl mx-auto",
                            isVisible && "fade-in fade-in-delay-1"
                        )}>
                            <p
                                className="text-lg md:text-3xl text-navy-charcoal font-medium leading-[1.6] tracking-tight"
                                style={{ maxWidth: "30ch", margin: "0 auto" }}
                            >
                                {MISSION_CONTENT.statement}
                            </p>
                            {MISSION_CONTENT.supportLine && (
                                <p
                                    className="text-base md:text-xl text-slate/80 font-normal mt-6 italic"
                                    style={{ maxWidth: "30ch", margin: "1.5rem auto 0" }}
                                >
                                    {MISSION_CONTENT.supportLine}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
