/**
 * GET INVOLVED SECTION
 * 
 * Theme: Deep Institutional
 * Refactored for clear, trustworthy Navy/Indigo palette. Removed redundant eyebrow label.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { GET_INVOLVED_CONTENT, HUBSPOT_CONFIG } from "@/lib/constants";
import { cn, validateEmail } from "@/lib/utils";

declare global {
    interface Window {
        hbspt: any;
    }
}

export default function GetInvolvedSection() {
    const formContainerRef = useRef<HTMLDivElement>(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({ firstName: "", email: "", organization: "", interest: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // HubSpot Loader
    useEffect(() => {
        if (HUBSPOT_CONFIG.useNativeForm || !formContainerRef.current) return;
        const script = document.createElement("script");
        script.src = "//js.hsforms.net/forms/v2.js";
        script.async = true;
        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: HUBSPOT_CONFIG.portalId,
                    formId: HUBSPOT_CONFIG.formId,
                    target: "#hubspot-form-container",
                    onFormSubmit: () => setIsSuccess(true),
                });
            }
        };
        document.body.appendChild(script);
        return () => { if (document.body.contains(script)) document.body.removeChild(script); };
    }, []);

    // Native Form Handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.email.trim() || !validateEmail(formData.email)) newErrors.email = "Valid email is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        // Simulator
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSuccess(true);
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
    };

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
                        {/* REMOVED: Redundant eyebrow text */}
                        <h2
                            id="get-involved-heading"
                            className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 tracking-tight"
                        >
                            {GET_INVOLVED_CONTENT.heading}
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            {GET_INVOLVED_CONTENT.subheading}
                        </p>
                    </div>

                    {/* Success State */}
                    {isSuccess ? (
                        <div className="bg-white border border-blue-900/20 rounded-lg p-12 text-center shadow-sm">
                            <h3 className="text-2xl font-bold text-navy-900 mb-4">Message Received</h3>
                            <p className="text-slate-600">We appreciate you reaching out. We will be in touch shortly.</p>
                        </div>
                    ) : (
                        <>
                            {/* HubSpot Form */}
                            {!HUBSPOT_CONFIG.useNativeForm && (
                                <div className="bg-white p-8 md:p-12 rounded-lg border border-slate-200 shadow-sm">
                                    <div id="hubspot-form-container" ref={formContainerRef} className="min-h-[400px]" />
                                </div>
                            )}

                            {/* Native Form */}
                            {HUBSPOT_CONFIG.useNativeForm && (
                                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-lg border border-slate-200 shadow-sm" noValidate>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-semibold text-navy-900">First Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={cn("w-full px-4 py-3 rounded border bg-slate-50 focus:bg-white focus:ring-1 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all", errors.firstName ? "border-red-500" : "border-slate-200")}
                                                required
                                            />
                                            {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-semibold text-navy-900">Email <span className="text-red-500">*</span></label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={cn("w-full px-4 py-3 rounded border bg-slate-50 focus:bg-white focus:ring-1 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all", errors.email ? "border-red-500" : "border-slate-200")}
                                                required
                                            />
                                            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="organization" className="text-sm font-semibold text-navy-900">Organization / Affiliation</label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-slate-200 bg-slate-50 focus:bg-white focus:ring-1 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="interest" className="text-sm font-semibold text-navy-900">Primary Interest</label>
                                        <select
                                            id="interest"
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded border border-slate-200 bg-slate-50 focus:bg-white focus:ring-1 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all"
                                        >
                                            {GET_INVOLVED_CONTENT.form.fields.interest.options?.map(opt => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full btn btn-primary bg-blue-900 text-white hover:bg-blue-950 py-4 text-base mt-6 disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                    </button>
                                </form>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
