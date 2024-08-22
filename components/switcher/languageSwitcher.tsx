"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/config/languageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const contentVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (value: any) => {
    setLanguage(value);
  };

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div>
          <Button
            variant="ghost"
            className={
              "rounded-full ring-0 hover:bg-slate-200 dark:hover:bg-slate-900 border border-transparent dark:border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] active:border-slate-400 dark:active:border-white/[0.2] focus-visible:ring-0 hidden md:block"
            }
          >
            {language === "en" ? "🇬🇧 ENG" : "🇰🇭 KHM"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={
              "rounded-full ring-0 hover:bg-slate-200 dark:hover:bg-slate-900 border border-transparent dark:border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] active:border-slate-400 dark:active:border-white/[0.2] focus-visible:ring-0 md:hidden block"
            }
          >
            {language === "en" ? "🇬🇧" : "🇰🇭"}
          </Button>
        </div>
      </DropdownMenuTrigger>
      {open && (
        <DropdownMenuContent
          className={
            "rounded-lg bg-gray-50 dark:bg-gray-950 border border-transparent dark:border-white/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          <motion.div
            className={
              "rounded-2xl bg-gray-50 dark:bg-gray-950 border border-transparent "
            }
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={transition}
            variants={contentVariants}
          >
            <DropdownMenuLabel>Select Language</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-50 dark:bg-white/[0.2]" />
            <DropdownMenuRadioGroup
              value={language}
              onValueChange={handleLanguageChange}
            >
              <DropdownMenuRadioItem value="en">🇬🇧 ENG</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="kh">🇰🇭 KHM</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </motion.div>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
