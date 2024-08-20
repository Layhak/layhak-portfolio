export const siteConfig = {
  name: "Layhak Portfolio",
  navItems: [
    { label: "Home", href: "/", tooltip: "Go to Home Page" },
    {
      label: "Experience",
      href: "/experience",
      tooltip: "Go to  Experience Page",
    },
    { label: "Skills", href: "/skill", tooltip: "Go to Skills Page" },
    { label: "Eduducation", href: "/edu", tooltip: "Go to Education Page" },
  ],
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
        // { url: process.env.NEXT_PUBLIC_LOGO_URL + 'logo.png', alt: 'Exclusive Shopping Deals in Cambodia' },
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
