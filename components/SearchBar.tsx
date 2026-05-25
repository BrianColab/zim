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
  "$700 – $900",
  "$900 – $1,100",
  "$1,100+",
];

const bedOptions = ["Any", "1", "2", "3", "4+"];

const popularCities = [
  "Waterloo",
  "Toronto",
  "Western",
  "McMaster",
  "Queen's",
  "Ottawa",
];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[10px] font-bold uppercase tracking-[0.13em] text-white/30 mb-[5px]">
      {children}
    </span>
  );
}

export default function SearchBar() {
  const [school, setSchool] = useState(schools[0]);
  const [budget, setBudget] = useState(budgets[0]);
  const [beds, setBeds] = useState(bedOptions[0]);

  return (
    <div className="mt-8">
      {/* Panel */}
      <div className="bg-[#0f1117] border border-white/[0.08] rounded-t-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* School */}
          <div className="flex-1 px-5 py-[18px] border-b md:border-b-0 md:border-r border-white/[0.07]">
            <FieldLabel>School</FieldLabel>
            <select
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className="w-full bg-transparent text-white text-[13.5px] font-medium outline-none cursor-pointer appearance-none"
            >
              {schools.map((s) => (
                <option key={s} value={s} className="bg-[#0f1117] text-white">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Move-in */}
          <div className="flex-1 px-5 py-[18px] border-b md:border-b-0 md:border-r border-white/[0.07]">
            <FieldLabel>Move-in</FieldLabel>
            <input
              type="text"
              placeholder="Select date"
              className="w-full bg-transparent text-white text-[13.5px] font-medium outline-none placeholder-white/30"
            />
          </div>

          {/* Budget */}
          <div className="flex-1 px-5 py-[18px] border-b md:border-b-0 md:border-r border-white/[0.07]">
            <FieldLabel>Budget</FieldLabel>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-transparent text-white text-[13.5px] font-medium outline-none cursor-pointer appearance-none"
            >
              {budgets.map((b) => (
                <option key={b} value={b} className="bg-[#0f1117] text-white">
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Beds + Search */}
          <div className="flex items-center gap-5 px-5 py-[18px]">
            <div className="md:w-16">
              <FieldLabel>Beds</FieldLabel>
              <select
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
                className="w-full bg-transparent text-white text-[13.5px] font-medium outline-none cursor-pointer appearance-none"
              >
                {bedOptions.map((b) => (
                  <option key={b} value={b} className="bg-[#0f1117] text-white">
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <button className="flex-shrink-0 px-6 py-[11px] bg-[#c8f535] text-[#0c0d10] text-[13px] font-bold rounded-xl hover:bg-[#d5f858] transition-colors whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Popular tags */}
      <div className="bg-[#0d0e14] border-x border-b border-white/[0.07] rounded-b-2xl px-5 py-[10px] flex items-center gap-1 flex-wrap">
        <span className="text-white/25 text-[11px] font-semibold mr-2">
          Popular:
        </span>
        {popularCities.map((city) => (
          <button
            key={city}
            className="text-[11.5px] text-white/40 hover:text-white/80 transition-colors px-2 py-1 rounded-md hover:bg-white/[0.05]"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
