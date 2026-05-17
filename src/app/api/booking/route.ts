import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { service, name, phone, datetime, master, comment } = body;

    if (!service || !name || !phone || !datetime) {
      return NextResponse.json(
        { error: "Заполните обязательные поля" },
        { status: 400 },
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.warn("Telegram credentials not configured");
      return NextResponse.json(
        { error: "Сервис записи временно недоступен" },
        { status: 503 },
      );
    }

    const text = [
      "🌿 Новая заявка — Мусаевы PROFI",
      "",
      `📋 Услуга: ${service}`,
      `👤 Имя: ${name}`,
      `📞 Телефон: ${phone}`,
      `📅 Дата и время: ${datetime}`,
      `💆 Мастер: ${master || "не указан"}`,
      comment ? `💬 Комментарий: ${comment}` : "",
      "",
      "📍 Балашов, ул. 30 лет Победы 100А",
    ]
      .filter(Boolean)
      .join("\n");

    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      },
    );

    if (!tgRes.ok) {
      const err = await tgRes.text();
      console.error("Telegram error:", err);
      return NextResponse.json({ error: "Ошибка отправки" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
