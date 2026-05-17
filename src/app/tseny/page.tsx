import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PRICE_CATEGORIES } from "@/data/prices";
import { PriceTable } from "@/components/sections/PriceTable";
import { CtaBlock } from "@/components/sections/CtaBlock";

export const metadata: Metadata = buildMetadata({
  title: "Цены на косметологию, лазер и массаж",
  description:
    "Актуальный прайс Мусаевы PROFI: косметология, лазерная эпиляция, массаж, SPA, склеротерапия в Балашове.",
  path: "/tseny",
});

export default function TsenyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <Breadcrumbs items={[{ name: "Цены", path: "/tseny" }]} />
      <h1 className="font-display text-4xl font-semibold text-emerald-950">
        Цены на процедуры
      </h1>
      <p className="mt-4 text-emerald-900/75">
        Прайс составлен на основе актуальных услуг студии. Точную стоимость
        комплексных программ уточняйте у администратора.
      </p>
      <div className="mt-10">
        <PriceTable categories={PRICE_CATEGORIES} />
      </div>
      <CtaBlock />
    </div>
  );
}
