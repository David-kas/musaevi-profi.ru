"use client";

import { SITE } from "@/lib/site";

export function FloatingActions({ onBook }: { onBook: () => void }) {
  return (
    <div className="fixed bottom-20 right-4 z-30 flex flex-col gap-2 md:bottom-6">
      <a
        href={`tel:${SITE.phones.primary}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg shadow-lg ring-1 ring-emerald-900/10 transition hover:scale-105"
        aria-label="Позвонить"
        title="Позвонить"
      >
        📞
      </a>
      <a
        href={SITE.social.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg shadow-lg ring-1 ring-emerald-900/10 transition hover:scale-105"
        aria-label="Написать в Telegram"
      >
        ✉️
      </a>
      <button
        type="button"
        onClick={onBook}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-900 to-emerald-700 text-white shadow-xl transition hover:scale-105"
        aria-label="Записаться онлайн"
      >
        📅
      </button>
    </div>
  );
}
