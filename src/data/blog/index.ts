export type BlogSection = {
  heading: string;
  level?: 2 | 3 | 4;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  image: string;
  keywords: string[];
  sections: BlogSection[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
};

export { BLOG_POSTS, getPostBySlug } from "./posts";
