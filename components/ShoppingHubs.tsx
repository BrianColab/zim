"use client";

import { useMemo, useState } from "react";
import { shoppingHubs, zimAddress, type ShoppingHub } from "@/data/shoppingHubs";

function directionsUrl(destination: string) {
  const origin = encodeURIComponent(zimAddress);
  const dest = encodeURIComponent(`${destination}, Ottawa, ON`);
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}`;
}

function HubCard({
  hub,
  onSelect,
}: {
  hub: ShoppingHub;
  onSelect: (hub: ShoppingHub) => void;
}) {
  return (
    <article className="rounded-[8px] border border-black/[0.08] bg-white p-5 shadow-[0_1px_2px_rgba(8,18,28,0.05)] transition hover:shadow-[0_16px_38px_rgba(8,18,28,0.11)]">
      <div className="flex h-full flex-col">
        <div>
          <h3 className="text-[18px] font-extrabold leading-snug text-zinc-950">
            {hub.name}
          </h3>
          <p className="mt-2 text-[13.5px] font-semibold leading-relaxed text-zinc-600">
            {hub.address}
          </p>
          <p className="mt-2 text-[12.5px] leading-relaxed text-zinc-500">
            {hub.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {hub.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#c8d3e1] bg-[#f8fafc] px-2.5 py-1 text-[11px] font-extrabold text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#60710f]">
              From ZIM.ca
            </p>
            <p className="mt-1 text-[13px] font-extrabold text-zinc-950">
              {hub.distance}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelect(hub)}
            className="rounded-[10px] bg-[#07111b] px-4 py-2.5 text-[12px] font-extrabold text-white transition hover:bg-[#152536]"
          >
            View on map
          </button>
        </div>
      </div>
    </article>
  );
}

function MapDrawer({
  hub,
  onClose,
}: {
  hub: ShoppingHub | null;
  onClose: () => void;
}) {
  const open = Boolean(hub);
  const mapUrl = useMemo(() => {
    if (!hub) return "#";
    return directionsUrl(hub.mapLabel);
  }, [hub]);

  return (
    <div
      className={`fixed inset-0 z-[85] transition ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={onClose}
        className={`absolute inset-0 bg-[#07111b]/58 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close map details"
      />

      <aside
        className={`absolute bottom-0 right-0 top-auto h-[88vh] w-full rounded-t-[18px] bg-[#f7f4ed] shadow-[0_-30px_80px_rgba(0,0,0,0.28)] transition-transform duration-300 md:top-0 md:h-full md:max-w-[500px] md:rounded-l-[18px] md:rounded-t-none ${
          open ? "translate-y-0 md:translate-x-0" : "translate-y-full md:translate-x-full md:translate-y-0"
        }`}
      >
        {hub && (
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between border-b border-black/[0.08] px-6 py-5">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#60710f]">
                  Nearby from ZIM.ca
                </p>
                <h2 className="mt-1 font-heading text-[1.65rem] font-extrabold leading-tight text-zinc-950">
                  {hub.name}
                </h2>
                <p className="mt-2 text-[13px] font-semibold text-zinc-500">
                  {hub.address}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.08] text-zinc-500 transition hover:border-black/[0.18] hover:text-zinc-950"
                aria-label="Close map details"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="relative overflow-hidden rounded-[12px] border border-[#d5dde8] bg-[#eaf0e4] p-5">
                <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(90deg,rgba(7,17,27,.08)_1px,transparent_1px),linear-gradient(rgba(7,17,27,.08)_1px,transparent_1px)] [background-size:34px_34px]" />
                <div className="relative min-h-[230px]">
                  <div className="absolute left-4 top-5 rounded-full bg-[#07111b] px-3 py-2 text-[11px] font-extrabold text-white">
                    1660 Baseline
                  </div>
                  <div className="absolute bottom-5 right-4 rounded-full bg-[#c8f535] px-3 py-2 text-[11px] font-extrabold text-[#07111b]">
                    {hub.name}
                  </div>
                  <div className="absolute left-[88px] top-[82px] h-[88px] w-[58%] rounded-br-[70px] rounded-tl-[70px] border-b-[5px] border-r-[5px] border-[#07111b]" />
                  <div className="absolute left-[45%] top-[116px] rounded-full border border-black/[0.08] bg-white px-3 py-2 text-[12px] font-extrabold text-zinc-950 shadow-sm">
                    {hub.distance}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-zinc-400">
                    Distance
                  </p>
                  <p className="mt-2 text-[18px] font-extrabold text-zinc-950">
                    {hub.distance}
                  </p>
                </div>
                <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-zinc-400">
                    Drive
                  </p>
                  <p className="mt-2 text-[14px] font-extrabold text-zinc-950">
                    {hub.driveTime}
                  </p>
                </div>
                <div className="rounded-[8px] border border-black/[0.08] bg-white p-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-zinc-400">
                    Walk
                  </p>
                  <p className="mt-2 text-[14px] font-extrabold text-zinc-950">
                    {hub.walkTime}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[13px] leading-relaxed text-zinc-600">
                Distances are approximate and intended for student orientation.
                Use live maps for current traffic, transit, and store hours.
              </p>

              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13.5px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
              >
                Open directions in Google Maps
              </a>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

export default function ShoppingHubs() {
  const [selectedHub, setSelectedHub] = useState<ShoppingHub | null>(null);

  return (
    <section className="bg-[#f5f1e8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#60710f]">
              Shopping hubs
            </p>
            <h2 className="font-heading text-[2rem] font-extrabold leading-[1.05] text-zinc-950 md:text-[3rem]">
              Malls and retail clusters within the local zone
            </h2>
          </div>
          <p className="text-[14px] leading-relaxed text-zinc-600">
            Distances are measured from ZIM.ca at 1660 Baseline Road and are
            intended to help students understand what is nearby.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {shoppingHubs.map((hub) => (
            <HubCard key={hub.id} hub={hub} onSelect={setSelectedHub} />
          ))}
        </div>
      </div>

      <MapDrawer hub={selectedHub} onClose={() => setSelectedHub(null)} />
    </section>
  );
}
