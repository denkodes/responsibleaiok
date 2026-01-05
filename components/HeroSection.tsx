/**
 * HERO SECTION
 * 
 * Swiss-inspired hero with restrained elegance and visual depth.
 * 
 * Design Features:
 * - Luxury gradient mesh background
 * - Typography-first hierarchy with font-black weights
 * - Asymmetric grid with generous whitespace
 * - Minimal animation (fade-in with stagger)
 */

"use client";

import { useEffect, useState } from "react";
import { HERO_CONTENT } from "@/lib/constants";
import { cn, prefersReducedMotion } from "@/lib/utils";

export default function HeroSection() {
    // State to trigger fade-in animations after component mounts
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const shouldAnimate = !prefersReducedMotion();

    return (
        <section
            id="home"
            className="relative min-h-[90vh] flex items-center overflow-hidden bg-white"
            aria-label="Hero section"
        >
            {/* ============================================
          PRISTINE INSTITUTIONAL BACKGROUND
          ============================================ */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden bg-white">
                {/* Precision Modern Grid - Ultra Subtle */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a03_1px,transparent_1px),linear-gradient(to_bottom,#0f172a03_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            <div className="container-custom w-full relative z-10 pt-36 lg:pt-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    {/* ============================================
              TEXT CONTENT - Institutional Precision
              ============================================ */}
                    <div className="lg:col-span-10 space-y-8">
                        {/* Continuity Line Label - Refined Luxury */}
                        <div
                            className={cn(
                                "inline-flex items-center gap-4 px-6 py-2.5 rounded-full",
                                "bg-white/40 glass-card label-uppercase text-teal-muted text-[11px] sm:text-xs font-bold tracking-[0.2em]",
                                shouldAnimate && isVisible && "fade-in fade-in-delay-1"
                            )}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-muted opacity-30"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-muted"></span>
                            </span>
                            {HERO_CONTENT.kicker}
                        </div>

                        <div className="space-y-6">
                            {/* Organization Name - Award-Caliber Reveal */}
                            <h1
                                className={cn(
                                    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black",
                                    "text-navy-deep leading-[1.1] tracking-tight max-w-4xl",
                                    shouldAnimate && isVisible && "animate-reveal"
                                )}
                            >
                                {HERO_CONTENT.organizationName}
                            </h1>

                            {/* Value Proposition - High-End Editorial Style */}
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="h-16 w-[1px] bg-taupe-gold/40 hidden md:block mt-1"></div>
                                <p
                                    className={cn(
                                        "text-base sm:text-lg md:text-xl text-slate/90 font-normal",
                                        "leading-relaxed max-w-2xl",
                                        shouldAnimate && isVisible && "fade-in fade-in-delay-3"
                                    )}
                                >
                                    {HERO_CONTENT.subhead}
                                </p>
                            </div>
                        </div>

                        {/* CTAs - Standardised Premium Buttons */}
                        <div
                            className={cn(
                                "flex flex-wrap gap-4 pt-2",
                                shouldAnimate && isVisible && "fade-in fade-in-delay-4"
                            )}
                        >
                            <a
                                href={HERO_CONTENT.ctaHref}
                                className="btn btn-primary"
                                aria-label={`${HERO_CONTENT.ctaText} - Navigate to contact form`}
                            >
                                {HERO_CONTENT.ctaText}
                            </a>

                            <a
                                href={HERO_CONTENT.secondaryCtaHref}
                                className="btn btn-secondary"
                            >
                                {HERO_CONTENT.secondaryCtaText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Minimalist Precision */}
            <div
                className={cn(
                    "hidden lg:block absolute bottom-12 left-1/2 -translate-x-1/2",
                    "transition-opacity duration-1000",
                    shouldAnimate && isVisible && "fade-in fade-in-delay-4"
                )}
                aria-hidden="true"
            >
                <div className="flex flex-col items-center space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate/50">
                        Scroll
                    </span>
                    <div className="h-12 w-[1px] bg-gradient-to-b from-teal-muted to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
