import Link from "next/link";
import ContactTrigger from "./ContactTrigger";
import ZimLogo from "./ZimLogo";

const footerGroups = [
  {
    title: "Student Housing",
    links: [
      { label: "Ottawa Student Rentals", href: "/" },
      { label: "Near Algonquin College", href: "/algonquin-student-rentals-ottawa" },
      { label: "Near Baseline Station", href: "/student-rentals-nepean-baseline-station" },
      { label: "For Parents", href: "/parents-student-housing-ottawa" },
      { label: "International Students", href: "/international-student-housing-ottawa" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Student Housing Resources", href: "/student-housing-resources-ottawa" },
      { label: "Algonquin Housing Guide", href: "/algonquin-college-off-campus-housing-guide" },
      { label: "Housing Cost Guide", href: "/ottawa-student-housing-cost-guide" },
      { label: "September Rentals", href: "/september-student-rentals-ottawa" },
      { label: "Room vs Apartment", href: "/furnished-student-room-vs-apartment-ottawa" },
      { label: "Student Resources", href: "/resources" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0b0e] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-10 sm:px-6 sm:pb-28 sm:pt-10 lg:px-8 lg:pb-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="mb-3">
              <ZimLogo compact />
            </div>
            <p className="max-w-[260px] text-[12.5px] leading-relaxed text-white/35">
              Furnished student rooms in Nepean, Ottawa near Algonquin College
              and Baseline Station.
            </p>
            <ContactTrigger
              payload={{
                roomType: "Availability",
                moveIn: "2026-09-01",
                lease: "Footer showing inquiry",
              }}
              className="mt-5 inline-flex rounded-[10px] bg-[#c8f535] px-4 py-3 text-[12px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
            >
              Contact / Book a Showing
            </ContactTrigger>
            <p className="mt-6 text-[12px] text-white/25">
              (c) 2026 ZIM.ca. All rights reserved.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-white/70">
                  {group.title}
                </h2>
                <div className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[13px] text-white/35 transition-colors hover:text-white/75"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
