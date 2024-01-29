import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";

type Props = {};

export default function Testimonial({}: Props) {
  return (
    <Wrapper className="bg-brand-base-f text-gray-200 py-[5vh]">
      <InnerWrap className="flex items-center justify-center pt-[5vh]">
        <div className="max-w-lg p-6 text-white">
          <blockquote className="relative text-lg tracking-wide font-body text-brand-base-h">
            <FaQuoteLeft className="absolute -top-8 -left-0 text-[#6ee7b7] text-2xl " />
            Mike&apos;s deep understanding of my vision & his ability to execute
            on it has been a game changer for Classbubs. His expertise extends
            beyond coding; he excels in project management, talent recruitment,
            and plays a key role in strategic business decisions at Classbubs.
          </blockquote>
          <div className="flex items-start justify-start mt-10">
            <div className="flex items-start justify-start h-ful">
              <Avatar className="w-12 h-12 mr-3">
                <AvatarImage
                  alt="Christina Sok"
                  src="/img/clients/christina.jpg"
                />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col items-start pl-2 justify-normal">
              <span className="text-2xl">Christina Sok</span>
              <span className="text-sm tracking-widest uppercase font-body text-brand-base-d">
                Founder | ClassBubs
              </span>
              <Link
                href=""
                className="items-center justify-center hidden mt-4 text-sm duration-100 ease-in-out  text-brand-base-b group font-body hover:text-brand-base-a"
              >
                Read about ClassBubs
                <FaCaretRight
                  className="mt-0.5 text-gray-700 duration-100 ease-in-out group-hover:text-brand-base-a group-hover:translate-x-[2px]"
                  size={16}
                />
              </Link>
            </div>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
