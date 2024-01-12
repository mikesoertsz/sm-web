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

type Props = {};

const PriceCard = tw.div`relative flex flex-col items-start justify-start bg-white p-6 flex-col rounded-lg bg-gray-100 bg-brand-base-e rounded-xl last:border-2 border-yellow-500 last:bg-black last:text-black`;

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
          <PriceCard>
            <h3 className="text-xl font-semibold text-gray-400">
              Technical Co-Founder
            </h3>
            <p className="mt-1 text-base text-gray-300">
              I&apos;m available for technical co-founder roles.
            </p>
            <div className="mt-4">
              <span className="text-3xl font-bold text-white">
                Equity/Salary
              </span>
              <span className="ml-1 text-base text-gray-500"></span>
            </div>
            <div className="flex mt-6 grow">
              <ul>
                <li className="flex items-center">
                  <MdOutlineCheck className="text-gray-500" size={20} />
                  Web Application Development
                </li>
                <li className="flex items-center">
                  <MdOutlineCheck className="text-gray-500" size={20} />
                  Technical Team Building
                </li>
                <li className="flex items-center">
                  <MdOutlineCheck className="text-gray-500" size={20} />
                  Agile Process
                </li>
                <li className="flex items-center">
                  <MdOutlineCheck className="text-gray-500" size={20} />
                  Infrastructure
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full py-4 mt-8 font-medium text-black bg-yellow-500 rounded-lg hover:bg-blue-600"
            >
              Book an Inquiry Call
            </button>
          </PriceCard>
          {prices.map((item, index) => (
            <PriceCard key={index}>
              {item.popular && (
                <Badge className="absolute items-center justify-center font-medium text-black bg-yellow-300 rounded-lg -top-3 hover:bg-yellow-200 cursor-normal">
                  Popular
                </Badge>
              )}
              <h3 className="text-xl text-gray-200">{item.name}</h3>
              <p className="mt-1 text-sm text-gray-300">{item.description}</p>
              <div className="mt-8">
                <span className="mr-2 text-3xl text-gray-600 font-body">€</span>
                {item.popular && (
                  <span className="text-5xl font-bold text-white">
                    {item.price}
                  </span>
                )}
                {!item.popular && (
                  <span className="text-5xl font-bold text-gray-200">
                    {item.price}
                  </span>
                )}
                <span className="ml-1 text-base text-gray-500">
                  /{item.duration}
                </span>
              </div>
              <div className="mt-6 grow">
                <ul className="px-8 text-sm font-body">
                  {item.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <MdOutlineCheck className="text-gray-500" size={20} />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full py-4 mt-8 text-xl font-medium text-black bg-yellow-500 rounded-lg hover:bg-brand-base-h font-body"
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
    description: "Fixed price projects.",
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
    duration: "- starts at",
    buttontext: {},
    buttonlink: {},
    popular: false,
  },
  {
    name: "Tech Audit",
    price: 200,
    description: "A technical audit consultation of your product or plan.",
    deliverables: [
      "A technical roadmap",
      "A product specification",
      "A product backlog",
      "Detailed video feedback (1hr)",
    ],
    duration: "- 1 hour",
    buttontext: {},
    buttonlink: {},
    popular: true,
  },
];
