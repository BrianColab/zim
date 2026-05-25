import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern student apartment community"
          fill
          priority
          quality={88}
          className="object-cover object-center"
        />
        {/* Gradient: darkens top (for nav legibility) + bottom (for text) + left edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d10]/70 via-[#0c0d10]/30 to-[#0c0d10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d10]/40 to-transparent pointer-events-none" />
      </div>

      {/* Content anchored to bottom */}
      <div className="relative flex-1 flex flex-col justify-end">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-0">
          {/* Headline block */}
          <div className="mb-10 max-w-[700px]">
            <h1
              className="font-heading font-extrabold text-white leading-[0.88] tracking-tight mb-5"
              style={{
                fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
              }}
            >
              Live Close.
              <br />
              Live{" "}
              <span className="underline decoration-[#c8f535] decoration-[5px] underline-offset-[10px]">
                Smart.
              </span>
            </h1>
            <p className="text-white/55 text-[1rem] sm:text-[1.1rem] leading-relaxed max-w-[340px]">
              Modern student rentals near campus.
              <br />
              Built for focus. Made for life.
            </p>
          </div>

          {/* Search bar sits at the very bottom, flush with section edge */}
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
