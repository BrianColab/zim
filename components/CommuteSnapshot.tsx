"use client";

import { useState } from "react";

const commuteItems = [
  {
    destination: "Algonquin College",
    context: "Main nearby campus",
    time: "8-12 min",
    mode: "bike or bus",
    note: "College Square and Baseline Station area",
    mapQuery:
      "walking route from 1660 Baseline Road Ottawa to Algonquin College Ottawa",
  },
  {
    destination: "Carleton University",
    context: "South Ottawa campus",
    time: "18-28 min",
    mode: "drive or transit",
    note: "Good fit for students who want west-end housing",
    mapQuery:
      "route from 1660 Baseline Road Ottawa to Carleton University Ottawa",
  },
  {
    destination: "uOttawa",
    context: "Downtown campus",
    time: "30-45 min",
    mode: "transit",
    note: "Plan around peak-hour service",
    mapQuery:
      "transit route from 1660 Baseline Road Ottawa to University of Ottawa",
  },
  {
    destination: "College Square",
    context: "Groceries and banking",
    time: "4 min",
    mode: "drive",
    note: "Loblaws, LCBO, Rexall, BMO, essentials",
    mapQuery:
      "route from 1660 Baseline Road Ottawa to College Square Ottawa",
  },
];

function mapEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`;
}

function RouteIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 7a3 3 0 1 0 0 .01M18 17a3 3 0 1 0 0 .01M8.5 7h4.25a3.25 3.25 0 0 1 0 6.5H11a3.5 3.5 0 0 0 0 7h4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function CommuteSnapshot() {
  const [openRoute, setOpenRoute] = useState<string | null>(null);

  return (
    <section className="bg-[#f5f1e8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_390px] lg:items-end">
          <div>
            <p className="section-kicker text-[#60710f]">
              Commute snapshot
            </p>
            <h2 className="section-heading mt-4 text-zinc-950">
              <span className="headline-main">
                Know your <span className="headline-accent">route</span>
              </span>
              <span className="headline-sub">
                before <span className="headline-accent">you apply.</span>
              </span>
            </h2>
          </div>
          <p className="section-copy text-zinc-600">
            Approximate times from 1660 Baseline Road. Students should confirm
            live transit and traffic before committing to a routine.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {commuteItems.map((item) => (
            <article
              key={item.destination}
              className="flex min-h-[260px] flex-col overflow-hidden rounded-[8px] border border-black/[0.08] bg-white p-5 shadow-[0_1px_2px_rgba(8,18,28,0.05)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#e9f5ff] text-[#1d8fe8]">
                <RouteIcon />
              </div>
              <p className="card-kicker text-[#60710f]">
                {item.context}
              </p>
              <h3 className="mt-2 text-[18px] font-extrabold leading-tight text-zinc-950">
                {item.destination}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-[2rem] font-extrabold leading-none text-[#07111b]">
                  {item.time}
                </span>
              </div>
              <p className="mt-1 text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#1d8fe8]">
                {item.mode}
              </p>
              <p className="mt-4 text-[12.5px] font-medium leading-relaxed text-zinc-500">
                {item.note}
              </p>
              <button
                type="button"
                onClick={() =>
                  setOpenRoute((current) =>
                    current === item.destination ? null : item.destination
                  )
                }
                className="mt-auto inline-flex items-center justify-center rounded-[8px] bg-[#07111b] px-4 py-3 text-[12px] font-extrabold text-white transition hover:bg-[#142536]"
                aria-expanded={openRoute === item.destination}
              >
                {openRoute === item.destination ? "Hide route" : "View route"}
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                  openRoute === item.destination
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="mt-4 overflow-hidden rounded-[8px] border border-black/[0.08] bg-zinc-100">
                    <iframe
                      title={`${item.destination} route preview`}
                      src={mapEmbedUrl(item.mapQuery)}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-[220px] w-full border-0"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
