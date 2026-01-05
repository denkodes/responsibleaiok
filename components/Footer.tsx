/**
 * FOOTER COMPONENT
 * 
 * Simple, credible footer with organizational information.
 * 
 * Features:
 * - Organization name and continuity messaging
 * - Contact email
 * - Social media links (placeholders)
 * - Copyright notice
 * - Clean, minimal design
 */

import { FOOTER_CONTENT } from "@/lib/constants";

/* ============================================
   SOCIAL MEDIA ICONS
   ============================================ */
const SocialIcons = {
    linkedin: (
        <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    twitter: (
        <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
};

export default function Footer() {
    return (
        <footer
            className="bg-navy-deep text-white pt-24 pb-12 overflow-hidden relative"
            aria-labelledby="footer-heading"
        >
            {/* Minimal Background Gradient */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-teal-muted/10 blur-[150px] rounded-full pointer-events-none" />

            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-24">
                    {/* Brand Column */}
                    <div className="md:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold tracking-tight text-white">
                                {FOOTER_CONTENT.organizationName}
                            </h3>
                        </div>

                        <p className="text-slate-300 text-lg leading-relaxed max-w-sm">
                            {FOOTER_CONTENT.blurb}
                        </p>
                    </div>

                    {/* Links Column */}
                    <div className="md:col-span-3 md:col-start-7 space-y-8">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-teal-muted">Menu</h4>
                        <nav className="flex flex-col space-y-4">
                            <a href="#home" className="text-lg text-slate-300 hover:text-white transition-colors duration-300 w-fit">Home</a>
                            <a href="#mission" className="text-lg text-slate-300 hover:text-white transition-colors duration-300 w-fit">Mission</a>
                            <a href="#activities" className="text-lg text-slate-300 hover:text-white transition-colors duration-300 w-fit">Activities</a>
                            <a href="#about" className="text-lg text-slate-300 hover:text-white transition-colors duration-300 w-fit">About</a>
                        </nav>
                    </div>

                    {/* Contact Column */}
                    <div className="md:col-span-3 space-y-8">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-teal-muted">Connect</h4>
                        <div className="space-y-4">
                            <a
                                href={`mailto:${FOOTER_CONTENT.contactEmail}`}
                                className="block text-lg text-slate-300 hover:text-white transition-colors duration-300"
                            >
                                {FOOTER_CONTENT.contactEmail}
                            </a>

                            <div className="flex gap-4 pt-2">
                                {FOOTER_CONTENT.social.map((social) => (
                                    <a
                                        key={social.platform}
                                        href={social.url}
                                        className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 text-white"
                                        aria-label={`Follow us on ${social.platform}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {SocialIcons[social.icon as keyof typeof SocialIcons]}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Massive Site-Ender Typography */}
                <div className="border-t border-white/10 pt-12 pb-8">
                    <h1 className="text-[12vw] leading-none font-black text-white/5 tracking-tighter text-center select-none pointer-events-none">
                        RESPONSIBLE AI
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-slate-500 font-medium tracking-wide">
                        <p>{FOOTER_CONTENT.copyright}</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <span className="hover:text-slate-300 transition-colors cursor-not-allowed">Privacy Policy</span>
                            <span className="hover:text-slate-300 transition-colors cursor-not-allowed">Terms of Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
