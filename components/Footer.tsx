import Link from "next/link";
import ZimLogo from "./ZimLogo";

const navLinks = [
  { label: "Suites", href: "/#suites" },
  { label: "Near Algonquin", href: "/algonquin-student-rentals-ottawa" },
  { label: "Amenities", href: "/#amenities" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Location", href: "/#location" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0b0e] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-10 sm:px-6 sm:pb-28 sm:pt-10 lg:px-8 lg:pb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <ZimLogo compact />
            </div>
            <p className="text-white/25 text-[12px]">
              (c) 2026 ZIM.ca. All rights reserved.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/35 hover:text-white/75 text-[13px] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
