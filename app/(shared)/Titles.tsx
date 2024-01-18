"use client";

import { TitleHeader } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ClassProp } from "class-variance-authority/types";

type ThemeType = "light" | "dark";

const titleVariants = cva([
  [
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "mx-auto",
    "text-center",
  ],
  {
    // Variants
    variants: {
      theme: {
        light: "text-brand-base-c2",
        dark: "text-brand-base-a",
      },
    },
    defaultVariants: {
      theme: "light",
    },
  },
]);

export interface TitleProps extends VariantProps<typeof titleVariants> {
  content: TitleHeader["content"];
  theme?: ThemeType;
}

export function Titles({ content, theme = "light" }: TitleProps) {
  const themeClass = titleVariants({ theme } as ClassProp);
  const preheadingClass =
    theme === "light" ? "text-brand-base-c2" : "text-brand-base-a";

  return (
    <div className={themeClass}>
      {content?.icon && (
        <div className="flex items-center justify-center py-4 mx-auto">
          {content.icon}
        </div>
      )}
      {content?.image && (
        <div className="relative w-10 h-10 py-4">
          <Image src={content.image} alt="" layout="fill" />
        </div>
      )}
      {content?.preheading && (
        <h4
          className={`sm:text-sm md:text-md uppercase font-light tracking-[0.5em] max-w-3xl mb-12 font-body ${preheadingClass}`}
        >
          {content.preheading}
        </h4>
      )}
      {content?.heading && (
        <h1 className="max-w-4xl mb-4 text-5xl md:text-5xl lg:text-6xl lg:max-w-5xl">
          {content.heading}
        </h1>
      )}
      {content?.subheading && (
        <h2 className="max-w-4xl my-4 text-2xl font-light tracking-tight font-body">
          {content.subheading}
        </h2>
      )}
      {content?.body && (
        <p className="max-w-3xl mx-auto mt-3 text-sm leading-relaxed md:text-lg font-body text-brand-base-i">
          {content.body}
        </p>
      )}
    </div>
  );
}
