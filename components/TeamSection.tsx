/**
 * TEAM SECTION
 * 
 * Minimal, institutional team section with no photos, no cards.
 * Two-column layout on desktop, single column on mobile.
 * Left-aligned text with clean hierarchy.
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
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <h2
                        id="team-heading"
                        className="text-3xl md:text-4xl font-bold tracking-tight"
                        style={{ color: "var(--text-primary)" }}
                    >
                        {TEAM_CONTENT.heading}
                    </h2>
                </div>

                {/* Team List - Three columns (one row) on desktop, single column on mobile */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 md:gap-y-12">
                        {TEAM_CONTENT.members.map((member, index) => (
                            <div key={index}>
                                {/* Name */}
                                <h3
                                    className="text-xl md:text-2xl font-bold mb-1"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {member.name}
                                </h3>

                                {/* Role */}
                                <p
                                    className="text-base md:text-lg mb-3"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {member.role}
                                </p>

                                {/* LinkedIn Icon Link */}
                                <a
                                    href={member.linkedIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 transition-colors duration-200"
                                    style={{ color: "var(--text-tertiary)" }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--brand-cta)"}
                                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-tertiary)"}
                                    aria-label={`View ${member.name}'s LinkedIn profile`}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    <span className="text-sm font-medium">LinkedIn</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
