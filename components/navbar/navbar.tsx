import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  return <FloatingNav navItems={siteConfig.navItems} />;
}
