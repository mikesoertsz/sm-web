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

const GridWrap = tw.div`grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 pt-4`;
const Column = tw.div`flex font-body w-full bg-white p-16 flex-col bg-gray-50 aspect-square`;
const ColumnTitle = tw.h2`my-1 text-lg font-medium tracking-tight text-black`;
const ColumnDescription = tw.h4`text-black text-sm h-full flex-grow`;

export default function Expertise({}: Props) {
  return (
    <Wrapper className="bg-brand-base-h">
      <InnerWrap className="flex flex-col items-start justify-center py-[5vh]">
        <div className="flex flex-col items-start justify-start gap-3">
          <Preheading className="font-light tracking-[0.3em] text-brand-base-b mb-4">
            what i do
          </Preheading>
          <Heading className="max-w-4xl">Expertise</Heading>
          <Body className="text-brand-base-e">
            I help non-technical teams build great products that people love.
          </Body>
        </div>
        <GridWrap>
          {content.map((item, index) => (
            <Column key={index}>
              <div className="">
                <ColumnTitle>{item.title}</ColumnTitle>
                <ColumnDescription>{item.description}</ColumnDescription>
              </div>
              <ul className="mt-6">
                {item.list.map((listItem, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start gap-2 text-sm"
                  >
                    <MdOutlineCheck className="text-gray-500" size={16} />
                    {listItem}
                  </li>
                ))}
              </ul>
            </Column>
          ))}
        </GridWrap>
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
      "Product Strategy",
      "User Research",
      "Technical Strategy",
      "Product Roadmap",
      "Hiring Strategy",
    ],
  },
  {
    icon: "",
    title: "Design",
    description:
      "As a consultant, I provide guidance for teams lacking technical leadership.",
    list: ["Wireframing"],
  },
  {
    icon: "",
    title: "Development",
    description:
      "I train technical teams to build products, enhancing their skills and productivity.",
    list: [
      "Web Application Development",
      "Technical Team Building",
      "Agile Process",
      "Infrastructure",
    ],
  },
  // {
  //   icon: "",
  //   title: "Recruitment",
  //   description:
  //     "As a consultant, I provide guidance for teams lacking technical leadership.",
  // },
];
