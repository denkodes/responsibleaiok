/**
 * ABOUT SECTION
 * 
 * Theme: Swiss Institutional
 * Refactored to match Mission section structure for consistency.
 */

"use client";

import { ABOUT_CONTENT } from "@/lib/constants";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="section-spacing bg-white"
            aria-labelledby="about-heading"
        >
            <div className="container-standard">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Left Column: Heading */}
                    <div className="lg:col-span-4">
                        <h2
                            id="about-heading"
                            className="text-3xl md:text-5xl font-bold tracking-tighter text-navy-900"
                        >
                            {ABOUT_CONTENT.heading}
                        </h2>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-8">
                        {/* Structural Line - Swiss Style */}
                        <div className="hidden lg:block w-full h-px bg-slate-200 mb-8" />

                        <div className="space-y-6">
                            {ABOUT_CONTENT.paragraphs.map((text, i) => (
                                <p key={i} className="text-lg text-slate-600 leading-relaxed">
                                    {text}
                                </p>
                            ))}

                            {ABOUT_CONTENT.fundingLine && (
                                <div className="pt-8 mt-8 border-t border-slate-200">
                                    <p className="text-sm font-bold text-navy-900 uppercase tracking-widest">
                                        {ABOUT_CONTENT.fundingLine}
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
