"use client";

import { useMemo, useState } from "react";
import ContactTrigger from "./ContactTrigger";

const costItems = [
  {
    key: "utilities",
    label: "Utilities",
    detail: "Hydro, water, heat, and A/C",
    min: 60,
    max: 180,
    step: 5,
    defaultValue: 120,
  },
  {
    key: "internet",
    label: "Internet",
    detail: "Unlimited high-speed plan",
    min: 40,
    max: 110,
    step: 5,
    defaultValue: 75,
  },
  {
    key: "laundry",
    label: "Laundry",
    detail: "Washer, dryer, detergent runs",
    min: 15,
    max: 80,
    step: 5,
    defaultValue: 45,
  },
  {
    key: "furniture",
    label: "Furniture",
    detail: "Bed, desk, chair, setup costs",
    min: 20,
    max: 160,
    step: 5,
    defaultValue: 80,
  },
] as const;

const rentOptions = [
  { label: "Unit B Single", value: 850 },
  { label: "Unit A Single", value: 900 },
  { label: "Unit B Pair", value: 1000 },
  { label: "Unit A Pair", value: 1200 },
];

type CostKey = (typeof costItems)[number]["key"];

export default function IncludedValueCalculator() {
  const [rent, setRent] = useState(850);
  const [costs, setCosts] = useState<Record<CostKey, number>>({
    utilities: 120,
    internet: 75,
    laundry: 45,
    furniture: 80,
  });

  const includedTotal = useMemo(
    () => Object.values(costs).reduce((sum, value) => sum + value, 0),
    [costs]
  );

  const comparableRent = rent + includedTotal;
  const yearlyIncluded = includedTotal * 12;

  return (
    <section className="bg-[#edf5ff] pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[8px] border border-[#dbe7f3] bg-white shadow-[0_26px_80px_rgba(23,60,102,0.12)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#07111b] p-6 text-white sm:p-8 lg:p-10">
            <p className="section-kicker text-[#c8f535]">
              Student cost check
            </p>
            <h2 className="section-heading-tight mt-5 text-white">
              What would this cost somewhere else?
            </h2>
            <p className="section-copy mt-6 text-white/62">
              Adjust common student expenses and compare them with an
              all-inclusive ZIM.ca room.
            </p>

            <div className="mt-8 rounded-[8px] border border-white/10 bg-white/[0.06] p-5">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-white/48">
                Included value
              </p>
              <p className="mt-2 font-heading text-[3.2rem] font-extrabold leading-none text-[#c8f535]">
                ${includedTotal}
              </p>
              <p className="mt-2 text-[13px] font-semibold text-white/58">
                estimated monthly extras already covered
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/42">
                  Comparable
                </p>
                <p className="mt-2 text-[1.35rem] font-extrabold">
                  ${comparableRent}/mo
                </p>
              </div>
              <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/42">
                  Yearly value
                </p>
                <p className="mt-2 text-[1.35rem] font-extrabold">
                  ${yearlyIncluded}
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-7 lg:p-8">
            <div className="mb-6">
              <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#526586]">
                Choose room type
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {rentOptions.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setRent(option.value)}
                    className={`rounded-[8px] border px-4 py-3 text-left transition ${
                      rent === option.value
                        ? "border-[#1d8fe8] bg-[#e9f5ff] text-[#07111b]"
                        : "border-[#dbe7f3] bg-white text-[#526586] hover:border-[#9bc9ef]"
                    }`}
                  >
                    <span className="block text-[13px] font-extrabold">
                      {option.label}
                    </span>
                    <span className="mt-1 block text-[12px] font-bold">
                      ${option.value}/month
                    </span>
                  </button>
                ))}
              </div>
              <p className="mt-3 rounded-[8px] bg-[#fff8e6] px-4 py-3 text-[12.5px] font-semibold leading-relaxed text-[#6f5200]">
                Pair rooms are only for two friends applying together. ZIM.ca
                does not match strangers into shared rooms.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {costItems.map((item) => (
                <label
                  key={item.key}
                  className="rounded-[8px] border border-[#dbe7f3] bg-[#f8fbff] p-4"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span>
                      <span className="block text-[14px] font-extrabold text-[#101827]">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-[12.5px] font-medium text-[#526586]">
                        {item.detail}
                      </span>
                    </span>
                    <span className="rounded-full bg-white px-3 py-1 text-[13px] font-extrabold text-[#1d8fe8] shadow-sm">
                      ${costs[item.key]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={item.min}
                    max={item.max}
                    step={item.step}
                    value={costs[item.key]}
                    onChange={(event) =>
                      setCosts((current) => ({
                        ...current,
                        [item.key]: Number(event.target.value),
                      }))
                    }
                    className="h-2 w-full accent-[#1d8fe8]"
                  />
                </label>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 rounded-[8px] border border-[#dbe7f3] bg-[#edf5ff] p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] font-semibold leading-relaxed text-[#425879]">
                Based on your numbers, a ${rent}/month ZIM.ca room compares to
                about <span className="font-extrabold">${comparableRent}</span>{" "}
                elsewhere once common student costs are added.
              </p>
              <ContactTrigger className="shrink-0 rounded-[8px] bg-[#07111b] px-5 py-3 text-[13px] font-extrabold text-white transition hover:bg-[#142536]">
                Ask about availability
              </ContactTrigger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
