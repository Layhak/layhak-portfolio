"use client";
import React from "react";
import { useLanguage } from "@/config/languageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 rounded ${
          language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("kh")}
        className={`px-4 py-2 rounded ${
          language === "kh" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Khmer
      </button>
    </div>
  );
};

export default LanguageSwitcher;
