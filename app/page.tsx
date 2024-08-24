"use client";
import React from "react";
import { useLanguage } from "@/config/languageContext";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const translations = {
  en: {
    name: "Layhak",
    buttonText: "Contact me now",
    words: ["Modern", "Clean", "Responsive"],
    splitWords: [
      { text: "With" },
      { text: "Layhak", className: "text-primary font-bold dark:text-primary" },
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
        className: "text-primary font-bold dark:text-primary",
      },
    ],
  },
};

export default function Home() {
  const { language } = useLanguage();
  const content = translations[language];
  const words = content.words;
  const splitWords = content.splitWords;

  return (
    <AuroraBackground>
      <motion.section
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="h-[40rem] flex justify-center items-center flex-col px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            {language === "en" ? (
              <>Build</>
            ) : (
              <>
                បង្កើត <span className="font-bold text-primary ">គេហទំព័រ</span>
              </>
            )}
            <FlipWords words={words} language={language} duration={3000} />
            {language === "en" ? (
              <>
                <span className="text-primary font-bold dark:text-primary">
                  Website
                </span>
              </>
            ) : (
              ""
            )}
            <TypewriterEffectSmooth
              className={"text-neutral-600 dark:text-neutral-400"}
              words={splitWords}
              language={language}
            />
            <button className="bg-white dark:bg-zinc-950 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-zinc-950 dark:text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(0,112,243,0.6)_0%,rgba(0,112,243,0)_75%)] dark:bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full py-3 px-10 ring-1 ring-zinc-950/20 dark:ring-white/10">
                <span>{content.buttonText}</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-500/0 via-blue-500/90 to-blue-500/0 dark:from-emerald-400/0 dark:via-emerald-400/90 dark:to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </div>
        </div>
      </motion.section>
    </AuroraBackground>
  );
}
