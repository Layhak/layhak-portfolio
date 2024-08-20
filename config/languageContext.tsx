"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

interface LanguageContextProps {
  language: "en" | "kh";
  setLanguage: (language: "en" | "kh") => void;
  getLanguage: () => "en" | "kh";
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"en" | "kh">("en");

  const getLanguage = () => {
    return language;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
