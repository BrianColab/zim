import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ContactTrigger from "@/components/ContactTrigger";
import StudentHousingCta from "@/components/StudentHousingCta";

const canonicalUrl = "https://www.zim.ca/student-housing-resources-ottawa";
const pageTitle =
  "Ottawa Student Housing Resources | Guides for Students and Parents | ZIM.ca";
const pageDescription =
  "Explore ZIM.ca student housing resources for Ottawa students and parents, including guides for Algonquin College off-campus housing, student rental costs, September rentals, furnished rooms and international students.";

const resourceCards = [
  {
    title: "Student Rentals Near Algonquin College",
    href: "/algonquin-student-rentals-ottawa",
    label: "Algonquin College",
    description:
      "Review furnished student rooms near Algonquin College, Baseline Station, and College Square.",
  },
  {
    title: "Student Rooms Near Baseline Station",
    href: "/student-rentals-nepean-baseline-station",
    label: "Nepean and Baseline",
    description:
      "Compare Nepean student rentals near transit, local shopping, and daily student needs.",
  },
  {
    title: "Student Housing Information for Parents",
    href: "/parents-student-housing-ottawa",
    label: "For parents",
    description:
      "Helpful questions for parents comparing location, included costs, move-in dates, and showing details.",
  },
  {
    title: "International Student Housing in Ottawa",
    href: "/international-student-housing-ottawa",
    label: "International students",
    description:
      "Guidance for students moving to Ottawa who want furnished rooms and simpler monthly cost planning.",
  },
  {
    title: "Algonquin College Off-Campus Housing Guide",
    href: "/algonquin-college-off-campus-housing-guide",
    label: "Housing guide",
    description:
      "Learn what to check before choosing off-campus housing near Algonquin College.",
  },
  {
    title: "Ottawa Student Housing Cost Guide",
    href: "/ottawa-student-housing-cost-guide",
    label: "Cost planning",
    description:
      "Compare rent, utilities, internet, laundry, furniture, and total monthly cost.",
  },
  {
    title: "September Student Rentals in Ottawa",
    href: "/september-student-rentals-ottawa",
    label: "September planning",
    description:
      "Plan for the September rental cycle and confirm rooms, pricing, and move-in dates.",
  },
  {
    title: "Furnished Student Room vs Apartment",
    href: "/furnished-student-room-vs-apartment-ottawa",
    label: "Housing comparison",
    description:
      "Compare furnished student rooms, private apartments, and student residences in Ottawa.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "Ottawa student housing resources",
    "Ottawa student rentals",
    "Algonquin College off-campus housing",
    "student rentals near Algonquin College",
    "furnished student rooms Ottawa",
    "student rooms near Baseline Station",
    "Nepean student rentals",
    "international student housing Ottawa",
    "September student rentals Ottawa",
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
        url: "/images/og-zim-student-rentals.jpg",
        width: 1200,
        height: 630,
        alt: "Students entering the ZIM.ca rental at 1658-1660 Baseline Road in Ottawa",
      },
    ],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: "Ottawa Student Housing Resources",
      description: pageDescription,
      isPartOf: {
        "@id": "https://www.zim.ca/#website",
      },
      about: [
        "Ottawa student rentals",
        "Algonquin College off-campus housing",
        "furnished student rooms Ottawa",
        "Nepean student rentals",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.zim.ca/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ottawa Student Housing Resources",
          item: canonicalUrl,
        },
      ],
    },
  ],
};

export default function StudentHousingResourcesOttawaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#07111b] pt-32 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(200,245,53,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:46px_46px] opacity-45" />
          <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="section-kicker text-[#c8f535]">
                Guides for students and parents
              </p>
              <h1 className="mt-6 max-w-[13ch] font-heading text-[clamp(3.25rem,8vw,6.8rem)] font-black leading-[0.86] tracking-[-0.025em]">
                Ottawa Student Housing Resources
              </h1>
              <p className="section-copy mt-7 text-white/66">
                Use these ZIM.ca guides to compare Ottawa student rentals,
                furnished student rooms, Algonquin College off-campus housing,
                Nepean student rentals, September planning, and total monthly
                cost.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ContactTrigger
                  payload={{
                    roomType: "Availability",
                    moveIn: "2026-09-01",
                    lease: "Student housing resources inquiry",
                  }}
                  className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
                >
                  Book a Showing
                </ContactTrigger>
                <Link
                  href="/september-student-rentals-ottawa"
                  className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white backdrop-blur-md transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
                >
                  September rental planning
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_440px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Featured guides
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Start with the topic that matches your search
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                These internal student housing guides help students and parents
                compare location, furniture, included costs, transit, and
                move-in timing without overpromising availability.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {resourceCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-[8px] border border-black/[0.08] bg-white p-5 shadow-[0_1px_2px_rgba(8,18,28,0.05)] transition hover:-translate-y-0.5 hover:border-[#60710f]/35 hover:shadow-[0_18px_44px_rgba(8,18,28,0.1)]"
                >
                  <p className="card-kicker text-[#60710f]">{card.label}</p>
                  <h3 className="mt-3 text-[1.05rem] font-extrabold leading-tight text-zinc-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[13px] font-medium leading-relaxed text-zinc-600">
                    {card.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Local student housing topics
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Ottawa, Nepean, Algonquin, and Baseline Station
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                ZIM.ca focuses on furnished student rooms in Ottawa and Nepean
                near Algonquin College, Baseline Station, and College Square.
                Students comparing housing can use these guides to check
                location fit, transit access, furnished room setup, and total
                monthly cost.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Parents comparing housing and international students moving to
                Ottawa may also want to confirm current rooms, pricing,
                included utilities, internet, laundry, and move-in dates before
                booking a showing.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#07111b] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="section-kicker text-[#c8f535]">
                  Ask a question
                </p>
                <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                  Ready to compare rooms or book a showing?
                </h2>
              </div>
              <div>
                <p className="section-copy max-w-none text-white/58">
                  Availability and pricing may vary. Contact ZIM.ca to confirm
                  current rooms, rent, move-in dates, and showing options.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ContactTrigger
                    payload={{
                      roomType: "Availability",
                      moveIn: "2026-09-01",
                      lease: "Student housing resources inquiry",
                    }}
                    className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
                  >
                    Book a Showing
                  </ContactTrigger>
                  <Link
                    href="/ottawa-student-housing-cost-guide"
                    className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
                  >
                    Student housing cost guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StudentHousingCta title="Looking for furnished student rooms in Ottawa?" />
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
