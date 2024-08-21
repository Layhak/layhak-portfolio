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

  const handleLanguageChange = (value: "en" | "kh") => {
    setLanguage(value);
  };

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={"rounded-full hover:bg-slate-200 dark:hover:bg-slate-900"}
        >
          {language === "en" ? "🇬🇧 ENG" : "🇰🇭 KHM"}
        </Button>
      </DropdownMenuTrigger>
      {open && (
        <DropdownMenuContent>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={transition}
            variants={contentVariants}
          >
            <DropdownMenuLabel>Select Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={language}
              onValueChange={handleLanguageChange}
            >
              <DropdownMenuRadioItem value="en">🇬🇧ENG</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="kh">🇰🇭KHM</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
          </motion.div>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
