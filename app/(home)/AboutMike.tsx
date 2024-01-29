import { Body, Heading, InnerWrap, Preheading, Wrapper } from "@/lib/atoms";
import Image from "next/image";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { IoLogoTwitter, IoMdShuffle } from "react-icons/io";
import tw from "tailwind-styled-components";
import { BsSubstack } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Mikefactsshuffle from "./mikefactsshuffle";

type Props = {};

const SplitWrap = tw.div`grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-12`;
const Left = tw.div`min-h-[60vh] items-center justify-center flex p-8 bg-gray-50 bg-brand-base-f flex-col bg-[url('/img/bgpattern.jpg')] bg-blend-overlay bg-auto bg-no-repeat bg-cover h-full`;

const Right = tw.div`min-h-[60vh] items-center justify-between flex p-8 bg-gray-50`;
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
            className="border-8 rounded-full border-brand-base-i"
            width={150}
            height={150}
          />
          <Heading className="max-w-4xl mt-6 font-normal text-center">
            Startup Mike
          </Heading>
          <Body className="text-center text-brand-base-e">
            I&apos;ve been building products since I was 12. From text-based
            games to complete cloud platforms to my own bootstrapped companies.
            I help startups like yours find PMF and escape the Build Trap.
          </Body>
        </div>
        <SplitWrap>
          <Left>
            <Mikefactsshuffle />
          </Left>
          <Right>
            <div className="flex flex-col gap-4 lg:px-12">
              <Preheading className=" font-light tracking-[0.3em] text-brand-base-b">
                background
              </Preheading>
              <ul className="flex flex-col gap-2 text-sm font-body">
                <li>
                  <p>
                    Based in Portugal with over 25 years in design, development
                    and entrepreneurship.
                  </p>
                </li>
                <li>
                  <p>
                    I work with early stage startups as a tech advisor, leader,
                    or full-stack product manager & developer.
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
              <Footer className="flex items-start justify-start mt-4 text-brand-base-c3 font-body">
                <h4 className="text-2xl text-brand-base-f">Mike Soertsz</h4>
                <p className="text-sm text-brand-base-d">
                  Fractional CTO / Full-Stack Developer / Investor
                </p>
                <ul className="flex gap-2 mt-6 text-gray-500 ">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mikesoertsz/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn className="text-gray-400 transition duration-200 ease-in-out hover:text-[#0A66C2]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/mikesoertsz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoTwitter className="text-gray-400 transition duration-200 ease-in-out hover:text-[#1DA1F2]" />
                    </a>
                  </li>
                  <li className="hidden">
                    <a
                      href="https://medium.com/@mikesoertsz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaMediumM className="text-gray-400 transition duration-200 ease-in-out hover:text-black" />
                    </a>
                  </li>
                  <li className="hidden">
                    <a
                      href="https://mikesoertsz.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsSubstack className="text-gray-400 transition duration-200 ease-in-out hover:text-black" />
                    </a>
                  </li>
                </ul>
              </Footer>
            </div>
          </Right>
        </SplitWrap>
      </InnerWrap>
    </Wrapper>
  );
}
