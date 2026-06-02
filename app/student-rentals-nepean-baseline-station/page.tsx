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
import { baselineStationFaqs } from "@/data/baselineStationFaqs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Student Rentals Near Baseline Station | Furnished Rooms in Nepean | ZIM.ca",
  },
  description:
    "Furnished all-inclusive student rooms in Nepean near Baseline Station, College Square and Algonquin College. ZIM.ca offers student rooms from $850/month with utilities, internet, laundry and furniture included.",
  keywords: [
    "student rentals near Baseline Station",
    "Nepean student rentals",
    "furnished student rooms in Nepean",
    "student rentals near College Square",
    "Ottawa student rentals",
    "student rooms near Algonquin College",
  ],
  alternates: {
    canonical: "https://www.zim.ca/student-rentals-nepean-baseline-station",
  },
  openGraph: {
    title:
      "Student Rentals Near Baseline Station | Furnished Rooms in Nepean | ZIM.ca",
    description:
      "Furnished all-inclusive student rooms in Nepean near Baseline Station, College Square and Algonquin College. Rooms from $850/month with included essentials.",
    url: "https://www.zim.ca/student-rentals-nepean-baseline-station",
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

const locationBenefits = [
  "Easy access to transit",
  "Close to Algonquin College",
  "Near College Square",
  "Furnished rooms",
  "Utilities and internet included",
  "Practical monthly pricing from $850/month",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.zim.ca/student-rentals-nepean-baseline-station#business",
  name: "ZIM.ca",
  url: "https://www.zim.ca/student-rentals-nepean-baseline-station",
  image: "https://www.zim.ca/images/og-zim-student-rentals.jpg",
  description:
    "Furnished all-inclusive student rooms near Baseline Station in Nepean, Ottawa.",
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
    { "@type": "Place", name: "Baseline Station" },
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Student rentals near Baseline Station",
      serviceType: "Furnished student rooms / off-campus student rentals",
      areaServed: ["Ottawa", "Nepean"],
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.zim.ca/student-rentals-nepean-baseline-station#faq",
  mainEntity: baselineStationFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BaselineStationStudentRentalsPage() {
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
              <div className="max-w-[850px]">
                <p className="section-kicker mb-5 text-[#c8f535]">
                  Furnished student rooms in Nepean
                </p>
                <h1
                  className="mb-6 font-heading font-extrabold leading-[0.9] text-white sm:leading-[0.86]"
                  style={{ fontSize: "clamp(3.25rem, 7.4vw, 7rem)" }}
                >
                  Student Rentals Near Baseline Station in Nepean
                </h1>
                <p className="max-w-[590px] text-[1.02rem] font-medium leading-[1.65] text-white/72 sm:text-[1.16rem]">
                  ZIM.ca offers furnished, all-inclusive student rooms in
                  Nepean, Ottawa near Baseline Station, College Square, and
                  Algonquin College.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ContactTrigger
                    payload={{
                      roomType: "Availability",
                      moveIn: "2026-09-01",
                      lease: "Baseline Station student rental inquiry",
                    }}
                    className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
                  >
                    Book a Showing
                  </ContactTrigger>
                  <Link
                    href="#rooms"
                    className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white backdrop-blur-md transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
                  >
                    View Rooms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SeasonalRentalCallout />

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">Location first</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Student rooms near Baseline Station and College Square
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Baseline Station and Nepean can be practical for students who
                want Ottawa transit access, nearby groceries, food, shopping,
                and daily student needs without living downtown. ZIM.ca is at
                or near 1658-1660 Baseline Road, close to College Square and the
                Algonquin College area.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Students comparing Ottawa student rentals or furnished student
                rooms Ottawa-wide can use this location as a west Ottawa base
                while checking the exact route that fits their schedule.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  Ottawa student rentals
                </Link>
                <Link
                  href="/algonquin-student-rentals-ottawa"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  student rentals near Algonquin College
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#07111b] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="section-kicker text-[#c8f535]">
                  Why this location works
                </p>
                <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                  Nepean student rentals with practical daily access
                </h2>
              </div>
              <p className="section-copy text-white/58">
                The focus is simple: furnished student rooms near transit,
                College Square, and Algonquin College, with included essentials
                that help students compare the full monthly cost.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {locationBenefits.map((benefit) => (
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

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Student room benefits
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Furnished all-inclusive rooms with less to set up
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Furnished rooms mean students have less to move and fewer
                basics to organize before classes start. ZIM.ca rooms include
                furniture, utilities, internet, and laundry, which reduces the
                need for separate utility setup.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                For students looking for practical off-campus housing, an
                all-inclusive setup can make the monthly housing cost easier to
                compare before booking a showing or applying.
              </p>
            </div>
          </div>
        </section>

        <section id="rooms" className="bg-[#f5f1e8] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Room and pricing callout
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Furnished student rooms from existing ZIM.ca listings
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

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">Nearby schools</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                A Nepean base for Ottawa students
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                The location is primarily suited to students comparing student
                rooms near Baseline Station, College Square, and Algonquin
                College. Depending on schedule and transit route, it may also
                work for students attending Carleton University or uOttawa by
                transit.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#suites"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  furnished student rooms in Ottawa
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
                <ContactTrigger
                  payload={{
                    roomType: "Availability",
                    moveIn: "2026-09-01",
                    lease: "Baseline Station student rental inquiry",
                  }}
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  book a showing
                </ContactTrigger>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#07111b] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="section-kicker text-[#c8f535]">FAQ</p>
              <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                Common questions about Baseline Station student rentals
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {baselineStationFaqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[8px] border border-white/[0.08] bg-white/[0.04] p-5"
                >
                  <h3 className="text-[15px] font-extrabold leading-tight text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-[13px] font-medium leading-relaxed text-white/58">
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
                  lease: "Baseline Station student rental inquiry",
                }}
                className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
              >
                Book a Showing
              </ContactTrigger>
              <Link
                href="/algonquin-student-rentals-ottawa"
                className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
              >
                student rentals near Algonquin College
              </Link>
            </div>
          </div>
        </section>
        <StudentHousingResources
          links={["algonquin", "parents", "international", "costGuide", "comparison"]}
          theme="dark"
        />
        <StudentHousingCta title="Ready to confirm a room near Baseline Station?" />
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
