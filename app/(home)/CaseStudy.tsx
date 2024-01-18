import { Heading, InnerWrap, Wrapper } from "@/lib/atoms";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

type Props = {};

const CaseStudyWrap = tw.div`flex flex-col md:flex-row items-center justify-center gap-4 mx-auto`;
const Left = tw.div`md:w-3/5 flex bg-brand-base-f rounded-xl overflow-hidden items-center justify-center h-full h-[60vh]`;
const Right = tw.div`md:w-2/5 hidden md:flex rounded-xl overflow-clip bg-black h-full h-[60vh]`;

export default function CaseStudy({}: Props) {
  return (
    <Wrapper>
      <InnerWrap className="flex flex-col items-center justify-center gap-4">
        <Heading className="">Case Study</Heading>
        <CaseStudyWrap>
          <Left>
            <div className="relative flex flex-col items-center justify-center w-full p-10 px-16 py-16 mx-auto text-center text-white">
              <Image
                src="/img/roman.jpg"
                alt="Hero Image"
                width={60}
                height={60}
                className="my-2 border-2 border-white rounded-full shadow-md"
                style={{ objectFit: "cover" }}
              />
              <Image
                src="/img/clients/wtf_logo_white.svg"
                alt="wtf logo Image"
                width={160}
                height={60}
                className=""
                style={{ objectFit: "cover" }}
              />
              <div className="flex items-center justify-center gap-3 mb-1 text-sm font-body md:text-md">
                <p className="font-medium">Roman Salazar</p>
                <p className="font-light text-gray-500">Founder, CEO</p>
              </div>
              <p className="text-sm text-gray-600 font-body">Madrid, Spain</p>
              <p className="my-8 text-3xl font-medium tracking-tight md:text-4xl font-title">
                “Working with Mike has been an incredibly painless and enjoyable
                experience.”
              </p>
              <div className="justify-center hidden gap-2 mt-6 md:flex">
                <ChevronLeftIcon className="p-2 text-black transition duration-200 ease-in-out bg-gray-700 rounded-full cursor-pointer h-9 w-9 hover:bg-white" />
                <ChevronRightIcon className="p-2 text-black transition duration-200 ease-in-out bg-gray-700 rounded-full cursor-pointer h-9 w-9 hover:bg-white" />
              </div>
            </div>
          </Left>
          <Right>
            <div className="relative z-10 flex w-full">
              <Image
                src="/img/wetechfood1.png"
                alt="Hero Image"
                fill
                className="absolute inset-0 object-cover bg-gray-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Right>
        </CaseStudyWrap>
      </InnerWrap>
    </Wrapper>
  );
}
