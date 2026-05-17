export type PriceItem = {
  name: string;
  price: string;
  note?: string;
  duration?: string;
};

export type PriceCategory = {
  id: string;
  title: string;
  description?: string;
  items: PriceItem[];
};

/** Прайс на основе Prays_NOVYJ.pdf, Lazer_prays.pdf и карточки Яндекс */
export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    id: "cosmetology",
    title: "Косметология",
    description: "Чистки, пилинги, уходы на премиальной косметике",
    items: [
      { name: "Чистка лица комбинированная", price: "от 2 500 ₽", duration: "60–90 мин" },
      { name: "Чистка лица ультразвуковая", price: "от 2 000 ₽", duration: "45–60 мин" },
      { name: "Чистка лица атравматичная", price: "от 3 000 ₽", duration: "60 мин" },
      { name: "Механическая чистка", price: "от 1 800 ₽", duration: "45 мин" },
      { name: "Химический пилинг", price: "от 2 500 ₽" },
      { name: "Карбоновый пилинг", price: "от 3 500 ₽" },
      { name: "Лазерный пилинг (Innovation Pro)", price: "от 3 500 ₽" },
      { name: "Уходовая маска / альгинатная", price: "от 800 ₽" },
      { name: "Лазерное омоложение лица", price: "от 2 500 ₽", note: "Innovation Pro" },
      { name: "Удаление пигментации лазером", price: "от 2 500 ₽" },
      { name: "RF-лифтинг", price: "от 3 000 ₽" },
      { name: "Микротоки / миостимуляция", price: "от 1 500 ₽" },
      { name: "Биоревитализация", price: "от 10 500 ₽", note: "препарат после осмотра" },
      { name: "Мезотерапия", price: "от 4 500 ₽" },
      { name: "Карбокситерапия", price: "от 2 000 ₽" },
      { name: "Удаление сосудистой сетки", price: "от 2 000 ₽" },
    ],
  },
  {
    id: "laser",
    title: "Лазерная эпиляция",
    description: "Magic One 4000 — женская и мужская эпиляция, курс 5 сеансов",
    items: [
      { name: "Верхняя губа", price: "от 500 ₽" },
      { name: "Подбородок", price: "от 700 ₽" },
      { name: "Щёки", price: "от 900 ₽" },
      { name: "Подмышки", price: "от 1 200 ₽" },
      { name: "Бикини классическое", price: "от 1 800 ₽" },
      { name: "Бикини глубокое", price: "от 2 500 ₽" },
      { name: "Голени", price: "от 2 800 ₽" },
      { name: "Бёдра", price: "от 3 200 ₽" },
      { name: "Ноги полностью", price: "от 4 500 ₽" },
      { name: "Руки полностью", price: "от 2 500 ₽" },
      { name: "Спина", price: "от 3 500 ₽" },
      { name: "Живот", price: "от 2 000 ₽" },
      { name: "Мужская эпиляция (зона)", price: "от 1 500 ₽" },
      { name: "Курс 5 сеансов (скидка)", price: "уточняйте", note: "индивидуальный расчёт" },
    ],
  },
  {
    id: "laser-other",
    title: "Лазерные процедуры",
    description: "Innovation Pro — омоложение, удаление тату и перманента",
    items: [
      { name: "Лазерное омоложение лица", price: "от 2 500 ₽" },
      { name: "Удаление пигментации", price: "от 1 500 ₽" },
      { name: "Удаление сосудов", price: "от 1 500 ₽" },
      { name: "Удаление перманента / тату", price: "от 2 500 ₽", note: "неодимовый лазер" },
      { name: "Фотоомоложение", price: "от 3 000 ₽" },
    ],
  },
  {
    id: "massage",
    title: "Массаж",
    description: "Классический, лицевой, антицеллюлитный, пластический",
    items: [
      { name: "Массаж лица", price: "от 1 500 ₽", duration: "30–45 мин" },
      { name: "Массаж лица + микротоки", price: "от 2 200 ₽" },
      { name: "Классический массаж тела", price: "от 1 500 ₽", duration: "60 мин" },
      { name: "Антицеллюлитный массаж", price: "от 2 000 ₽" },
      { name: "Пластический массаж", price: "от 2 500 ₽" },
      { name: "Лимфодренажный массаж", price: "от 1 800 ₽" },
      { name: "Массаж спины", price: "от 1 200 ₽" },
      { name: "Массаж шейно-воротниковой зоны", price: "от 1 000 ₽" },
    ],
  },
  {
    id: "spa",
    title: "SPA и фитосауна",
    description: "Авторские программы релакса и детокса",
    items: [
      { name: "Фитосауна", price: "от 1 500 ₽", duration: "30–45 мин" },
      { name: "SPA-программа «Релакс»", price: "от 3 500 ₽" },
      { name: "SPA-программа «Детокс»", price: "от 4 000 ₽" },
      { name: "SPA для двоих", price: "от 6 500 ₽" },
      { name: "Обертывание", price: "от 2 000 ₽" },
      { name: "Пилинг тела", price: "от 1 800 ₽" },
    ],
  },
  {
    id: "sclerotherapy",
    title: "Склеротерапия",
    description: "Лечение сосудистых звёздочек и варикоза мелких вен",
    items: [
      { name: "Склеротерапия (1 зона)", price: "от 3 500 ₽" },
      { name: "Консультация флеболога-косметолога", price: "от 1 000 ₽" },
      { name: "Компрессионный трикотаж (рекомендации)", price: "по назначению" },
    ],
  },
];

export const SERVICES_NAV = [
  {
    slug: "kosmetologiya",
    title: "Косметология",
    description: "Чистки, пилинги, биоревитализация, лазерное омоложение",
    href: "/kosmetologiya",
    image: "/images/IMG_1166.jpg",
    priceFrom: "1 500 ₽",
  },
  {
    slug: "lazernaya-epilyatsiya",
    title: "Лазерная эпиляция",
    description: "Magic One 4000 — женская и мужская эпиляция в Балашове",
    href: "/lazernaya-epilyatsiya",
    image: "/images/IMG_1163.jpg",
    priceFrom: "500 ₽",
  },
  {
    slug: "massazh-i-spa",
    title: "Массаж и SPA",
    description: "Массаж лица и тела, фитосауна, авторские SPA-программы",
    href: "/massazh-i-spa",
    image: "/images/IMG_1164.jpg",
    priceFrom: "1 500 ₽",
  },
  {
    slug: "skleroterapiya",
    title: "Склеротерапия",
    description: "Удаление сосудистых звёздочек на ногах",
    href: "/skleroterapiya",
    image: "/images/IMG_1165.jpg",
    priceFrom: "3 500 ₽",
  },
] as const;
