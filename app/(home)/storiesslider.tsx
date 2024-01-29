"use client";
import React, { useState, useEffect } from "react";
import { Heading, Preheading } from "@/lib/atoms";
import Image from "next/image";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import useStore from "@/lib/store";

type Props = {};

export default function StoriesSlider({}: Props) {
  const { currentStoryIndex, setCurrentStoryIndex, setStoryImage } = useStore();

  const nextStory = () => {
    setCurrentStoryIndex((currentStoryIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex(
      (currentStoryIndex - 1 + stories.length) % stories.length
    );
  };

  useEffect(() => {
    setCurrentStoryIndex(null);
    // Preload images into the zustand store
    stories.forEach((story, index) => {
      setStoryImage(index, story.logo);
    });
  }, [setStoryImage, setCurrentStoryIndex]);

  // Check if a story is selected
  const isStorySelected = currentStoryIndex !== null;

  return (
    <div className="relative flex flex-col items-start justify-between h-full p-12 px-16 mt-auto story-wrapper">
      {!isStorySelected ? (
        <>
          <Preheading className="mb-8 font-light tracking-[0.3em] text-brand-base-a">
            Real Product Stories
          </Preheading>
          <div>
            <h1 className="text-4xl font-medium tracking-tight font-title">
              Don&apos;t let your dream <br />
              die in the dark.
            </h1>
            <p className="pt-6 text-lg font-light font-body text-brand-base-g">
              <span className="font-medium text-brand-base-a">
                Building product is hard
              </span>
              . There&apos;s a myriad of gotchas, assumptions, bad advice &
              missteps that await you if you don&apos;t come from a technical
              background. Your idea is great, but to make it a reality, you need
              a killer team.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="pt-6 font-light text-md font-body text-brand-base-g">
              I&apos;ve put together a few real life stories of startups that
              could have avoided failure if they had a competent technical
              co-founder or CTO on their team.
            </p>
          </div>
        </>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStoryIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center justify-between h-full mb-16 grow"
          >
            <StoryCard story={stories[currentStoryIndex]} />
          </motion.div>
        </AnimatePresence>
      )}
      <div className="flex gap-2">
        <IoChevronBackOutline
          onClick={prevStory}
          className="w-8 h-8 p-2 bg-white rounded-full cursor-pointer bg-opacity-20 hover:bg-opacity-40"
          size={20}
        />
        <IoChevronForwardOutline
          onClick={nextStory}
          className="w-8 h-8 p-2 bg-white rounded-full cursor-pointer bg-opacity-20 hover:bg-opacity-40"
          size={20}
        />
      </div>
    </div>
  );
}

export function StoryCard({ story }: { story: typeof stories[number] }) {
  const { storyImages } = useStore();
  const imageSrc = storyImages[story.company];

  return (
    <div className="flex flex-col items-start justify-between h-full grow">
      <div></div>
      <div className="flex flex-col">
        <Heading className="text-3xl font-medium text-brand-base-a font-title">
          {story.company}
        </Heading>
        <div className="text-lg text-brand-base-g font-body">{story.title}</div>
        <p className="mt-4 text-brand-base-g text-md font-body">
          {story.description}
        </p>
      </div>
      <div className="flex flex-col mt-16">
        <h4 className="text-2xl">Lesson:</h4>
        <p className="text-brand-base-g text-md font-body">{story.lesson}</p>
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-start gap-2 mt-8 text-brand-base-a hover:underline font-body"
        >
          Read {story.company}&apos;s Story
        </a>
      </div>
    </div>
  );
}

const stories = [
  {
    company: "Wattage",
    title: "Hardware Startup's Technical Missteps",
    description:
      "Wattage, a hardware company, focused on building prototypes to validate technical feasibility, neglecting market interest and traction. Realization of this misdirection came too late, hindering the company's ability to support a beta launch and leading to its downfall.",
    logo: "",
    image: "",
    url: "https://medium.com/inside-wattage/well-we-failed-77e795e16ecf/",
    lesson:
      "Having a technical co-founder could have provided better guidance on balancing technical development with market validation and customer interest, avoiding misallocation of resources.",
    funding: "",
    closed: "",
    cause: "",
    started: "",
    employees: "",
  },
  {
    company: "Quincy Apparel",
    title: "Fashion Startup's Operational Misfit",
    description:
      "Quincy Apparel, started by founders without clothing manufacturing experience, faced operational problems due to hiring issues and complex production processes. The company struggled with product/operational fit, leading to its failure.",
    logo: "",
    image: "",
    url: "https://why-start-ups-fail.com/2023/02/07/case-study-quincy-apparel-part-three/",
    lesson:
      "A technical co-founder with experience in manufacturing could have streamlined production processes and made more informed operational decisions, potentially saving the company.",
    funding: "",
    closed: "",
    cause: "",
    started: "",
    employees: "",
  },
  {
    company: "BricaBox",
    title: "Startup's Burn-Rate Miscalculation",
    description:
      "BricaBox, led by founder Nate Westheimer, faced challenges due to insufficient funding, lack of traction, and a weak team. The startup spread its resources too thin, leading to a slower development pace and eventual shutdown.",
    logo: "",
    image: "",
    url: "https://blog.ntrlab.com/5-stories-of-startup-failure/",
    lesson:
      "A technical co-founder could have helped in efficient resource allocation, focusing on essential development areas and faster product realization, possibly avoiding cash burnout.",
    funding: "",
    closed: "",
    cause: "",
    started: "",
    employees: "",
  },
  {
    company: "Parceld",
    title: "Tech Startup's Co-founder Crisis",
    description:
      "Parceld's journey was disrupted when the technical co-founder quit, taking the code with him. This left the company without the technical expertise and a backup plan, leading to its failure.",
    logo: "",
    image: "",
    url: "https://blog.ntrlab.com/5-stories-of-startup-failure/",
    lesson:
      "Retaining a technical co-founder or having a backup technical leader could have ensured continuity in development and prevented a complete halt in operations.",
    funding: "",
    closed: "",
    cause: "",
    started: "",
    employees: "",
  },
  {
    company: "Poliana",
    title: "Political Analytics Startup's Misdirected Focus",
    description:
      "Poliana aimed to bring order to the US political system but failed due to low market demand and running out of funds, despite implementing 3 business models.",
    logo: "",
    url: "https://www.failory.com/startup/poliana",
    lesson:
      "A technical co-founder could have helped pivot the product towards market demands and potentially identified viable business models earlier.",
    funding: "",
    closed: "",
    cause: "",
    started: "",
    employees: "",
  },
  {
    company: "Quibi",
    title: "Streaming Service's Misunderstood Market",
    description:
      "Quibi, a short-form video streaming platform, failed to understand customer expectations, leading to its downfall despite a significant funding of $2 billion.",
    logo: "",
    url: "https://gapscout.com/blog/product-market-fit-failure-stories/",
    lesson:
      "Technical expertise in market analysis and product development could have guided Quibi to better align with customer expectations and market trends.",
    funding: "",
    closed: "",
    cause: "",
    started: "",
    employees: "",
  },
  {
    company: "Reach.ly",
    title: "E-commerce Analytics Tool's Market Misalignment",
    description:
      "Reach.ly, an analytics tool for e-commerce sites, failed due to inadequate market feedback and technical challenges.",
    logo: "",
    url: "https://gapscout.com/blog/product-market-fit-failure-stories/",
    lesson:
      "Technical leadership could have steered the product development based on market feedback, avoiding costly iterations and misaligned tech focus.",
    funding: "",
    closed: "",
    cause: "",
    started: "",
    employees: "",
  },
  {
    company: "SchoolGennie",
    title: "EdTech Startup's Vision Myopia",
    description:
      "SchoolGennie aimed to digitize schools but failed due to delays in launching an MVP and ignoring market research and validation.",
    logo: "",
    url: "https://gapscout.com/blog/product-market-fit-failure-stories/",
    lesson:
      "A technical co-founder might have accelerated MVP development and prioritized market feedback to align the product with actual market needs.",
    funding: "",
    closed: "",
    cause: "",
    started: "",
    employees: "",
  },
  {
    company: "Navdy",
    title: "Navigational Ecosystem's Costly Development",
    description:
      "Navdy's attempt to create a parallel navigation ecosystem against Google Maps failed due to lack of demand and interest in their solution.",
    logo: "",
    url: "https://gapscout.com/blog/product-market-fit-failure-stories/",
    lesson:
      "Technical expertise in market research and prototype testing could have identified the lack of market demand early, avoiding unnecessary investment.",
    funding: "",
    closed: "",
    cause: "",
    started: "",
    employees: "",
  },
];
