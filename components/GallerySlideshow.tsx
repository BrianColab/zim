"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const photos = [
  "1-main.jpg",
  "3-1660 Baseline Ottawa Ontario _0004.jpg",
  "6-1660 Baseline Ottawa Ontario _0009.jpg",
  "7-1660 Baseline Ottawa Ontario _0011.jpg",
  "8-1660 Baseline Ottawa Ontario _0012.jpg",
  "9-1660 Baseline Ottawa Ontario _0014.jpg",
  "10-1660 Baseline Ottawa Ontario _0015.jpg",
  "11-1660 Baseline Ottawa Ontario _0017.jpg",
  "12-1660 Baseline Ottawa Ontario _0018.jpg",
  "15-1660 Baseline Ottawa Ontario _0006.jpg",
  "photo-4.jpg",
  "photo-5.jpg",
  "photo-9.jpg",
  "photo-10.jpg",
  "photo-11.jpg",
];

export default function GallerySlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = useMemo(
    () =>
      photos.map((photo, index) => ({
        src: `/images/gallery/${photo}`,
        alt: `ZIM.ca residence gallery photo ${index + 1}`,
      })),
    []
  );

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  const goToPrevious = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <section
      id="gallery"
      className="bg-[#07111b] py-16 text-white sm:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker text-[#c8f535]">
              Full property gallery
            </p>
            <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
              <span className="headline-main">
                See every <span className="headline-accent-lime">room</span>
              </span>
              <span className="headline-sub">
                angles, finishes, and shared spaces.
              </span>
            </h2>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              aria-label="Show previous gallery photo"
              onClick={goToPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-[24px] font-bold leading-none text-white transition hover:bg-white/16"
            >
              &lsaquo;
            </button>
            <button
              type="button"
              aria-label="Show next gallery photo"
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-[24px] font-bold leading-none text-white transition hover:bg-white/16"
            >
              &rsaquo;
            </button>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-black shadow-[0_28px_80px_rgba(0,0,0,0.38)] sm:aspect-[16/10] md:aspect-[16/9]">
            {slides.map((slide, index) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(min-width: 1280px) 1216px, 100vw"
                priority={index === 0}
                className={`object-cover transition duration-700 ease-out ${
                  index === active
                    ? "scale-100 opacity-100"
                    : "scale-[1.025] opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/72 via-black/20 to-transparent p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/72">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </p>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-[#c8f535] transition-all duration-500"
                    style={{
                      width: `${((active + 1) / slides.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 items-center justify-between md:hidden">
              <button
                type="button"
                aria-label="Show previous gallery photo"
                onClick={goToPrevious}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-black/42 text-[24px] font-bold leading-none text-white backdrop-blur transition hover:bg-black/58"
              >
                &lsaquo;
              </button>
              <button
                type="button"
                aria-label="Show next gallery photo"
                onClick={goToNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-black/42 text-[24px] font-bold leading-none text-white backdrop-blur transition hover:bg-black/58"
              >
                &rsaquo;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show gallery photo ${index + 1}`}
                onClick={() => setActive(index)}
                className={`group relative aspect-[4/3] overflow-hidden rounded-[8px] border transition ${
                  index === active
                    ? "border-[#c8f535] opacity-100 ring-2 ring-[#c8f535]/35"
                    : "border-white/10 opacity-70 hover:border-white/28 hover:opacity-100"
                }`}
              >
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  sizes="(min-width: 1280px) 96px, (min-width: 768px) 16vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-1.5 left-1.5 rounded-full bg-black/58 px-2 py-0.5 text-[10px] font-extrabold text-white/82">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
