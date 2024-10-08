"use client";
import { useTheme } from "next-themes";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <Button
      variant="default"
      size="icon"
      className="inline-flex  animate-shimmer rounded-full items-center justify-center  border border-slate-300 dark:border-slate-800 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] bg-[linear-gradient(110deg,#f9fafb,45%,#e2e8f0,55%,#f9fafb)] font-medium text-slate-400 transition-colors"
      onClick={onChange}
    >
      {theme === "light" ? (
        <IconSun className={"w-4 h-4"} />
      ) : (
        <IconMoonStars className={"w-4 h-4"} />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
