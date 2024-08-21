"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandX,
} from "@tabler/icons-react";

let socialItems: { title: string; icon: React.JSX.Element; href: string }[];
socialItems = [
  {
    title: "Facebook",
    icon: (
      <IconBrandFacebook className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
    href: "https://www.linkedin.com/in/layhak/",
  },
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram
        className={"h-4 w-4 text-neutral-500 dark:text-white"}
      />
    ),
    href: "https://www.instagram.com/layhak/",
  },
  {
    title: "Telegram",
    icon: (
      <IconBrandTelegram
        className={"h-4 w-4 text-neutral-500 dark:text-white"}
      />
    ),
    href: "https://t.me/layhak",
  },
  {
    title: "Github",
    icon: (
      <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
    href: "https://github.com/layhak/portfolio",
  },
  {
    title: "Twitter",
    icon: <IconBrandX className="h-4 w-4 text-neutral-500 dark:text-white" />,
    href: "https://twitter.com/layhak",
  },
];
export default function SocialFloatingBar() {
  return (
    <FloatingDock
      desktopClassName={
        "fixed z-20 bg-transparent dark:bg-transparent top-1/3 "
      }
      mobileClassName={
        "fixed z-10 bg-transparent dark:bg-transparent top-1/3 left-0 bottom-4"
      }
      items={socialItems}
    />
  );
}
