"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = ["Find a Place", "Why ZIM", "Resources", "About"];

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
          ? "bg-[#0c0d10]/95 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[62px]">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-white font-bold text-[17px] tracking-tight"
          >
            zim.ca
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/60 hover:text-white text-[13.5px] font-medium transition-colors duration-150"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden md:inline-flex items-center px-[14px] py-[7px] bg-[#c8f535] text-[#0c0d10] text-[13px] font-bold rounded-lg hover:bg-[#d5f858] transition-colors"
            >
              List Your Property
            </Link>
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
          <div className="md:hidden bg-[#0c0d10] py-4 border-t border-white/[0.06] flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="py-2.5 text-white/60 hover:text-white text-sm font-medium transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#"
              className="mt-3 py-2.5 bg-[#c8f535] text-[#0c0d10] text-sm font-bold rounded-lg text-center"
            >
              List Your Property
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
