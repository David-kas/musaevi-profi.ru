"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FaqItem } from "@/data/faq";
import { FadeIn } from "@/components/ui/FadeIn";

export function FaqSection({
  title = "Частые вопросы",
  items,
}: {
  title?: string;
  items: FaqItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <FadeIn>
          <h2
            id="faq-title"
            className="font-display text-center text-3xl font-semibold text-emerald-950 md:text-4xl"
          >
            {title}
          </h2>
        </FadeIn>
        <div className="mt-10 space-y-3">
          {items.map((item, i) => (
            <FadeIn key={item.question} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-white/80 backdrop-blur-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-emerald-950"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  {item.question}
                  <span className="text-gold-600">{open === i ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-emerald-900/5 px-5 pb-4 pt-2 text-sm leading-relaxed text-emerald-900/80">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
