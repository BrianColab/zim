"use client";

import { useState } from "react";

const suiteTypes = [
  "Any room",
  "Unit A private room",
  "Unit A double occupancy",
  "Unit B single occupancy",
  "Unit B double occupancy",
];
const leaseOptions = ["12 months", "8 months", "Flexible"];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-white/38 mb-[7px]">
      {children}
    </span>
  );
}

export default function SearchBar() {
  const [moveIn, setMoveIn] = useState("2026-09-01");
  const [suiteType, setSuiteType] = useState(suiteTypes[0]);
  const [lease, setLease] = useState(leaseOptions[0]);

  return (
    <div className="mt-8 w-full max-w-5xl">
      <div className="overflow-hidden rounded-t-[14px] border border-white/[0.12] bg-[#09131f]/96 shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.9fr)_auto]">
          <div className="min-w-0 px-5 py-[18px] border-b md:border-b-0 md:border-r border-white/[0.09]">
            <FieldLabel>Move-in</FieldLabel>
            <input
              type="date"
              value={moveIn}
              onChange={(e) => setMoveIn(e.target.value)}
              min="2026-05-29"
              className="w-full min-w-0 bg-transparent text-white text-[14px] font-semibold outline-none cursor-pointer [color-scheme:dark]"
            />
          </div>

          <div className="min-w-0 px-5 py-[18px] border-b md:border-b-0 md:border-r border-white/[0.09]">
            <FieldLabel>Room type</FieldLabel>
            <select
              value={suiteType}
              onChange={(e) => setSuiteType(e.target.value)}
              className="w-full min-w-0 bg-transparent text-white text-[14px] font-semibold outline-none cursor-pointer appearance-none"
            >
              {suiteTypes.map((option) => (
                <option key={option} value={option} className="bg-[#0f1117] text-white">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="min-w-0 px-5 py-[18px] border-b md:border-b-0 md:border-r border-white/[0.09]">
            <FieldLabel>Lease</FieldLabel>
            <select
              value={lease}
              onChange={(e) => setLease(e.target.value)}
              className="w-full min-w-0 bg-transparent text-white text-[14px] font-semibold outline-none cursor-pointer appearance-none"
            >
              {leaseOptions.map((option) => (
                <option key={option} value={option} className="bg-[#0f1117] text-white">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="min-w-0 flex items-center px-4 py-4">
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("zim:open-contact", {
                    detail: {
                      roomType: suiteType,
                      moveIn,
                      lease,
                    },
                  }),
                )
              }
              className="w-full md:w-auto px-8 py-[14px] bg-[#c8f535] text-[#07111b] text-[13px] font-extrabold rounded-[10px] hover:bg-[#d6fa57] transition-colors whitespace-nowrap"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-1.5 rounded-b-[14px] border-x border-b border-white/[0.1] bg-[#07111b]/98 px-5 py-[11px] sm:flex sm:flex-wrap sm:items-center sm:gap-3">
        <span className="text-[11px] font-bold text-white/35">
          ZIM.ca Residence
        </span>
        <span className="hidden sm:inline text-white/16">/</span>
        <span className="block max-w-[300px] whitespace-normal text-[11.5px] leading-relaxed text-white/56 sm:max-w-none">
          Utilities, WiFi, furniture, appliances, and laundry included.
        </span>
      </div>
    </div>
  );
}
