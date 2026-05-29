const includedItems = [
  "Bed and mattress",
  "Desk and office chair",
  "Gigabit internet",
  "Hydro, water, heat, and A/C",
  "In-unit laundry",
  "Kitchen appliances",
  "Shared dining space",
  "Household basics",
];

const bringItems = [
  "Bedding and pillow",
  "Towels and toiletries",
  "Clothes and hangers",
  "Laptop and school supplies",
  "Personal dishes or containers",
  "Government ID for paperwork",
];

function CheckIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.79L15.3 5.3a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function MoveInChecklist() {
  return (
    <section className="bg-[#f7f4ed] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-kicker text-[#60710f]">
              Move-in ready
            </p>
            <h2 className="section-heading mt-5 text-zinc-950">
              Bring your essentials. The big stuff is handled.
            </h2>
            <p className="section-copy mt-6 text-zinc-600">
              Especially helpful for first-year, out-of-town, and international
              students: rooms are set up so move-in feels simple.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[8px] border border-black/[0.08] bg-white p-5 shadow-[0_16px_40px_rgba(8,18,28,0.08)]">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-[18px] font-extrabold text-zinc-950">
                  Already included
                </h3>
                <span className="rounded-full bg-[#c8f535] px-3 py-1 text-[11px] font-extrabold text-[#07111b]">
                  ready
                </span>
              </div>
              <ul className="grid gap-3">
                {includedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[13.5px] font-semibold text-zinc-700"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e9f5ff] text-[#1d8fe8]">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[8px] border border-black/[0.08] bg-[#07111b] p-5 text-white shadow-[0_16px_40px_rgba(8,18,28,0.12)]">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-[18px] font-extrabold">What to bring</h3>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-extrabold text-white/62">
                  personal
                </span>
              </div>
              <ul className="grid gap-3">
                {bringItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[13.5px] font-semibold text-white/72"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#c8f535]">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
