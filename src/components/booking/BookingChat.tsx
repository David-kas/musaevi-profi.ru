"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  "Косметология",
  "Массаж",
  "SPA",
  "Лазерная эпиляция",
  "Склеротерапия",
] as const;

const MASTERS = [
  "Кристина Мусаева",
  "Любой свободный мастер",
  "Косметолог",
  "Массажист",
  "Лазерный специалист",
];

type Step =
  | "greeting"
  | "service"
  | "name"
  | "phone"
  | "datetime"
  | "master"
  | "comment"
  | "submitting"
  | "done";

type Message = { role: "bot" | "user"; text: string };

export function BookingChat({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<Step>("greeting");
  const [messages, setMessages] = useState<Message[]>([]);
  const [form, setForm] = useState({
    service: "",
    name: "",
    phone: "",
    datetime: "",
    master: "",
    comment: "",
  });
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "bot",
          text: "Здравствуйте! Я ассистент студии «Мусаевы PROFI». Помогу записаться на процедуру в Балашове. Выберите услугу или напишите, что вас интересует.",
        },
      ]);
      setStep("service");
    }
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, step]);

  const addBot = (text: string) =>
    setMessages((m) => [...m, { role: "bot", text }]);
  const addUser = (text: string) =>
    setMessages((m) => [...m, { role: "user", text }]);

  const submitBooking = async (data: typeof form) => {
    setStep("submitting");
    addBot("Отправляю заявку администратору…");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      setStep("done");
      addBot(
        "Спасибо, заявка отправлена. Администратор свяжется с вами в ближайшее время.",
      );
    } catch {
      addBot(
        "Не удалось отправить заявку автоматически. Позвоните нам: +7 (927) 130-47-23 или напишите в VK.",
      );
      setStep("done");
    }
  };

  const handleService = (service: string) => {
    setForm((f) => ({ ...f, service }));
    addUser(service);
    addBot("Как к вам обращаться?");
    setStep("name");
    setInput("");
  };

  const handleNext = () => {
    const v = input.trim();
    if (!v && step !== "comment") return;

    if (step === "name") {
      setForm((f) => ({ ...f, name: v }));
      addUser(v);
      addBot("Укажите номер телефона для связи:");
      setStep("phone");
    } else if (step === "phone") {
      setForm((f) => ({ ...f, phone: v }));
      addUser(v);
      addBot("Желаемая дата и время записи:");
      setStep("datetime");
    } else if (step === "datetime") {
      setForm((f) => ({ ...f, datetime: v }));
      addUser(v);
      addBot("Предпочтительный мастер:");
      setStep("master");
    } else if (step === "master") {
      setForm((f) => ({ ...f, master: v }));
      addUser(v);
      addBot("Комментарий к записи (можно пропустить — отправьте «-»):");
      setStep("comment");
    } else if (step === "comment") {
      const comment = v === "-" ? "" : v;
      const finalForm = { ...form, comment };
      setForm(finalForm);
      if (v !== "-") addUser(v);
      void submitBooking(finalForm);
    }
    setInput("");
  };

  const reset = () => {
    setStep("greeting");
    setMessages([]);
    setForm({
      service: "",
      name: "",
      phone: "",
      datetime: "",
      master: "",
      comment: "",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-emerald-950/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            className="fixed bottom-20 right-4 left-4 z-[70] mx-auto flex max-h-[min(560px,80vh)] max-w-md flex-col overflow-hidden rounded-2xl border border-white/50 bg-white/95 shadow-2xl backdrop-blur-xl md:bottom-24 md:right-6 md:left-auto"
            role="dialog"
            aria-label="Онлайн запись"
          >
            <div className="flex items-center justify-between border-b border-emerald-900/10 bg-emerald-900 px-4 py-3 text-white">
              <div>
                <p className="font-semibold">Запись онлайн</p>
                <p className="text-xs text-emerald-100/80">Мусаевы PROFI · Балашов</p>
              </div>
              <button
                type="button"
                onClick={reset}
                className="rounded-full p-1 hover:bg-white/10"
                aria-label="Закрыть"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-emerald-900 text-white"
                        : "bg-beige-100 text-emerald-950"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {step === "service" && (
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleService(s)}
                      className="rounded-full border border-emerald-900/20 bg-white px-3 py-1.5 text-xs font-medium text-emerald-950 transition hover:bg-emerald-900 hover:text-white"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {step !== "service" && step !== "submitting" && step !== "done" && (
              <div className="border-t border-emerald-900/10 p-3">
                {step === "master" ? (
                  <div className="mb-2 flex flex-wrap gap-1">
                    {MASTERS.map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => {
                          setInput(m);
                        }}
                        className="rounded-full bg-beige-100 px-2 py-1 text-xs"
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                ) : null}
                <div className="flex gap-2">
                  <input
                    type={step === "phone" ? "tel" : "text"}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleNext()}
                    placeholder={
                      step === "phone"
                        ? "+7 ..."
                        : step === "comment"
                          ? "Комментарий"
                          : "Ваш ответ"
                    }
                    className="flex-1 rounded-xl border border-emerald-900/15 px-3 py-2 text-sm outline-none focus:border-emerald-700"
                  />
                  <button
                    type="button"
                    onClick={handleNext}
                    className="rounded-xl bg-emerald-900 px-4 py-2 text-sm font-medium text-white"
                  >
                    →
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
