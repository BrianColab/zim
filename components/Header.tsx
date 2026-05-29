"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ContactTrigger from "./ContactTrigger";
import ZimLogo from "./ZimLogo";

const navLinks = [
  { label: "Suites", href: "/#suites" },
  { label: "Amenities", href: "/#amenities" },
  { label: "Resources", href: "/resources" },
  { label: "Location", href: "/#location" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07111b]/86 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link
            href="/"
            className="group"
            aria-label="ZIM.ca home"
          >
            <ZimLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/68 hover:text-white text-[13px] font-semibold transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ContactTrigger
              className="hidden md:inline-flex items-center px-[18px] py-[9px] bg-[#c8f535] text-[#07111b] text-[13px] font-extrabold rounded-[10px] hover:bg-[#d6fa57] transition-colors"
            >
              Book a Tour
            </ContactTrigger>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden bg-[#07111b]/95 backdrop-blur-xl py-4 border-t border-white/[0.08] flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-white/60 hover:text-white text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ContactTrigger
              onOpen={() => setOpen(false)}
              className="mt-3 py-2.5 bg-[#c8f535] text-[#07111b] text-sm font-extrabold rounded-[10px] text-center"
            >
              Book a Tour
            </ContactTrigger>
          </div>
        )}
      </div>
    </header>
  );
}
