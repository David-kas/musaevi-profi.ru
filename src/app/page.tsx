import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { ADVANTAGES, WHY_US } from "@/data/advantages";
import { SERVICES_NAV } from "@/data/prices";
import { HOME_FAQ } from "@/data/faq";
import { FaqSection } from "@/components/sections/FaqSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { BookButton } from "@/components/ui/BookButton";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQ)} />
      <Hero />

      <section className="py-16 md:py-24" aria-labelledby="advantages">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn className="text-center">
            <h2
              id="advantages"
              className="font-display text-3xl font-semibold text-emerald-950 md:text-4xl"
            >
              Преимущества студии
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.08}>
                <GlassCard className="h-full transition hover:shadow-xl">
                  <h3 className="font-display text-xl font-semibold text-emerald-950">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-900/75">
                    {a.description}
                  </p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 py-16 text-beige-100 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="font-display text-center text-3xl font-semibold md:text-4xl">
            Почему выбирают нас
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {WHY_US.map((w) => (
              <div key={w.title} className="border-l-2 border-gold-500 pl-6">
                <h3 className="font-display text-xl font-semibold text-gold-400">
                  {w.title}
                </h3>
                <p className="mt-2 text-beige-200/85">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="services">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2
              id="services"
              className="font-display text-3xl font-semibold text-emerald-950"
            >
              Услуги
            </h2>
            <Link
              href="/uslugi"
              className="text-sm font-medium text-gold-700 hover:underline"
            >
              Все услуги →
            </Link>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES_NAV.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.06}>
                <article className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                  <Link href={s.href} className="group block">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={s.image}
                        alt={`${s.title} в Балашове — ${SITE.name}`}
                        fill
                        className="object-cover transition group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 pb-0">
                      <h3 className="font-display text-lg font-semibold text-emerald-950">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm text-emerald-900/70">
                        {s.description}
                      </p>
                      <p className="mt-3 text-sm font-medium text-gold-700">
                        от {s.priceFrom}
                      </p>
                    </div>
                  </Link>
                  <div className="p-5 pt-3">
                    <BookButton className="w-full" label="Записаться" />
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-100/50 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn className="text-center">
            <h2 className="font-display text-3xl font-semibold text-emerald-950">
              Лицензированное оборудование
            </h2>
            <p className="mt-4 text-emerald-900/70">
              Magic One 4000 · Innovation Pro · премиальная косметика
            </p>
          </FadeIn>
        </div>
      </section>

      <ReviewsSection />

      <section className="py-16" aria-labelledby="map">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <FadeIn>
            <h2
              id="map"
              className="font-display text-center text-3xl font-semibold text-emerald-950"
            >
              Как нас найти в Балашове
            </h2>
            <p className="mt-3 text-center text-emerald-900/70">
              {SITE.address.full}
            </p>
          </FadeIn>
          <div className="mt-8 overflow-hidden rounded-2xl shadow-xl">
            <iframe
              title="Карта — Мусаевы PROFI Балашов"
              src={`https://yandex.ru/map-widget/v1/?ll=${SITE.coords.lng}%2C${SITE.coords.lat}&z=16&pt=${SITE.coords.lng},${SITE.coords.lat},pm2gnm`}
              width="100%"
              height="400"
              loading="lazy"
              className="border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <FaqSection items={HOME_FAQ} />
      <CtaBlock />
    </>
  );
}
