"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  language,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  language: string;
}) => {
  // Function to determine if the character is non-whitespace
  const isNonWhitespace = (char: string): boolean => char.trim().length > 0;

  const wordsArray = words.map((word) => {
    const textArray = word.text.split("");
    // Reverse iterate to find the last non-whitespace character
    const lastNonWhitespaceIndex = textArray.reduce(
      (lastIndex, char, index) => (isNonWhitespace(char) ? index : lastIndex),
      -1,
    );
    return {
      ...word,
      text: textArray,
      lastNonWhitespaceIndex, // Record the last non-whitespace character index
    };
  });

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          // Determine if the current word is the next to last word
          const isNextToLast =
            language === "kh"
              ? idx === wordsArray.length - 2
              : idx === wordsArray.length - 2;

          return (
            <div
              key={`word-${idx}`}
              className={cn("inline-block", {
                "text-primary font-bold": isNextToLast,
              })}
            >
              {word.text.map((char, index) => {
                // Apply styles to the character if it is the last non-whitespace character
                const isLastNonWhitespace =
                  index === word.lastNonWhitespaceIndex;
                return (
                  <span
                    key={`char-${index}`}
                    className={cn(
                      "dark:text-white text-black",
                      word.className,
                      {
                        "text-primary font-bold": isLastNonWhitespace,
                      },
                    )}
                  >
                    {char}
                  </span>
                );
              })}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName,
        )}
      ></motion.span>
    </div>
  );
};
