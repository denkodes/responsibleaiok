/**
 * NAVIGATION COMPONENT
 * 
 * Sticky navigation with scroll tracking and glassmorphism effect.
 * 
 * Features:
 * - Active section highlighting (Intersection Observer)
 * - Smooth scroll to sections
 * - Mobile hamburger menu (visible only on narrow screens)
 * - Desktop horizontal menu (visible on md+)
 * - Accessibility-first (keyboard navigation, ARIA labels, focus rings)
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, ORG_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navigation() {
    // State for mobile menu toggle
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // State for scroll position (adds glass effect when scrolled)
    const [isScrolled, setIsScrolled] = useState(false);

    // State for tracking which section is currently in view
    const [activeSection, setActiveSection] = useState("home");

    /* ============================================
       SCROLL DETECTION
       ============================================ */
    useEffect(() => {
        const handleScroll = () => {
            // If scrolled more than 20px, add glass effect
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup: remove event listener when component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ============================================
       ACTIVE SECTION TRACKING
       ============================================ */
    useEffect(() => {
        // Get all section elements
        const sections = NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            return document.getElementById(id);
        }).filter(Boolean); // Remove null values

        // Intersection Observer configuration
        const observerOptions = {
            // Trigger when section is 20% visible
            threshold: 0.2,
            // Offset from top (accounts for nav height)
            rootMargin: "-80px 0px -80% 0px",
        };

        // Callback when section visibility changes
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Update active section when it becomes visible
                    setActiveSection(entry.target.id);
                }
            });
        };

        // Create observer
        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        // Observe all sections
        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        // Cleanup: stop observing when component unmounts
        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    /* ============================================
       SMOOTH SCROLL HANDLER
       ============================================ */
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculate position with offset for fixed nav
            const navHeight = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            // Close mobile menu after navigation
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={cn(
                // Base styles
                "fixed top-0 left-0 right-0 z-50",
                "transition-all duration-300 ease-smooth",

                // Conditional glassmorphism when scrolled OR mobile menu open
                isScrolled || isMobileMenuOpen
                    ? "glass-nav shadow-md border-b border-gray-border"
                    : "bg-transparent py-4"
            )}
            aria-label="Main navigation"
        >
            <div className="container-custom h-full">
                <div className="flex items-center justify-between h-20 md:h-24 px-4 md:px-0">
                    {/* ============================================
              LOGO / ORGANIZATION NAME
              ============================================ */}
                    <Link
                        href="#home"
                        onClick={(e) => handleNavClick(e, "#home")}
                        className="text-2xl font-black text-navy-deep hover:text-teal-muted transition-all duration-300 tracking-[-0.05em] flex items-center gap-2 focus-visible:outline-teal-muted rounded-md px-2 -ml-2"
                        aria-label="Responsible AI OK home"
                    >
                        <div className="w-8 h-1 bg-teal-muted rounded-full"></div>
                        {ORG_INFO.name}
                    </Link>

                    {/* ============================================
              DESKTOP NAVIGATION LINKS (Visible md+)
              ============================================ */}
                    <ul className="hidden md:flex items-center gap-8 lg:gap-10">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={cn(
                                            // Base styles
                                            "text-sm font-semibold transition-all duration-300",
                                            "hover:text-teal-muted tracking-wide py-2",
                                            "focus-visible:outline-teal-muted focus-visible:outline-offset-4 rounded-sm",

                                            // Active state
                                            isActive
                                                ? "text-teal-muted border-b-2 border-teal-muted"
                                                : "text-slate"
                                        )}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* ============================================
              MOBILE MENU BUTTON (Visible sm only)
              ============================================ */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-4 -mr-4 text-navy-deep hover:text-teal-muted transition-colors focus-visible:outline-teal-muted rounded-md"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between relative">
                            <span
                                className={cn(
                                    "block h-0.5 w-full bg-current transform transition-all duration-300 origin-center absolute top-0",
                                    isMobileMenuOpen ? "rotate-45 top-2.5" : "top-0"
                                )}
                            />
                            <span
                                className={cn(
                                    "block h-0.5 w-full bg-current transform transition-all duration-300 absolute top-2.5",
                                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                                )}
                            />
                            <span
                                className={cn(
                                    "block h-0.5 w-full bg-current transform transition-all duration-300 origin-center absolute top-5",
                                    isMobileMenuOpen ? "-rotate-45 top-2.5" : "top-5"
                                )}
                            />
                        </div>
                    </button>
                </div>

                {/* ============================================
            MOBILE MENU DROPDOWN
            ============================================ */}
                <div
                    id="mobile-menu"
                    className={cn(
                        "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md absolute left-0 right-0 border-b border-gray-border/50 shadow-lg",
                        isMobileMenuOpen
                            ? "max-h-[80vh] opacity-100 py-6"
                            : "max-h-0 opacity-0 py-0"
                    )}
                >
                    <ul className="flex flex-col container-custom space-y-2">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.href.replace("#", "");

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={cn(
                                            "block py-4 text-lg font-bold transition-colors w-full border-b border-gray-100 last:border-0",
                                            "hover:text-teal-muted hover:bg-gray-50/50 px-4 rounded-lg",
                                            "active:scale-[0.98] transform duration-100",
                                            isActive
                                                ? "text-teal-muted"
                                                : "text-navy-charcoal"
                                        )}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
