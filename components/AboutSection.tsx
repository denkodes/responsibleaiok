/**
 * ABOUT SECTION
 * 
 * Organizational credibility with Swiss detail.
 * 
 * Design Features:
 * - Offset text block (not fully centered)
 * - Subtle border-left accent (taupe gold)
 * - 2-3 sentences about nonprofit focus
 * - Clean typography hierarchy
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { ABOUT_CONTENT } from "@/lib/constants";
import { cn, prefersReducedMotion } from "@/lib/utils";

export default function AboutSection() {
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
            id="about"
            ref={sectionRef}
            className="section-padding bg-off-white"
            aria-labelledby="about-heading"
        >
            <div className="container-custom">
                {/* ============================================
            OFFSET TEXT BLOCK
            ============================================
            
            Swiss detail: Not fully centered, offset to left
            Border-left accent adds subtle visual interest
            ============================================ */}
                <div className="max-w-5xl">
                    <div
                        className={cn(
                            "space-y-12",
                            isVisible && "fade-in"
                        )}
                    >
                        {/* Heading with sophisticated accent */}
                        <div className="space-y-4">
                            <span className="label-uppercase text-taupe-gold tracking-widest text-xs font-bold">{ABOUT_CONTENT.kicker}</span>
                            <h2
                                id="about-heading"
                                className="text-3xl md:text-5xl font-black text-navy-deep tracking-tight"
                            >
                                {ABOUT_CONTENT.heading}
                            </h2>
                        </div>

                        {/* Paragraphs with high-end magazine styling */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                            <div className="space-y-6">
                                {ABOUT_CONTENT.paragraphs.slice(0, 2).map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className={cn(
                                            "text-lg md:text-xl text-slate leading-relaxed font-normal",
                                            isVisible && `fade-in fade-in-delay-${index + 1}`
                                        )}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            <div className="space-y-6">
                                <p
                                    className={cn(
                                        "text-lg md:text-xl text-slate leading-relaxed font-normal",
                                        isVisible && "fade-in fade-in-delay-3"
                                    )}
                                >
                                    {ABOUT_CONTENT.paragraphs[2]}
                                </p>
                                {ABOUT_CONTENT.fundingLine && (
                                    <div
                                        className={cn(
                                            "pt-4 border-t border-taupe-gold/30",
                                            isVisible && "fade-in fade-in-delay-4"
                                        )}
                                    >
                                        <p className="text-base text-navy-deep font-bold italic">
                                            {ABOUT_CONTENT.fundingLine}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
