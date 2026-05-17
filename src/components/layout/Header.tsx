"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/", label: "Главная" },
  { href: "/uslugi", label: "Услуги" },
  { href: "/tseny", label: "Цены" },
  { href: "/o-nas", label: "О нас" },
  { href: "/otzyvy", label: "Отзывы" },
  { href: "/galereya", label: "Галерея" },
  { href: "/blog", label: "Блог" },
  { href: "/kontakty", label: "Контакты" },
];

export function Header({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/5 bg-white/80 backdrop-blur-xl">
      <motion.div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:py-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.jpg"
            alt={`Логотип ${SITE.name} — косметология ${SITE.city}`}
            width={52}
            height={52}
            className="rounded-full object-cover ring-2 ring-gold-400/30"
            priority
          />
          <div className="hidden sm:block">
            <p className="font-display text-lg font-semibold tracking-wide text-emerald-950">
              {SITE.name}
            </p>
            <p className="text-xs text-emerald-800/60">{SITE.city}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Основное меню">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-emerald-900/80 transition hover:text-emerald-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <motion.div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phones.primary}`}
            className="hidden rounded-full border border-emerald-900/10 px-4 py-2 text-sm font-medium text-emerald-950 transition hover:bg-beige-100 md:inline-flex"
          >
            Позвонить
          </a>
          <button
            type="button"
            onClick={onBook}
            className="rounded-full bg-emerald-900 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-emerald-800"
          >
            Записаться
          </button>
          <button
            type="button"
            className="rounded-lg p-2 lg:hidden"
            aria-label="Меню"
            onClick={() => setOpen(!open)}
          >
            <span className="block h-0.5 w-6 bg-emerald-950" />
            <span className="mt-1.5 block h-0.5 w-6 bg-emerald-950" />
            <span className="mt-1.5 block h-0.5 w-4 bg-emerald-950" />
          </button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-emerald-900/5 bg-white lg:hidden"
            aria-label="Мобильное меню"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-emerald-950 hover:bg-beige-100"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${SITE.phones.primary}`}
                className="rounded-lg px-3 py-2 font-medium text-gold-700"
              >
                {SITE.phones.primaryDisplay}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
