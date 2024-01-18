import {
  Body,
  Heading,
  InnerWrap,
  Preheading,
  SubHeading,
  Wrapper,
} from "@/lib/atoms";
import tw from "tailwind-styled-components";
import herobg from "../../public/img/hero.webp";
import StoriesSlider from "./storiesslider";
import { Titles } from "../(shared)/Titles";

type Props = {};

const contentSections = [
  {
    title: "Product",
    text: (
      <>
        Fractional CTOs should not only deliver product, but product-market-fit.
        You need someone on your team with experience in figuring out what your
        customers will pay for, and{" "}
        <span className="font-semibold text-brand-base-a">then</span> build it.
      </>
    ),
  },
  {
    title: "People",
    text: (
      <>
        Hiring the right people at the right time is critical to the success of
        your startup especially in in seed-stage. An fCTO helps keep costs low
        by balancing offshore talent while building{" "}
        <span className="font-semibold text-brand-base-a">lean</span> internal
        teams.
      </>
    ),
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

const Left = tw.div`lg:w-1/2 aspect-[3/4] bg-brand-base-c2 text-brand-base-h items-end justify-end flex-col overflow-hidden h-full `;
const Right = tw.div`relative lg:w-1/2 aspect-square bg-white overflow-hidden mt-4 lg:mt-0`;

export default function Agitation({}: Props) {
  const titleContent = {
    preheading: "problem",
    heading: "Many startups fail before they reach Product-Market-Fit",
    subheading:
      "Non-technical founders risk making poor decisions early on with product journey, hiring and budgeting.",
  };

  return (
    <Wrapper className="text-gray-200 bg-brand-base-f">
      <InnerWrap>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <Titles content={titleContent} theme="dark" />
            <div className="grid items-start gap-12 mx-auto mt-4 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 font-body">
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
        <section className="gap-4 pt-10 md:flex max-w-7xl py-[8vh] relative hidden">
          <Left>
            <StoriesSlider />
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
              <div className="absolute hidden text-lg bottom-12 left-12 bg-none font-body">
                Title
              </div>
            </div>
          </Right>
        </section>
      </InnerWrap>
    </Wrapper>
  );
}
