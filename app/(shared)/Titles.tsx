"use client";

import { TitleHeader } from "@/lib/types";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

export function Titles({ content }: TitleHeader) {
  const Wrapper = tw.div`flex flex-col text-center items-center justify-center mx-auto py-12`;
  const Icon = tw.div`flex mx-auto items-center justify-center py-4`;
  const ImageWrap = tw.div`relative w-10 h-10 py-4`;
  const Preheading = tw.h4`text-xs mb-2 uppercase tracking-widest font-body`;
  const Heading = tw.h1`text-3xl md:text-4xl lg:text-5xl py-3 font-title`;
  const SubHeading = tw.h2`text-3xl font-light tracking-tight font-body`;
  const Body = tw.p`mt-3 max-w-3xl mx-auto text-sm md:text-md font-body`;

  return (
    <Wrapper>
      {content?.icon && <Icon>{content.icon}</Icon>}
      {content?.image && (
        <ImageWrap>
          <Image src={content.image} alt="" fill />
        </ImageWrap>
      )}
      {content?.preheading && <Preheading>{content.preheading}</Preheading>}
      {content?.heading && <Heading>{content.heading}</Heading>}
      {content?.subheading && <SubHeading>{content.subheading}</SubHeading>}
      {content?.body && <Body>{content.body}</Body>}
    </Wrapper>
  );
}

export function TitlesLeft({ content }: TitleHeader) {
  const Wrapper = tw.div`flex flex-col text-center items-start justify-start text-left max-w-prose`;
  const Icon = tw.div`flex items-start justify-start`;
  const ImageWrap = tw.div`relative w-10 h-10 py-4`;
  const Preheading = tw.h4`text-sm font-semibold mb-3`;
  const Heading = tw.h1`text-3xl font-bold sm:text-4xl sm:tracking-tight font-title`;
  const SubHeading = tw.h2`text-3xl font-semibold tracking-tight`;
  const Body = tw.p`mt-3 max-w-prose text-md text-gray-800 leading-relaxed font-body`;

  return (
    <Wrapper>
      {content?.icon && <Icon>{content.icon}</Icon>}
      {content?.image && (
        <ImageWrap>
          <Image src={content.image} alt="" fill />
        </ImageWrap>
      )}
      {content?.preheading && <Preheading>{content.preheading}</Preheading>}
      {content?.heading && <Heading>{content.heading}</Heading>}
      {content?.subheading && <SubHeading>{content.subheading}</SubHeading>}
      {content?.body && <Body>{content.body}</Body>}
    </Wrapper>
  );
}
