import { SITE } from "./site";
import type { Review } from "@/data/reviews";
import type { FaqItem } from "@/data/faq";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${SITE.domain}/#organization`,
    name: SITE.name,
    image: `${SITE.domain}/logo.jpg`,
    url: SITE.domain,
    telephone: SITE.phones.primary,
    email: SITE.email,
    priceRange: "₽₽",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.coords.lat,
      longitude: SITE.coords.lng,
    },
    openingHoursSpecification: SITE.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [SITE.social.vk],
    areaServed: [
      { "@type": "City", name: "Балашов" },
      { "@type": "AdministrativeArea", name: "Саратовская область" },
    ],
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function reviewSchema(reviews: Review[]) {
  return reviews.slice(0, 5).map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    datePublished: r.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
    },
    reviewBody: r.text,
    itemReviewed: {
      "@type": "BeautySalon",
      name: SITE.name,
    },
  }));
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.domain}${item.path}`,
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE.domain}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Organization",
      name: SITE.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.domain}/logo.jpg`,
      },
    },
  };
}
