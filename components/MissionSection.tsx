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
                {/* Swiss asymmetric balance - right-aligned to contrast left hero */}
                <div className="max-w-5xl ml-auto">
                    <div className={cn(
                        "space-y-8",
                        isVisible && "fade-in"
                    )}>
                        {/* Section heading */}
                        <div className="space-y-4">
                            <div className="h-0.5 w-12 bg-taupe-gold" />
                            <h2
                                id="mission-heading"
                                className="text-3xl md:text-5xl font-black text-navy-deep tracking-tight leading-tight max-w-3xl"
                            >
                                {MISSION_CONTENT.heading}
                            </h2>
                        </div>

                        {/* Mission statement - natural wrap */}
                        <div className={cn(
                            "max-w-3xl space-y-4",
                            isVisible && "fade-in fade-in-delay-1"
                        )}>
                            <p className="text-lg md:text-xl text-navy-charcoal font-normal leading-relaxed">
                                {MISSION_CONTENT.statement}
                            </p>
                            {MISSION_CONTENT.supportLine && (
                                <p className="text-base md:text-lg text-slate/80 font-normal italic border-l-2 border-taupe-gold/30 pl-6">
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
