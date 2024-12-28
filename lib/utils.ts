import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const translations = {
  en: {
    name: "Layhak",
    buttonText: "Contact me now",
    words: ["Modern", "Clean", "Responsive"],
    splitWords: [
      {
        text: "Website",

        className: cn("text-primary font-bold dark:text-primary"),
      },
      {
        text: "With",
      },
      {
        text: "Layhak",
        className: cn("text-primary font-bold dark:text-primary"),
      },
    ],
  },
  kh: {
    name: "ឡាយហាក់",
    buttonText: "ទំនាក់ទំនងមកខ្ញុំឥឡូវនេះ",
    words: ["ទំនើប", "ស្អាត", "ឆ្លាតវៃ"],
    splitWords: [
      { text: "ជាមួយ" },
      {
        text: "ឡាយហាក់",
        className: cn("text-primary font-bold dark:text-primary"),
      },
    ],
  },
};
