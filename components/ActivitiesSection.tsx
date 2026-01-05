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

import { useRef } from "react";
import { ACTIVITIES_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer } from "@/components/ui/Motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";

/* ============================================
   ICON COMPONENTS (Unchanged)
   ============================================ */
const Icons = {
    users: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ),
    "book-open": (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    ),
    "shield-check": (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    lightbulb: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    ),
};


export default function ActivitiesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    // Grid span logic (preserved from original)
    const getGridSpan = (index: number) => {
        const spans = [
            "lg:col-span-12 xl:col-span-7",
            "lg:col-span-12 xl:col-span-5",
            "lg:col-span-12 xl:col-span-5",
            "lg:col-span-12 xl:col-span-7",
        ];
        return spans[index] || "lg:col-span-12";
    };

    return (
        <section
            id="activities"
            ref={sectionRef}
            className="section-padding bg-off-white relative overflow-hidden"
            aria-labelledby="activities-heading"
        >
            {/* Background Blob for subtle ambiance */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-teal-warm/5 rounded-full blur-[100px] -translate-y-1/2 -z-0" />

            <div className="container-custom relative z-10">

                {/* HEADLINE */}
                <FadeIn direction="up" duration={0.6}>
                    <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
                        <h2
                            id="activities-heading"
                            className="text-3xl md:text-5xl font-black text-navy-deep leading-tight tracking-tight"
                        >
                            {ACTIVITIES_CONTENT.heading}
                        </h2>
                        <p className="text-base sm:text-lg text-slate/80 font-normal max-w-2xl mx-auto leading-relaxed">
                            {ACTIVITIES_CONTENT.subheading}
                        </p>
                    </div>
                </FadeIn>

                {/* GRID WITH STAGGERED REVEAL & SPOTLIGHT CARDS */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
                    {ACTIVITIES_CONTENT.activities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
                            }}
                            className={getGridSpan(index)}
                        >
                            <SpotlightCard className="h-full rounded-2xl md:rounded-3xl shadow-lg border-transparent bg-white/60 backdrop-blur-md">
                                <div className="p-12 md:p-20 relative z-10 h-full flex flex-col">
                                    {/* Number Watermark */}
                                    <div className="absolute top-8 right-8 text-[8rem] font-black text-navy-deep/[0.03] select-none pointer-events-none tracking-[-0.1em]">
                                        0{index + 1}
                                    </div>

                                    {/* Icon Container */}
                                    <div className="mb-8 relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-sm border border-slate-100 text-teal-warm">
                                        {Icons[activity.icon as keyof typeof Icons]}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl md:text-3xl font-black text-navy-deep tracking-tight mb-4">
                                        {activity.title}
                                    </h3>
                                    <p className="text-slate text-base md:text-lg font-normal leading-relaxed max-w-xl flex-grow">
                                        {activity.description}
                                    </p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </StaggerContainer>

                {/* CLOSING NOTE */}
                <FadeIn delay={0.4} direction="up">
                    <div className="mt-12 max-w-3xl mx-auto text-center">
                        <p className="text-lg text-slate/90 leading-relaxed font-normal">
                            {ACTIVITIES_CONTENT.closingLine}
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
