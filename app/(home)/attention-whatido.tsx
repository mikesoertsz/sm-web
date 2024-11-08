import { InnerWrap, Wrapper } from "@/lib/atoms";
import React from "react";

type Props = {};

export default function AttentionWhatIDo({}: Props) {
  const broadwhatido = [
    {
      title: "Strategy",
      description: "Developing a roadmap for startup growth.",
      icon: "strategy-icon",
      image: "strategy-image.jpg",
    },
    {
      title: "Design",
      description: "Creating functional product designs & interfaces.",
      icon: "design-icon",
      image: "design-image.jpg",
    },
    {
      title: "Development",
      description: "Building and launching technology products.",
      icon: "development-icon",
      image: "development-image.jpg",
    },
    {
      title: "Fundraising",
      description: "Outreach automation, investor qualifying and decks.",
      icon: "fundraising-icon",
      image: "fundraising-image.jpg",
    },
  ];
  return (
    <Wrapper className="w-full py-8 bg-brand-base-c3">
      <InnerWrap>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {broadwhatido.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-start px-8 py-6 text-left text-white transition duration-300 ease-in-out transform bg-stone-200 hover:-translate-y-1"
            >
              <p className="flex w-full text-4xl font-thin text-stone-300 font-body">
                {index + 1}
              </p>
              <h3 className="flex w-full text-2xl font-medium text-brand-base-c">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-body text-stone-800">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
