const notes = [
  {
    title: "All Utilities Included",
    desc: "Hydro, water, heat, and central A/C are part of the rent.",
    icon: "bolt",
  },
  {
    title: "Gigabit Internet",
    desc: "Unlimited high-speed internet for school, streaming, and calls.",
    icon: "wifi",
  },
  {
    title: "Fully Furnished",
    desc: "Bed, mattress, desk, office chair, and essential appliances.",
    icon: "desk",
  },
  {
    title: "In-Unit Laundry",
    desc: "Washer and dryer included at no additional cost.",
    icon: "laundry",
  },
  {
    title: "Parking Available",
    desc: "Optional parking is available for $80 per month.",
    icon: "parking",
  },
  {
    title: "Respectful Home",
    desc: "No pets due to allergies. Quiet, clean shared living expected.",
    icon: "home",
  },
];

function Icon({ type }: { type: string }) {
  const path =
    type === "bolt"
      ? "M13 2L4 14h7l-1 8 9-12h-7l1-8z"
      : type === "wifi"
        ? "M3 9.5a14 14 0 0118 0M6.5 13a9 9 0 0111 0M10 16.5a4 4 0 014 0M12 20h.01"
        : type === "laundry"
          ? "M6 3h12v18H6V3zm3 3h.01M12 17a4 4 0 100-8 4 4 0 000 8z"
          : type === "parking"
            ? "M8 21V3h6a4 4 0 010 8H8m0 0h6"
            : type === "home"
              ? "M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z"
              : "M4 20h16M7 20V8h10v12M9 8V5h6v3M9 12h6";

  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.9}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export default function ImportantNotes() {
  return (
    <section className="bg-[#f5f1e8] pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[10px] border border-white/[0.08] bg-[#07111b] shadow-[0_24px_70px_rgba(8,18,28,0.18)]">
          <div className="grid lg:grid-cols-[360px_1fr]">
            <div className="relative border-b border-white/[0.08] p-7 lg:border-b-0 lg:border-r">
              <div className="absolute right-0 top-0 h-28 w-28 border-r-4 border-t-4 border-[#c8f535]" />
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c8f535]">
                Included at ZIM.ca
              </p>
              <h2 className="mt-4 font-heading text-[2rem] font-extrabold leading-[0.98] text-white">
                Everything students need, already handled.
              </h2>
              <p className="mt-5 text-[13.5px] leading-relaxed text-white/55">
                Comfortable rooms, practical essentials, and clear shared-living
                expectations in one calm residence near Algonquin.
              </p>
            </div>

            <div className="p-5 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {notes.map((note) => (
                  <div
                    key={note.title}
                    className="rounded-[8px] border border-white/[0.08] bg-white/[0.055] p-4 transition hover:bg-white/[0.085]"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#c8f535] text-[#07111b]">
                      <Icon type={note.icon} />
                    </div>
                    <h3 className="text-[14px] font-extrabold text-white">
                      {note.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-white/52">
                      {note.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[8px] border border-[#c8f535]/30 bg-[#c8f535]/10 px-4 py-3">
                <p className="text-[12.5px] font-semibold leading-relaxed text-white/72">
                  ZIM.ca welcomes all gender identities, orientations, and
                  backgrounds. Residents are expected to keep shared spaces
                  clean, observe quiet hours, and participate in common chores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
