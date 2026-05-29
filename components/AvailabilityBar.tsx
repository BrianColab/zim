"use client";

import { useEffect, useState } from "react";
import ContactTrigger from "./ContactTrigger";

const quickOptions = [
  {
    label: "Unit B",
    roomType: "Unit B single occupancy",
    price: "$850",
  },
  {
    label: "Unit A",
    roomType: "Unit A private room",
    price: "$900",
  },
  {
    label: "Pair room",
    roomType: "Unit A pair room - 2 friends",
    price: "$1000+",
  },
];

const managerPhone = "1 (613) 298-2875";
const managerPhoneHref = "tel:+16132982875";

export default function AvailabilityBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="bg-[#07111b] py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="section-kicker text-[#c8f535]">
              Rooms available
            </p>
            <h2 className="section-heading-tight headline-on-dark mt-3 max-w-[18ch] text-white">
              <span className="headline-main">
                Ready to check a <span className="headline-accent-lime">room?</span>
              </span>
              <span className="headline-sub">Book a showing or call.</span>
            </h2>
            <p className="mt-2 max-w-xl text-[12.5px] font-semibold leading-relaxed text-white/52">
              Pair rooms are only for two friends applying together. We do not
              add a second student to a room already booked as single.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            {quickOptions.map((option) => (
              <ContactTrigger
                key={option.roomType}
                payload={{
                  roomType: option.roomType,
                  moveIn: "2026-09-01",
                  lease: "Student rental inquiry",
                }}
                className="rounded-[8px] border border-white/12 bg-white/[0.07] px-4 py-3 text-left transition hover:bg-white/[0.12] sm:min-w-[132px]"
              >
                <span className="block text-[13px] font-extrabold text-white">
                  {option.label}
                </span>
                <span className="mt-0.5 block text-[12px] font-bold text-white/48">
                  from {option.price}/mo
                </span>
              </ContactTrigger>
            ))}
            <ContactTrigger
              payload={{
                roomType: "Availability",
                moveIn: "2026-09-01",
                lease: "Student rental inquiry",
              }}
              className="rounded-[8px] bg-[#c8f535] px-5 py-3 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
            >
              Ask availability
            </ContactTrigger>
            <a
              href={managerPhoneHref}
              className="rounded-[8px] border border-[#c8f535]/35 px-5 py-3 text-center text-[13px] font-extrabold text-[#c8f535] transition hover:bg-[#c8f535]/10"
            >
              Call manager
            </a>
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#07111b]/94 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-[13px] font-extrabold text-white">
              Rooms available at ZIM.ca
            </p>
            <p className="truncate text-[11.5px] font-semibold text-white/48">
              All-inclusive student rooms from $850/month
            </p>
          </div>
          <ContactTrigger
            payload={{
              roomType: "Availability",
              moveIn: "2026-09-01",
              lease: "Student rental inquiry",
            }}
            className="shrink-0 rounded-[8px] bg-[#c8f535] px-4 py-2.5 text-[12.5px] font-extrabold text-[#07111b]"
          >
            Apply / Tour
          </ContactTrigger>
          <a
            href={managerPhoneHref}
            aria-label={`Call property manager at ${managerPhone}`}
            className="shrink-0 rounded-[8px] border border-white/12 px-3 py-2.5 text-[12.5px] font-extrabold text-white"
          >
            Call
          </a>
        </div>
      </div>
    </>
  );
}
