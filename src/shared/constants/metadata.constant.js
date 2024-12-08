const graphImg =
  "https://wordpress.iqonic.design/product/wp/talkie/wp-content/uploads/2019/10/footerlogo-2.png";

export const DEFAULT_METADATA = {
  // Basic Metadata
  title: "QKit Chat Bot | AI Customer Support Tool",
  description:
    "Turn AI into your expert customer support agent with QKit Chat Bot. Automate responses, improve support efficiency, and enhance customer satisfaction.",

  // SEO Keywords
  keywords: [
    "AI chatbot",
    "customer support AI",
    "AI customer service",
    "chatbot automation",
    "SiteGPT alternative",
  ],

  // Authors and Publisher
  authors: [{ name: "Quy" }],
  creator: "Nguyen Phu Quy",
  publisher: "Nguyen Phu Quy",

  // Application Information
  applicationName: "QKit Chat Bot",
  generator: "Next.js",

  // Format Detection
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Referrer Policy
  referrer: "origin-when-cross-origin",

  // Open Graph Metadata
  openGraph: {
    title: "QKit Chat Bot | AI Customer Support Tool",
    description:
      "Make AI your expert customer support agent. Automate responses, improve efficiency, and boost customer satisfaction with QKit Chat Bot.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [
      {
        url: graphImg,
        width: 1200,
        height: 630,
        alt: "QKit Chat Bot Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Metadata
  twitter: {
    card: "summary_large_image",
    title: "QKit Chat Bot | AI Customer Support Tool",
    description:
      "Automate your customer service with QKit Chat Bot. Enhance support with AI-powered solutions.",
    images: [graphImg],
  },

  robots: {
    index: process.env.NODE_ENV === "production" ? true : false,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/logo-1.png",
    shortcut: "/logo-1.png",
    apple: "/logo-1.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo-1.png",
    },
  },

  manifest: "/manifest.json",

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "vi-VI": "/vi",
    },
  },

  // Structured Data (Optional Example)
  //   structuredData: {
  //     "@context": "https://schema.org",
  //     "@type": "SoftwareApplication",
  //     name: "QKit Chat Bot",
  //     description:
  //       "Turn AI into your expert customer support agent with QKit Chat Bot. Automate responses, improve support efficiency, and enhance customer satisfaction.",
  //     applicationCategory: "Customer Support Software",
  //     operatingSystem: "All",
  //     url: "https://yourwebsite.com",
  //     creator: {
  //       "@type": "Person",
  //       name: "Jiachi Liu",
  //     },
  //     publisher: {
  //       "@type": "Person",
  //       name: "Sebastian Markbåge",
  //     },
  //   },
};
