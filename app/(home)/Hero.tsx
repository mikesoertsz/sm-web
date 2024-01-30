import { Button } from "@/components/ui/button";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { Attention } from "@/lib/types";
import { BiLogoZoom } from "react-icons/bi";
import Stinger from "./Stinger";
import Link from "next/link";

type Props = {};

export default function Hero(attention: Attention) {
  return (
    <Wrapper className="py-[10vh] bg-brand-base-h">
      <InnerWrap className="flex-col items-center justify-center gap-4 lg:flex min-h-[60vh]">
        <Stinger {...attention} />
        <h1 className="text-center text-7xl text-tracking-tight lg:max-w-5xl font-title text-brand-base-f">
          Technical leadership for early-stage startups.
        </h1>
        <ul className="hidden gap-4 my-8 text-sm font-body">
          <li>Fractional CTO</li>
          <li>Full-Stack Developer</li>
          <li>Angel</li>
        </ul>
        <div className="flex items-center justify-center gap-2 mt-6">
          <Button size="lg" className="hidden font-body">
            What is an fCTO?
          </Button>
          <Link
            className="flex items-center justify-center gap-2 px-12 py-4 mt-8 font-medium text-black transition duration-200 ease-in-out bg-yellow-300 rounded-lg shadow-none text-md hover:bg-black hover:text-white font-body"
            href="https://cal.com/startupmike/discovery-call"
          >
            <BiLogoZoom size={25} />
            Book a consultation
          </Link>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
