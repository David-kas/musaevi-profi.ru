import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg shadow-emerald-950/5 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
