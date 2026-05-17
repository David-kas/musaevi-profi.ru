"use client";

import { useBooking } from "@/components/layout/SiteShell";

export function BookButton({
  className = "",
  label = "Записаться",
}: {
  className?: string;
  label?: string;
}) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={openBooking}
      className={`rounded-full bg-emerald-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-800 ${className}`}
    >
      {label}
    </button>
  );
}
