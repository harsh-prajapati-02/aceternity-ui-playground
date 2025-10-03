// import { MacbookScrollDemo } from "@/pages/MacbookScrollDemo";
import { CardHoverEffectDemo } from "@/pages/CardHoverEffectDemo";
import { FloatingDockDemo } from "@/pages/FloatingDockDemo";
import { HeroParallaxDemo } from "@/pages/HeroParallaxDemo";
// import { NavbarDemo } from "@/pages/NavbarDemo";
import { SVGMaskEffectDemo } from "@/pages/SVGMaskEffectDemo";
import { TimelineDemo } from "@/pages/TimelineDemo";

export default function Home() {
  return (
    <>
      {/* <NavbarDemo /> */}
      <FloatingDockDemo />
      <HeroParallaxDemo />
      {/* <MacbookScrollDemo /> */}
      <SVGMaskEffectDemo />
      <CardHoverEffectDemo />
      <TimelineDemo />
    </>
  );
}
