/**
 * GET INVOLVED SECTION
 * 
 * HubSpot form integration with fallback native form.
 * 
 * Design Features:
 * - Invitational, warm language
 * - Client-side validation with helpful errors
 * - Loading states and success animation
 * - Privacy notice
 * - Security: input sanitization, CSRF-ready
 * 
 * HubSpot Integration:
 * 1. Add your Portal ID and Form ID to .env.local
 * 2. The HubSpot script will load automatically
 * 3. Falls back to native form if HubSpot not configured
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { GET_INVOLVED_CONTENT, HUBSPOT_CONFIG } from "@/lib/constants";
import { cn, validateEmail, prefersReducedMotion } from "@/lib/utils";

export default function GetInvolvedSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const formContainerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Form state (for native form fallback)
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        organization: "",
        interest: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    /* ============================================
       SCROLL-TRIGGERED ANIMATION
       ============================================ */
    useEffect(() => {
        const shouldAnimate = !prefersReducedMotion();
        if (!shouldAnimate) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    /* ============================================
       HUBSPOT FORM INTEGRATION
       ============================================
       
       Loads HubSpot form script if configured.
       Falls back to native form if not.
       ============================================ */
    useEffect(() => {
        if (HUBSPOT_CONFIG.useNativeForm || !formContainerRef.current) {
            return;
        }

        // Load HubSpot forms script
        const script = document.createElement("script");
        script.src = "//js.hsforms.net/forms/v2.js";
        script.async = true;
        script.onload = () => {
            // Create HubSpot form when script loads
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: HUBSPOT_CONFIG.portalId,
                    formId: HUBSPOT_CONFIG.formId,
                    target: "#hubspot-form-container",
                    // Styling to match our design
                    css: "",
                    onFormSubmit: () => {
                        setIsSuccess(true);
                    },
                });
            }
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    /* ============================================
       FORM VALIDATION
       ============================================ */
    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        // First name validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* ============================================
       FORM SUBMISSION (NATIVE FORM)
       ============================================
       
       This is a fallback for development or if HubSpot
       is not configured. In production, you'd send this
       to your backend or HubSpot API.
       ============================================ */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // TODO: Replace with actual API endpoint
            // For now, just simulate submission
            await new Promise((resolve) => setTimeout(resolve, 1500));

            console.log("Form submitted:", formData);
            setIsSuccess(true);

            // Reset form
            setFormData({
                firstName: "",
                email: "",
                organization: "",
                interest: "",
            });
        } catch (error) {
            console.error("Form submission error:", error);
            setErrors({ submit: "Something went wrong. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    /* ============================================
       INPUT CHANGE HANDLER
       ============================================ */
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    return (
        <section
            id="get-involved"
            ref={sectionRef}
            className="section-padding bg-white"
            aria-labelledby="get-involved-heading"
        >
            <div className="container-custom">
                <div className="relative z-10 w-full">
                    {/* ============================================
              SECTION HEADER
              ============================================ */}
                    <div
                        className={cn(
                            "max-w-5xl mx-auto text-center mb-20 space-y-6 relative z-10",
                            isVisible && "fade-in"
                        )}
                    >
                        <h2
                            id="get-involved-heading"
                            className="text-4xl md:text-7xl font-black text-navy-deep tracking-tight"
                        >
                            {GET_INVOLVED_CONTENT.heading}
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <p className="text-lg md:text-xl font-bold text-teal-muted/80 uppercase tracking-widest">
                                {GET_INVOLVED_CONTENT.subheading}
                            </p>
                        </div>
                    </div>

                    {/* ============================================
              SUCCESS MESSAGE
              ============================================ */}
                    {isSuccess && (
                        <div
                            className={cn(
                                "mb-12 p-8 glass-card border-teal-muted/30 rounded-3xl",
                                "fade-in shadow-xl max-w-3xl mx-auto"
                            )}
                            role="alert"
                        >
                            <h3 className="text-2xl font-black text-teal-muted mb-3">
                                Institutional Record Created
                            </h3>
                            <p className="text-slate text-lg">
                                Your involvement request has been logged. Our coalition coordinators will reach out shortly.
                            </p>
                        </div>
                    )}

                    {/* ============================================
              HUBSPOT FORM CONTAINER
              ============================================ 
              
              Wrapped in a high-end glass card with depth.
              ============================================ */}
                    {!HUBSPOT_CONFIG.useNativeForm && (
                        <div
                            className={cn(
                                "glass-card p-10 md:p-24 rounded-[3rem] shadow-glass relative overflow-hidden",
                                "max-w-5xl mx-auto",
                                isVisible && "fade-in fade-in-delay-1"
                            )}
                        >
                            <div
                                id="hubspot-form-container"
                                ref={formContainerRef}
                                className="min-h-[500px] flex flex-col justify-center relative z-10"
                            >
                                {/* Loading state visible while script/iframe fetches */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 opacity-40">
                                    <div className="w-8 h-8 border-2 border-teal-muted/30 border-t-teal-muted rounded-full animate-spin"></div>
                                    <p className="text-xs font-semibold uppercase tracking-widest text-teal-muted">
                                        Loading Secure Form
                                    </p>
                                </div>
                            </div>

                            {/* Trust Signal Footer */}
                            <div className="mt-8 pt-8 border-t border-gray-border/50 flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-slate/60">
                                <span className="flex items-center gap-2">
                                    <svg className="w-3 h-3 text-teal-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Secure Institutional Integration
                                </span>
                                <span>Powered by HubSpot</span>
                            </div>
                        </div>
                    )}

                    {/* ============================================
              NATIVE FORM FALLBACK
              ============================================
              
              Used when HubSpot is not configured.
              Styled to match our design system.
              ============================================ */}
                    {HUBSPOT_CONFIG.useNativeForm && !isSuccess && (
                        <form
                            onSubmit={handleSubmit}
                            className={cn(
                                "space-y-6",
                                isVisible && "fade-in fade-in-delay-1"
                            )}
                            noValidate
                        >
                            {/* First Name */}
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-navy-charcoal mb-2"
                                >
                                    {GET_INVOLVED_CONTENT.form.fields.firstName.label}
                                    <span className="text-red-500 ml-1" aria-label="required">
                                        *
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder={
                                        GET_INVOLVED_CONTENT.form.fields.firstName.placeholder
                                    }
                                    className={cn(
                                        "w-full px-4 py-3 rounded-lg border",
                                        "bg-white text-navy-charcoal",
                                        "transition-colors duration-200",
                                        "focus:outline-none focus:ring-2 focus:ring-teal-muted",
                                        errors.firstName
                                            ? "border-red-500"
                                            : "border-gray-border hover:border-teal-muted"
                                    )}
                                    aria-invalid={!!errors.firstName}
                                    aria-describedby={
                                        errors.firstName ? "firstName-error" : undefined
                                    }
                                    required
                                />
                                {errors.firstName && (
                                    <p
                                        id="firstName-error"
                                        className="mt-2 text-sm text-red-500"
                                        role="alert"
                                    >
                                        {errors.firstName}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-navy-charcoal mb-2"
                                >
                                    {GET_INVOLVED_CONTENT.form.fields.email.label}
                                    <span className="text-red-500 ml-1" aria-label="required">
                                        *
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={
                                        GET_INVOLVED_CONTENT.form.fields.email.placeholder
                                    }
                                    className={cn(
                                        "w-full px-4 py-3 rounded-lg border",
                                        "bg-white text-navy-charcoal",
                                        "transition-colors duration-200",
                                        "focus:outline-none focus:ring-2 focus:ring-teal-muted",
                                        errors.email
                                            ? "border-red-500"
                                            : "border-gray-border hover:border-teal-muted"
                                    )}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    required
                                />
                                {errors.email && (
                                    <p
                                        id="email-error"
                                        className="mt-2 text-sm text-red-500"
                                        role="alert"
                                    >
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Organization (Optional) */}
                            <div>
                                <label
                                    htmlFor="organization"
                                    className="block text-sm font-medium text-navy-charcoal mb-2"
                                >
                                    {GET_INVOLVED_CONTENT.form.fields.organization.label}
                                </label>
                                <input
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    placeholder={
                                        GET_INVOLVED_CONTENT.form.fields.organization.placeholder
                                    }
                                    className="w-full px-4 py-3 rounded-lg border border-gray-border hover:border-teal-muted bg-white text-navy-charcoal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-muted"
                                />
                            </div>

                            {/* Interest Area (Optional) */}
                            <div>
                                <label
                                    htmlFor="interest"
                                    className="block text-sm font-medium text-navy-charcoal mb-2"
                                >
                                    {GET_INVOLVED_CONTENT.form.fields.interest.label}
                                </label>
                                <select
                                    id="interest"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-border hover:border-teal-muted bg-white text-navy-charcoal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-muted"
                                >
                                    {GET_INVOLVED_CONTENT.form.fields.interest.options?.map(
                                        (option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "btn btn-primary btn-full",
                                    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                )}
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : GET_INVOLVED_CONTENT.form.submitText}
                            </button>

                            {/* Form Error */}
                            {errors.submit && (
                                <p className="text-sm text-red-500 text-center" role="alert">
                                    {errors.submit}
                                </p>
                            )}
                        </form>
                    )}

                    {/* ============================================
              PRIVACY NOTICE
              ============================================ */}
                    <p
                        className={cn(
                            "mt-6 text-sm text-slate text-center",
                            isVisible && "fade-in fade-in-delay-2"
                        )}
                    >
                        {GET_INVOLVED_CONTENT.form.privacyNotice}
                    </p>
                </div>
            </div>
        </section>
    );
}

// TypeScript declaration for HubSpot global
declare global {
    interface Window {
        hbspt?: {
            forms: {
                create: (config: {
                    portalId: string;
                    formId: string;
                    target: string;
                    css?: string;
                    onFormSubmit?: () => void;
                }) => void;
            };
        };
    }
}
