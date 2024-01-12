"use client";

import { greetings } from "@/public/content/greetings";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const GreetingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 0 0 20px 0;
  padding: 0;
  span {
    font-size: 2.1rem;
    margin-right: 10px;
  }
`;

type Props = {};

export default function FadingGreeting({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let intervalId: any = null;
    intervalId = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % greetings.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const Greeting = styled.p`
    font-size: 2.2rem;
    text-align: center;
    font-weight: normal;
    color: #eeeeee;
    animation: ${fadeInOut} 4s 0s;
    animation-fill-mode: both;
  `;

  return (
    <GreetingContainer>
      <span>👋</span>
      <Greeting>{greetings[currentIndex].greeting}</Greeting>
    </GreetingContainer>
  );
}

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
