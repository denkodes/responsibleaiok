/**
 * BLOG PAGE
 * 
 * Integration with Substack.
 * Provides a dedicated space for thought leadership without
 * duplicating content or adding CMS complexity.
 */


import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Blog | Responsible AI OK",
    description: "Reflections, events, and resources on responsible AI.",
};

export default function BlogPage() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen pt-32 pb-24">
                <div className="container-standard flex flex-col items-center">

                    {/* Header */}
                    <div className="max-w-2xl w-full text-center mb-16">
                        <h1 className="font-display font-bold text-4xl md:text-5xl text-navy-900 tracking-tight">
                            Blog
                        </h1>
                    </div>

                    {/* Subscribe / Embed Section */}
                    <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-8 mb-16">
                        <div className="space-y-4 text-center">
                            <h2 className="text-2xl font-bold text-navy-900">
                                Subscribe for updates
                            </h2>
                            <p className="text-slate-600">
                                Get the latest insights delivered to your inbox.
                            </p>
                        </div>

                        {/* Substack Embed */}
                        <div className="w-full flex justify-center">
                            <iframe
                                src="https://responsibleaiok.substack.com/embed"
                                width="600"
                                height="400"
                                style={{
                                    border: '1px solid #E2E8F0', // slate-200
                                    background: 'white',
                                    maxWidth: '100%'
                                }}
                                frameBorder="0"
                                scrolling="no"
                                title="Subscribe to Responsible AI OK"
                            ></iframe>
                        </div>

                        {/* Link to Substack */}
                        <a
                            href="https://responsibleaiok.substack.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-blue-800 font-medium hover:text-blue-600 transition-colors"
                        >
                            View all posts on Substack
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-transform group-hover:translate-x-1"
                            >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
}
