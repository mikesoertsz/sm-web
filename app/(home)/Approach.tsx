import React from "react";
import tw from "tailwind-styled-components";
import { Body, Heading, InnerWrap, Preheading, Wrapper } from "@/lib/atoms";

type Props = {};

export default function Approach({}: Props) {
  return (
    <Wrapper className="bg-brand-base-h">
      <InnerWrap className="py-[10vh]">
        <div className="flex flex-col items-center justify-center gap-3">
          <Preheading className="mb-4 font-light tracking-[0.3em] text-brand-base-f">
            Approach
          </Preheading>
          <Heading className="max-w-4xl font-normal text-center">
            25 years of experience distilled into a few core principles.
          </Heading>
          <Body className="hidden text-center text-brand-base-e">
            Having built products and companies in my career I&apos;ve been
            through the hard learning, mistakes and pivots that come with
            building a startup. I&apos;ve distilled my experience into a few
            core principles that I follow when working with startups.
          </Body>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
          {serviceFeatures.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-start gap-4 my-4 font-body"
            >
              <div className="w-[70px] h-full grow text-brand-base-i">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <div className="text-left text-md">{item.content}</div>
            </div>
          ))}
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

const serviceFeatures = [
  {
    content: (
      <p>
        <span className="font-medium text-brand-base-c">Empathy.</span> Whether
        it&apos;s understanding customer&apos;s needs and experiences, or
        building and running a technical team, empathy is a driving force behind
        my work.
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-medium text-brand-base-c">Time in market.</span>{" "}
        The only way to figure out what the market really needs (and is willing
        to pay for) is to launch, test and ierate based on as much data and as
        few assumptions.
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-medium text-brand-base-c">Transparency.</span>{" "}
        Work in pprogress is open at all points of the process. Every file,
        design, sheet and line of code should be shared early and often. A rule
        with anyone I hire.
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-medium text-brand-base-c">Collaboration.</span>{" "}
        Teams should be lean, mean & obscene-ly good at what they do. I build
        small, high-output teams that are focused on delivering quality & ROI.
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-medium text-brand-base-c">Automate.</span>{" "}
        It&apos;s the age of AI, so you can&apos;t build a competitive company
        without automation at the core of your business. Automation is core to
        my service, as it should be for yours.
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-medium text-brand-base-c">Async.</span> I&apos;ve
        worked asynchronously over the last 10 years. A critical strategy for
        lean management and cost control in early-stage lean startups.
      </p>
    ),
  },
];
