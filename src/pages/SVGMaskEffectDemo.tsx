"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";

export function SVGMaskEffectDemo() {
    return (
        <div className="flex h-full w-full items-center justify-center overflow-hidden bg-black">
            <MaskContainer
                revealText={<>
                    <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-white leading-snug tracking-wide">
                        The first rule of MRR Club is you do not talk about MRR Club. The
                        second rule of MRR Club is you DO NOT talk about MRR Club.

                        Discover the power of{" "}
                        <span className="text-blue-500">Tailwind CSS v4</span> with native CSS
                        variables and container queries with
                        <span className="text-blue-500">advanced animations</span>.
                    </p>
                </>
                }
                className="h-[40rem] rounded-md border text-center text-white dark:text-black"
            >
                <TextGenerateEffectDemo />
            </MaskContainer>
        </div>
    );
}
