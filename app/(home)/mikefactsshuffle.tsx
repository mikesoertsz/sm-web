"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { IoMdShuffle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Preheading } from "@/lib/atoms";

type Props = {};

export default function Mikefactsshuffle({}: Props) {
  const mikeFacts = [
    "Codes in over 14 languages.",
    "Pro in 30 design software.",
    "Hired and trained over 50 software engineers & designers.",
    "Is an AI advocate.",
    "Is a full-stack developer.",
    "Builds with modern frameworks like NextJs 14+.",
    "Gives talks on AI at the University of Porto.",
    "Has 10 years of AWS DevOps experience.",
    "Based in Porto, Portugal.",
    "Has lived in 15 cities.",
    "Has 3 dogs.",
    "Loves sailing.",
    "Is a carpenter.",
    "Is a chef.",
    "Built a food delivery startup.",
    "Studied Aerospace Engineering at university.",
    "Works with a team of 80+ engineers & designers.",
    "Is a designer.",
    "Built this site in NextJs in 3 days.",
  ];
  const [currentFact, setCurrentFact] = useState(0);

  const shuffleFacts = () => {
    setCurrentFact((prevFact) => (prevFact + 1) % mikeFacts.length);
  };

  return (
    <div className="flex flex-col items-center justify-center md:w-3/4 text-white h-full w-full md:h-2/3 bg-brand-base-f border-[10px] border-brand-base-b p-4 md:p-12 shadow-xl text-center">
      <Preheading className="font-light tracking-wider uppercase text-brand-base-b">
        Random Mike Facts
      </Preheading>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentFact}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center justify-between w-full text-2xl font-light text-center md:text-3xl bg-brand-base-f md:max-w-2/3 grow"
        >
          <div></div>
          <div>{mikeFacts[currentFact]}</div>
          <div className="flex"></div>
        </motion.div>
      </AnimatePresence>
      <Button
        className="gap-2 font-body"
        variant="secondary"
        onClick={shuffleFacts}
      >
        <IoMdShuffle size={12} />
        Shuffle
      </Button>
    </div>
  );
}
