"use client";

import { useEffect, useState } from "react";

export default function ContactDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openDrawer = () => setOpen(true);
    window.addEventListener("zim:open-contact", openDrawer);
    return () => window.removeEventListener("zim:open-contact", openDrawer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[80] transition ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-[#07111b]/60 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close contact form"
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-[480px] bg-[#f7f4ed] shadow-[0_0_80px_rgba(0,0,0,0.35)] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-black/[0.08] px-6 py-5">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#60710f]">
                Contact ZIM.ca
              </p>
              <h2 className="mt-1 font-heading text-[1.65rem] font-extrabold leading-tight text-zinc-950">
                Book a tour or ask a question
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] text-zinc-500 transition hover:border-black/[0.18] hover:text-zinc-950"
              aria-label="Close contact form"
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

          <form className="flex-1 overflow-y-auto px-6 py-6">
            <div className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-[12px] font-bold text-zinc-700">
                  Name
                </span>
                <input
                  type="text"
                  className="h-12 rounded-[8px] border border-black/[0.1] bg-white px-4 text-[14px] font-medium text-zinc-950 outline-none transition focus:border-[#8ca80d]"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-[12px] font-bold text-zinc-700">
                  Email
                </span>
                <input
                  type="email"
                  className="h-12 rounded-[8px] border border-black/[0.1] bg-white px-4 text-[14px] font-medium text-zinc-950 outline-none transition focus:border-[#8ca80d]"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-[12px] font-bold text-zinc-700">
                  Phone
                </span>
                <input
                  type="tel"
                  className="h-12 rounded-[8px] border border-black/[0.1] bg-white px-4 text-[14px] font-medium text-zinc-950 outline-none transition focus:border-[#8ca80d]"
                  placeholder="Optional"
                />
              </label>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[12px] font-bold text-zinc-700">
                    Interest
                  </span>
                  <select className="h-12 rounded-[8px] border border-black/[0.1] bg-white px-4 text-[14px] font-medium text-zinc-950 outline-none transition focus:border-[#8ca80d]">
                    <option>Book a tour</option>
                    <option>Availability</option>
                    <option>Unit A private room</option>
                    <option>Unit A double occupancy</option>
                    <option>Unit B single occupancy</option>
                    <option>Unit B double occupancy</option>
                    <option>General question</option>
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-[12px] font-bold text-zinc-700">
                    Move-in
                  </span>
                  <select className="h-12 rounded-[8px] border border-black/[0.1] bg-white px-4 text-[14px] font-medium text-zinc-950 outline-none transition focus:border-[#8ca80d]">
                    <option>September 2026</option>
                    <option>January 2027</option>
                    <option>May 2027</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-[12px] font-bold text-zinc-700">
                  Message
                </span>
                <textarea
                  className="min-h-32 resize-none rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[14px] font-medium leading-relaxed text-zinc-950 outline-none transition focus:border-[#8ca80d]"
                  placeholder="Tell us what you are looking for."
                />
              </label>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13.5px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
            >
              Send Message
            </button>

            <p className="mt-4 text-[12px] leading-relaxed text-zinc-500">
              For now, inquiries should go to info@homyspot.com with the
              property address and a brief introduction.
            </p>
          </form>
        </div>
      </aside>
    </div>
  );
}
