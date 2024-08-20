"use client";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <button
      className="flex items-center gap-2 rounded-md border border-transparent bg-gradient-to-br from-sky-200 to-blue-200 px-4 py-2 text-sm font-medium transition-colors hover:border-sky-300 hover:bg-gradient-to-bl hover:from-sky-300 hover:to-blue-300 dark:border-neutral-700 dark:bg-gradient-to-br dark:from-blue-700 dark:to-sky-700 dark:hover:border-neutral-500 dark:hover:from-blue-500 dark:hover:to-sky-500"
      onClick={onChange}
    >
      {theme === "light" ? "🌞" : "🌚"}
    </button>
  );
};

export default ThemeSwitcher;
