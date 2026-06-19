"use client";

export default function WalkRouteButton({
  className,
}: {
  className: string;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new CustomEvent("zim:open-walk-route"))
      }
      className={className}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#c8f535] text-[#07111b]">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.3}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6.75 11.2 4.5 15 8.25l-2.5 2.5 2.75 2.75 3-1.5 1.25 2.5-4.4 2.2-4.2-4.2-1.65 1.65v5.1h-3v-6.35l3.35-3.35-1.5-1.5-2.2 2.2-2.1-2.1 3.2-3.2c.52-.52 1.46-.56 2-.2Z"
          />
        </svg>
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c8f535]">
          Walking route
        </span>
        <span className="mt-0.5 block text-[14px] font-extrabold leading-tight">
          See the walk to Algonquin
        </span>
      </span>
    </button>
  );
}
