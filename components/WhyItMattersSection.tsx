/**
 * WHY IT MATTERS SECTION
 * 
 * Theme: Deep Institutional
 * Refactored for authoritative palette and tighter rhythm.
 */

"use client";

import { WHY_IT_MATTERS_CONTENT } from "@/lib/constants";

export default function WhyItMattersSection() {
    return (
        <section
            id="why-it-matters"
            className="section-spacing bg-white"
            aria-labelledby="why-heading"
        >
            <div className="container-standard">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Heading */}
                    <div className="lg:col-span-5">
                        {/* Structural Accent Line */}
                        <div className="w-12 h-1 bg-blue-900 mb-8" aria-hidden="true" />

                        <h2
                            id="why-heading"
                            className="text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.1]"
                        >
                            {WHY_IT_MATTERS_CONTENT.heading}
                        </h2>
                    </div>

                    {/* Right Column: Narrative */}
                    <div className="lg:col-span-7">
                        <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed text-xl md:text-2xl">
                            <p>{WHY_IT_MATTERS_CONTENT.narrative}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
