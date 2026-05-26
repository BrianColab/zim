"use client";

import { useState } from "react";

const schools = [
  "Choose your school",
  "Algonquin College",
  "Carleton University",
  "University of Ottawa",
  "University of Waterloo",
  "Western University",
  "McMaster University",
  "Queen's University",
];

const budgets = [
  "Any budget",
  "Under $700",
  "$700 - $900",
  "$900 - $1,100",
  "$1,100+",
];

const bedOptions = ["Any", "1", "2", "3", "4+"];

const popularCities = [
  "University of Ottawa",
  "Carleton",
  "Waterloo",
  "Western",
  "McMaster",
];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-white/38 mb-[7px]">
      {children}
    </span>
  );
}

export default function SearchBar() {
  const [school, setSchool] = useState(schools[0]);
  const [budget, setBudget] = useState(budgets[0]);
  const [beds, setBeds] = useState(bedOptions[0]);

  return (
    <div className="mt-8 w-[calc(100vw-2rem)] max-w-6xl sm:w-full">
      <div className="bg-[#09131f]/96 border border-white/[0.12] rounded-t-[14px] overflow-hidden shadow-[0_28px_80px_rgba(0,0,0,0.42)]">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.7fr)_auto]">
          <div className="min-w-0 px-5 py-[18px] border-b md:border-b-0 md:border-r border-white/[0.09]">
            <FieldLabel>School</FieldLabel>
            <select
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className="w-full min-w-0 bg-transparent text-white text-[14px] font-semibold outline-none cursor-pointer appearance-none"
            >
              {schools.map((s) => (
                <option key={s} value={s} className="bg-[#0f1117] text-white">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="min-w-0 px-5 py-[18px] border-b md:border-b-0 md:border-r border-white/[0.09]">
            <FieldLabel>Move-in</FieldLabel>
            <input
              type="text"
              placeholder="September 2026"
              className="w-full min-w-0 bg-transparent text-white text-[14px] font-semibold outline-none placeholder-white/45"
            />
          </div>

          <div className="min-w-0 px-5 py-[18px] border-b md:border-b-0 md:border-r border-white/[0.09]">
            <FieldLabel>Budget</FieldLabel>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full min-w-0 bg-transparent text-white text-[14px] font-semibold outline-none cursor-pointer appearance-none"
            >
              {budgets.map((b) => (
                <option key={b} value={b} className="bg-[#0f1117] text-white">
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="min-w-0 px-5 py-[18px] border-b md:border-b-0 md:border-r border-white/[0.09]">
            <FieldLabel>Beds</FieldLabel>
            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="w-full min-w-0 bg-transparent text-white text-[14px] font-semibold outline-none cursor-pointer appearance-none"
            >
              {bedOptions.map((b) => (
                <option key={b} value={b} className="bg-[#0f1117] text-white">
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="min-w-0 flex items-center px-4 py-4">
            <button className="w-full md:w-auto px-8 py-[14px] bg-[#c8f535] text-[#07111b] text-[13px] font-extrabold rounded-[10px] hover:bg-[#d6fa57] transition-colors whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#07111b]/98 border-x border-b border-white/[0.1] rounded-b-[14px] px-5 py-[11px] flex items-center gap-1.5 flex-wrap">
        <span className="text-white/35 text-[11px] font-bold mr-2">
          Popular:
        </span>
        {popularCities.map((city) => (
          <button
            key={city}
            className="text-[11.5px] text-white/56 hover:text-white transition-colors px-2.5 py-1 rounded-[7px] hover:bg-white/[0.06]"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
