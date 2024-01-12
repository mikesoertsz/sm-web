import React from "react";
import tw from "tailwind-styled-components";
import { InnerWrap, Wrapper, Heading, Preheading, Body } from "@/lib/atoms";
import { motion } from "framer-motion";

type Props = {};

const TestWrap = tw.div`grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-12`;
const Left = tw.div`min-h-[400px] aspect-[4/3] items-center justify-center flex p-12 bg-gray-50`;
const Right = tw.div`min-h-[400px] aspect-[4/3] items-center justify-center flex p-12 bg-gray-50`;

export default function IsThisYou({}: Props) {
  return (
    <Wrapper className="py-[10vh]">
      <InnerWrap className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <Preheading className="mb-4 font-light tracking-[0.3em] text-brand-base-a">
            problem
          </Preheading>
          <Heading className="max-w-4xl font-normal text-center">
            Is this you?
          </Heading>
        </div>
        <TestWrap>
          <Left>
            <ul className="text-lg font-body">
              <li>Have an amazing idea but have no idea how to build it?</li>
              <li>
                Having problems fielding technical questions from investors?
              </li>
              <li>Not sure who or how to hire your engineers and designers?</li>
              <li>Need help with your product roadmap and budget?</li>
              <li>Frustrated with freelancer churn and work quality?</li>
              <li>Can&apos;t afford exorbitant agengy rates?</li>
              <li>
                Finding that no-code and low-code solutions are limiting the
                features you want to develop?
              </li>
            </ul>
          </Left>
          <Right>
            <div className="relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-90"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className="text-blue-600"
                    fill="none"
                    strokeLinecap="round"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    style={{ pathLength: 0 }}
                  />
                </svg>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center font-body">
                <span className="text-2xl font-semibold">85%</span>
              </div>
            </div>
          </Right>
        </TestWrap>
      </InnerWrap>
    </Wrapper>
  );
}
