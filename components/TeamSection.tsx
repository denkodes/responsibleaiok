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
                            className="text-3xl md:text-5xl font-bold text-navy-900 tracking-tight mb-6"
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
                                    <p className="text-slate-600 leading-relaxed text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
