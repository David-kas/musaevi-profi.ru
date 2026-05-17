import type { Metadata } from "next";
import { SITE } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMeta): Metadata {
  const fullTitle =
    title.includes(SITE.name) ? title : `${title} | ${SITE.name} — ${SITE.city}`;
  const url = `${SITE.domain}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [...SEO_KEYWORDS_BASE, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: [
        {
          url: `${SITE.domain}/images/IMG_1161.jpg`,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — студия косметологии в ${SITE.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}

const SEO_KEYWORDS_BASE = [
  "косметолог Балашов",
  "косметология Балашов",
  "Мусаевы PROFI",
];
