"use client";
import React from "react";
import { useLanguage } from "@/config/languageContext";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const translations = {
  en: {
    title: "Background lights are cool you know.",
    subtitle: "And this, is chemical burn.",
    buttonText: "Debug now",
  },
  kh: {
    title: "ពន្លឺផ្ទៃខាងក្រោយគឺត្រជាក់អ្នកដឹងទេ។",
    subtitle: "ហើយនេះគឺជាដំបៅគីមី។",
    buttonText: "ដំណើរការទីនេះ",
  },
};

export default function Home() {
  const { language } = useLanguage();
  const content = translations[language];

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
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          <h1> {content.title}</h1>
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          <h1> {content.subtitle}</h1>
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          <h1> {content.buttonText}</h1>
        </button>
      </motion.section>
    </AuroraBackground>
  );
}
