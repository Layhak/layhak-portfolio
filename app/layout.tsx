import "./globals.css";
import { inter, kantumruyPro } from "@/config/fonts";
import React, { Suspense } from "react";
import error from "@/app/error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Loading from "@/app/loading";
import LanguageSwitcher from "@/components/switcher/languageSwitcher";
import { ThemeProvider } from "@/config/themeContext";
import ThemeSwitcher from "@/components/switcher/themeSwitcher";
import { LanguageProvider } from "@/config/languageContext";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  manifest: "/manifest.json",
  description: siteConfig.metadata.description,
  keywords: siteConfig.metadata.keywords,
  openGraph: siteConfig.metadata.openGraph,
  twitter: siteConfig.metadata.twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"dark"}>
      <body className={`${kantumruyPro.variable} ${inter.variable}`}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ErrorBoundary errorComponent={error}>
              <Suspense fallback={<Loading />}>
                <header>
                  <LanguageSwitcher />
                  <ThemeSwitcher />
                </header>
                {children}
              </Suspense>
            </ErrorBoundary>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
