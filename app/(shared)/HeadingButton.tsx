import React from "react";
import tw from "tailwind-styled-components";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { Button } from "@/components/ui/button";

type Props = {};

export default function HeadingButton({}: Props) {
  return (
    <Wrapper>
      <InnerWrap>
        <div className="flex items-center justify-center gap-2">
          <div>
            <Button size="lg">What is an fCTO?</Button>
            <Button size="lg">Hire Me</Button>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
