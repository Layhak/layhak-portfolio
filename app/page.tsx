"use client";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { useLanguage } from "@/config/languageContext";

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
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {/* Place the language switcher at the top or anywhere appropriate */}
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          {content.title}
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          {content.subtitle}
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          {content.buttonText}
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
