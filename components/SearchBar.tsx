"use client";

import { useState } from "react";

const suiteTypes = [
  "Any room",
  "Unit A private room",
  "Unit B single occupancy",
  "Unit B limited double occupancy",
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
    <div className="mt-8 w-[calc(100vw-2rem)] max-w-5xl sm:w-full">
      <div className="bg-[#09131f]/96 border border-white/[0.12] rounded-t-[14px] overflow-hidden shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.9fr)_auto]">
          <div className="min-w-0 px-5 py-[18px] border-b md:border-b-0 md:border-r border-white/[0.09]">
            <FieldLabel>Move-in</FieldLabel>
            <input
              type="date"
              value={moveIn}
              onChange={(e) => setMoveIn(e.target.value)}
              min="2026-05-28"
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
              onClick={() => window.dispatchEvent(new Event("zim:open-contact"))}
              className="w-full md:w-auto px-8 py-[14px] bg-[#c8f535] text-[#07111b] text-[13px] font-extrabold rounded-[10px] hover:bg-[#d6fa57] transition-colors whitespace-nowrap"
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#07111b]/98 border-x border-b border-white/[0.1] rounded-b-[14px] px-5 py-[11px] flex items-center gap-3 flex-wrap">
        <span className="text-white/35 text-[11px] font-bold">
          ZIM.ca Residence
        </span>
        <span className="hidden sm:inline text-white/16">/</span>
        <span className="text-[11.5px] text-white/56">
          All-inclusive furnished rooms with internet and on-site laundry.
        </span>
      </div>
    </div>
  );
}
