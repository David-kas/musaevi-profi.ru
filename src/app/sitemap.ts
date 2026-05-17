import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/data/blog";

const ROUTES = [
  "",
  "/uslugi",
  "/tseny",
  "/kosmetologiya",
  "/lazernaya-epilyatsiya",
  "/massazh-i-spa",
  "/skleroterapiya",
  "/o-nas",
  "/otzyvy",
  "/galereya",
  "/blog",
  "/kontakty",
  "/politika-konfidentsialnosti",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;
  const now = new Date();

  return [
    ...ROUTES.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: path === "" || path === "/blog" ? "weekly" as const : "monthly" as const,
      priority: path === "" ? 1 : path.includes("kosmetolog") || path.includes("lazer") ? 0.9 : 0.7,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
