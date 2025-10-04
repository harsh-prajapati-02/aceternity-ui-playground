// import { MacbookScrollDemo } from "@/pages/MacbookScrollDemo";
import { AppleCardsCarouselDemo } from "@/pages/AppleCardsCarouselDemo";
import { CardHoverEffectDemo } from "@/pages/CardHoverEffectDemo";
import { DraggableCardDemo } from "@/pages/DraggableCardDemo";
import { ExpandableCardDemo } from "@/pages/ExpandableCardDemo";
import { FeaturesSectionDemo } from "@/pages/FeaturesSectionDemo";
import { FloatingDockDemo } from "@/pages/FloatingDockDemo";
import { HeroParallaxDemo } from "@/pages/HeroParallaxDemo";
import { SpotlightPreview } from "@/pages/SpotlightPreview";
// import { NavbarDemo } from "@/pages/NavbarDemo";
import { SVGMaskEffectDemo } from "@/pages/SVGMaskEffectDemo";
import { TabsDemo } from "@/pages/TabsDemo";
import { TextHoverEffectDemo } from "@/pages/TextHoverEffectDemo";
import { TimelineDemo } from "@/pages/TimelineDemo";
import { WobbleCardDemo } from "@/pages/WobbleCardDemo";

export default function Home() {
  return (
    <>
      <SpotlightPreview />
      {/* <NavbarDemo /> */}
      <FloatingDockDemo />
      <HeroParallaxDemo />
      {/* <MacbookScrollDemo /> */}
      <SVGMaskEffectDemo />
      <FeaturesSectionDemo />
      <TimelineDemo />
      <CardHoverEffectDemo />
      <WobbleCardDemo />  
      <ExpandableCardDemo />
      <TabsDemo />
      <AppleCardsCarouselDemo />
      <DraggableCardDemo />
      <TextHoverEffectDemo />
    </>
  );
}
