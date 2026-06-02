"use client";

import ContactTrigger from "./ContactTrigger";
import { homepageFaqs } from "@/data/homepageFaqs";

const benefits = [
  "Furnished rooms",
  "Utilities included",
  "Internet included",
  "Laundry included",
  "Near Algonquin College",
  "Near Baseline Station",
  "Student-focused rental setup",
  "Rooms from $850/month",
];

export default function HomepageSeoSections() {
  return (
    <>
      <section id="furnished-student-rooms" className="bg-[#f5f1e8] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div>
            <p className="section-kicker text-[#60710f]">Ottawa student rentals</p>
            <h2 className="section-heading-tight mt-4 text-zinc-950">
              Furnished Student Rooms in Nepean
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="section-copy max-w-none text-zinc-600">
              ZIM.ca offers furnished, all-inclusive student rooms in Nepean,
              Ottawa, near Algonquin College, Baseline Station, and College
              Square. These Ottawa student rentals are set up for students who
              want predictable monthly costs, included essentials, and a
              practical location for school, transit, groceries, and everyday
              errands.
            </p>
            <p className="section-copy max-w-none text-zinc-600">
              Students comparing student rooms in Ottawa can use ZIM.ca for
              furnished student rooms close to Algonquin College, with transit
              routes that can connect to Carleton University and uOttawa.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#location-advantage"
                className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
              >
                student rentals near Algonquin College
              </a>
              <a
                href="#why-students-choose"
                className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
              >
                furnished student rooms in Ottawa
              </a>
              <a
                href="#book-a-showing"
                className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
              >
                book a showing
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="why-students-choose" className="bg-[#07111b] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_410px] lg:items-end">
            <div>
              <p className="section-kicker text-[#c8f535]">Why students choose ZIM.ca</p>
              <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                Utilities, Internet and Laundry Included
              </h2>
            </div>
            <p className="section-copy text-white/58">
              Nepean student rentals can be easier to compare when key monthly
              costs are included. ZIM.ca keeps the setup clear for students
              looking for all-inclusive student rooms near Ottawa transit and
              campus routes.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[8px] border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-[13px] font-extrabold text-white"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location-advantage" className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="section-kicker text-[#60710f]">Location advantage</p>
            <h2 className="section-heading-tight mt-4 text-zinc-950">
              Near Algonquin College and Baseline Station
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="section-copy max-w-none text-zinc-600">
              The property is located at or near 1658-1660 Baseline Road in
              Nepean, Ottawa. That places students near Algonquin College,
              Baseline Station, and College Square, with transit options for
              Carleton University and uOttawa depending on class schedule and
              route.
            </p>
            <p className="section-copy max-w-none text-zinc-600">
              For students searching for student rentals near Algonquin College
              or Nepean student rentals with included essentials, ZIM.ca offers
              a practical west Ottawa location without making students manage a
              long list of separate setup costs.
            </p>
          </div>
        </div>
      </section>

      <section id="student-rentals-from-850" className="bg-[#f5f1e8] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="section-kicker text-[#60710f]">All-inclusive value</p>
            <h2 className="section-heading-tight mt-4 text-zinc-950">
              Student Rentals from $850/month
            </h2>
          </div>
          <p className="section-copy max-w-none text-zinc-600">
            Rooms start from $850/month, with furniture, utilities, internet,
            and laundry included. This helps students compare the total monthly
            cost of furnished student rooms before they book a showing.
          </p>
        </div>
      </section>

      <section id="faq" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker text-[#60710f]">Student rental FAQ</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Book a Showing
              </h2>
            </div>
            <p className="section-copy text-zinc-600">
              Quick answers for students and parents comparing furnished student
              rooms in Ottawa near Algonquin College and Baseline Station.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {homepageFaqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[8px] border border-black/[0.08] bg-[#f7f4ed] p-5"
              >
                <h3 className="text-[15px] font-extrabold leading-tight text-zinc-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-[13px] font-medium leading-relaxed text-zinc-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <ContactTrigger
              payload={{
                roomType: "Availability",
                moveIn: "2026-09-01",
                lease: "Student rental inquiry",
              }}
              className="inline-flex rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
            >
              Book a showing
            </ContactTrigger>
          </div>
        </div>
      </section>
    </>
  );
}
