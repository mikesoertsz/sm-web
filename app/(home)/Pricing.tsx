import React from "react";
import tw from "tailwind-styled-components";
import {
  InnerWrap,
  Preheading,
  Wrapper,
  Heading,
  Body,
  SubHeading,
} from "@/lib/atoms";
import { Badge } from "@/components/ui/badge";
import { MdOutlineCheck } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const PriceCard = tw.div`relative flex flex-col items-start justify-start bg-white p-6 flex-col rounded-lg rounded-xl last:border-2 border-yellow-500 text-black h-full`;

export default function Pricing({}: Props) {
  return (
    <Wrapper className="bg-brand-base-f text-gray-500 py-[10vh]">
      <InnerWrap>
        <div className="flex flex-col items-center justify-center gap-3">
          <Preheading className="mb-4 font-light tracking-[0.3em] text-brand-base-a">
            pricing
          </Preheading>
          <Heading className="max-w-4xl font-normal text-brand-base-h">
            Let&apos;s launch something amazing!
          </Heading>
          <Body className="hidden">
            <span className="pr-2 text-lime-500">20% off</span>
            for 5 customers in Q1 (2 left){" "}
          </Body>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-16 md:grid-cols-3">
          {prices.map((item, index) => (
            <PriceCard key={index}>
              {item.popular && (
                <Badge className="absolute items-center justify-center font-medium text-black bg-yellow-300 rounded-lg -top-3 hover:bg-yellow-200 cursor-normal">
                  Popular
                </Badge>
              )}
              <div className="flex flex-col items-center justify-center w-full mt-2">
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className="h-3 mt-1 text-xs text-gray-500 font-body">
                  {item.description}
                </p>
                <div className="mt-8">
                  {item.price === 0 ? (
                    <span className="text-5xl font-bold ">Free</span>
                  ) : (
                    <>
                      <span className="mr-2 text-3xl text-gray-600 font-body">
                        €
                      </span>
                      <span className="text-5xl font-bold ">
                        {item.price.toLocaleString("en-US")}
                      </span>
                    </>
                  )}
                </div>
                <span className="mt-1 ml-1 text-xs text-gray-400 font-body">
                  {item.duration}
                </span>
              </div>
              <div className="flex flex-col w-full h-[260px] p-6 mt-6 text-sm border rounded-lg grow font-body">
                <p className="mb-3 font-medium">Deliverables:</p>
                <ul className="grid w-full grid-cols-1 gap-x-4">
                  {item.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-center w-full gap-2">
                      <MdOutlineCheck className="text-green-600" size={15} />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center w-full h-2 my-2 mt-6 text-xs text-gray-500 transition duration-200 ease-in-out font-body hover:text-black">
                <Link href={item.buttonlink}>{item.buttontext}</Link>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full py-4 text-xl font-medium text-black bg-black rounded-lg last:bg-yellow-300 hover:bg-brand-base-h font-body"
              >
                Book a call
              </button>
            </PriceCard>
          ))}
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

const prices = [
  {
    name: "MVP Development",
    price: 35000,
    description: "Fixed price projects to get your MVP built fast.",
    deliverables: [
      "Web Apps",
      "Mobile Apps",
      "SaaS",
      "Platforms",
      "Marketplaces",
      "APIs",
      "Integrations",
      "Automation",
      "AI/ML",
    ],
    duration: "Starts at",
    buttontext: "",
    buttonlink: "",
    popular: false,
  },
  {
    name: "Discovery Call",
    price: 0,
    description: "A free consultation to discuss your project.",
    deliverables: [
      "Detailed video feedback (20m)",
      "Project Quotation",
      "Project Terms",
    ],
    duration: "1 hour",
    buttontext: "",
    buttonlink: "",
    popular: false,
  },
  {
    name: "Tech Audit",
    price: 620,
    description: "Package audit of your project or idea.",
    deliverables: [
      "Detailed Video Feedback (1h)",
      "Product Roadmap",
      "Competitor Analysis",
      "Technical Specification",
      "Timeline (Gannt)",
      "Budgeting",
      "Product Backlog",
    ],
    duration: "1 hour meet. 4-day delivery.",
    buttontext: "What's in an Audit",
    buttonlink: "/tech-audit",
    popular: true,
  },
];
