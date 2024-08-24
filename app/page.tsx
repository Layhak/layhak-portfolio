"use client";
import React from "react";
import { useLanguage } from "@/config/languageContext";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const translations = {
  en: {
    name: "Layhak",
    buttonText: "Contact me now",
    words: ["Modern", "Clean", "Responsive"],
    splitWords: ["Website", "With", "Layhak"],
  },
  kh: {
    name: "ឡាយហាក់",
    buttonText: "ទំនាក់ទំនងមកខ្ញុំឥឡូវនេះ",
    words: ["ទំនើប", "ស្អាត", "ឆ្លាតវៃ"],
    splitWords: ["ជាមួយ", "ឡាយហាក់"],
  },
};

export default function Home() {
  const { language } = useLanguage();
  const content = translations[language];
  const words = content.words;
  const splitWords = content.splitWords.map((word) => ({ text: word }));

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
              "Build"
            ) : (
              <>
                បង្កើត <span className="font-bold text-primary ">គេហទំព័រ</span>
              </>
            )}
            <FlipWords words={words} language={language} duration={3000} />
            <br />
            <TypewriterEffectSmooth words={splitWords} language={language} />
            <Button className="bg-natural-50 dark:bg-neutral-950 rounded-full w-fit dark:text-neutral-50 text-neutral-950 px-4 py-2">
              {content.buttonText}
            </Button>
          </div>
        </div>
      </motion.section>
    </AuroraBackground>
  );
}
