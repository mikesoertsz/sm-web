import { Button } from "@/components/ui/button";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import Image from "next/image";
import React from "react";
import { BiLogoZoom } from "react-icons/bi";
import tw from "tailwind-styled-components";

type Props = {};



export default function Hero({}: Props) {
  return (
    <Wrapper className="py-[10vh] bg-brand-base-h">
      <InnerWrap className="flex-col gap-4 pt-10 lg:flex">
        <h1 className="max-w-5xl tracking-tight text-8xl font-title text-brand-base-f">
          Technical leadership for early-stage startups.
        </h1>
        <div className="flex gap-2 mt-6">
          <Button size="lg" className="font-body">
            What is an fCTO?
          </Button>
          <Button size="lg" variant="outline" className="gap-2 font-body">
            <BiLogoZoom size={25} className="text-gray-600" />
            Book your free call
          </Button>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
