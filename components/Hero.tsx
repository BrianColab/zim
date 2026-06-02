"use client";

import Image from "next/image";
import SearchBar from "./SearchBar";
import ContactTrigger from "./ContactTrigger";

export default function Hero() {
  const openWalkRoute = () => {
    window.dispatchEvent(new CustomEvent("zim:open-walk-route"));
  };

  return (
    <section className="relative flex min-h-[680px] flex-col overflow-hidden bg-[#07111b] sm:min-h-[760px] lg:min-h-[860px]">
      <div className="absolute inset-0">
        <Image
          src="/images/main.png"
          alt="Students entering the ZIM.ca student rental at 1658-1660 Baseline Road in Ottawa"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-[62%_42%]"
        />
        <div className="absolute inset-0 bg-[#07111b]/18" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06101a]/88 via-[#07111b]/38 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06101a]/44 via-transparent to-[#06101a]/72" />
      </div>

      <div className="relative flex flex-1 flex-col justify-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-0 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <div className="mb-9 max-w-[760px] sm:mb-12">
            <h1
              className="mb-5 font-heading font-extrabold leading-[0.9] text-white sm:mb-6 sm:leading-[0.86]"
              style={{
                fontSize: "clamp(3.45rem, 8.6vw, 8.2rem)",
              }}
            >
              Ottawa Student Rentals
              <br />
              Near{" "}
              <span className="underline decoration-[#c8f535] decoration-[6px] underline-offset-[12px]">
                Algonquin College.
              </span>
            </h1>
            <p className="text-white/72 text-[1.02rem] sm:text-[1.16rem] leading-[1.55] max-w-[380px] font-medium">
              Modern student housing in Ottawa near Algonquin campus.
              <br />
              All students welcome. Built for focus. Made for life.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ContactTrigger
                payload={{
                  roomType: "Unit B single occupancy",
                  moveIn: "2026-09-01",
                  lease: "Student rental inquiry",
                }}
                className="inline-flex max-w-full items-center gap-4 rounded-[12px] border border-[#c8f535]/70 bg-[#c8f535] px-5 py-4 text-left text-[#07111b] shadow-[0_22px_60px_rgba(0,0,0,0.3)] transition hover:bg-[#d6fa57] sm:min-w-[365px]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#07111b] text-[24px] font-black text-[#c8f535]">
                  $
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-black uppercase tracking-[0.16em]">
                    All-inclusive rooms from
                  </span>
                  <span className="mt-1 block font-heading text-[clamp(2rem,7vw,3.2rem)] font-black leading-none tracking-[-0.025em]">
                    $850/mo
                  </span>
                  <span className="mt-1 block text-[12px] font-extrabold leading-tight">
                    Furnished + utilities + WiFi + laundry included
                  </span>
                </span>
              </ContactTrigger>

              <button
                type="button"
                onClick={openWalkRoute}
                className="inline-flex max-w-full items-center gap-3 rounded-[10px] border border-white/12 bg-white/[0.08] px-4 py-3 text-left text-white shadow-[0_18px_48px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
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
                  <span className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c8f535]">
                    Walking route
                  </span>
                  <span className="mt-0.5 block text-[14px] font-extrabold leading-tight">
                    See the walk to Algonquin
                  </span>
                </span>
              </button>
            </div>
          </div>

          <SearchBar />
        </div>
      </div>
    </section>
  );
}
