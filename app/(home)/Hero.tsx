import { Button } from "@/components/ui/button";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { Attention } from "@/lib/types";
import { BiLogoZoom } from "react-icons/bi";
import Stinger from "./Stinger";
import Link from "next/link";
import AttentionWhatIDo from "./attention-whatido";

type Props = {};

export default function Hero(attention: Attention) {
  const hero = {
    heading: "Technical leadership for early-stage startups.",
    roles: ["Fractional CTO", "Full-Stack Developer", "Angel"],
    buttonText: "What is an fCTO?",
    link: {
      text: "Book a consultation",
      url: "https://cal.com/startupmike/discovery-call",
    },
  };

  return (
    <Wrapper className="py-[5vh] bg-brand-base-h">
      <InnerWrap className="flex-col items-center justify-center gap-4 lg:flex min-h-[60vh]">
        <div className="flex flex-col items-center justify-center">
          <Stinger {...attention} />
          <h1 className="text-center text-7xl text-tracking-tight lg:max-w-5xl font-title text-brand-base-f">
            {hero.heading}
          </h1>
          <ul className="hidden gap-4 my-8 text-sm font-body">
            {hero.roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Button size="lg" className="hidden font-body">
              {hero.buttonText}
            </Button>
            <Link
              className="flex items-center justify-center gap-2 px-12 py-4 mt-8 font-medium text-black transition duration-200 ease-in-out bg-yellow-300 rounded-lg shadow-none text-md hover:bg-black hover:text-white font-body"
              href={hero.link.url}
            >
              <BiLogoZoom size={25} />
              {hero.link.text}
            </Link>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
