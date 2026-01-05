/**
 * ACTIVITIES SECTION
 * 
 * Theme: Deep Institutional
 * Refactored for precision. Removed redundant eyebrow label.
 */

"use client";

import { ACTIVITIES_CONTENT } from "@/lib/constants";

const Icons = {
    users: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    "book-open": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
    "shield-check": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    lightbulb: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
};

export default function ActivitiesSection() {
    return (
        <section
            id="activities"
            className="section-spacing-standard bg-bg-surface-highlight"
            aria-labelledby="activities-heading"
        >
            <div className="container-standard">
                {/* Header */}
                <div className="max-w-2xl mb-12">
                    {/* REMOVED: Redundant eyebrow text */}
                    <h2 id="activities-heading" className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                        {ACTIVITIES_CONTENT.heading}
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        {ACTIVITIES_CONTENT.subheading}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                    {ACTIVITIES_CONTENT.activities.map((activity, index) => (
                        <div
                            key={activity.id}
                            className="bg-white p-5 md:p-6 rounded-lg border border-slate-200 hover:border-blue-900 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="flex flex-col h-full">
                                {/* Icon + Index Row */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-10 h-10 rounded bg-blue-50 text-blue-900 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                                        {Icons[activity.icon as keyof typeof Icons]}
                                    </div>
                                    <span className="text-slate-200 font-mono text-2xl font-bold transition-colors group-hover:text-blue-100/50">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-blue-900 transition-colors">
                                    {activity.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {activity.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
