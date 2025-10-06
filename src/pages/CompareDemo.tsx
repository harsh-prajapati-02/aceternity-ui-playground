import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
    return (
        <div className="p-9 border rounded-3xl dark:bg-neutral-900 bg-neutral-900 border-neutral-800 dark:border-neutral-800">
            <Compare
                firstImage="https://assets.aceternity.com/code-problem.png"
                secondImage="https://assets.aceternity.com/code-solution.png"
                firstImageClassName="object-cover object-left-top"
                secondImageClassname="object-cover object-left-top"
                className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                slideMode="hover"
                autoplay={true}
            />
        </div>
    );
}
