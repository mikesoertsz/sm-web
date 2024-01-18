"use client";
import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { InnerWrap, Wrapper, Heading, Preheading, Body } from "@/lib/atoms";

type Props = {};

export default function YachtInvestCalc({}: Props) {
  const [investmentAmount, setInvestmentAmount] = useState(100000);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvestmentAmount(Number(event.target.value));
  };

  const calculateReturns = (amount: number, rate: number, years: number) => {
    return amount * Math.pow(1 + rate, years);
  };

  const calculatePercentageGain = (amount: number, returns: number) => {
    return ((returns - amount) / amount) * 100;
  };

  const spReturn = calculateReturns(investmentAmount, 0.0726, 6);
  const yachtReturn = calculateReturns(investmentAmount, 0.095, 6);
  const spPercentageGain = calculatePercentageGain(investmentAmount, spReturn);
  const yachtPercentageGain = calculatePercentageGain(
    investmentAmount,
    yachtReturn
  );
  const earningsDifference = yachtReturn - spReturn;
  const percentageDifference = yachtPercentageGain - spPercentageGain;

  return (
    <Wrapper className="py-[30vh] font-body text-xl gap-4 flex">
      <InnerWrap>
        <form className="flex gap-4">
          <label htmlFor="investmentAmount">Investment Amount:</label>
          <input
            type="range"
            id="investmentAmount"
            name="investmentAmount"
            min="100000"
            max="1000000"
            step="25000"
            value={investmentAmount}
            onChange={handleSliderChange}
          />
          <output id="amountOutput" htmlFor="investmentAmount">
            ${investmentAmount.toLocaleString()}
          </output>
          <input
            type="number"
            id="investmentInput"
            name="investmentInput"
            value={investmentAmount}
            min="100000"
            max="1000000"
            step="25000"
            onChange={handleSliderChange}
            className="w-24 mx-10"
          />
        </form>
        <div className="mt-12 ml-12 text-md">
          <ul>
            <li>
              <span>S&P 500:</span> $
              {spReturn.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              ({spPercentageGain.toFixed(2)}%)
            </li>
            <li>
              <span>Yachts:</span> minimum $
              {yachtReturn.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
              ({yachtPercentageGain.toFixed(2)}%)
            </li>
            <li>
              Difference in earnings: $
              {earningsDifference.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
              ({percentageDifference.toFixed(2)}%)
            </li>
          </ul>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
