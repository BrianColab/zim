"use client";

import { useEffect, useState } from "react";

const algonquinWalkingUrl =
  "https://www.google.com/maps/dir/?api=1&origin=1660%20Baseline%20Road%2C%20Ottawa%2C%20ON&destination=Algonquin%20College%2C%20Ottawa%2C%20ON&travelmode=walking";
const algonquinEmbedUrl =
  "https://www.google.com/maps?q=Algonquin%20College%20from%201660%20Baseline%20Road%20Ottawa%20walking&z=15&output=embed";

export default function FloatingWalkRoute() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 540);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const openRoute = () => setOpen(true);
    window.addEventListener("zim:open-walk-route", openRoute);
    return () => window.removeEventListener("zim:open-walk-route", openRoute);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`fixed bottom-24 left-4 z-30 inline-flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-[12px] border border-white/12 bg-[#07111b]/92 px-3.5 py-3 text-left text-white shadow-[0_18px_48px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-500 ease-out lg:bottom-6 lg:left-6 ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }`}
        aria-label="Show walking directions from ZIM.ca to Algonquin College"
      >
        <WalkIcon />
        <span className="min-w-0">
          <span className="block text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#c8f535]">
            Walk route
          </span>
          <span className="block truncate text-[13px] font-extrabold leading-tight">
            ZIM.ca to Algonquin
          </span>
        </span>
      </button>

      <div
        className={`fixed inset-0 z-[85] transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-[#07111b]/58 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close walking route"
        />

        <aside
          className={`absolute bottom-0 right-0 top-auto h-[88vh] w-full rounded-t-[18px] bg-[#f7f4ed] shadow-[0_-30px_80px_rgba(0,0,0,0.28)] transition-transform duration-300 md:top-0 md:h-full md:max-w-[520px] md:rounded-l-[18px] md:rounded-t-none ${
            open
              ? "translate-y-0 md:translate-x-0"
              : "translate-y-full md:translate-x-full md:translate-y-0"
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between border-b border-black/[0.08] px-6 py-5">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#60710f]">
                  Walk from ZIM.ca
                </p>
                <h2 className="mt-1 font-heading text-[1.65rem] font-extrabold leading-tight text-zinc-950">
                  Route to Algonquin
                </h2>
                <p className="mt-2 text-[13px] font-semibold text-zinc-500">
                  1660 Baseline Road to Algonquin College
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.08] text-zinc-500 transition hover:border-black/[0.18] hover:text-zinc-950"
                aria-label="Close walking route"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="overflow-hidden rounded-[12px] border border-[#d5dde8] bg-white shadow-[0_12px_34px_rgba(8,18,28,0.08)]">
                <iframe
                  title="Zoomed map near ZIM.ca and Algonquin College"
                  src={algonquinEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] w-full border-0"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-zinc-400">
                    Walk
                  </p>
                  <p className="mt-2 text-[15px] font-extrabold text-zinc-950">
                    Preview
                  </p>
                </div>
                <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-zinc-400">
                    Route
                  </p>
                  <p className="mt-2 text-[15px] font-extrabold text-zinc-950">
                    Algonquin
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[13px] leading-relaxed text-zinc-600">
                This close-up map shows the area between ZIM.ca and Algonquin.
                Use the button below for the exact walking path, live timing,
                closures, and turn-by-turn directions.
              </p>

              <a
                href={algonquinWalkingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13.5px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

function WalkIcon() {
  return (
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
  );
}
