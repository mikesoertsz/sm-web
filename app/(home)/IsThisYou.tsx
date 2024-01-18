import {
  Heading,
  InnerWrap,
  Preheading,
  SubHeading,
  Wrapper,
} from "@/lib/atoms";
import Image from "next/image";
import tw from "tailwind-styled-components";
import QuizBot from "./quizbot";

type Props = {};

const TestWrap = tw.div`grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-12`;
const Left = tw.div`relative min-h-[60vh] h-[60vh] items-center justify-center hidden md:flex p-12 bg-gray-50 overflow-hidden`;
const Right = tw.div`min-h-[60vh] items-center justify-center flex bg-brand-base-j grow py-4`;

export default function IsThisYou({}: Props) {
  return (
    <Wrapper className="pt-[10vh] bg-brand-base-h" id="isthisyou">
      <InnerWrap className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <Preheading className="mb-4 font-light tracking-[0.3em] text-brand-base-c2">
            problem
          </Preheading>
          <Heading className="max-w-4xl font-normal text-center">
            Is this you?
          </Heading>
          <SubHeading className="text-2xl font-light text-center">
            Answers a few questions below to see if I can help you.
          </SubHeading>
        </div>
        <TestWrap>
          <Left>
            <Image
              src="/img/client.jpg"
              alt="Is this you?"
              className="absolute inset-0"
              fill
              style={{ objectFit: "cover" }}
            />
          </Left>
          <Right>
            <QuizBot />
          </Right>
        </TestWrap>
      </InnerWrap>
    </Wrapper>
  );
}
