import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { PRICE_CATEGORIES } from "@/data/prices";

export const metadata: Metadata = buildMetadata({
  title: "Склеротерапия Балашов — удаление сосудистых звёздочек",
  description:
    "Склеротерапия в Балашове: лечение сосудистых звёздочек и сеточек на ногах. Студия Мусаевы PROFI.",
  path: "/skleroterapiya",
  keywords: ["склеротерапия Балашов"],
});

const FAQ = [
  {
    question: "Что такое склеротерапия?",
    answer:
      "Инъекционный метод: в просвет вены вводится препарат, сосуд «склеивается» и рассасывается. Эффективна для звёздочек и ретикулярных вен.",
  },
  {
    question: "Сколько сеансов нужно?",
    answer:
      "Обычно 2–4 процедуры с интервалом 2–4 недели. Точный план — после консультации.",
  },
];

export default function SkleroterapiyaPage() {
  return (
    <ServicePageLayout
      title="Склеротерапия в Балашове"
      description="Удаление сосудистых звёздочек и венозных сеточек на ногах"
      image="/images/IMG_1165.jpg"
      breadcrumbs={[
        { name: "Услуги", path: "/uslugi" },
        { name: "Склеротерапия", path: "/skleroterapiya" },
      ]}
      benefits={[
        "Консультация перед процедурой",
        "Минимальная реабилитация",
        "Рекомендации по компрессии",
        "Сочетание с косметологией",
      ]}
      faq={FAQ}
      prices={PRICE_CATEGORIES.filter((c) => c.id === "sclerotherapy")}
      relatedLinks={[
        { href: "/kosmetologiya", label: "Косметология" },
        { href: "/kontakty", label: "Контакты" },
      ]}
      content={
        <>
          <p>
            Склеротерапия Балашов — процедура для коррекции сосудистых звёздочек
            и мелких вен на ногах. В «Мусаевы PROFI» проводим консультацию,
            подбираем тактику и даём рекомендации по образу жизни и компрессии.
          </p>
          <p>Стоимость от 3500 ₽ за зону. Запись онлайн или по телефону.</p>
        </>
      }
    />
  );
}
