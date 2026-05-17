# Мусаевы PROFI — сайт студии косметологии

Премиальный SEO-оптимизированный сайт для [musaevy-profi.ru](https://musaevy-profi.ru).

## Стек

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Запуск

```bash
npm install
cp .env.example .env.local
# Заполните TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Telegram (запись с чата)

1. Создайте бота через [@BotFather](https://t.me/BotFather)
2. Получите `TELEGRAM_BOT_TOKEN`
3. Узнайте `TELEGRAM_CHAT_ID` (личный чат или группа администраторов)
4. Добавьте переменные в Vercel → Settings → Environment Variables

## Деплой на Vercel

1. Импортируйте репозиторий в [vercel.com](https://vercel.com)
2. Root Directory — корень проекта
3. Добавьте env-переменные
4. Домен: `musaevy-profi.ru`

## Структура

- 13 страниц + блог (10 статей)
- JSON-LD: LocalBusiness, FAQ, Review, Article
- `sitemap.xml`, `robots.txt`, PWA manifest
- AI-чат записи → Telegram Bot API
