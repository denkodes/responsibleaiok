/**
 * TEAM SECTION
 * 
 * Theme: Deep Institutional
 * Refactored for authoritative Navy/Indigo palette. Removed redundant eyebrow label.
 */

"use client";

import { TEAM_CONTENT } from "@/lib/constants";

export default function TeamSection() {
    return (
        <section
            id="team"
            className="section-spacing-standard bg-bg-surface"
            aria-labelledby="team-heading"
        >
            <div className="container-standard">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="max-w-2xl mb-12">
                        {/* REMOVED: Redundant eyebrow text */}
                        <h2
                            id="team-heading"
                            className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-6"
                        >
                            {TEAM_CONTENT.heading}
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            {TEAM_CONTENT.subheading}
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        {TEAM_CONTENT.members.map((member, index) => (
                            <div key={index} className="group">
                                {/* Placeholder Image container with grid effect */}
                                <div className="aspect-[4/5] bg-slate-50 mb-6 rounded-lg relative overflow-hidden border border-slate-200">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium tracking-wide uppercase text-sm">
                                        Photo Pending
                                    </div>
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-500" />
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="text-xl font-bold text-navy-900 mb-1">{member.name}</h3>
                                    <p className="text-blue-900 font-bold text-xs mb-3 uppercase tracking-widest">{member.role}</p>
                                    <a
                                        href={member.linkedIn}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                        View LinkedIn
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
