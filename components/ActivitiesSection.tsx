/**
 * ACTIVITIES SECTION
 * 
 * Asymmetric grid layout showcasing organizational activities.
 * 
 * Design Features:
 * - 12-column grid with varying card spans (not equal boxes)
 * - Minimal card styling with subtle shadows
 * - Navy-tinted shadows (not gray)
 * - Hover states: subtle lift + shadow increase
 * - Simple line icons in muted teal
 * - Scroll-triggered fade-in with stagger
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { ACTIVITIES_CONTENT } from "@/lib/constants";
import { cn, prefersReducedMotion } from "@/lib/utils";

/* ============================================
   ICON COMPONENTS
   ============================================
   
   Simple line icons for each activity.
   Using inline SVG for performance and control.
   ============================================ */

const Icons = {
    users: (
        <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ),
    "book-open": (
        <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    ),
    "shield-check": (
        <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    lightbulb: (
        <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    ),
};


export default function ActivitiesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    /* ============================================
       SCROLL-TRIGGERED ANIMATION
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
            { threshold: 0.1 }
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
            id="activities"
            ref={sectionRef}
            className="section-padding bg-off-white"
            aria-labelledby="activities-heading"
        >
            <div className="container-custom">
                {/* ============================================
            SECTION HEADER
            ============================================ */}
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-5">
                    <h2
                        id="activities-heading"
                        className={cn(
                            "text-3xl md:text-5xl font-black text-navy-deep leading-tight tracking-tight",
                            isVisible && "fade-in"
                        )}
                    >
                        {ACTIVITIES_CONTENT.heading}
                    </h2>
                    <p
                        className={cn(
                            "text-base sm:text-lg text-slate/80 font-normal max-w-2xl mx-auto leading-relaxed",
                            isVisible && "fade-in fade-in-delay-1"
                        )}
                    >
                        {ACTIVITIES_CONTENT.subheading}
                    </p>
                </div>

                {/* Asymmetric grid with generous spacing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
                    {ACTIVITIES_CONTENT.activities.map((activity, index) => {
                        const gridSpans = [
                            "lg:col-span-12 xl:col-span-7",
                            "lg:col-span-12 xl:col-span-5",
                            "lg:col-span-12 xl:col-span-5",
                            "lg:col-span-12 xl:col-span-7",
                        ];

                        return (
                            <article
                                key={activity.id}
                                className={cn(
                                    gridSpans[index],
                                    "relative p-10 md:p-16 rounded-2xl glass-card shadow-lg",
                                    "transition-all duration-700 ease-smooth group overflow-hidden",
                                    "hover:shadow-hover hover:-translate-y-3",
                                    isVisible && `fade-in fade-in-delay-${index + 2}`
                                )}
                            >
                                {/* Activity Index - Subtle but visible */}
                                <div className="absolute top-8 right-8 text-[8rem] font-black text-navy-deep/[0.05] select-none pointer-events-none tracking-[-0.1em] group-hover:text-teal-muted/10 transition-colors duration-700">
                                    0{index + 1}
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-muted/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10 space-y-8">
                                    {/* Icon - Refined Precision */}
                                    <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-border/50 text-teal-muted transition-all duration-500 group-hover:bg-teal-muted group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                                        {Icons[activity.icon as keyof typeof Icons]}
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-2xl md:text-3xl font-black text-navy-deep tracking-tight group-hover:text-teal-muted transition-colors duration-300">
                                            {activity.title}
                                        </h3>
                                        <p className="text-slate text-base md:text-lg font-normal leading-relaxed max-w-xl">
                                            {activity.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Professional closing note - Centered to match header */}
                <div
                    className={cn(
                        "mt-16 max-w-3xl mx-auto text-center",
                        isVisible && "fade-in fade-in-delay-4"
                    )}
                >
                    <p className="text-lg text-slate/90 leading-relaxed font-normal">
                        {ACTIVITIES_CONTENT.closingLine}
                    </p>
                </div>
            </div>
        </section>
    );
}
