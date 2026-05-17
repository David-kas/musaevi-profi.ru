import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqSection } from "./FaqSection";
import { CtaBlock } from "./CtaBlock";
import { PriceTable } from "./PriceTable";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/schema";
import type { FaqItem } from "@/data/faq";
import type { PriceCategory } from "@/data/prices";
import { BookButton } from "@/components/ui/BookButton";

export function ServicePageLayout({
  title,
  description,
  image,
  breadcrumbs,
  benefits,
  content,
  faq,
  prices,
  relatedLinks,
}: {
  title: string;
  description: string;
  image: string;
  breadcrumbs: { name: string; path: string }[];
  benefits: string[];
  content: React.ReactNode;
  faq: FaqItem[];
  prices?: PriceCategory[];
  relatedLinks?: { href: string; label: string }[];
}) {
  return (
    <>
      <JsonLd data={faqSchema(faq)} />
      <article>
        <div className="relative h-[40vh] min-h-[280px] max-h-[480px] overflow-hidden">
          <Image
            src={image}
            alt={`${title} — ${description.slice(0, 80)}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-4 pb-10 md:px-6">
            <h1 className="font-display text-3xl font-semibold text-white md:text-5xl">
              {title}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-white/90">{description}</p>
            <BookButton className="mt-6" />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <Breadcrumbs items={breadcrumbs} />

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="prose prose-emerald max-w-none">{content}</div>
              </FadeIn>
              {prices && prices.length > 0 && (
                <FadeIn className="mt-12">
                  <h2 className="font-display text-2xl font-semibold text-emerald-950">
                    Цены
                  </h2>
                  <div className="mt-6">
                    <PriceTable categories={prices} />
                  </div>
                </FadeIn>
              )}
            </div>
            <aside>
              <FadeIn>
                <div className="sticky top-24 rounded-2xl border border-emerald-900/10 bg-beige-50/80 p-6 backdrop-blur-xl">
                  <h2 className="font-display text-xl font-semibold text-emerald-950">
                    Преимущества
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {benefits.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 text-sm text-emerald-900/80 before:text-gold-500 before:content-['✓']"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                  <BookButton className="mt-6 w-full" />
                </div>
              </FadeIn>
              {relatedLinks && relatedLinks.length > 0 && (
                <FadeIn className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-800/60">
                    Смотрите также
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {relatedLinks.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="text-sm font-medium text-emerald-900 hover:text-gold-700"
                        >
                          {l.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              )}
            </aside>
          </div>
        </div>

        <FaqSection items={faq} />
        <CtaBlock />
      </article>
    </>
  );
}
