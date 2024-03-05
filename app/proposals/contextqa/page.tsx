import { Wrapper, InnerWrap } from "@/lib/atoms";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { BiLogoZoom } from "react-icons/bi";

type Props = {};

const VideoWrap = tw.div`aspect-video rounded-3xl overflow-hidden w-full flex bg-brand-base-c3`;

export default function page({}: Props) {
  return (
    <main className="flex fillscreen">
      <Wrapper className="bg-brand-base-c2 text-brand-base-a font-body">
        <InnerWrap>
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="mb-2 text-3xl font-title text-brand-base-h">
              Client Proposal & Product Feedback Video
            </h1>
            <p className="text-lg text-brand-base-a">
              A quick proposal on how I can help you, what services I can offer
              for our next discussion.
            </p>
          </div>
          <Tabs defaultValue="account" className="w-full mt-12">
            <TabsList className="bg-brand-base-f">
              <TabsTrigger value="account">1. Proposal</TabsTrigger>
              <TabsTrigger value="password">2. Feedback</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="w-full">
              <VideoWrap>
                <iframe
                  src="https://player.vimeo.com/video/919701307?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  width="100%"
                  height="100%"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="ContextQA Proposal"
                ></iframe>
              </VideoWrap>
            </TabsContent>
            <TabsContent value="password">
              <VideoWrap>
                <iframe
                  src="https://player.vimeo.com/video/919700620?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  width="100%"
                  height="100%"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="ContextQA_Roast"
                ></iframe>
              </VideoWrap>
            </TabsContent>
          </Tabs>
          <div className="flex flex-col items-center justify-center flex-grow mt-8 text-xs text-brand-base-a">
            <p>
              Disclaimer: The content provided is for ContextQA viewing only and
              should not be shared with anyone else.
            </p>
            <Link
              className="flex items-center justify-center gap-2 px-12 py-4 mt-8 text-lg font-medium text-black transition duration-200 ease-in-out bg-yellow-300 rounded-lg shadow-none hover:bg-white hover:text-black font-body"
              href="https://cal.com/startupmike/sprint-30m"
            >
              <BiLogoZoom size={25} />
              Book a follow-up meeting
            </Link>
          </div>
        </InnerWrap>
      </Wrapper>
    </main>
  );
}
