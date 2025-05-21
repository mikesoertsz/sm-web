import tw from "tailwind-styled-components";
import { FaChevronRight } from "react-icons/fa";
import { Attention } from "@/lib/types";

const Wrap = tw.div`hidden group md:flex flex-row items-center justify-center bg-gray-100 rounded-full p-1 gap-3 border border-gray-200 hover:bg-gray-200 transition duration-300 ease-in-out cursor-normal font-body mb-12 pr-4`;
const Badge = tw.span`text-xs font-medium text-gray-500 bg-white rounded-full px-3 py-1 shadow-xs shadow-gray-300 border border-gray-200 group-hover:text-gray-700`;
const StingerText = tw.h4`text-sm text-gray-600 transition duration-300 ease-in-out group-hover:text-gray-900 font-body`;

export default function Stinger({ stinger }: Attention) {
  return (
    <>
      <Wrap>
        <Badge>{stinger.badge}</Badge>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <StingerText>{stinger.heading}</StingerText>
        </div>
        <FaChevronRight
          size={12}
          className="hidden pr-3 mr-2 text-gray-500 duration-300 ease-in-out group-hover:translate-x-1"
        />
      </Wrap>
    </>
  );
}
