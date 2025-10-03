"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
                className,
            )}
        >
            {items.map((item, idx) => (
                <motion.a
                    href={item.link}
                    key={item.link}
                    className="relative group block h-full w-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-3xl"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileTap={{ scale: 0.98 }}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-700 dark:bg-slate-800/80"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            />
                        )}
                    </AnimatePresence>

                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </motion.a>
            ))}
        </div>
    );
};

/* ---------------- CARD ---------------- */
export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black p-6 shadow-md transition-colors group-hover:border-slate-700 dark:border-white/20",
                className,
            )}
        >
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => (
    <h4 className={cn("mt-4 text-lg font-semibold text-zinc-100", className)}>
        {children}
    </h4>
);

export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => (
    <p
        className={cn(
            "mt-3 text-sm leading-relaxed tracking-wide text-zinc-400",
            className,
        )}
    >
        {children}
    </p>
);
