import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { GALLERY_IMAGES } from "@/data/gallery";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = buildMetadata({
  title: "Галерея — интерьер и процедуры",
  description:
    "Фото студии Мусаевы PROFI: интерьер, кабинеты, оборудование, процедуры косметологии и SPA в Балашове.",
  path: "/galereya",
});

export default function GalereyaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <Breadcrumbs items={[{ name: "Галерея", path: "/galereya" }]} />
      <h1 className="font-display text-4xl font-semibold text-emerald-950">
        Галерея студии
      </h1>
      <p className="mt-4 text-emerald-900/75">
        Интерьер, кабинеты и атмосфера premium spa в Балашове
      </p>
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {GALLERY_IMAGES.map((img, i) => (
          <FadeIn key={img.src} delay={i * 0.04} className="mb-4 break-inside-avoid">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                className="h-auto w-full object-cover"
                loading="lazy"
                sizes="(max-width:640px) 100vw, 33vw"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
