"use client";

import ContactTrigger from "./ContactTrigger";

type StudentHousingCtaProps = {
  title?: string;
  text?: string;
};

export default function StudentHousingCta({
  title = "Looking for a furnished student room in Ottawa?",
  text = "Ask about furnished student rooms in Nepean, Ottawa near Algonquin College and Baseline Station, with utilities, internet, and laundry included.",
}: StudentHousingCtaProps) {
  return (
    <section className="bg-[#07111b] py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="section-kicker text-[#c8f535]">Contact ZIM.ca</p>
          <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
            {title}
          </h2>
          <p className="section-copy mt-5 text-white/58">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <ContactTrigger
            payload={{
              roomType: "Availability",
              moveIn: "2026-09-01",
              lease: "Student rental inquiry",
            }}
            className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
          >
            Book a Showing
          </ContactTrigger>
          <ContactTrigger
            payload={{
              roomType: "General question",
              moveIn: "2026-09-01",
              lease: "Question about student rooms",
            }}
            className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
          >
            Ask a Question
          </ContactTrigger>
        </div>
      </div>
    </section>
  );
}
