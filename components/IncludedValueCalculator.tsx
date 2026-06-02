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

type IncludedValueCalculatorProps = {
  variant?: "section" | "panel";
  onContactOpen?: () => void;
};

export default function IncludedValueCalculator({
  variant = "section",
  onContactOpen,
}: IncludedValueCalculatorProps) {
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
  const compact = variant === "panel";

  const calculator = (
    <div className="grid overflow-hidden rounded-[8px] border border-[#dbe7f3] bg-white shadow-[0_26px_80px_rgba(23,60,102,0.12)] lg:grid-cols-[0.86fr_1.14fr]">
          <div className={`bg-[#07111b] text-white ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8 lg:p-10"}`}>
            <p className="section-kicker text-[#c8f535]">
              Student cost check
            </p>
            <h2
              className={`headline-on-dark mt-5 font-heading font-extrabold leading-[0.88] text-white ${
                compact
                  ? "text-[clamp(2.2rem,5vw,3.6rem)]"
                  : "section-heading-tight"
              }`}
            >
              <span className="headline-main">
                What would this <span className="headline-accent-lime">cost</span>
              </span>
              <span className="headline-sub">
                <span className="headline-accent-lime">somewhere else?</span>
              </span>
            </h2>
            <p className={`${compact ? "mt-4 text-[13px]" : "section-copy mt-6"} text-white/62`}>
              Adjust common student expenses and compare them with an
              all-inclusive ZIM.ca room.
            </p>

            <div className={`rounded-[8px] border border-white/10 bg-white/[0.06] ${compact ? "mt-5 p-4" : "mt-8 p-5"}`}>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-white/48">
                Included value
              </p>
              <p className={`mt-2 font-heading font-extrabold leading-none text-[#c8f535] ${compact ? "text-[2.35rem]" : "text-[3.2rem]"}`}>
                ${includedTotal}
              </p>
              <p className="mt-2 text-[13px] font-semibold text-white/58">
                estimated monthly extras already covered
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className={`rounded-[8px] border border-white/10 bg-white/[0.06] ${compact ? "p-3" : "p-4"}`}>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/42">
                  Comparable
                </p>
                <p className={`mt-2 font-extrabold ${compact ? "text-[1.1rem]" : "text-[1.35rem]"}`}>
                  ${comparableRent}/mo
                </p>
              </div>
              <div className={`rounded-[8px] border border-white/10 bg-white/[0.06] ${compact ? "p-3" : "p-4"}`}>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/42">
                  Yearly value
                </p>
                <p className={`mt-2 font-extrabold ${compact ? "text-[1.1rem]" : "text-[1.35rem]"}`}>
                  ${yearlyIncluded}
                </p>
              </div>
            </div>
          </div>

          <div className={compact ? "p-4 sm:p-5" : "p-5 sm:p-7 lg:p-8"}>
            <div className={compact ? "mb-4" : "mb-6"}>
              <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#526586]">
                Choose room type
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {rentOptions.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setRent(option.value)}
                    className={`rounded-[8px] border px-4 text-left transition ${compact ? "py-2.5" : "py-3"} ${
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
              <p className={`mt-3 rounded-[8px] bg-[#fff8e6] px-4 font-semibold leading-relaxed text-[#6f5200] ${compact ? "py-2.5 text-[12px]" : "py-3 text-[12.5px]"}`}>
                Pair rooms are only for two friends applying together. ZIM.ca
                does not match strangers into shared rooms.
              </p>
            </div>

            <div className={`grid md:grid-cols-2 ${compact ? "gap-3" : "gap-4"}`}>
              {costItems.map((item) => (
                <label
                  key={item.key}
                  className={`rounded-[8px] border border-[#dbe7f3] bg-[#f8fbff] ${compact ? "p-3" : "p-4"}`}
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

            <div className={`flex flex-col gap-3 rounded-[8px] border border-[#dbe7f3] bg-[#edf5ff] sm:flex-row sm:items-center sm:justify-between ${compact ? "mt-4 p-3" : "mt-6 p-4"}`}>
              <p className="text-[13px] font-semibold leading-relaxed text-[#425879]">
                Based on your numbers, a ${rent}/month ZIM.ca room compares to
                about <span className="font-extrabold">${comparableRent}</span>{" "}
                elsewhere once common student costs are added.
              </p>
              <ContactTrigger
                onOpen={onContactOpen}
                className="shrink-0 rounded-[8px] bg-[#07111b] px-5 py-3 text-[13px] font-extrabold text-white transition hover:bg-[#142536]"
              >
                Ask about availability
              </ContactTrigger>
            </div>
          </div>
    </div>
  );

  if (variant === "panel") {
    return calculator;
  }

  return (
    <section className="bg-[#edf5ff] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {calculator}
      </div>
    </section>
  );
}
