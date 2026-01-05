/**
 * NAVIGATION COMPONENT
 * 
 * Theme: Deep Institutional
 * Refactored to match the new Navy/Indigo palette.
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, ORG_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show background slightly earlier
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const el = document.getElementById(targetId);
        if (el) {
            const navHeight = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled || isMobileMenuOpen
                    ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-2 shadow-md"
                    : "bg-transparent py-5"
            )}
            aria-label="Main navigation"
        >
            <div className="container-standard flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#home"
                    onClick={(e) => scrollToSection(e, "#home")}
                    className="text-2xl md:text-3xl font-black text-navy-900 tracking-tight flex items-center gap-2"
                >
                    <div className={cn(
                        "w-6 h-1 rounded-full transition-colors",
                        isScrolled ? "bg-blue-900" : "bg-blue-800"
                    )}></div>
                    {ORG_INFO.name}
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors tracking-wide"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="#get-involved" onClick={(e) => scrollToSection(e, "#get-involved")} className="btn btn-primary">
                            Get Involved
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-navy-900"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4">
                    <ul className="flex flex-col space-y-4">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="block text-lg font-medium text-navy-900 py-2 border-b border-slate-50 hover:text-blue-900"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
