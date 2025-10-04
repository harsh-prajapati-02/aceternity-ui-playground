// import { MacbookScrollDemo } from "@/pages/MacbookScrollDemo";
import { AppleCardsCarouselDemo } from "@/pages/AppleCardsCarouselDemo";
import { CardHoverEffectDemo } from "@/pages/CardHoverEffectDemo";
import { ExpandableCardDemo } from "@/pages/ExpandableCardDemo";
import { FloatingDockDemo } from "@/pages/FloatingDockDemo";
import { HeroParallaxDemo } from "@/pages/HeroParallaxDemo";
import { SpotlightPreview } from "@/pages/SpotlightPreview";
// import { NavbarDemo } from "@/pages/NavbarDemo";
import { SVGMaskEffectDemo } from "@/pages/SVGMaskEffectDemo";
import { TabsDemo } from "@/pages/TabsDemo";
import { TextHoverEffectDemo } from "@/pages/TextHoverEffectDemo";
import { TimelineDemo } from "@/pages/TimelineDemo";

export default function Home() {
  return (
    <>
    <SpotlightPreview />
      {/* <NavbarDemo /> */}
      <FloatingDockDemo />
      <HeroParallaxDemo />
      {/* <MacbookScrollDemo /> */}
      <SVGMaskEffectDemo />
      <CardHoverEffectDemo />
      <TimelineDemo />
      <ExpandableCardDemo />
      <TabsDemo />
      <AppleCardsCarouselDemo />
      <TextHoverEffectDemo />
    </>
  );
}
