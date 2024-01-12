import React from "react";
import tw from "tailwind-styled-components";
import { Body, Heading, InnerWrap, Preheading, Wrapper } from "@/lib/atoms";
import herobg from "../../public/img/hero.webp";

type Props = {};

const contentSections = [
  {
    title: "Product",
    text: "Fractional CTOs should not only deliver product, but product-market-fit. You need someone on your team with experience in not just planning, but bringing products to market.",
  },
  {
    title: "People",
    text: "Hiring the right people is critical to the success of your startup especially in in seed-stage. I will help you build a lean technical team that is aligned with your vision and values.",
  },
  {
    title: "Pitch",
    text: (
      <>
        Having a fCTO on the team means being able to field those difficult
        technical questions from investors. I will help you craft compelling
        product plans & budgets that{" "}
        <span className="font-semibold text-brand-base-a">will</span> get you
        funded.
      </>
    ),
  },
];

const Left = tw.div`lg:w-1/2 aspect-[3/4] bg-brand-base-c text-brand-base-h items-end justify-end flex-col p-10 overflow-hidden h-full `;
const Right = tw.div`relative lg:w-1/2 aspect-square bg-white overflow-hidden mt-4 lg:mt-0`;

export default function Agitation({}: Props) {
  return (
    <Wrapper className="text-gray-200 bg-brand-base-f">
      <InnerWrap>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex flex-col items-center justify-center gap-3">
              <Preheading className="mb-8 font-light tracking-[0.3em] text-brand-base-a">
                problem
              </Preheading>
              <Heading className="max-w-4xl font-normal">
                80<span className="font-normal font-body">%</span> of startups
                fail before they reach Product-Market-Fit.
              </Heading>
              <Body>
                If you&apos;re a non-technical founding team that lacks
                technical expertise you risk making poor decisions early on with
                your product journey.
              </Body>
            </div>
            <div className="grid items-start gap-8 mx-auto mt-4 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 font-body">
              {contentSections.map((section) => (
                <div
                  className="flex flex-col items-start gap-1"
                  key={section.title}
                >
                  <h3 className="text-lg font-medium tracking-tight text-left text-brand-base-a">
                    {section.title}
                  </h3>
                  <p className="text-sm text-left text-brand-base-h">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="gap-4 pt-10 lg:flex max-w-7xl py-[8vh] relative">
          <Left>
            <div className="flex flex-col items-start justify-center h-full p-12 px-16 mt-auto">
              <h1 className="text-4xl font-medium tracking-tight font-title">
                Don&apos;t let your dream <br />
                die in the dark.
              </h1>
              <p className="pt-6 text-lg font-light font-body text-brand-base-g">
                <span className="font-medium text-brand-base-a">
                  Building product is hard
                </span>
                . There&apos;s a myriad of gotchas, assumptions, bad advice &
                missteps that await you if you don&apos;t come from a technical
                background. Your idea is great, but to make it a reality, you
                need a killer team.
              </p>
              <p className="pt-6 font-light text-md font-body text-brand-base-g">
                Hiring a Fractional CTO (fCTO) lays the right product foundatin
                from the start.
              </p>
            </div>
          </Left>
          <Right>
            <div
              className="relative z-10 flex items-center justify-center w-full h-full p-12 text-white grow"
              style={{
                backgroundImage: `url(${herobg.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="absolute text-lg bottom-12 left-12 bg-none font-body">
                Title
              </div>
              <div className="absolute flex space-x-4 bottom-12 right-12">
                <div className="p-2 bg-white rounded-full cursor-pointer bg-opacity-20 hover:bg-opacity-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
                <div className="p-2 bg-white rounded-full cursor-pointer bg-opacity-20 hover:bg-opacity-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Right>
        </section>
      </InnerWrap>
    </Wrapper>
  );
}
