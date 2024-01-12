import React from "react";
import tw from "tailwind-styled-components";
import { InnerWrap, Preheading, Wrapper } from "@/lib/atoms";

type Props = {};

export default function Mission({}: Props) {
  return (
    <Wrapper>
      <div className="bg-brand-base-i min-h-[15vh] h-full flex flex-col items-center justify-center py-[10vh]">
        <Preheading className="font-light tracking-[0.3em] text-white mb-4">
          my mission
        </Preheading>
        <h1 className="max-w-4xl text-4xl text-center text-black font-title">
          Helping non-technical founders build great products that solve{" "}
          <span className="mr-1 text-brand-base-h">real problems</span>.
        </h1>
      </div>
    </Wrapper>
  );
}
