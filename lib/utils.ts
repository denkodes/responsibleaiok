/**
 * UTILITY FUNCTIONS
 * 
 * Helper functions used throughout the application.
 * Each function includes JSDoc comments for IDE hints and beginner understanding.
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes intelligently
 * 
 * This function combines multiple class names and resolves conflicts.
 * For example, if you pass "p-4" and "p-6", it will keep only "p-6".
 * 
 * @param inputs - Class names to merge (strings, arrays, objects, etc.)
 * @returns Merged class name string
 * 
 * @example
 * cn("px-4 py-2", "bg-blue-500", { "text-white": true })
 * // Returns: "px-4 py-2 bg-blue-500 text-white"
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to a section on the page
 * 
 * Used for anchor navigation. Includes offset for fixed header.
 * 
 * @param elementId - ID of the element to scroll to (without #)
 * @param offset - Pixels to offset from top (default: 80 for nav height)
 * 
 * @example
 * scrollToSection("mission", 100)
 */
export function scrollToSection(elementId: string, offset: number = 80): void {
    const element = document.getElementById(elementId);

    if (!element) {
        console.warn(`Element with id "${elementId}" not found`);
        return;
    }

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    });
}

/**
 * Validates email format
 * 
 * Uses a simple but effective regex pattern.
 * For production, consider more robust validation or a library.
 * 
 * @param email - Email address to validate
 * @returns true if valid, false otherwise
 * 
 * @example
 * validateEmail("user@example.com") // true
 * validateEmail("invalid-email") // false
 */
export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Formats a date for display
 * 
 * @param date - Date to format
 * @param locale - Locale string (default: "en-US")
 * @returns Formatted date string
 * 
 * @example
 * formatDate(new Date()) // "January 5, 2026"
 */
export function formatDate(date: Date, locale: string = "en-US"): string {
    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
}

/**
 * Debounces a function call
 * 
 * Useful for performance optimization (e.g., scroll or resize handlers).
 * The function will only execute after the specified delay has passed
 * without the function being called again.
 * 
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 * 
 * @example
 * const debouncedSearch = debounce((query) => search(query), 300);
 * input.addEventListener("input", (e) => debouncedSearch(e.target.value));
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;

    return function (this: any, ...args: Parameters<T>) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Checks if user prefers reduced motion
 * 
 * Respects accessibility preferences for animations.
 * Use this to conditionally disable or simplify animations.
 * 
 * @returns true if user prefers reduced motion
 * 
 * @example
 * if (!prefersReducedMotion()) {
 *   element.classList.add("fade-in");
 * }
 */
export function prefersReducedMotion(): boolean {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Truncates text to a specified length
 * 
 * Adds ellipsis (...) if text exceeds max length.
 * 
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 * 
 * @example
 * truncateText("This is a long sentence", 10) // "This is a..."
 */
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
}
