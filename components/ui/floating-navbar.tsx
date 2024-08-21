"use client";
import React, { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeSwitcher from "@/components/switcher/themeSwitcher";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/switcher/languageSwitcher";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    label: string;
    href: string;
    tooltip?: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollY }: any = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    const currentScrollY = scrollY.get();

    if (currentScrollY < 10) {
      // Keep visible if the user hasn't scrolled significantly
      setVisible(true);
    } else {
      // Check the direction of scrolling
      const direction: any = latest - scrollY.getPrevious();
      if (direction < 0) {
        setVisible(true); // Show navbar when scrolling up
      } else {
        setVisible(false); // Hide navbar when scrolling down
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-gray-950 bg-gray-50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-20 pr-2 pl-8 py-2 items-center justify-center space-x-4",
            className,
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.href}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:inline-flex gap-2 text-sm items-center">
                {navItem.icon} {navItem.label}
              </span>
            </Link>
          ))}
          <ThemeSwitcher />
          <LanguageSwitcher />
          <Button variant="outline" className={"relative rounded-full w-32"}>
            <span>Login</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
