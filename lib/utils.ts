import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (ClassValue | string)[]) {
  // Convert all inputs to ClassValue before merging
  const classValues: ClassValue[] = inputs.map((input) =>
    typeof input === "string" ? input.split(" ") : input
  );
  return twMerge(clsx(...classValues));
}
