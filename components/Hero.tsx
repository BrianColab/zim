import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] lg:min-h-[860px] flex flex-col overflow-hidden bg-[#07111b]">
      <div className="absolute inset-0">
        <Image
          src="/images/main.png"
          alt="Students arriving at ZIM.ca"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#07111b]/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06101a]/95 via-[#07111b]/78 to-[#07111b]/38" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06101a]/84 via-transparent to-[#06101a]" />
      </div>

      <div className="relative flex-1 flex flex-col justify-end">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-0">
          <div className="mb-12 max-w-[760px]">
            <h1
              className="font-heading font-extrabold text-white leading-[0.86] mb-6"
              style={{
                fontSize: "clamp(4rem, 8.6vw, 8.2rem)",
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
              Modern student housing near campus.
              <br />
              Built for focus. Made for life.
            </p>
          </div>

          <SearchBar />
        </div>
      </div>
    </section>
  );
}
