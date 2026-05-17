import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { LASER_FAQ, HOME_FAQ } from "@/data/faq";
import { PRICE_CATEGORIES } from "@/data/prices";

export const metadata: Metadata = buildMetadata({
  title: "Лазерная эпиляция Балашов — Magic One 4000",
  description:
    "Лазерная эпиляция в Балашове на Magic One 4000. Женская и мужская эпиляция, курс 5 сеансов. Студия Мусаевы PROFI.",
  path: "/lazernaya-epilyatsiya",
  keywords: ["лазерная эпиляция Балашов", "эпиляция Балашов"],
});

export default function LaserPage() {
  return (
    <ServicePageLayout
      title="Лазерная эпиляция в Балашове"
      description="Magic One 4000 — женская и мужская эпиляция, комфортные сеансы, индивидуальный курс"
      image="/images/IMG_1163.jpg"
      breadcrumbs={[
        { name: "Услуги", path: "/uslugi" },
        { name: "Лазерная эпиляция", path: "/lazernaya-epilyatsiya" },
      ]}
      benefits={[
        "Аппарат Magic One 4000",
        "Женская и мужская эпиляция",
        "Курс из 5+ сеансов со скидкой",
        "Система охлаждения — комфорт",
        "Опытные лазерные специалисты",
      ]}
      faq={[...LASER_FAQ, ...HOME_FAQ.slice(0, 2)]}
      prices={PRICE_CATEGORIES.filter((c) => c.id === "laser")}
      relatedLinks={[
        { href: "/blog/lazernaya-epilyatsiya-mify-i-pravda", label: "Мифы и правда" },
        { href: "/blog/kak-podgotovitsya-k-lazernoy-epilyatsii", label: "Подготовка" },
        { href: "/kosmetologiya", label: "Косметология" },
      ]}
      content={
        <>
          <p>
            Лазерная эпиляция в Балашове в студии «Мусаевы PROFI» — это
            современный метод удаления нежелательных волос на сертифицированном
            оборудовании Magic One 4000. Мы работаем с женщинами и мужчинами,
            подбираем параметры под фототип и зону.
          </p>
          <h2>Зоны и цены</h2>
          <p>
            Эпиляция верхней губы от 500 ₽, подмышек от 1200 ₽, глубокое бикини
            от 2500 ₽, ног полностью от 4500 ₽. Полный прайс — в разделе цен.
          </p>
          <h2>Метод 5 сеансов</h2>
          <p>
            Оптимальный курс — 5–8 процедур с интервалом 4–6 недель. После курса
            волосы становятся тоньше и реже; поддерживающие сеансы — 1–2 раза в
            год.
          </p>
        </>
      }
    />
  );
}
