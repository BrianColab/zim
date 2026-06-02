import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ContactTrigger from "@/components/ContactTrigger";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { septemberStudentRentalFaqs } from "@/data/septemberStudentRentalFaqs";

const canonicalUrl = "https://www.zim.ca/september-student-rentals-ottawa";
const pageTitle =
  "September Student Rentals in Ottawa | Furnished Rooms Near Algonquin | ZIM.ca";
const pageDescription =
  "Looking for September student rentals in Ottawa? ZIM.ca offers furnished all-inclusive student rooms near Algonquin College, Baseline Station and College Square with utilities, internet, laundry and furniture included.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "September student rentals Ottawa",
    "Ottawa student rentals September",
    "student housing Ottawa September",
    "furnished student rooms Ottawa",
    "student rooms near Algonquin College",
    "Algonquin College off-campus housing",
    "all-inclusive student rooms Ottawa",
    "student rentals near Baseline Station",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    images: [
      {
        url: "/images/main.png",
        width: 1200,
        height: 630,
        alt: "September student rentals in Ottawa near Algonquin College",
      },
    ],
  },
};

const rentalChecklist = [
  "Is the room furnished?",
  "Are utilities included?",
  "Is internet included?",
  "Is laundry included?",
  "Is the property near school or transit?",
  "What is the move-in date?",
  "What is the lease term?",
  "Are there extra fees?",
  "How do showings and applications work?",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "September Student Rentals in Ottawa",
  description: pageDescription,
  author: {
    "@type": "Organization",
    name: "ZIM.ca",
    url: "https://www.zim.ca",
  },
  publisher: {
    "@type": "Organization",
    name: "ZIM.ca",
    url: "https://www.zim.ca",
    logo: {
      "@type": "ImageObject",
      url: "https://www.zim.ca/icon.svg",
    },
  },
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${canonicalUrl}#faq`,
  mainEntity: septemberStudentRentalFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function SeptemberStudentRentalsOttawaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
              alt="September student rentals in Ottawa"
              fill
              priority
              quality={90}
              className="object-cover object-[62%_42%]"
            />
            <div className="absolute inset-0 bg-[#07111b]/24" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06101a]/90 via-[#07111b]/42 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#06101a]/44 via-transparent to-[#06101a]/72" />
          </div>

          <div className="relative flex flex-1 flex-col justify-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
              <div className="max-w-[850px]">
                <p className="section-kicker mb-5 text-[#c8f535]">
                  Fall move-in planning
                </p>
                <h1
                  className="mb-6 font-heading font-extrabold leading-[0.9] text-white sm:leading-[0.86]"
                  style={{ fontSize: "clamp(3.25rem, 7.5vw, 7rem)" }}
                >
                  September Student Rentals in Ottawa
                </h1>
                <p className="max-w-[650px] text-[1.02rem] font-medium leading-[1.65] text-white/72 sm:text-[1.16rem]">
                  Students looking for September housing should start early,
                  compare total monthly costs, and confirm what is included
                  before applying.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="#student-rooms"
                    className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
                  >
                    View Student Rooms
                  </Link>
                  <ContactTrigger
                    payload={{
                      roomType: "Availability",
                      moveIn: "2026-09-01",
                      lease: "September student rental inquiry",
                    }}
                    className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white backdrop-blur-md transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
                  >
                    Book a Showing
                  </ContactTrigger>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                September planning
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Confirm the details before fall move-in
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                September is one of the busiest times for student rentals in
                Ottawa. Students and parents should confirm move-in date,
                monthly rent, what is included, furnishings, internet,
                utilities, laundry, transit access, and how the application
                process works.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Comparing these details early helps students understand the
                total monthly cost and avoid focusing only on base rent.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/ottawa-student-housing-cost-guide"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  Ottawa student housing cost guide
                </Link>
                <Link
                  href="/algonquin-college-off-campus-housing-guide"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  Algonquin College off-campus housing guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">Look early</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Why students should look early for September housing
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Student rental demand often increases before the fall semester.
                Rooms may become limited closer to September, so early planning
                helps students compare price, location, and included costs while
                there is more time to ask questions.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Parents may also need time to review housing options, understand
                what is included, and help students prepare for move-in.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#07111b] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_430px] lg:items-end">
              <div>
                <p className="section-kicker text-[#c8f535]">
                  September rental checklist
                </p>
                <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                  What to check before choosing a September rental
                </h2>
              </div>
              <p className="section-copy text-white/58">
                Use this checklist before comparing furnished student rooms
                Ottawa students may consider for fall move-in.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {rentalChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-[8px] border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-[13px] font-extrabold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Furnished all-inclusive rooms
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Less setup for September move-in
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Furnished all-inclusive rooms can reduce move-in hassle because
                furniture, utilities, internet, and laundry may already be
                included. This can be helpful when students are preparing for
                classes and a new routine.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                ZIM.ca offers furnished student rooms in Nepean, Ottawa with
                utilities, internet, laundry, and furniture included. Current
                room data shows rooms from $850/month. Availability and pricing
                may vary. Contact us to confirm current rooms and move-in dates.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">Location</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Near Algonquin College and Baseline Station
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                ZIM.ca is in Nepean near Algonquin College, Baseline Station,
                College Square, and the Baseline Road area. Students can compare
                Ottawa transit access and daily student needs nearby, including
                groceries, food, and shopping.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Students should confirm their exact route and schedule before
                choosing housing, especially for a September move-in.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/algonquin-student-rentals-ottawa"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  student rentals near Algonquin College
                </Link>
                <Link
                  href="/student-rentals-nepean-baseline-station"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  student rooms near Baseline Station
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">For parents</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Helpful when families need time to compare options
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Parents often want clarity on total monthly cost, what is
                included, location, furnished rooms, showing/contact process,
                and move-in planning before helping a student choose housing.
              </p>
              <Link
                href="/parents-student-housing-ottawa"
                className="w-fit rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
              >
                student housing information for parents
              </Link>
            </div>
          </div>
        </section>

        <section id="student-rooms" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_430px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Where ZIM.ca fits
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Furnished student rooms in Nepean, Ottawa
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                Availability and pricing may vary. Contact us to confirm current
                rooms and move-in dates.
              </p>
            </div>
            <div className="mb-8 grid gap-5 lg:grid-cols-2">
              <p className="section-copy max-w-none text-zinc-600">
                ZIM.ca offers furnished student rooms near Algonquin College,
                Baseline Station, and College Square, with utilities, internet,
                and laundry included. The contact/showing process helps students
                confirm current room options and move-in dates.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/international-student-housing-ottawa"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  international student housing in Ottawa
                </Link>
                <Link
                  href="/"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  furnished student rooms in Ottawa
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#07111b] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="section-kicker text-[#c8f535]">FAQ</p>
              <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                September student rentals FAQ
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {septemberStudentRentalFaqs.map((faq) => (
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
                  lease: "September student rental inquiry",
                }}
                className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
              >
                book a showing
              </ContactTrigger>
              <Link
                href="/ottawa-student-housing-cost-guide"
                className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
              >
                Ottawa student housing cost guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
