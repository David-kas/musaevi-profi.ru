import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/ui/JsonLd";
import { localBusinessSchema, reviewSchema } from "@/lib/schema";
import { REVIEWS } from "@/data/reviews";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} — косметолог, лазерная эпиляция, SPA в Балашове`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Премиальная студия косметологии и лазерной эпиляции в Балашове. Чистка лица, массаж, SPA, склеротерапия. Magic One 4000, Innovation Pro. Запись онлайн.",
  keywords: [
    "косметолог Балашов",
    "лазерная эпиляция Балашов",
    "массаж Балашов",
    "спа Балашов",
    "косметология Балашов",
  ],
  alternates: { canonical: SITE.domain },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.domain,
    siteName: SITE.name,
    title: `${SITE.name} — косметология в Балашове`,
    description:
      "Студия эстетической косметологии, лазерной эпиляции и SPA. Рейтинг 5.0.",
    images: [{ url: "/images/IMG_1161.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#1b3d2f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable} h-full`}>
      <head>
        <JsonLd data={[localBusinessSchema(), ...reviewSchema(REVIEWS)]} />
      </head>
      <body className="min-h-full flex flex-col pb-safe antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
