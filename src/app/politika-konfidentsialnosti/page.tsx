import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Политика конфиденциальности",
  description: "Политика обработки персональных данных сайта musaevy-profi.ru",
  path: "/politika-konfidentsialnosti",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 prose-emerald">
      <Breadcrumbs
        items={[
          { name: "Политика конфиденциальности", path: "/politika-konfidentsialnosti" },
        ]}
      />
      <h1 className="font-display text-3xl font-semibold text-emerald-950">
        Политика конфиденциальности
      </h1>
      <p className="mt-6">
        Настоящая политика определяет порядок обработки персональных данных
        пользователей сайта {SITE.domain} студии {SITE.name}.
      </p>
      <h2>Какие данные мы собираем</h2>
      <p>
        При записи через форму или чат: имя, телефон, выбранная услуга, дата и
        время, комментарий. Данные передаются администратору через Telegram для
        связи с клиентом.
      </p>
      <h2>Цели обработки</h2>
      <p>
        Запись на процедуры, обратная связь, информирование об услугах и акциях
        по согласию пользователя.
      </p>
      <h2>Контакты</h2>
      <p>
        По вопросам персональных данных: {SITE.phones.primaryDisplay},{" "}
        {SITE.address.full}.
      </p>
    </div>
  );
}
