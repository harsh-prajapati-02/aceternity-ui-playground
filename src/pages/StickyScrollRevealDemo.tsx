"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
    {
        title: "Collaborative Editing",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
            <div className="h-full w-full p-1">
                <Image
                    src="https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop"
                    alt="header"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover rounded-sm"
                />
            </div>
        ),
    },
    {
        title: "Real time changes",
        description:
            "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
            <div className="h-full w-full p-1">
                <Image
                    src="https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop"
                    alt="header"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover rounded-sm"
                />
            </div>
        ),
    },
    {
        title: "Version control",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full p-1">
                <Image
                    src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop"
                    alt="header"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover rounded-sm"
                />
            </div>
        ),
    },
    {
        title: "Running out of content",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full p-1">
                <Image
                    src="https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop"
                    alt="header"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover rounded-sm"
                />
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="w-full py-4">
            <StickyScroll content={content} />
        </div>
    );
}
