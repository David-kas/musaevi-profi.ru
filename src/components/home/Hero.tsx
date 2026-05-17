"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/site";
import { BookButton } from "@/components/ui/BookButton";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] overflow-hidden"
      aria-label="Главный баннер"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/IMG_1167.jpg"
          alt={`Студия косметологии ${SITE.name} — лазерная эпиляция и SPA в ${SITE.city}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/60 to-emerald-950/30"
      />
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-24 md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-gold-400"
        >
          Premium beauty · {SITE.city}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Косметология и лазерная эпиляция в Балашове
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-white/85"
        >
          {SITE.name} — студия эстетической косметологии, массажа и SPA.
          Сертифицированное оборудование Magic One и Innovation Pro. Рейтинг{" "}
          {SITE.rating.value} на Яндекс.Картах.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <BookButton label="Записаться на процедуру" />
          <a
            href={`tel:${SITE.phones.primary}`}
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Позвонить
          </a>
        </motion.div>
      </div>
    </section>
  );
}
