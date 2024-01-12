import { Body, Heading, InnerWrap, Preheading, Wrapper } from "@/lib/atoms";
import Image from "next/image";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { IoLogoTwitter, IoMdShuffle } from "react-icons/io";
import tw from "tailwind-styled-components";
import { BsSubstack } from "react-icons/bs";
import { Button } from "@/components/ui/button";

type Props = {};

const SplitWrap = tw.div`grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-12`;
const Left = tw.div`min-h-[400px] aspect-[4/3] items-center justify-between flex p-8 bg-gray-50 bg-brand-base-f flex-col`;
const Right = tw.div`min-h-[400px] aspect-[4/3] items-center justify-center flex p-8 bg-gray-50`;
const Footer = tw.div`flex flex-col items-center justify-start`;

export default function AboutMike({}: Props) {
  return (
    <Wrapper className="py-[10vh] bg-brand-base-h">
      <InnerWrap>
        <div className="flex flex-col items-center justify-center gap-3">
          <Preheading className="mb-8 font-light tracking-[0.3em] text-brand-base-f">
            introducing
          </Preheading>
          <Image
            src="/img/mike.png"
            alt="Mike Soertsz"
            className="rounded-full"
            width={150}
            height={150}
          />
          <Heading className="max-w-4xl mt-6 font-normal text-center">
            Hi, I&apos;m Mike
          </Heading>
          <Body className="text-center text-brand-base-e">
            I&apos;ve been building products since I was 12. From text-based
            games to complete cloud platforms with my own companies. Now I help
            startups find PMF and escape the Build Trap.
          </Body>
        </div>
        <SplitWrap>
          <Left>
            <Preheading className="font-light tracking-wider uppercase text-brand-base-b">
              Random Mike Fact Generator
            </Preheading>
            <div className="flex flex-col items-center justify-center text-white font-body">
              <div>{/* shuffle content goes here */}</div>
              <Button className="gap-2 font-body" variant="secondary">
                <IoMdShuffle size={12} />
                Shuffle
              </Button>
            </div>
            <Footer className="text-brand-base-a font-body">
              <h4>Mike Soertsz</h4>
              <p className="mb-2 text-sm text-brand-base-g">
                Fractional CTO / Full-Stack Developer / Investor
              </p>
              <ul className="flex gap-2 text-white">
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <IoLogoTwitter />
                </li>
                <li>
                  <FaMediumM />
                </li>
                <li>
                  <BsSubstack />
                </li>
              </ul>
            </Footer>
          </Left>
          <Right>
            <div className="flex flex-col px-12">
              <Preheading className="mb-8 font-light tracking-[0.3em] text-brand-base-f">
                background
              </Preheading>
              <ul className="flex flex-col gap-2 text-sm font-body">
                <li>
                  <p>
                    Based in Portugal with over 20 years in design, development
                    and entrepreneurship.
                  </p>
                </li>
                <li>
                  <p>
                    I work with early stage startups as a tech advisor, leader,
                    or full-stack product manager and developer.
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    I&apos;ve worked with startups in the US, Europe, and Asia.
                  </p>
                </li>
                <li>
                  <p>
                    I&apos;m a full-stack developer with a focus on modern
                    frameworks and server architectures.
                  </p>
                </li>
                <li>
                  <p>
                    I&apos;m a digital nomad & have lived in 15 cities
                    worldwide.
                  </p>
                </li>
                <li>
                  <p>
                    I&apos;ve bootstrapped my own companies and helped Unicorns
                    launch new (successful) markets.
                  </p>
                </li>
              </ul>
            </div>
          </Right>
        </SplitWrap>
      </InnerWrap>
    </Wrapper>
  );
}

const mikeFacts = [
  "Codes in over 14 languages.",
  "Pro in 30 design software.",
  "Based in Porto, Portugal.",
  "Has lived in 15 cities.",
  "Has 3 dogs.",
  "Loves sailing.",
  "Is a carpenter.",
  "Is a chef.",
  "",
];
