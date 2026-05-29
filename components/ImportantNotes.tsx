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
    icon: "chair",
  },
  {
    title: "In-Unit Laundry",
    desc: "Washer and dryer included at no additional cost.",
    icon: "shirt",
  },
  {
    title: "Parking Available",
    desc: "Optional parking is available for $80 per month.",
    icon: "parking",
  },
  {
    title: "Respectful Home",
    desc: "Quiet, clean shared living with clear household expectations.",
    icon: "home",
  },
  {
    title: "Pair Rooms",
    desc: "Only for two friends applying together. No stranger matching.",
    icon: "pair",
  },
];

function Icon({ type }: { type: string }) {
  if (type === "wifi") {
    return (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 10.5a10 10 0 0 1 14 0"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M8.5 14a5 5 0 0 1 7 0"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="18" r="2" fill="currentColor" />
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.4 2.4 4.6 13.2a1 1 0 0 0 .78 1.63h5.05l-.9 6.04a1 1 0 0 0 1.76.76l8.2-10.85a1 1 0 0 0-.8-1.6h-4.56l1.04-5.98a1 1 0 0 0-1.77-.8Z" />
      </svg>
    );
  }

  if (type === "shirt") {
    return (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.4 3.25a1.4 1.4 0 0 0-.83.28L3.32 6.76a1.35 1.35 0 0 0-.24 1.93l2.1 2.55a1.3 1.3 0 0 0 1.9.14l.86-.78v8.25A1.9 1.9 0 0 0 9.84 20.75h4.32a1.9 1.9 0 0 0 1.9-1.9V10.6l.86.78a1.3 1.3 0 0 0 1.9-.14l2.1-2.55a1.35 1.35 0 0 0-.24-1.93l-4.25-3.23a1.4 1.4 0 0 0-.83-.28h-1.55a2.25 2.25 0 0 1-4.1 0H8.4Z" />
      </svg>
    );
  }

  if (type === "parking") {
    return (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.25 4.5A1.25 1.25 0 0 1 8.5 3.25h5.1a5.15 5.15 0 0 1 0 10.3h-3.85v5.95a1.25 1.25 0 1 1-2.5 0v-15Zm2.5 6.55h3.85a2.65 2.65 0 0 0 0-5.3H9.75v5.3Z" />
      </svg>
    );
  }

  if (type === "home") {
    return (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.1 3.23a1.4 1.4 0 0 1 1.8 0l7.65 6.43a1.35 1.35 0 0 1-1.74 2.06l-.56-.47v7.05a2.45 2.45 0 0 1-2.45 2.45h-2.05v-5.4a1.75 1.75 0 0 0-3.5 0v5.4H8.2a2.45 2.45 0 0 1-2.45-2.45v-7.05l-.56.47a1.35 1.35 0 0 1-1.74-2.06l7.65-6.43Z" />
      </svg>
    );
  }

  if (type === "pair") {
    return (
      <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.2 11.15a3.45 3.45 0 1 0 0-6.9 3.45 3.45 0 0 0 0 6.9ZM15.8 11.15a3.45 3.45 0 1 0 0-6.9 3.45 3.45 0 0 0 0 6.9ZM4.4 20.75h7.1a1.15 1.15 0 0 0 1.15-1.15 4.45 4.45 0 0 0-8.9 0 1.15 1.15 0 0 0 1.15 1.15ZM12.5 20.75h7.1a1.15 1.15 0 0 0 1.15-1.15 4.45 4.45 0 0 0-6.08-4.14 6.1 6.1 0 0 1 1.14 3.54 2.9 2.9 0 0 1-.1.75h-3.2Z" />
      </svg>
    );
  }

  return (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 3.75a2 2 0 0 0-2 2v9.5a2 2 0 0 0 2 2h.75v2.5a1 1 0 1 0 2 0v-2.5h2.5v2.5a1 1 0 1 0 2 0v-2.5H16a2 2 0 0 0 2-2v-9.5a2 2 0 0 0-2-2H8Zm1.25 3.5h5.5a1 1 0 1 1 0 2h-5.5a1 1 0 0 1 0-2Zm0 3.75h5.5a1 1 0 1 1 0 2h-5.5a1 1 0 1 1 0-2Z" />
    </svg>
  );
}

export default function ImportantNotes() {
  return (
    <section id="amenities" className="bg-[#edf5ff] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#1d8fe8]">
            Included at ZIM.ca
          </p>
          <h2 className="mt-4 font-heading text-[2.65rem] font-extrabold leading-[0.98] text-[#09111f] sm:text-[3.35rem]">
            Everything <span className="text-[#6f7684]">included.</span>
            <br />
            No <span className="text-[#1d8fe8]">extras.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] font-medium leading-relaxed text-[#425879]">
            Every core amenity is part of the monthly rent, with clear
            expectations for calm shared living.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <div
              key={note.title}
              className="min-h-[210px] rounded-[8px] border border-[#dbe7f3] bg-white p-7 text-center shadow-[0_18px_42px_rgba(23,60,102,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(23,60,102,0.12)]"
            >
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center text-[#1d8fe8]">
                <Icon type={note.icon} />
              </div>
              <h3 className="text-[15px] font-extrabold leading-tight text-[#101827]">
                {note.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[230px] text-[13.5px] leading-relaxed text-[#526586]">
                {note.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-7 max-w-3xl text-center text-[13px] font-semibold leading-relaxed text-[#526586]">
          ZIM.ca welcomes all gender identities, orientations, and backgrounds.
          Residents are expected to keep shared spaces clean, observe quiet
          hours, and participate in common chores.
        </p>
      </div>
    </section>
  );
}
