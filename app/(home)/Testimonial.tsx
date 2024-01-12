import React from "react";
import tw from "tailwind-styled-components";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { QuoteIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaQuoteLeft } from "react-icons/fa6";

type Props = {};

export default function Testimonial({}: Props) {
  return (
    <Wrapper className="bg-brand-base-f text-gray-200 py-[5vh]">
      <InnerWrap className="flex items-center justify-center">
        <div className="max-w-md p-6 text-white">
          <blockquote className="relative text-lg tracking-wide font-body text-brand-base-h">
            <FaQuoteLeft className="absolute -top-8 -left-0 text-[#6ee7b7] text-2xl " />
            Mike was invaluable in not just the product development, but in
            setting up our cloud infrastructure for robotic food operations.
          </blockquote>
          <div className="flex items-center mt-10">
            <Avatar className="w-12 h-12 mr-3">
              <AvatarImage alt="Roman Salazar" src="/img/roman.jpg" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start justify-normal">
              <span className="ml-2 text-2xl">Roman Salazar</span>
              <span className="ml-2 text-sm tracking-widest uppercase font-body text-brand-base-d">
                Founder | WeTechFood
              </span>
            </div>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
