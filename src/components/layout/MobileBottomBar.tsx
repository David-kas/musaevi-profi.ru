"use client";

import Link from "next/link";
import { SITE } from "@/lib/site";

export function MobileBottomBar({ onBook }: { onBook: () => void }) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-emerald-900/10 bg-white/95 px-2 py-2 backdrop-blur-xl md:hidden"
      aria-label="Быстрые действия"
    >
      <a
        href={`tel:${SITE.phones.primary}`}
        className="flex flex-col items-center gap-0.5 text-[10px] text-emerald-900"
      >
        <span className="text-lg">📞</span>
        Позвонить
      </a>
      <a
        href={SITE.social.vk}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 text-[10px] text-emerald-900"
      >
        <span className="text-lg">💬</span>
        Написать
      </a>
      <button
        type="button"
        onClick={onBook}
        className="flex flex-col items-center gap-0.5 rounded-full bg-emerald-900 px-4 py-2 text-[10px] font-medium text-white shadow-lg"
      >
        <span className="text-lg">✨</span>
        Записаться
      </button>
      <Link
        href="/uslugi"
        className="flex flex-col items-center gap-0.5 text-[10px] text-emerald-900"
      >
        <span className="text-lg">📋</span>
        Услуги
      </Link>
    </nav>
  );
}
