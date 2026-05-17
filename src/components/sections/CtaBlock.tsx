"use client";

import { useBooking } from "@/components/layout/SiteShell";
import { SITE } from "@/lib/site";

export function CtaBlock({
  title = "Запишитесь на процедуру",
  subtitle = "Онлайн-запись или консультация администратора",
}: {
  title?: string;
  subtitle?: string;
}) {
  const { openBooking } = useBooking();

  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-800 px-6 py-12 text-center text-white shadow-2xl md:px-12">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">{title}</h2>
        <p className="mt-3 text-emerald-100/90">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={openBooking}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-beige-100"
          >
            Записаться онлайн
          </button>
          <a
            href={`tel:${SITE.phones.primary}`}
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
          >
            {SITE.phones.primaryDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
