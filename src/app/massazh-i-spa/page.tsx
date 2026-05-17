import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { HOME_FAQ } from "@/data/faq";
import { PRICE_CATEGORIES } from "@/data/prices";

export const metadata: Metadata = buildMetadata({
  title: "Массаж и SPA Балашов — фитосауна, программы релакса",
  description:
    "Массаж лица и тела, SPA процедуры и фитосауна в Балашове. Студия Мусаевы PROFI — спа Балашов премиум-класса.",
  path: "/massazh-i-spa",
  keywords: ["массаж Балашов", "спа Балашов", "spa процедуры Балашов", "массаж лица Балашов"],
});

export default function MassageSpaPage() {
  return (
    <ServicePageLayout
      title="Массаж и SPA в Балашове"
      description="Классический и лицевой массаж, фитосауна, авторские SPA-программы"
      image="/images/IMG_1164.jpg"
      breadcrumbs={[
        { name: "Услуги", path: "/uslugi" },
        { name: "Массаж и SPA", path: "/massazh-i-spa" },
      ]}
      benefits={[
        "Массаж лица с микротоками",
        "Антицеллюлитный и лимфодренажный массаж",
        "Фитосауна и обёртывания",
        "Авторские SPA для двоих",
        "Уютная атмосфера luxury spa",
      ]}
      faq={HOME_FAQ.filter((f) => f.question.includes("массаж") || f.question.includes("SPA"))}
      prices={PRICE_CATEGORIES.filter((c) =>
        ["massage", "spa"].includes(c.id),
      )}
      relatedLinks={[
        { href: "/blog/polza-massazha-litsa", label: "Польза массажа лица" },
        { href: "/kosmetologiya", label: "Косметология" },
      ]}
      content={
        <>
          <p>
            Массаж Балашов — одно из самых популярных направлений студии. Мы
            предлагаем массаж лица, классический, антицеллюлитный, пластический и
            лимфодренажный массаж тела, а также SPA процедуры Балашов с фитосауной.
          </p>
          <h2>Массаж лица</h2>
          <p>
            Массаж лица Балашов от 1500 ₽ — снятие отёков, тонус, подготовка к
            инъекциям. Комбинация с микротоками усиливает anti-age эффект.
          </p>
          <h2>SPA и фитосауна</h2>
          <p>
            Фитосауна от 1500 ₽, SPA-программы от 3500 ₽. Уникальные авторские
            программы — уточняйте у менеджера в VK или при онлайн-записи.
          </p>
        </>
      }
    />
  );
}
