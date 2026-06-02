import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ContactTrigger from "@/components/ContactTrigger";
import PropertyCard from "@/components/PropertyCard";
import StudentHousingCta from "@/components/StudentHousingCta";
import StudentHousingResources from "@/components/StudentHousingResources";
import SeasonalRentalCallout from "@/components/SeasonalRentalCallout";
import { properties } from "@/data/properties";
import { algonquinRentalFaqs } from "@/data/algonquinRentalFaqs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Student Rentals Near Algonquin College | Furnished Rooms in Ottawa | ZIM.ca",
  },
  description:
    "Find furnished all-inclusive student rooms near Algonquin College in Nepean, Ottawa. ZIM.ca offers rooms from $850/month with utilities, internet, laundry and furniture included near Baseline Station and College Square.",
  keywords: [
    "student rentals near Algonquin College",
    "Algonquin College off-campus housing",
    "furnished student rooms near Algonquin College",
    "Ottawa student rentals near Algonquin",
    "Nepean student rentals",
    "student rooms near Baseline Station",
  ],
  alternates: {
    canonical: "https://www.zim.ca/algonquin-student-rentals-ottawa",
  },
  openGraph: {
    title:
      "Student Rentals Near Algonquin College | Furnished Rooms in Ottawa | ZIM.ca",
    description:
      "Find furnished all-inclusive student rooms near Algonquin College in Nepean, Ottawa. Rooms from $850/month near Baseline Station and College Square.",
    url: "https://www.zim.ca/algonquin-student-rentals-ottawa",
    images: [
      {
        url: "/images/og-zim-student-rentals.jpg",
        width: 1200,
        height: 630,
        alt: "Students entering the ZIM.ca rental at 1658-1660 Baseline Road in Ottawa",
      },
    ],
  },
};

const benefits = [
  "Furnished rooms",
  "Utilities included",
  "Internet included",
  "Laundry included",
  "Near Baseline Station",
  "Rooms from $850/month",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.zim.ca/algonquin-student-rentals-ottawa#business",
  name: "ZIM.ca",
  url: "https://www.zim.ca/algonquin-student-rentals-ottawa",
  image: "https://www.zim.ca/images/og-zim-student-rentals.jpg",
  description:
    "Furnished all-inclusive student rooms near Algonquin College in Nepean, Ottawa.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1658-1660 Baseline Road",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Ottawa" },
    { "@type": "Place", name: "Nepean" },
    { "@type": "CollegeOrUniversity", name: "Algonquin College" },
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Student rentals near Algonquin College",
      serviceType: "Furnished student rooms / off-campus student rentals",
      areaServed: ["Ottawa", "Nepean"],
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.zim.ca/algonquin-student-rentals-ottawa#faq",
  mainEntity: algonquinRentalFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AlgonquinStudentRentalsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <section className="relative flex min-h-[680px] flex-col overflow-hidden bg-[#07111b] sm:min-h-[740px]">
          <div className="absolute inset-0">
            <Image
              src="/images/main.png"
              alt="Students entering the ZIM.ca student rental at 1658-1660 Baseline Road in Ottawa"
              fill
              priority
              sizes="100vw"
              quality={90}
              className="object-cover object-[62%_42%]"
            />
            <div className="absolute inset-0 bg-[#07111b]/22" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06101a]/90 via-[#07111b]/42 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#06101a]/44 via-transparent to-[#06101a]/72" />
          </div>

          <div className="relative flex flex-1 flex-col justify-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
              <div className="max-w-[820px]">
                <p className="section-kicker mb-5 text-[#c8f535]">
                  Algonquin College off-campus housing
                </p>
                <h1
                  className="mb-6 font-heading font-extrabold leading-[0.9] text-white sm:leading-[0.86]"
                  style={{ fontSize: "clamp(3.35rem, 8vw, 7.4rem)" }}
                >
                  Student Rentals Near Algonquin College
                </h1>
                <p className="max-w-[560px] text-[1.02rem] font-medium leading-[1.65] text-white/72 sm:text-[1.16rem]">
                  ZIM.ca offers furnished, all-inclusive student rooms in
                  Nepean, Ottawa near Algonquin College, Baseline Station, and
                  College Square.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ContactTrigger
                    payload={{
                      roomType: "Availability",
                      moveIn: "2026-09-01",
                      lease: "Algonquin student rental inquiry",
                    }}
                    className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
                  >
                    Book a Showing
                  </ContactTrigger>
                  <Link
                    href="#available-rooms"
                    className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white backdrop-blur-md transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
                  >
                    View Available Rooms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SeasonalRentalCallout />

        <section className="bg-[#07111b] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

        <section id="location" className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">Nepean student rentals</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Off-campus housing near Baseline Road
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                ZIM.ca is located at or near 1658-1660 Baseline Road in
                Nepean, Ottawa, close to the Algonquin College area, Baseline
                Station, and College Square. For students comparing Ottawa
                student rentals near Algonquin, the location keeps transit,
                groceries, food, shopping, and daily student needs nearby.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Students looking for student rooms near Baseline Station or
                student rentals near College Square can use this location as a
                practical base while confirming the route that works for their
                own class schedule.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  Ottawa student rentals
                </Link>
                <Link
                  href="/student-rentals-nepean-baseline-station"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  student rooms near Baseline Station
                </Link>
                <Link
                  href="/#suites"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  furnished student rooms
                </Link>
                <Link
                  href="/parents-student-housing-ottawa"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  student housing information for parents
                </Link>
                <Link
                  href="/international-student-housing-ottawa"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  international student housing in Ottawa
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Why ZIM.ca works for students
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                All-inclusive student rooms Ottawa students can compare clearly
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Furnished student rooms near Algonquin College can reduce the
                move-in hassle for students who do not want to source a bed,
                desk, chair, utilities, internet, and laundry separately.
                ZIM.ca keeps the setup student-focused and easier to understand.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                For students trying to keep monthly costs lower than many
                private apartments or purpose-built residences, all-inclusive
                rooms can be a practical option. Students should still compare
                the current room, setup, and move-in date before applying.
              </p>
            </div>
          </div>
        </section>

        <section id="available-rooms" className="bg-[#f5f1e8] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Rooms near Algonquin College
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Furnished rooms from existing ZIM.ca listings
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                Availability and pricing may vary. Contact us to confirm current
                rooms and move-in dates.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#07111b] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#c8f535]">For parents</p>
              <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                Practical off-campus housing near Algonquin College
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-white/58">
                For parents helping a student compare Algonquin College
                off-campus housing, ZIM.ca focuses on furnished rooms, included
                utilities, included internet, and a clear showing/contact
                process through the property manager.
              </p>
              <p className="section-copy max-w-none text-white/58">
                The setup is designed for students looking for practical
                furnished student rooms near Algonquin College, with application
                details confirmed through the showing and contact process.
              </p>
              <ContactTrigger
                payload={{
                  roomType: "Availability",
                  moveIn: "2026-09-01",
                  lease: "Parent inquiry for Algonquin student rental",
                }}
                className="inline-flex w-fit rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
              >
                book a showing
              </ContactTrigger>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="section-kicker text-[#60710f]">FAQ</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Common questions about Algonquin student rentals
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {algonquinRentalFaqs.map((faq) => (
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ContactTrigger
                payload={{
                  roomType: "Availability",
                  moveIn: "2026-09-01",
                  lease: "Algonquin student rental inquiry",
                }}
                className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
              >
                Book a Showing
              </ContactTrigger>
              <Link
                href="/#suites"
                className="inline-flex items-center justify-center rounded-[10px] border border-black/[0.1] bg-white px-5 py-4 text-[13px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
              >
                rooms near Algonquin College
              </Link>
            </div>
          </div>
        </section>
        <StudentHousingResources
          links={["baseline", "parents", "international", "costGuide", "september"]}
        />
        <StudentHousingCta
          title="Have questions about student rooms near Algonquin College?"
        />
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
