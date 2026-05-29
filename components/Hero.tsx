import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative flex min-h-[680px] flex-col overflow-hidden bg-[#07111b] sm:min-h-[760px] lg:min-h-[860px]">
      <div className="absolute inset-0">
        <Image
          src="/images/main.png"
          alt="Students arriving at ZIM.ca"
          fill
          priority
          quality={90}
          className="object-cover object-[62%_42%]"
        />
        <div className="absolute inset-0 bg-[#07111b]/18" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06101a]/88 via-[#07111b]/38 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06101a]/44 via-transparent to-[#06101a]/72" />
      </div>

      <div className="relative flex flex-1 flex-col justify-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-0 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <div className="mb-9 max-w-[760px] sm:mb-12">
            <h1
              className="mb-5 font-heading font-extrabold leading-[0.9] text-white sm:mb-6 sm:leading-[0.86]"
              style={{
                fontSize: "clamp(3.45rem, 8.6vw, 8.2rem)",
              }}
            >
              Live Close.
              <br />
              Live{" "}
              <span className="underline decoration-[#c8f535] decoration-[6px] underline-offset-[12px]">
                Smart.
              </span>
            </h1>
            <p className="text-white/72 text-[1.02rem] sm:text-[1.16rem] leading-[1.55] max-w-[380px] font-medium">
              Modern student housing in Ottawa near Algonquin campus.
              <br />
              All students welcome. Built for focus. Made for life.
            </p>
          </div>

          <SearchBar />
        </div>
      </div>
    </section>
  );
}
