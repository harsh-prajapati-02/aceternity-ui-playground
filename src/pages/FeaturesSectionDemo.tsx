"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { motion } from "motion/react";
import Image from "next/image";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { Cover } from "@/components/ui/cover";

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Track issues effectively",
            description:
                "Track and manage your project issues with ease using our intuitive interface.",
            skeleton: <SkeletonOne />,
            className:
                "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
        },
        {
            title: "Capture pictures with AI",
            description:
                "Capture stunning photos effortlessly using our advanced AI technology.",
            skeleton: <SkeletonTwo />,
            className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
        },
        {
            title: "Watch our AI on YouTube",
            description:
                "Whether it’s you or Tyler Durden, you can get to know about our product on YouTube.",
            skeleton: <SkeletonThree />,
            className:
                "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
        },
        {
            title: "Deploy in seconds",
            description:
                "With our blazing fast, state-of-the-art cloud services (read AWS), you can deploy your model in seconds.",
            skeleton: <SkeletonFour />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ];

    return (
        <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
            <div className="px-8 text-center">
                <h4 className="text-3xl lg:text-5xl font-medium text-neutral-200 dark:text-white">
                    <Cover>Packed with thousands of features</Cover>
                </h4>
                <p className="text-sm lg:text-base mt-4 text-neutral-400 dark:text-neutral-300 max-w-2xl mx-auto">
                    From image generation to video creation, Everything AI provides APIs
                    for literally everything — it can even write this copy for you.
                </p>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border border-neutral-800 rounded-md dark:border-neutral-800">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} className={feature.className}>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                            <div className="h-full w-full">{feature.skeleton}</div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => (
    <div className={cn("p-4 sm:p-8 relative overflow-hidden border-neutral-800", className)}>
        {children}
    </div>
);

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => (
    <p className="text-xl md:text-2xl font-semibold text-neutral-200 dark:text-white">
        {children}
    </p>
);

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => (
    <p className="text-sm md:text-base text-neutral-400 dark:text-neutral-300 my-2 max-w-sm">
        {children}
    </p>
);

export const SkeletonOne = () => (
    <div className="relative flex py-8 px-2 gap-10 h-full">
        <div className="w-full p-5 mx-auto bg-neutral-900 dark:bg-neutral-900 shadow-2xl group h-full">
            <div className="flex flex-col space-y-2">
                <Image
                    src="https://ui.aceternity.com/linear.webp"
                    alt="header"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover rounded-sm"
                />
            </div>
        </div>

        {/* gradient overlays */}
        <div className="absolute bottom-0 inset-x-0 h-60 bg-gradient-to-t from-black dark:from-black to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-60 bg-gradient-to-b from-black dark:from-black to-transparent pointer-events-none" />
    </div>
);

export const SkeletonThree = () => (
    <a
        href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex gap-10 h-full group/image"
    >
        <div className="w-full bg-transparent group h-full">
            <div className="flex flex-col relative">
                <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
                <Image
                    src="https://assets.aceternity.com/fireship.jpg"
                    alt="YouTube Thumbnail"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover rounded-sm group-hover/image:blur-md transition-all duration-200"
                />
            </div>
        </div>
    </a>
);

export const SkeletonTwo = () => {
    const images = [
        "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop",
    ];

    const imageVariants = {
        whileHover: { scale: 1.1, rotate: 0, zIndex: 100 },
        whileTap: { scale: 1.1, rotate: 0, zIndex: 100 },
    };

    return (
        <div className="relative flex flex-col items-start p-8 gap-10 h-full border-neutral-900 overflow-hidden">
            {[0, 1].map((row) => (
                <div key={row} className="flex flex-row -ml-20">
                    {images.map((image, idx) => (
                        <motion.div
                            key={`${row}-${idx}`}
                            variants={imageVariants}
                            whileHover="whileHover"
                            whileTap="whileTap"
                            style={{ rotate: Math.random() * 20 - 10 }}
                            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 border dark:border-neutral-700 overflow-hidden"
                        >
                            <Image
                                src={image}
                                alt="AI capture sample"
                                width={500}
                                height={500}
                                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            ))}
            <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-black dark:from-black to-transparent pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-black dark:from-black to-transparent pointer-events-none" />
        </div>
    );
};

export const SkeletonFour = () => (
    <div className="h-60 flex flex-col items-center relative bg-transparent mt-10">
        <Globe className="absolute -right-10 -bottom-80" />
    </div>
);

export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;
        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 1200,
            height: 1200,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => globe.destroy();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: "1 / 1" }}
            className={className}
        />
    );
};
