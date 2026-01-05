/**
 * GET INVOLVED SECTION
 * 
 * Theme: Deep Institutional
 * HubSpot form integration using the new embed format
 */

"use client";

import { useEffect, useRef } from "react";
import { GET_INVOLVED_CONTENT } from "@/lib/constants";

export default function GetInvolvedSection() {
    const scriptLoaded = useRef(false);

    useEffect(() => {
        // Prevent double-loading in development (React StrictMode)
        if (scriptLoaded.current) return;
        scriptLoaded.current = true;

        // Load HubSpot embed script
        const script = document.createElement("script");
        script.src = "https://js-na2.hsforms.net/forms/embed/242682784.js";
        script.defer = true;
        script.async = true;

        // Add error handling
        script.onerror = () => {
            console.error("Failed to load HubSpot form script");
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup: remove script when component unmounts
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section
            id="get-involved"
            className="section-spacing-loose bg-slate-50"
            aria-labelledby="get-involved-heading"
        >
            <div className="container-standard">
                <div className="max-w-[700px] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2
                            id="get-involved-heading"
                            className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 tracking-tight"
                        >
                            {GET_INVOLVED_CONTENT.heading}
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            {GET_INVOLVED_CONTENT.subheading}
                        </p>
                    </div>

                    {/* HubSpot Form Container */}
                    <div className="hubspot-form-wrapper bg-white p-8 md:p-12 rounded-lg border border-slate-200 shadow-sm">
                        <div
                            className="hs-form-frame"
                            data-region="na2"
                            data-form-id="91e60672-51b9-4458-b0d3-6c3c40b95d91"
                            data-portal-id="242682784"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
