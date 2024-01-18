import { InnerWrap, Wrapper } from "@/lib/atoms";
import { Titles } from "../(shared)/Titles";

type Props = {};

export default function Mission({}: Props) {
  const missionContent = {
    preheading: "mission",
    heading: (
      <>
        I help non-technical founders build the{" "}
        <span className="mr-1 text-brand-base-a">right product</span> that
        solves a <span className="mr-1 text-brand-base-a">real problem</span>{" "}
        for <span className="mr-1 text-brand-base-a">real customers</span>.
      </>
    ),
    body: (
      <>
        {/* Many startups fail by building the wrong product. Rather than just
        executing your idea, I collaborate on product strategy, engage with
        customers and investors, and help build a sustainable <i>business</i>
        —not just a product. */}
      </>
    ),
  };

  return (
    <Wrapper className="bg-brand-base-f">
      <InnerWrap className="min-h-[15vh] text-brand-base-i">
        <Titles content={missionContent} theme="dark" />
      </InnerWrap>
    </Wrapper>
  );
}
