import { Button } from "@/components/ui/button";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { Attention } from "@/lib/types";
import { BiLogoZoom } from "react-icons/bi";
import Stinger from "./Stinger";

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
          <Button size="lg" variant="outline" className="gap-2 font-body">
            <a
              href="https://calendly.com/startupmike/discovery"
              className="flex items-center justify-center gap-2"
            >
              <BiLogoZoom size={25} className="text-gray-600" />
              Book a consultation
            </a>
          </Button>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
