import {
  Body,
  Heading,
  InnerWrap,
  Preheading,
  SubHeading,
  Wrapper,
} from "@/lib/atoms";
import React from "react";
import { MdOutlineCheck } from "react-icons/md";
import tw from "tailwind-styled-components";

type Props = {};

export default function Expertise({}: Props) {
  return (
    <Wrapper className="bg-brand-base-h">
      <InnerWrap className="flex flex-col items-start justify-center py-[5vh]">
        <div className="flex flex-col items-start justify-start gap-3">
          <Preheading className="font-light tracking-[0.3em] text-brand-base-b mb-4">
            what i do
          </Preheading>
          <Heading className="max-w-4xl">Expertise</Heading>
          <SubHeading className="mb-2 text-xl text-brand-base-e">
            Helping non-technical founders build great products that people
            love.
          </SubHeading>
        </div>
        <ul className="grid h-[400px] grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-4">
          {content.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-start justify-between w-full h-full p-6 bg-white font-body md:p-8 aspect-square"
            >
              <div className="flex flex-col h-full">
                <h2 className="my-1 text-lg font-medium tracking-tight text-black">
                  {item.title}
                </h2>
                <h4 className="text-sm text-black">{item.description}</h4>
              </div>
              <ul className="flex flex-col mt-6 grow">
                {item.list.map((listItem, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start gap-2 text-sm"
                  >
                    <MdOutlineCheck className="text-green-600" size={16} />
                    {listItem}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}

const content = [
  {
    icon: "",
    title: "Strategy",
    description:
      "Great products come from a great understanding of a user's pain or potential. I build strategy to find, and fix that pain.",
    list: [
      "Strategy",
      "Research",
      "Roadmaps",
      "Hiring",
      "Budgeting",
      "GTM",
      "Fundraising",
      "Relations",
    ],
  },
  {
    icon: "",
    title: "Design",
    description:
      "I design products that are beautiful, usable, and accessible. I'm not constrained by templates or themes. I work for the user.",
    list: [
      "Wireframing",
      "Prototyping",
      "Testing",
      "UI/UX",
      "Branding",
      "Systems",
      "Graphics",
      "Imagery",
    ],
  },
  {
    icon: "",
    title: "Development",
    description:
      "I train technical teams to build modern, exceptional products. Products that 'just work', built to scale, and not just satisfy, but delight users.",
    list: [
      "Web",
      "Mobile",
      "API",
      "Database",
      "Cloud",
      "Architecture",
      "Documentation",
      "Hiring",
    ],
  },
  {
    icon: "",
    title: "Fundraising",
    description:
      "I help founders raise capital from VCs, angels, and family offices.",
    list: [
      "Pitch Decks",
      "Automated Outreach",
      "Lead Generation",
      "Pitch Meetings",
      "Investor Relations",
      "Term Sheets",
      "Due Diligence",
      "Closing Deals",
    ],
  },
];
