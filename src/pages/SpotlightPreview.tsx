import React from "react";
// import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/Spotlight";

export function SpotlightPreview() {
    return (
    <>
        <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
        />
        <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-0"
            fill="white"
        />
    </>
    );
}
