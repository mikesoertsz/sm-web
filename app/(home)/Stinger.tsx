import tw from "tailwind-styled-components";
import { FaChevronRight } from "react-icons/fa";
import { Attention } from "@/lib/types";

const Wrap = tw.a`hidden group md:flex flex-row items-center justify-center bg-gray-100 rounded-full p-1 gap-3 border border-gray-200 hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer font-body mb-12`;
const Badge = tw.span`text-xs font-medium text-gray-500 bg-white rounded-full px-3 py-1 shadow-xs shadow-gray-300 border border-gray-200 group-hover:text-gray-700`;
const StingerText = tw.h4`text-sm text-gray-600 transition duration-300 ease-in-out group-hover:text-gray-900 font-body`;

export default function Stinger({ stinger }: Attention) {
  return (
    <>
      <Wrap href={stinger.url}>
        <Badge>{stinger.badge}</Badge>
        <StingerText>{stinger.heading}</StingerText>
        <FaChevronRight
          size={12}
          className="mr-2 text-gray-500 duration-300 ease-in-out group-hover:translate-x-1"
        />
      </Wrap>
    </>
  );
}
