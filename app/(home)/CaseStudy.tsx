import { InnerWrap, Wrapper } from "@/lib/atoms";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

type Props = {};

const CaseStudyWrap = tw.div`flex flex-col md:flex-row items-center justify-center gap-4 mx-auto min-h-[550px]`;
const Left = tw.div`md:w-3/5 flex bg-brand-base-f rounded-xl overflow-hidden items-center justify-center h-full`;
const Right = tw.div`md:w-2/5 flex rounded-xl overflow-clip bg-black h-full`;

export default function CaseStudy({}: Props) {
  return (
    <Wrapper>
      <InnerWrap className="py-[15vh]">
        <CaseStudyWrap>
          <Left>
            <div className="relative flex flex-col items-center justify-center w-full p-10 py-16 mx-auto text-center text-white">
              <Image
                src="/img/casestudyperson.png"
                alt="Hero Image"
                width={50}
                height={50}
                className="my-2 border-2 border-white rounded-full shadow-md"
                style={{ objectFit: "cover" }}
              />
              <div className="flex items-center justify-center gap-3 mb-1 font-body">
                <p className="font-medium text-md">Roman Salazar</p>
                <p className="font-light text-gray-500 text-md">Founder, CEO</p>
              </div>
              <p className="text-sm text-gray-600 font-body">Madrid, Spain</p>
              <p className="my-8 text-5xl font-medium tracking-tight font-title">
                “Working with Mike has been an incredibly painless and enjoyable
                experience.”
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <ChevronLeftIcon className="p-2 text-black transition duration-200 ease-in-out bg-gray-700 rounded-full cursor-pointer h-9 w-9 hover:bg-white" />
                <ChevronRightIcon className="p-2 text-black transition duration-200 ease-in-out bg-gray-700 rounded-full cursor-pointer h-9 w-9 hover:bg-white" />
              </div>
            </div>
          </Left>
          <Right>
            <div className="flex relative z-10 h-[550px] w-full">
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
