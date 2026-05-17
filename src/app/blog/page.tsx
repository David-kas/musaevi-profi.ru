import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BLOG_POSTS } from "@/data/blog";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Блог о косметологии и лазерной эпиляции",
  description:
    "Полезные статьи: лазерная эпиляция, уход за кожей, выбор косметолога в Балашове. Блог Мусаевы PROFI.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <Breadcrumbs items={[{ name: "Блог", path: "/blog" }]} />
      <h1 className="font-display text-4xl font-semibold text-emerald-950">
        Блог
      </h1>
      <p className="mt-4 text-emerald-900/75">
        Экспертные материалы о косметологии, лазере и уходе за кожей в Балашове
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.05}>
            <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <time
                    dateTime={post.datePublished}
                    className="text-xs text-emerald-800/50"
                  >
                    {new Date(post.datePublished).toLocaleDateString("ru-RU")}
                  </time>
                  <h2 className="mt-2 font-display text-xl font-semibold text-emerald-950 group-hover:text-gold-700">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-emerald-900/70">
                    {post.description}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-gold-700">
                    Читать · {post.readTime}
                  </span>
                </div>
              </Link>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
