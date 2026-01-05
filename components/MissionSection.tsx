/**
 * MISSION SECTION
 * 
 * Theme: Swiss Institutional
 * Refactored for structural clarity. Added prominent grid lines.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { MISSION_CONTENT } from "@/lib/constants";
import { cn, prefersReducedMotion } from "@/lib/utils";

export default function MissionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            id="mission"
            ref={sectionRef}
            className="section-spacing bg-white"
            aria-labelledby="mission-heading"
        >
            <div className="container-standard">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Left Column: Heading */}
                    <div className="lg:col-span-4">
                        <div className={cn(
                            "sticky top-32 transition-opacity duration-700",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}>
                            <h2
                                id="mission-heading"
                                className="text-3xl md:text-5xl font-bold tracking-tighter text-navy-900"
                            >
                                {MISSION_CONTENT.heading}
                            </h2>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-8">
                        {/* Structural Line - Swiss Style */}
                        <div className="hidden lg:block w-full h-px bg-slate-200 mb-8" />

                        <div className={cn(
                            "space-y-8 transition-opacity duration-700 delay-150",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}>
                            <p className="text-xl md:text-3xl leading-tight text-slate-800 font-medium tracking-tight">
                                {MISSION_CONTENT.statement}
                            </p>

                            {MISSION_CONTENT.supportLine && (
                                <div className="pl-6 border-l-4 border-blue-900">
                                    <p className="text-lg text-slate-500 font-medium">
                                        {MISSION_CONTENT.supportLine}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
