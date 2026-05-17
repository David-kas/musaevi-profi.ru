import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { REVIEWS } from "@/data/reviews";
import { JsonLd } from "@/components/ui/JsonLd";
import { reviewSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { CtaBlock } from "@/components/sections/CtaBlock";

export const metadata: Metadata = buildMetadata({
  title: "Отзывы клиентов — рейтинг 5.0",
  description:
    "Отзывы о студии Мусаевы PROFI в Балашове. Реальные оценки с Яндекс.Карт: косметология, массаж, лазер.",
  path: "/otzyvy",
});

export default function OtzyvyPage() {
  return (
    <>
      <JsonLd data={reviewSchema(REVIEWS)} />
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Breadcrumbs items={[{ name: "Отзывы", path: "/otzyvy" }]} />
        <h1 className="font-display text-4xl font-semibold text-emerald-950">
          Отзывы о {SITE.name}
        </h1>
      </div>
      <ReviewsSection />
      <div className="mx-auto max-w-3xl space-y-6 px-4 pb-12 md:px-6">
        {REVIEWS.map((r) => (
          <article
            key={r.id}
            className="rounded-2xl border border-emerald-900/10 bg-white p-6"
          >
            <p className="text-emerald-950/90">&ldquo;{r.text}&rdquo;</p>
            <p className="mt-4 font-semibold text-emerald-950">{r.author}</p>
          </article>
        ))}
      </div>
      <CtaBlock />
    </>
  );
}
