const notes = [
  "All-inclusive rent with internet",
  "Furnished rooms with bed, mattress, desk, and office chair",
  "On-site laundry at no additional cost",
  "Parking available for $75 per month",
  "Bus stop just meters away",
  "No pets due to allergies",
];

export default function ImportantNotes() {
  return (
    <section className="bg-[#f5f1e8] pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[8px] border border-black/[0.08] bg-white p-6 shadow-[0_1px_2px_rgba(8,18,28,0.05)]">
          <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-start">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#60710f]">
                Important notes
              </p>
              <h2 className="mt-3 font-heading text-[1.55rem] font-extrabold leading-tight text-zinc-950">
                Shared living works best with respect and quiet routines.
              </h2>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {notes.map((note) => (
                  <div
                    key={note}
                    className="rounded-[8px] border border-zinc-100 bg-[#fbfaf7] px-4 py-3 text-[13px] font-bold text-zinc-700"
                  >
                    {note}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[13px] leading-relaxed text-zinc-500">
                ZIM.ca welcomes all gender identities, orientations, and
                backgrounds. Residents are expected to keep shared spaces clean,
                observe quiet hours, and participate in common chores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
