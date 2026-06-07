"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  singleSrc: string;
  doubleSrc: string;
  alt: string;
  availability?: string;
}

export default function SplitRoomImage({ singleSrc, doubleSrc, alt, availability }: Props) {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  return (
    <>
      <div className="relative flex h-[220px] overflow-hidden bg-zinc-100">
        {/* Left: Single */}
        <button
          type="button"
          aria-label="View single occupancy room"
          onClick={() => setLightbox({ src: singleSrc, label: "Single occupancy" })}
          className="group relative flex-1 cursor-zoom-in overflow-hidden"
        >
          <Image
            src={singleSrc}
            alt={`${alt} — single occupancy`}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
          <span className="absolute bottom-3 left-3 z-10 rounded-full bg-[#07111b]/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
            Single
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <span className="rounded-full bg-black/40 p-2 text-white backdrop-blur-sm">
              <ExpandIcon />
            </span>
          </span>
        </button>

        {/* Divider */}
        <div className="absolute inset-y-0 left-1/2 z-10 w-[2px] -translate-x-px bg-white/80" />

        {/* Availability badge centered across both halves */}
        {availability && (
          <span className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-[7px] bg-[#07111b]/82 px-2.5 py-[5px] text-[11px] font-bold text-white backdrop-blur-sm whitespace-nowrap">
            {availability}
          </span>
        )}

        {/* Right: Double */}
        <button
          type="button"
          aria-label="View double occupancy room"
          onClick={() => setLightbox({ src: doubleSrc, label: "Double occupancy" })}
          className="group relative flex-1 cursor-zoom-in overflow-hidden"
        >
          <Image
            src={doubleSrc}
            alt={`${alt} — double occupancy`}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
          <span className="absolute bottom-3 right-3 z-10 rounded-full bg-[#07111b]/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
            Double
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <span className="rounded-full bg-black/40 p-2 text-white backdrop-blur-sm">
              <ExpandIcon />
            </span>
          </span>
        </button>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative mx-4 aspect-[4/3] w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.label}
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-sm font-bold text-white/60">{lightbox.label}</p>
          <button
            type="button"
            aria-label="Close image"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition hover:bg-white/20 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

function ExpandIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  );
}
