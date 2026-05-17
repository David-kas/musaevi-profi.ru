import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE } from "@/lib/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { CtaBlock } from "@/components/sections/CtaBlock";

export const metadata: Metadata = buildMetadata({
  title: "О студии — косметология и лазер в Балашове",
  description:
    "О студии Мусаевы PROFI: команда, оборудование Magic One и Innovation Pro, миссия и ценности. Балашов, Саратовская область.",
  path: "/o-nas",
});

export default function ONasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <Breadcrumbs items={[{ name: "О нас", path: "/o-nas" }]} />
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <h1 className="font-display text-4xl font-semibold text-emerald-950 md:text-5xl">
            О студии {SITE.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-emerald-900/80">
            «Мусаевы PROFI» — премиальная студия эстетической косметологии,
            лазерной эпиляции, массажа и SPA в центре Балашова. Мы объединяем
            медицинский подход и luxury-сервис: чистые кабинеты, внимательные
            мастера, сертифицированное оборудование.
          </p>
          <p className="mt-4 text-emerald-900/75">
            Руководитель студии — Кристина Мусаева, косметолог с многолетним
            опытом. Рейтинг {SITE.rating.value} на Яндекс.Картах, более{" "}
            {SITE.rating.count} отзывов.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/IMG_1162.jpg"
              alt="Кабинет косметолога Мусаевы PROFI Балашов"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
      </div>
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {SITE.equipment.map((eq) => (
          <div
            key={eq}
            className="rounded-2xl border border-emerald-900/10 bg-beige-50 p-6 text-center"
          >
            <p className="font-display text-lg font-semibold text-emerald-950">
              {eq}
            </p>
          </div>
        ))}
      </section>
      <CtaBlock />
    </div>
  );
}
