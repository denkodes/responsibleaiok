/**
 * HERO SECTION
 * 
 * Theme: Deep Institutional
 * Refactored for authoritative Navy/Indigo palette.
 */

"use client";

import { useEffect, useState } from "react";
import { HERO_CONTENT } from "@/lib/constants";
import { cn, prefersReducedMotion } from "@/lib/utils";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const shouldAnimate = !prefersReducedMotion();

    return (
        <section
            id="home"
            className="relative min-h-[80vh] flex items-center overflow-hidden bg-white"
            aria-label="Hero section"
        >
            {/* Background Grid - Very Subtle */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className="container-standard relative z-10 pt-24 md:pt-36 pb-20 md:pb-24">
                <div className="max-w-[1000px]">
                    {/* Eyebrow Label - Fixed Spacing and "Blink" Feel */}
                    <div
                        className={cn(
                            "inline-flex items-center gap-2 mb-4", // Reduced gap and margin
                            shouldAnimate && isVisible && "fade-in"
                        )}
                    >
                        <span className="label-eyebrow text-slate-500 tracking-widest text-[0.7rem] font-bold uppercase mb-0">
                            {HERO_CONTENT.kicker}
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1
                        className={cn(
                            "text-navy-900 mb-6 max-w-[15ch] leading-[1.05] tracking-tight", // Reduced margin
                            shouldAnimate && isVisible && "fade-in fade-in-delay-1"
                        )}
                    >
                        {HERO_CONTENT.organizationName}
                    </h1>

                    {/* Subheadline with vertical divider line */}
                    <div className={cn(
                        "flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center mb-8", // Reduced layout gap and margin
                        shouldAnimate && isVisible && "fade-in fade-in-delay-2"
                    )}>
                        <div className="hidden md:block h-10 w-0.5 bg-slate-200"></div>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                            {HERO_CONTENT.subhead}
                        </p>
                    </div>

                    {/* CTA Group */}
                    <div
                        className={cn(
                            "flex flex-wrap gap-4 pt-2",
                            shouldAnimate && isVisible && "fade-in fade-in-delay-3"
                        )}
                    >
                        <a
                            href={HERO_CONTENT.ctaHref}
                            className="btn btn-primary"
                            aria-label={`${HERO_CONTENT.ctaText} - Go to contact`}
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
            {/* Bottom Scroll Indicator - Centered Vertical */}
            <div className="absolute bottom-0 left-0 right-0 z-10 pb-8 pointer-events-none hidden md:block">
                <div className="flex flex-col items-center justify-center gap-3 opacity-60">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Scroll</span>
                    <div className="w-px h-12 bg-slate-200 overflow-hidden relative">
                        <div className="absolute inset-x-0 top-0 bg-blue-900 h-1/2 animate-scroll-drop"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
