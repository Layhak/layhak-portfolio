import "@/styles/globals.css";
import { inter, kantumruyPro } from "@/config/fonts";
import React, { Suspense } from "react";
import error from "@/app/error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Loading from "@/app/loading";
import { ThemeProvider } from "@/config/themeContext";
import { LanguageProvider } from "@/config/languageContext";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/navbar/navbar";
import SocialFloatingBar from "@/components/socialFloatingBar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  // manifest: "/manifest.json",
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
    <html
      lang="en"
      className={"dark"}
      suppressContentEditableWarning
      suppressHydrationWarning
    >
      <body className={`${kantumruyPro.variable} ${inter.variable}`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ErrorBoundary errorComponent={error}>
              <Suspense fallback={<Loading />}>
                <header>
                  <Navbar />
                </header>
                <SocialFloatingBar />
                {children}
              </Suspense>
            </ErrorBoundary>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
