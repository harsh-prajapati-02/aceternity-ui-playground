import React from "react";
// import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/Spotlight";

export function SpotlightPreview() {
  return (<>
    {/* <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center"> */}
      {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      /> */}

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-0"
        fill="white"
      />

    {/* </div> */}
    </>
  );
}
