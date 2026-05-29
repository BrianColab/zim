"use client";

import { useEffect, useState } from "react";

const algonquinWalkingUrl =
  "https://www.google.com/maps/dir/?api=1&origin=1660%20Baseline%20Road%2C%20Ottawa%2C%20ON&destination=Algonquin%20College%2C%20Ottawa%2C%20ON&travelmode=walking";

export default function FloatingWalkRoute() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 540);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={algonquinWalkingUrl}
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-24 left-4 z-30 inline-flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-[12px] border border-white/12 bg-[#07111b]/92 px-3.5 py-3 text-white shadow-[0_18px_48px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-500 ease-out lg:bottom-6 lg:left-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
      aria-label="Open walking directions from ZIM.ca to Algonquin College"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#c8f535] text-[#07111b]">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.3}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6.75 11.2 4.5 15 8.25l-2.5 2.5 2.75 2.75 3-1.5 1.25 2.5-4.4 2.2-4.2-4.2-1.65 1.65v5.1h-3v-6.35l3.35-3.35-1.5-1.5-2.2 2.2-2.1-2.1 3.2-3.2c.52-.52 1.46-.56 2-.2Z"
          />
        </svg>
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#c8f535]">
          Walk route
        </span>
        <span className="block truncate text-[13px] font-extrabold leading-tight">
          ZIM.ca to Algonquin
        </span>
      </span>
    </a>
  );
}
