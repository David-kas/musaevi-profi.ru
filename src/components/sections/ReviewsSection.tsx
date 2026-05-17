"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REVIEWS } from "@/data/reviews";
import { SITE } from "@/lib/site";
import { FadeIn } from "@/components/ui/FadeIn";

function Stars({ n }: { n: number }) {
  return (
    <span className="text-gold-500" aria-label={`Рейтинг ${n} из 5`}>
      {"★".repeat(n)}
    </span>
  );
}

export function ReviewsSection() {
  const [idx, setIdx] = useState(0);
  const r = REVIEWS[idx];

  return (
    <section className="bg-beige-50 py-16 md:py-24" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <FadeIn className="text-center">
          <h2
            id="reviews-title"
            className="font-display text-3xl font-semibold text-emerald-950 md:text-4xl"
          >
            Отзывы клиентов
          </h2>
          <p className="mt-3 text-emerald-900/70">
            Рейтинг {SITE.rating.value} на Яндекс.Картах · {SITE.rating.count}+ оценок
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-sm">
            <Stars n={5} />
            <span className="text-2xl font-semibold text-emerald-950">
              {SITE.rating.value}
            </span>
          </div>
        </FadeIn>

        <div className="relative mx-auto mt-12 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.article
              key={r.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="rounded-2xl border border-white/60 bg-white/90 p-8 shadow-xl backdrop-blur-xl"
            >
              <Stars n={r.rating} />
              <p className="mt-4 text-lg leading-relaxed text-emerald-950/90">
                &ldquo;{r.text}&rdquo;
              </p>
              <footer className="mt-6 flex items-center justify-between text-sm text-emerald-800/60">
                <cite className="not-italic font-semibold text-emerald-950">
                  {r.author}
                </cite>
                <time dateTime={r.date}>
                  {new Date(r.date).toLocaleDateString("ru-RU", {
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </footer>
            </motion.article>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-8 bg-emerald-900" : "w-2 bg-emerald-900/20"
                }`}
                aria-label={`Отзыв ${i + 1}`}
              />
            ))}
          </div>
          <a
            href={SITE.yandexMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block text-center text-sm font-medium text-gold-700 hover:underline"
          >
            Все отзывы на Яндекс.Картах →
          </a>
        </div>
      </div>
    </section>
  );
}
