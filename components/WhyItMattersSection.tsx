/**
 * WHY IT MATTERS SECTION
 * 
 * Two-column asymmetric layout explaining organizational impact.
 * 
 * Design Features:
 * - 40/60 split (text left, optional visual right)
 * - Max-width 42ch for optimal readability
 * - Clean, minimal styling
 * - Content speaks for itself (no decorative elements)
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { WHY_IT_MATTERS_CONTENT } from "@/lib/constants";
import { cn, prefersReducedMotion } from "@/lib/utils";

export default function WhyItMattersSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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
            { threshold: 0.2 }
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
            id="why-it-matters"
            ref={sectionRef}
            className="section-padding bg-white"
            aria-labelledby="why-heading"
        >
            <div className="container-custom">
                {/* ============================================
            TWO-COLUMN ASYMMETRIC LAYOUT
            ============================================
            
            40% text / 60% whitespace (or optional visual)
            Stacks on mobile for readability
            ============================================ */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    {/* ============================================
              HEADING (4 COLUMNS)
              ============================================ */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="h-0.5 w-12 bg-teal-muted mb-6" />
                        <h2
                            id="why-heading"
                            className={cn(
                                "text-3xl md:text-5xl font-black text-navy-deep leading-tight tracking-tight",
                                isVisible && "fade-in"
                            )}
                        >
                            {WHY_IT_MATTERS_CONTENT.heading}
                        </h2>
                    </div>

                    {/* ============================================
              NARRATIVE (8 COLUMNS)
              ============================================ */}
                    <div className="lg:col-span-8">
                        <p
                            className={cn(
                                "text-lg md:text-xl text-slate/90 leading-relaxed font-normal",
                                "max-w-3xl",
                                isVisible && "fade-in fade-in-delay-1"
                            )}
                        >
                            {WHY_IT_MATTERS_CONTENT.narrative}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
