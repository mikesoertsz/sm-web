"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

type Props = {
  content: {
    logo: string;
    links: {
      text: string;
      url: string;
    }[];
    cta: {
      text: string;
      url?: string;
    };
    vcbutton: {
      text: string;
      url?: string;
    };
  };
};
import { toast } from "sonner";

export default function Nav({ content }: Props) {
  const NavWrap = tw.nav`w-full flex flex-row justify-between mx-auto text-center h-[58px] sticky top-0 border-b border-slate-200 text-gray-700 font-medium text-gray-700 z-90 relative font-body`;
  const Left = tw.div`flex flex-row items-center justify-start w-full h-full px-2`;
  const Mid = tw.div`flex flex-row items-center justify-center w-full h-full`;
  const Right = tw.div`flex flex-row items-center justify-end w-full h-full px-2`;

  return (
    <NavWrap>
      <Left>
        <Sheet>
          <SheetTrigger asChild className="sm:hidden">
            <Button className="hidden p-1 px-2 aspect-square bg-slate-200 hover:bg-slate-300">
              <RxHamburgerMenu size={30} className="text-gray-600" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <h4 className="pl-4 text-xl font-medium">
          <span className="font-medium tracking-tighter text-brand-base-i">
            startup
          </span>
          <span className="font-title">mike</span>
          <span className="text-xl text-red-500">.</span>
        </h4>
      </Left>
      <Mid></Mid>
      <Right>
        {/* <ul className="flex-row items-center justify-center hidden gap-4 pl-10 sm:flex">
          {content.links?.map((link, index: number) => (
            <li key={index}>
              <Link
                href={link.url}
                className="text-[13px] font-medium tracking-tight transition duration-100 ease-in-out hover:text-black"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul> */}
        <Link
          href="/forvcs"
          className="hidden font-semibold transition duration-300 ease-in-out rounded-md hover:text-gray-200 "
        >
          For Angels & VCs
        </Link>
        <Button variant="default">
          <a href="https://calendly.com/drifterapps/discovery30m">
            Book a consultation
          </a>
        </Button>
      </Right>
    </NavWrap>
  );
}
