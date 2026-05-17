import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SERVICES_NAV } from "@/data/prices";
import { FadeIn } from "@/components/ui/FadeIn";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { BookButton } from "@/components/ui/BookButton";

export const metadata: Metadata = buildMetadata({
  title: "Услуги косметологии, лазера, массажа и SPA",
  description:
    "Полный перечень услуг студии Мусаевы PROFI в Балашове: косметология, лазерная эпиляция, массаж, SPA, склеротерапия.",
  path: "/uslugi",
});

export default function UslugiPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <Breadcrumbs items={[{ name: "Услуги", path: "/uslugi" }]} />
      <h1 className="font-display text-4xl font-semibold text-emerald-950">
        Услуги студии в Балашове
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-emerald-900/75">
        Эстетическая косметология, лазерная эпиляция Magic One, массаж, SPA и
        склеротерапия — премиальный уход в Саратовской области.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {SERVICES_NAV.map((s, i) => (
          <FadeIn key={s.slug} delay={i * 0.05}>
            <article className="flex gap-6 rounded-2xl border border-emerald-900/10 bg-white p-4 shadow-sm">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-emerald-950">
                  <Link href={s.href} className="hover:text-gold-700">
                    {s.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-emerald-900/70">{s.description}</p>
                <p className="mt-2 text-sm font-medium text-gold-700">
                  от {s.priceFrom}
                </p>
                <BookButton className="mt-3" />
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
      <CtaBlock />
    </div>
  );
}
