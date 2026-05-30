const commuteItems = [
  {
    destination: "Algonquin College",
    context: "Main nearby campus",
    time: "8-12 min",
    mode: "bike or bus",
    note: "College Square and Baseline Station area",
    href: "https://www.google.com/maps/dir/?api=1&origin=1660%20Baseline%20Road%2C%20Ottawa%2C%20ON&destination=Algonquin%20College%2C%20Ottawa%2C%20ON",
  },
  {
    destination: "Carleton University",
    context: "South Ottawa campus",
    time: "18-28 min",
    mode: "drive or transit",
    note: "Good fit for students who want west-end housing",
    href: "https://www.google.com/maps/dir/?api=1&origin=1660%20Baseline%20Road%2C%20Ottawa%2C%20ON&destination=Carleton%20University%2C%20Ottawa%2C%20ON",
  },
  {
    destination: "uOttawa",
    context: "Downtown campus",
    time: "30-45 min",
    mode: "transit",
    note: "Plan around peak-hour service",
    href: "https://www.google.com/maps/dir/?api=1&origin=1660%20Baseline%20Road%2C%20Ottawa%2C%20ON&destination=University%20of%20Ottawa%2C%20Ottawa%2C%20ON",
  },
  {
    destination: "College Square",
    context: "Groceries and banking",
    time: "4 min",
    mode: "drive",
    note: "Loblaws, LCBO, Rexall, BMO, essentials",
    href: "https://www.google.com/maps/dir/?api=1&origin=1660%20Baseline%20Road%2C%20Ottawa%2C%20ON&destination=College%20Square%2C%20Ottawa%2C%20ON",
  },
];

function RouteIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 7a3 3 0 1 0 0 .01M18 17a3 3 0 1 0 0 .01M8.5 7h4.25a3.25 3.25 0 0 1 0 6.5H11a3.5 3.5 0 0 0 0 7h4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function CommuteSnapshot() {
  return (
    <section className="bg-[#f5f1e8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_390px] lg:items-end">
          <div>
            <p className="section-kicker text-[#60710f]">
              Commute snapshot
            </p>
            <h2 className="section-heading mt-4 text-zinc-950">
              <span className="headline-main">
                Know your <span className="headline-accent">route</span>
              </span>
              <span className="headline-sub">
                before <span className="headline-accent">you apply.</span>
              </span>
            </h2>
          </div>
          <p className="section-copy text-zinc-600">
            Approximate times from 1660 Baseline Road. Students should confirm
            live transit and traffic before committing to a routine.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {commuteItems.map((item) => (
            <article
              key={item.destination}
              className="flex min-h-[260px] flex-col rounded-[8px] border border-black/[0.08] bg-white p-5 shadow-[0_1px_2px_rgba(8,18,28,0.05)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#e9f5ff] text-[#1d8fe8]">
                <RouteIcon />
              </div>
              <p className="card-kicker text-[#60710f]">
                {item.context}
              </p>
              <h3 className="mt-2 text-[18px] font-extrabold leading-tight text-zinc-950">
                {item.destination}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-[2rem] font-extrabold leading-none text-[#07111b]">
                  {item.time}
                </span>
              </div>
              <p className="mt-1 text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#1d8fe8]">
                {item.mode}
              </p>
              <p className="mt-4 text-[12.5px] font-medium leading-relaxed text-zinc-500">
                {item.note}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-[8px] bg-[#07111b] px-4 py-3 text-[12px] font-extrabold text-white transition hover:bg-[#142536]"
              >
                View route
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
