import { ROUTES } from "@/shared/routes";

export default function sitemap() {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.PROD_BASE_URL
      : process.env.DEV_BASE_URL || "http://localhost:3000";

  const locales = ["en", "vi"];
  const paths = [
    ...ROUTES,
    { route: "", changeFrequency: "yearly", priority: 1 },
  ];

  const sitemapEntries = locales.flatMap((locale) =>
    paths.map(({ route, changeFrequency, priority }) => ({
      url: `${baseUrl}/${locale}${route ? `${route}` : ""}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }))
  );

  console.log({ sitemapEntries });

  return sitemapEntries;
}
