"use client";
import { Button } from "@/components/ui/button";
import { Preheading } from "@/lib/atoms";
import useStore from "@/lib/store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { PiMaskSadDuotone } from "react-icons/pi";

type Props = {};

const confettiConfig = {
  angle: 90,
  spread: 180,
  startVelocity: 30,
  elementCount: 200,
  decay: 0.95,
  width: "8px",
  height: "7px",
  colors: ["#900C3F", "#C70039", "#F94C10", "#F8DE22"],
};

const targetScore = 35;

export default function QuizBot({}: Props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const setIsMatch = useStore((state) => state.setIsMatch);
  const isMatch = useStore((state) => state.isMatch);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleThumbsUp = () => {
    const currentScore = questions[currentQuestionIndex].score;
    const newTotalScore = totalScore + currentScore;
    setTotalScore(newTotalScore);

    if (newTotalScore >= targetScore) {
      setIsMatch(true);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleThumbsDown = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const resetQuizButton = (
    <Button
      className="text-black font-body bg-gray-50 hover:bg-gray-300"
      onClick={() => {
        setCurrentQuestionIndex(0);
        setTotalScore(0);
        setIsMatch(false);
        setShowConfetti(false); // Ensure confetti is reset
      }}
    >
      Reset Quiz
    </Button>
  );

  useEffect(() => {
    if (isMatch) {
      setShowConfetti(true);
    }
  }, [isMatch]);

  if (isMatch) {
    return (
      <div className="flex flex-col items-center justify-between h-full p-8">
        <div>
          <Confetti active={showConfetti} config={confettiConfig} />
        </div>
        <AnimatePresence>
          {showConfetti && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center justify-center h-full text-4xl text-brand-base-f grow font-title"
            >
              <span className="mb-8 text-5xl">🎉</span>
              Looks like I can help!
            </motion.div>
          )}
        </AnimatePresence>
        <div>{resetQuizButton}</div>
      </div>
    );
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="flex flex-col items-center justify-between h-full p-12 text-4xl text-brand-base-a">
        <div></div>
        <div className="flex flex-col items-center text-center">
          <PiMaskSadDuotone size={100} className="mb-1 text-brand-base-c3" />
          <h1>No more questions!</h1>
          <p className="text-sm font-light font-body text-brand-base-i">
            We might not be the best match after all.
          </p>
        </div>
        {resetQuizButton}
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="relative flex flex-col items-center justify-center md:w-3/4 p-8 mx-3 md:p-12 text-white shadow-xl min-h-2/3 bg-brand-base-c2 border-[10px] border-brand-base-j">
      <div className="absolute text-sm right-4 top-4 z-90 font-body opacity-30">
        {currentQuestionIndex + 1}/{questions.length}
      </div>
      <div className="flex flex-col items-center justify-between max-w-2/3 grow">
        <Preheading className="font-light tracking-wider uppercase text-brand-base-b">
          Should we talk?
        </Preheading>
        <div className="flex flex-col items-center justify-center text-lg md:text-2xl text-center rounded-lg min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex w-full text-3xl text-brand-base-h font-title"
            >
              {currentQuestion.text}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative w-[80%] h-1 mt-4 bg-brand-base-c3 rounded-full mx-8">
          <div
            className="absolute top-0 left-0 h-1 transition-all duration-300 ease-out bg-brand-base-a"
            style={{ width: `${(totalScore / 35) * 100}%` }}
          ></div>
        </div>
        <div className="flex items-center justify-center gap-4 my-8">
          <button
            className="flex items-center justify-center p-4 text-black rounded-full bg-brand-base-a hover:cursor-pointer hover:bg-black hover:text-white"
            onClick={handleThumbsDown}
          >
            <FaThumbsDown size={25} />
          </button>
          <button
            className="flex items-center justify-center p-4 text-black rounded-full bg-brand-base-a hover:cursor-pointer hover:bg-black hover:text-white"
            onClick={handleThumbsUp}
          >
            <FaThumbsUp size={25} />
          </button>
        </div>
      </div>
      {resetQuizButton}
    </div>
  );
}

const questions = [
  {
    text: "You have an amazing idea but don't know the best way to build it?",
    score: 6,
  },
  {
    text: "You're confused between tech stacks like MERN or TAN?",
    score: 6,
  },
  { text: "Frustrated with no-code or low-code platforms?", score: 8 },
  { text: "Frustrated with freelancer churn & work quality?", score: 5 },
  { text: "Raised funds but not sure how to execute?", score: 10 },
  { text: "Need help setting up your internal tools & software?", score: 10 },
  { text: "Need help hiring engineers or designers?", score: 10 },
  {
    text: "Having problems answering technical questions from investors?",
    score: 10,
  },
  {
    text: "Need help with your product roadmap and engineering budget?",
    score: 6,
  },
  {
    text: "Frustrated with the limitations of no-code and low-code platforms?",
    score: 5,
  },
];
