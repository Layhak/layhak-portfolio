import {
  IconBook,
  IconHome,
  IconSchool,
  IconUser,
  IconUxCircle,
} from "@tabler/icons-react";

export const siteConfig = {
  name: "Layhak Portfolio",
  navItems: {
    en: [
      {
        label: "Home",
        href: "/",
        tooltip: "Go to Home Page",
        icon: <IconHome className="h-4 w-4 " />,
      },
      {
        label: "Experience",
        href: "/experience",
        tooltip: "Go to Experience Page",
        icon: <IconUxCircle className="h-4 w-4" />,
      },
      {
        label: "Skills",
        href: "/skill",
        tooltip: "Go to Skills Page",
        icon: <IconUser className="h-4 w-4 " />,
      },
      {
        label: "Education",
        href: "/edu",
        tooltip: "Go to Education Page",
        icon: <IconSchool className="h-4 w-4 " />,
      },
      {
        label: "Blog",
        href: "/blog",
        tooltip: "Go to Blog Page",
        icon: <IconBook className="h-4 w-4 " />,
      },
    ],
    kh: [
      {
        label: "ទំព័រដើម",
        href: "/",
        tooltip: "ទៅកាន់ទំព័រដើម",
        icon: <IconHome className="h-4 w-4" />,
      },
      {
        label: "បទពិសោធន៍",
        href: "/experience",
        tooltip: "ទៅកាន់ទំព័របទពិសោធន៍",
        icon: <IconUxCircle className="h-4 w-4" />,
      },
      {
        label: "ជំនាញ",
        href: "/skill",
        tooltip: "ទៅកាន់ទំព័រជំនាញ",
        icon: <IconUser className="h-4 w-4" />,
      },
      {
        label: "ការអប់រំ",
        href: "/edu",
        tooltip: "ទៅកាន់ទំព័រការអប់រំ",
        icon: <IconSchool className="h-4 w-4" />,
      },
      {
        label: "ទំព័រប័ណ្ណសារ",
        href: "/blog",
        tooltip: "ទៅកាន់ទំព័រប័ណ្ណសារ",
        icon: <IconBook className="h-4 w-4" />,
      },
    ],
  },
  metadata: {
    title: "Layhak Portfolio",
    description:
      "Layhak is a web developer and designer from Cambodia. He is passionate about web development and design. He has a strong interest in creating user-friendly and visually appealing websites. He is also an avid reader and loves to explore new ideas and technologies.",
    keywords: [
      "Hak Portofolio",
      "Hak",
      "Layhak",
      "Layhak Portfolio",
      "Heng layhak",
      "Layhak-portfolio",
      "Layhak heng",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://layhak.social/",
      title: "Layhak Portfolio",
      description:
        "Layhak is a web developer and designer from Cambodia. He is passionate about web development and design. He has a strong interest in creating user-friendly and visually appealing websites. He is also an avid reader and loves to explore new ideas and technologies.",
      images: [
        {
          url: process.env.NEXT_PUBLIC_LOGO_URL + "banner.png",
          width: 1200,
          height: 630,
          alt: "Layhak Logo Ecommerce Website",
        },
      ],
      siteName: "layhak portfolio",
    },
    twitter: {
      site: "Layhak Portfolio",
      title: "Layhak Portfolio | Web Developer and Designer",
      description:
        "Layhak is a web developer and designer from Cambodia. He is passionate about web development and design. He has a strong interest in creating user-friendly and visually appealing websites. He is also an avid reader and loves to explore new ideas and technologies.",
      images: [
        {
          url: process.env.NEXT_PUBLIC_LOGO_URL + "banner.png",
          alt: "DealKH Logo Ecommerce Website",
        },
      ],
    },
  },
};

export type SiteConfig = typeof siteConfig;
