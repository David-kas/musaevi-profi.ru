import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPostBySlug } from "@/data/blog";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema, faqSchema } from "@/lib/schema";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBlock } from "@/components/sections/CtaBlock";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.description,
            slug: post.slug,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          }),
          ...(post.faq.length ? [faqSchema(post.faq)] : []),
        ]}
      />
      <article>
        <div className="relative h-[35vh] min-h-[240px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald-950/50" />
        </div>
        <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
          <Breadcrumbs
            items={[
              { name: "Блог", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]}
          />
          <header>
            <time dateTime={post.datePublished} className="text-sm text-emerald-800/60">
              {new Date(post.datePublished).toLocaleDateString("ru-RU")} ·{" "}
              {post.readTime}
            </time>
            <h1 className="mt-2 font-display text-3xl font-semibold text-emerald-950 md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-emerald-900/75">{post.description}</p>
          </header>

          <div className="prose-emerald mt-10">
            {post.sections.map((section) => {
              const Tag = section.level === 2 ? "h2" : section.level === 3 ? "h3" : "h2";
              return (
                <section key={section.heading} className="mt-8">
                  <Tag>{section.heading}</Tag>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>

          {post.relatedSlugs.length > 0 && (
            <nav className="mt-12 border-t border-emerald-900/10 pt-8">
              <h2 className="font-display text-xl font-semibold">Читайте также</h2>
              <ul className="mt-4 space-y-2">
                {post.relatedSlugs.map((rs) => {
                  const related = getPostBySlug(rs);
                  if (!related) return null;
                  return (
                    <li key={rs}>
                      <Link
                        href={`/blog/${rs}`}
                        className="text-gold-700 hover:underline"
                      >
                        {related.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
        {post.faq.length > 0 && <FaqSection items={post.faq} />}
        <CtaBlock />
      </article>
    </>
  );
}
