"use client";

import { useEffect, useId, useState } from "react";
import IncludedValueCalculator from "./IncludedValueCalculator";

type CostCalculatorButtonProps = {
  className?: string;
  onOpen?: () => void;
};

export default function CostCalculatorButton({
  className = "",
  onOpen,
}: CostCalculatorButtonProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openCalculator = () => {
    onOpen?.();
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={openCalculator}
        className={className}
        aria-label="Open student cost calculator"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          aria-hidden="true"
        >
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M8 7h8M8 11h2M12 11h2M16 11h.01M8 15h2M12 15h2M16 15h.01" />
        </svg>
        <span>Calculator</span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[90]" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-[#07111b]/68"
            aria-label="Close student cost calculator"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="absolute inset-x-3 top-4 max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-[12px] bg-[#edf5ff] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.34)] sm:inset-x-6 sm:top-6 sm:p-4 lg:left-1/2 lg:right-auto lg:w-[min(785px,calc(100vw-3rem))] lg:-translate-x-1/2"
          >
            <div className="mb-3 flex items-center justify-between gap-3 px-1">
              <h2
                id={titleId}
                className="font-heading text-[1.2rem] font-extrabold text-[#07111b]"
              >
                Student cost calculator
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white text-zinc-600 transition hover:border-black/[0.18] hover:text-zinc-950"
                aria-label="Close student cost calculator"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <IncludedValueCalculator
              variant="panel"
              onContactOpen={() => setOpen(false)}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
