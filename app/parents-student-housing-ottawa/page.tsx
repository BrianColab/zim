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
import { parentHousingFaqs } from "@/data/parentHousingFaqs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Student Housing in Ottawa for Parents | Furnished Rooms Near Algonquin | ZIM.ca",
  },
  description:
    "Helping your student find furnished off-campus housing in Ottawa? ZIM.ca offers all-inclusive student rooms near Algonquin College, Baseline Station and College Square with utilities, internet, laundry and furniture included.",
  keywords: [
    "student housing for parents Ottawa",
    "Ottawa student rentals for parents",
    "student rooms near Algonquin College",
    "furnished student rooms Ottawa",
    "Algonquin College off-campus housing",
    "student housing near Baseline Station",
  ],
  alternates: {
    canonical: "https://www.zim.ca/parents-student-housing-ottawa",
  },
  openGraph: {
    title:
      "Student Housing in Ottawa for Parents | Furnished Rooms Near Algonquin | ZIM.ca",
    description:
      "Information for parents helping students compare furnished off-campus housing near Algonquin College, Baseline Station and College Square.",
    url: "https://www.zim.ca/parents-student-housing-ottawa",
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

const includedItems = [
  "Furnished rooms",
  "Utilities included",
  "Internet included",
  "Laundry included",
  "Practical Nepean location",
  "Near Algonquin College",
  "Near Baseline Station",
  "Rooms from $850/month",
];

const parentQuestions = [
  {
    question: "What does the monthly rent include?",
    answer:
      "The listed ZIM.ca room setup includes furnishings, hydro, water, heat, central A/C, internet, and laundry.",
  },
  {
    question: "Are the rooms furnished?",
    answer:
      "Yes. Rooms include a bed, mattress, desk, and office chair.",
  },
  {
    question: "How does a student book a showing?",
    answer:
      "Use the Book a Showing button or contact form to ask about current rooms and move-in dates.",
  },
  {
    question: "How does the application process work?",
    answer:
      "Students can start by contacting ZIM.ca through the showing form. Current room details and next steps are confirmed through that contact process.",
  },
  {
    question: "Is this suitable for Algonquin College students?",
    answer:
      "It can be a practical option for students looking for furnished off-campus housing near Algonquin College, Baseline Station, and College Square.",
  },
  {
    question: "Can parents contact the showing contact?",
    answer:
      "Parents or students can use the same contact form to ask questions about student rooms and showings.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.zim.ca/parents-student-housing-ottawa#business",
  name: "ZIM.ca",
  url: "https://www.zim.ca/parents-student-housing-ottawa",
  image: "https://www.zim.ca/images/og-zim-student-rentals.jpg",
  description:
    "Furnished all-inclusive student rooms in Nepean, Ottawa for students near Algonquin College, Baseline Station, and College Square.",
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
      name: "Student housing for parents Ottawa",
      serviceType: "Furnished student rooms / off-campus student rentals",
      areaServed: ["Ottawa", "Nepean"],
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.zim.ca/parents-student-housing-ottawa#faq",
  mainEntity: parentHousingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ParentsStudentHousingOttawaPage() {
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
            <div className="absolute inset-0 bg-[#07111b]/24" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06101a]/90 via-[#07111b]/42 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#06101a]/44 via-transparent to-[#06101a]/72" />
          </div>

          <div className="relative flex flex-1 flex-col justify-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
              <div className="max-w-[850px]">
                <p className="section-kicker mb-5 text-[#c8f535]">
                  Ottawa student rentals for parents
                </p>
                <h1
                  className="mb-6 font-heading font-extrabold leading-[0.9] text-white sm:leading-[0.86]"
                  style={{ fontSize: "clamp(3.15rem, 7.2vw, 6.9rem)" }}
                >
                  Student Housing in Ottawa: Information for Parents
                </h1>
                <p className="max-w-[600px] text-[1.02rem] font-medium leading-[1.65] text-white/72 sm:text-[1.16rem]">
                  ZIM.ca helps students find practical furnished rooms in
                  Nepean, Ottawa near Algonquin College, Baseline Station, and
                  College Square.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ContactTrigger
                    payload={{
                      roomType: "Availability",
                      moveIn: "2026-09-01",
                      lease: "Parent inquiry for Ottawa student housing",
                    }}
                    className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
                  >
                    Book a Showing
                  </ContactTrigger>
                  <Link
                    href="#student-rooms"
                    className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white backdrop-blur-md transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
                  >
                    View Student Rooms
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
              <p className="section-kicker text-[#60710f]">
                Parent-focused information
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Clear answers before choosing student housing
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Parents often want clear answers about monthly cost, what is
                included, location, furnishings, internet, utilities, and how
                the showing and application process starts. ZIM.ca keeps the
                core details visible so families can compare furnished student
                rooms in Ottawa more easily.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                The location is in Nepean near Algonquin College, Baseline
                Station, and College Square, with student rooms set up around
                included essentials rather than a long list of separate setup
                steps.
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
                  student rentals near Baseline Station
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

        <section className="bg-[#07111b] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="section-kicker text-[#c8f535]">
                  What is included
                </p>
                <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                  All-inclusive student rooms Ottawa families can compare
                </h2>
              </div>
              <p className="section-copy text-white/58">
                Included furnishings and monthly essentials can make the move-in
                process simpler for students and easier for families to review.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {includedItems.map((item) => (
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

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Why the location works
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Nepean student rentals near daily essentials
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                ZIM.ca is located at or near 1658-1660 Baseline Road in the
                Baseline Road area of Nepean. Students are near Algonquin
                College, Baseline Station, and College Square, with access to
                groceries, food, transit, shopping, and daily student needs.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                The location can be useful for families comparing Algonquin
                College off-campus housing or student housing near Baseline
                Station without adding unsupported promises about exact travel
                times.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Questions parents usually ask
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Short answers before you contact us
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                These answers are based on the current ZIM.ca room information.
                Contact us to confirm current rooms and move-in dates.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {parentQuestions.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[8px] border border-black/[0.08] bg-white p-5"
                >
                  <h3 className="text-[15px] font-extrabold leading-tight text-zinc-950">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-[13px] font-medium leading-relaxed text-zinc-600">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">Cost comparison</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Predictable monthly costs and less move-in setup
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Furnished all-inclusive rooms can help students avoid separate
                furniture, utility, internet, and laundry setup. That can make
                the total monthly housing cost easier to understand before a
                student applies.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                ZIM.ca does not need to be compared as the cheapest option to
                be useful. The value is in clear included essentials, furnished
                rooms, and a practical Nepean location for students.
              </p>
            </div>
          </div>
        </section>

        <section id="student-rooms" className="bg-[#f5f1e8] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Current room information
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

        <section className="bg-[#07111b] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#c8f535]">Parent CTA</p>
              <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                Contact us about student rooms
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-white/58">
                Parents and students can use the same showing form to ask about
                furnished student rooms in Ottawa, included costs, current room
                options, and move-in dates.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ContactTrigger
                  payload={{
                    roomType: "Availability",
                    moveIn: "2026-09-01",
                    lease: "Parent inquiry for Ottawa student housing",
                  }}
                  className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
                >
                  Book a Showing
                </ContactTrigger>
                <ContactTrigger
                  payload={{
                    roomType: "General question",
                    moveIn: "2026-09-01",
                    lease: "Parent question about student rooms",
                  }}
                  className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
                >
                  Ask a Question
                </ContactTrigger>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="section-kicker text-[#60710f]">FAQ</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Parent FAQ for Ottawa student housing
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {parentHousingFaqs.map((faq) => (
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
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-[10px] border border-black/[0.1] bg-white px-5 py-4 text-[13px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
              >
                furnished student rooms in Ottawa
              </Link>
              <Link
                href="/student-rentals-nepean-baseline-station"
                className="inline-flex items-center justify-center rounded-[10px] border border-black/[0.1] bg-white px-5 py-4 text-[13px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
              >
                student rentals near Baseline Station
              </Link>
              <ContactTrigger
                payload={{
                  roomType: "Availability",
                  moveIn: "2026-09-01",
                  lease: "Parent inquiry for Ottawa student housing",
                }}
                className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
              >
                book a showing
              </ContactTrigger>
            </div>
          </div>
        </section>
        <StudentHousingResources
          links={["algonquin", "baseline", "international", "costGuide", "september"]}
        />
        <StudentHousingCta title="Want clear answers before booking a showing?" />
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
