"use client";

import { useState, createContext, useContext } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BookingChat } from "@/components/booking/BookingChat";
import { MobileBottomBar } from "./MobileBottomBar";
import { FloatingActions } from "./FloatingActions";

const BookingContext = createContext<{ openBooking: () => void }>({
  openBooking: () => {},
});

export function useBooking() {
  return useContext(BookingContext);
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [chatOpen, setChatOpen] = useState(false);
  const openBooking = () => setChatOpen(true);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      <Header onBook={openBooking} />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileBottomBar onBook={openBooking} />
      <FloatingActions onBook={openBooking} />
      <BookingChat open={chatOpen} onClose={() => setChatOpen(false)} />
    </BookingContext.Provider>
  );
}
