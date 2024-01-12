import tw from "tailwind-styled-components";
import React from "react";

export const Wrapper = tw.section`mx-auto w-full py-24 snap-always snap-center mx-auto`;
export const InnerWrap = tw.div`container mx-auto max-w-7xl px-3 xl:px-0`;

export const Icon = tw.div`flex items-start justify-start mb-3`;
export const ImageWrap = tw.div`relative w-10 h-10 py-4`;
export const Preheading = tw.h4`text-sm uppercase font-light tracking-[0.3em] text-brand-base-a font-body max-w-3xl mb-6`;
export const Heading = tw.h2`text-5xl max-w-3xl mb-2`;
export const SubHeading = tw.h3`text-3xl md:text-3xl tracking-tight font-body max-w-3xl`;
export const Body = tw.p`text-gray-400 max-w-prose text-md font-body leading-relaxed`;
