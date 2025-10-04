"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

// ✅ Constants defined outside to prevent re-creation on every render
const BACKGROUND_COLORS = ["#0f172a", "#000000", "#171717"];
const LINEAR_GRADIENTS = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
];

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const [backgroundGradient, setBackgroundGradient] = useState(LINEAR_GRADIENTS[0]);
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        // If you want full-page scroll instead of container scroll:
        // target: ref,
        container: ref,
        offset: ["start start", "end start"],
    });

    const cardLength = content.length;

    // 🧮 Update active card based on scroll progress
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, i) => i / cardLength);
        const closestBreakpoint = cardsBreakpoints.reduce((acc, bp, i) => {
            return Math.abs(latest - bp) < Math.abs(latest - cardsBreakpoints[acc])
                ? i
                : acc;
        }, 0);
        setActiveCard(closestBreakpoint);
    });

    // 🎨 Update gradient when active card changes
    useEffect(() => {
        setBackgroundGradient(LINEAR_GRADIENTS[activeCard % LINEAR_GRADIENTS.length]);
    }, [activeCard]);

    return (
        <motion.div
            animate={{
                backgroundColor: BACKGROUND_COLORS[activeCard % BACKGROUND_COLORS.length],
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            ref={ref}
            className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 scrollbar-hide"
        >
            {/* Left content section */}
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={`${item.title}-${index}`} className="my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                transition={{ duration: 0.4 }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                transition={{ duration: 0.4 }}
                                className="mt-10 max-w-sm text-base text-slate-300"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>

            {/* Right sticky preview card */}
            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block transition-all duration-700",
                    contentClassName
                )}
            >
                {content[activeCard]?.content ?? null}
            </div>
        </motion.div>
    );
};
