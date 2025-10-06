"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current?.appendChild(duplicatedItem);
            });

            // Set scroll direction and speed
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
            containerRef.current.style.setProperty(
                "--animation-duration",
                speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
            );

            setStart(true);
        }
    }, [direction, speed]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <li
                        key={item.name}
                        className={cn(
                            "relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-800",
                            "bg-[linear-gradient(180deg,#1f1f21,#0e0e10)] md:w-[450px]",
                            "px-8 py-6 shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-transform duration-300",
                            "hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                        )}
                    >
                        <blockquote>
                            <span className="relative z-20 text-sm leading-[1.6] font-normal text-zinc-300">
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className="text-sm leading-[1.6] font-semibold text-zinc-200">
                                        {item.name}
                                    </span>
                                    <span className="text-sm leading-[1.6] font-normal text-zinc-400">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};