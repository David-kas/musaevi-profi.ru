import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { COSMETOLOGY_FAQ } from "@/data/faq";
import { PRICE_CATEGORIES } from "@/data/prices";

export const metadata: Metadata = buildMetadata({
  title: "Косметолог Балашов — чистка лица, пилинги, омоложение",
  description:
    "Профессиональная косметология в Балашове: чистка лица, карбоновый и лазерный пилинг, биоревитализация, удаление пигментации. Мусаевы PROFI.",
  path: "/kosmetologiya",
  keywords: ["косметолог Балашов", "чистка лица Балашов", "косметология Балашов"],
});

export default function KosmetologiyaPage() {
  return (
    <ServicePageLayout
      title="Косметология в Балашове"
      description="Чистки, пилинги, лазерное омоложение Innovation Pro, биоревитализация и anti-age программы"
      image="/images/IMG_1166.jpg"
      breadcrumbs={[
        { name: "Услуги", path: "/uslugi" },
        { name: "Косметология", path: "/kosmetologiya" },
      ]}
      benefits={[
        "Премиальная профессиональная косметика",
        "Лазер Innovation Pro для омоложения и пигментации",
        "Индивидуальный план ухода от косметолога",
        "Медицинская и эстетическая косметология",
        "Контроль результата после процедур",
      ]}
      faq={COSMETOLOGY_FAQ}
      prices={PRICE_CATEGORIES.filter((c) =>
        ["cosmetology", "laser-other"].includes(c.id),
      )}
      relatedLinks={[
        { href: "/lazernaya-epilyatsiya", label: "Лазерная эпиляция" },
        { href: "/tseny", label: "Цены" },
        { href: "/blog/kak-vybrat-kosmetologa-v-balashove", label: "Как выбрать косметолога" },
      ]}
      content={
        <>
          <p>
            Студия «Мусаевы PROFI» — адрес премиальной косметологии в Балашове
            и Саратовской области. Мы выполняем чистки лица, химические и
            карбоновые пилинги, биоревитализацию, мезотерапию, RF-лифтинг и
            лазерное омоложение на аппарате Innovation Pro.
          </p>
          <h2>Чистка лица</h2>
          <p>
            Комбинированная, ультразвуковая и атравматичная чистка — от 2000 ₽.
            Процедуры на профессиональной косметике с учётом типа кожи и
            сезона.
          </p>
          <h2>Лазерный пилинг и омоложение</h2>
          <p>
            Лазерный пилинг Балашов — востребованная процедура для обновления
            кожи, выравнивания тона и уменьшения пигментации. Innovation Pro
            осветляет пятна, уменьшает покраснения, стимулирует коллаген.
          </p>
          <h2>Удаление пигментации</h2>
          <p>
            Удаление пигментации лазером и пилингами — безопасный путь к ровному
            тону при правильном домашнем уходе и SPF.
          </p>
        </>
      }
    />
  );
}
