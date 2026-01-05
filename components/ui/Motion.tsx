"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MotionProps {
    children: ReactNode;
    className?: string; // Tailwind classes
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
}

export const FadeIn = ({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.5
}: MotionProps) => { // Reduced default duration for snappier feel

    const directions = {
        up: { y: 20 },      // Subtle movement
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
        none: { x: 0, y: 0 }
    };

    const initial = {
        opacity: 0,
        ...directions[direction]
    };

    return (
        <motion.div
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} // Trigger slightly before full view
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Custom "Apple-like" spring-feel ease
            }}
            className={cn("w-full", className)}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({ children, className, staggerDelay = 0.1 }: { children: ReactNode, className?: string, staggerDelay?: number }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const ScaleOnHover = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -4 }} // Subtle lift and scale
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} // Snappy spring physics
            className={className}
        >
            {children}
        </motion.div>
    );
};
