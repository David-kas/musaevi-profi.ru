import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE } from "@/lib/site";
import { BookButton } from "@/components/ui/BookButton";

export const metadata: Metadata = buildMetadata({
  title: "Контакты и адрес в Балашове",
  description:
    "Контакты Мусаевы PROFI: адрес ул. 30 лет Победы 100А, телефоны, VK, Telegram, карта, часы работы.",
  path: "/kontakty",
});

export default function KontaktyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <Breadcrumbs items={[{ name: "Контакты", path: "/kontakty" }]} />
      <h1 className="font-display text-4xl font-semibold text-emerald-950">
        Контакты
      </h1>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 rounded-2xl bg-beige-50 p-8">
          <div>
            <h2 className="font-semibold text-emerald-950">Адрес</h2>
            <p className="mt-2 text-emerald-900/80">{SITE.address.full}</p>
          </div>
          <div>
            <h2 className="font-semibold text-emerald-950">Телефоны</h2>
            <p className="mt-2">
              <a href={`tel:${SITE.phones.primary}`} className="text-gold-700">
                {SITE.phones.primaryDisplay}
              </a>
            </p>
            <p>
              <a href={`tel:${SITE.phones.secondary}`} className="text-gold-700">
                {SITE.phones.secondaryDisplay}
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-emerald-950">Часы работы</h2>
            <p className="mt-2 text-emerald-900/80">{SITE.hoursDisplay}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={SITE.social.vk}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-900/20 px-4 py-2 text-sm"
            >
              VK
            </a>
            <a
              href={SITE.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-900/20 px-4 py-2 text-sm"
            >
              Telegram
            </a>
            <BookButton />
          </div>
        </div>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              title="Яндекс карта Мусаевы PROFI"
              src={`https://yandex.ru/map-widget/v1/?ll=${SITE.coords.lng}%2C${SITE.coords.lat}&z=16&pt=${SITE.coords.lng},${SITE.coords.lat},pm2gnm`}
              width="100%"
              height="360"
              loading="lazy"
              className="border-0"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              title="Google Maps — Мусаевы PROFI"
              src="https://maps.google.com/maps?q=51.548295,43.171299&z=16&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
