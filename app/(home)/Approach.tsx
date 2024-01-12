import React from "react";
import tw from "tailwind-styled-components";
import { Body, Heading, InnerWrap, Preheading, Wrapper } from "@/lib/atoms";

type Props = {};

export default function Approach({}: Props) {
  return (
    <Wrapper className="bg-brand-base-h">
      <InnerWrap className="py-[10vh]">
        <div className="flex flex-col items-center justify-center gap-3">
          <Preheading className="mb-8 font-light tracking-[0.3em] text-brand-base-f">
            Approach
          </Preheading>
          <Heading className="max-w-4xl font-normal text-center">
            20 years of experience distilled into a few core principles.
          </Heading>
          <Body className="text-center text-brand-base-e">
            I&apos;ve been building products since I was 14, including building
            teams and complex platforms to market across the world..
          </Body>
        </div>
        <div className="grid grid-cols-1 gap-3 mt-8 md:grid-cols-3">
          {serviceFeatures.map((item, index) => (
            <div key={index} className="flex gap-1 my-4 font-body">
              <div className="w-[80px] h-full grow text-gray-500">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <div className="text-sm">{item.content}</div>
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
        <span className="font-semibold">Empathy.</span> Whether it&apos;s
        understanding customer&apos;s needs and experiences, or building and
        running a technical team, empathy is a driving force behind my work.
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-semibold">Time in market.</span> The only way to
        figure out what the market really needs (and is willing to pay for) is
        to launch, test and ierate based on as much data and as few assumptions.
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-semibold">Transparency.</span> Work in pprogress
        is open at all points of the process. Every file, design, sheet and line
        of code should be shared early and often. A rule with anyone I hire.
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-semibold">Collaboration.</span> Teams should be
        lean, mean & obscene-ly good at what they do. I follow a paradigm of
        building small, high-output teams that are focused on delivery quality &
        ROI.
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-semibold">Automate.</span> It&apos;s the age of
        AI, so you can&apos;t build a competitive company without automation at
        the core of your business.
      </p>
    ),
  },
  {
    content: (
      <p>
        <span className="font-semibold">Async.</span> I am not afraid to throw
        away an idea and explore divergent solutions. The more the merrier!
      </p>
    ),
  },
];
