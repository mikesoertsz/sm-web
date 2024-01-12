import React from "react";
import tw from "tailwind-styled-components";
import { Body, Heading, InnerWrap, Preheading, Wrapper } from "@/lib/atoms";
import { Button } from "@/components/ui/button";
import { BiLogoZoom } from "react-icons/bi";
import Link from "next/link";

type Props = {};

export default function CTA({}: Props) {
  return (
    <Wrapper className="text-gray-200 bg-brand-base-f">
      <InnerWrap>
        <div className="flex flex-col items-center justify-center py-[10vh]">
          <div className="flex flex-col items-center justify-center gap-3">
            <Preheading className="mb-8 font-light tracking-[0.3em] text-brand-base-a">
              Ready to get started?
            </Preheading>
            <Heading className="max-w-4xl font-normal">
              Let&apos;s talk about your project.
            </Heading>
            <Body>
              Get in touch today.
              <span className="pl-2 font-light tracking-tight text-gray-600">
                Let&apos;s build something great together.
              </span>{" "}
            </Body>
          </div>
          <div className="flex gap-2 mt-4">
            <Link
              className="flex items-center justify-center gap-2 px-12 py-4 mt-8 font-medium text-black transition duration-200 ease-in-out bg-yellow-300 rounded-lg shadow-none text-md hover:bg-yellow-200 font-body"
              href=""
            >
              <BiLogoZoom size={25} />
              Book a call
            </Link>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
