"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion"; // ✅ correct import
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: TextGenerateEffectProps) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration,
                delay: stagger(0.2),
            }
        );
        // ✅ add animate & filter & duration to deps, NOT scope.current
    }, [animate, filter, duration]);

    return (
        <div className={cn("font-bold text-center", className)}>
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => (
                    <motion.span
                        key={`${word}-${idx}`}
                        className="text-black dark:text-white opacity-0 mx-auto max-w-4xl text-center text-3xl md:text-4xl font-bold leading-snug tracking-wide"
                        style={{
                            filter: filter ? "blur(10px)" : "none",
                            display: "inline-block",
                            marginRight: "0.25rem",
                        }}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};
