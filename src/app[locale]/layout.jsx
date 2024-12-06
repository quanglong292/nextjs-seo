import { getMessages } from "next-intl/server";

// Remove the static metadata export
// export const metadata = {...}

// Add generateMetadata function
export async function generateMetadata({ params }) {
  const locale = params.locale;
  const messages = await getMessages();

  return {
    title: {
      default: messages?.seo?.defaultTitle || "Your App Name",
      template: `%s | Your App Name`,
    },
    description:
      messages?.seo?.defaultDescription || "Your default description",
    keywords: messages?.seo?.keywords || "keyword1, keyword2",
    openGraph: {
      title: messages?.seo?.ogTitle || "Your App Name",
      description: messages?.seo?.ogDescription || "Your default description",
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: "Your App Name",
      locale: locale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_SITE_URL,
    },
  };
}
