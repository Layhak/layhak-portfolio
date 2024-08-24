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
import LanguageSwitcher from "@/components/switcher/languageSwitcher";
import { useLanguage } from "@/config/languageContext";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/switcher/themeSwitcher";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IconLogin, IconMenu2 } from "@tabler/icons-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { language } = useLanguage();
  const navItems = siteConfig.navItems[language];
  const pathname = usePathname();

  const { scrollY }: any = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    const currentScrollY: any = scrollY.get();

    if (currentScrollY < 10) {
      setVisible(true);
    } else {
      const direction: any = latest - scrollY.getPrevious();
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.nav
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex justify-between  max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-gray-950 bg-gray-50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-20 pr-3 pl-4 lg:pl-8 py-2 items-center  space-x-1 sm:space-x-4",
            className,
          )}
        >
          <section className="flex items-center justify-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <IconMenu2 className="h-6 w-6 text-slate-500" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className={"bg-neutral-50 dark:bg-neutral-950"}
              >
                <nav className="grid gap-6 text-lg font-medium">
                  {navItems.map((navItem: any, idx: number) => (
                    <Link
                      key={`link=${idx}`}
                      href={navItem.href}
                      className={cn(
                        "relative dark:text-neutral-50 items-center  space-x-1 block lg:hidden",
                        pathname === navItem.href
                          ? "bg-gradient-to-br from-blue-400 to-indigo-800  bg-clip-text text-transparent font-bold dark:text-gradient-to-br dark:from-blue-500 dark:to-indigo-800"
                          : "text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-500",
                      )}
                    >
                      <span className={"flex items-center gap-2"}>
                        <span
                          className={
                            pathname === navItem.href ? "text-primary" : ""
                          }
                        >
                          {navItem.icon}
                        </span>
                        <span>{navItem.label}</span>
                      </span>
                    </Link>
                  ))}{" "}
                </nav>
              </SheetContent>
            </Sheet>
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.href}
                className={cn(
                  "relative dark:text-neutral-50 items-center  space-x-1 hidden md:flex",
                  pathname === navItem.href
                    ? "bg-gradient-to-br from-blue-400 to-indigo-800  bg-clip-text text-transparent font-bold dark:text-gradient-to-br dark:from-blue-500 dark:to-indigo-800"
                    : "text-neutral-600 dark:hover:text-neutral-400 hover:text-neutral-500",
                )}
              >
                <span
                  className={pathname === navItem.href ? "text-primary" : ""}
                >
                  {navItem.icon}
                </span>
                <span>{navItem.label}</span>
              </Link>
            ))}
          </section>
          <section className="flex items-center justify-center gap-1">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              duration={1}
              className="dark:bg-neutral-950 bg-neutral-50 text-neutral-950 dark:text-neutral-50 flex items-center space-x-2 border-0 font-semibold hover:text-primary dark:hover:text-primary transition-colors duration-300 ease-in-out"
            >
              <IconLogin className="h-4 w-4" />
              Login
            </HoverBorderGradient>
          </section>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
