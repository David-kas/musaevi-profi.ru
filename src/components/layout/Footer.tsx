import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES_NAV } from "@/data/prices";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-emerald-900/10 bg-emerald-950 text-beige-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <Image
            src="/logo.jpg"
            alt={SITE.name}
            width={64}
            height={64}
            className="mb-4 rounded-full ring-2 ring-gold-400/40"
          />
          <p className="font-display text-xl font-semibold">{SITE.name}</p>
          <p className="mt-2 text-sm text-beige-200/80">
            Премиальная студия косметологии и лазерной эпиляции в {SITE.city},{" "}
            {SITE.region}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-400">
            Услуги
          </h3>
          <ul className="space-y-2 text-sm">
            {SERVICES_NAV.map((s) => (
              <li key={s.slug}>
                <Link href={s.href} className="hover:text-gold-300 transition">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/tseny" className="hover:text-gold-300 transition">
                Цены
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-400">
            Контакты
          </h3>
          <address className="not-italic space-y-2 text-sm">
            <p>{SITE.address.full}</p>
            <p>
              <a href={`tel:${SITE.phones.primary}`} className="hover:text-gold-300">
                {SITE.phones.primaryDisplay}
              </a>
            </p>
            <p>
              <a href={`tel:${SITE.phones.secondary}`} className="hover:text-gold-300">
                {SITE.phones.secondaryDisplay}
              </a>
            </p>
            <p>{SITE.hoursDisplay}</p>
          </address>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-400">
            Соцсети
          </h3>
          <div className="flex flex-col gap-2 text-sm">
            <a href={SITE.social.vk} target="_blank" rel="noopener noreferrer">
              ВКонтакте
            </a>
            <a href={SITE.social.telegram} target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
            <Link href="/politika-konfidentsialnosti" className="mt-4 text-beige-200/60">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-beige-200/50">
        © {new Date().getFullYear()} {SITE.name}. {SITE.domain.replace("https://", "")}
      </div>
    </footer>
  );
}
