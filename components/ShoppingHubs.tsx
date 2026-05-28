"use client";

import { useMemo, useState } from "react";
import {
  nearbyStoreLogos,
  shoppingHubs,
  zimAddress,
  type NearbyStoreLogo,
  type ShoppingHub,
} from "@/data/shoppingHubs";

const brandStyles: Record<string, { text: string; color: string; bg: string }> = {
  Loblaws: { text: "Loblaws", color: "#111827", bg: "#f5c400" },
  "Home Depot": { text: "THE HOME DEPOT", color: "#ffffff", bg: "#f96302" },
  LCBO: { text: "LCBO", color: "#007a53", bg: "#e7f4ee" },
  Rexall: { text: "Rexall", color: "#111827", bg: "#f3f4f6" },
  BMO: { text: "BMO", color: "#ed1b2f", bg: "#fff1f2" },
  Walmart: { text: "WALMART", color: "#1a2f9a", bg: "#fff7dc" },
  "Walmart Supercentre": { text: "WALMART", color: "#1a2f9a", bg: "#fff7dc" },
  "McDonald's": { text: "M", color: "#ffbc0d", bg: "#d71920" },
  "Sport Chek": { text: "Sport Chek", color: "#e31b23", bg: "#fff1f2" },
  Shoppers: { text: "Shoppers", color: "#111827", bg: "#fff1f2" },
  Dollarama: { text: "Dollarama", color: "#00843d", bg: "#eaf7ee" },
  FreshCo: { text: "FreshCo", color: "#00843d", bg: "#edf8df" },
  Movati: { text: "Movati", color: "#111827", bg: "#f5f3ff" },
  PetSmart: { text: "PetSmart", color: "#005baa", bg: "#edf5ff" },
  Staples: { text: "STAPLES", color: "#cc0000", bg: "#fff1f2" },
  TD: { text: "TD", color: "#008a00", bg: "#e8f6e8" },
  Metro: { text: "Metro", color: "#ef3340", bg: "#fff1f2" },
  Winners: { text: "WINNERS", color: "#111827", bg: "#f3f4f6" },
  "Toys R Us": { text: "Toys R Us", color: "#005baa", bg: "#fff7dc" },
  "Canadian Tire": { text: "Canadian Tire", color: "#00843d", bg: "#fff1f2" },
  Starbucks: { text: "Siren", color: "#00754a", bg: "#e8f6ef" },
  Popeyes: { text: "Popeyes", color: "#f15b2a", bg: "#fff2e8" },
  "Tim Hortons": { text: "Tim Hortons", color: "#c8102e", bg: "#fff1f2" },
  Subway: { text: "Subway", color: "#008938", bg: "#fff7dc" },
  "The Beer Store": { text: "The Beer Store", color: "#007a3d", bg: "#e8f6ef" },
};

const brandImages: Record<string, string> = {
  BMO: "/logos/bmo.svg",
  "Canadian Tire": "/logos/canadian-tire.png",
  Dollarama: "/logos/dollarama.png",
  FreshCo: "/logos/freshco.svg",
  "McDonald's": "/logos/mcdonalds.svg",
  Metro: "/logos/metro.svg",
  Subway: "/logos/subway.svg",
  TD: "/logos/td.svg",
  "The Beer Store": "/logos/the-beer-store.png",
  "Tim Hortons": "/logos/tim-hortons.svg",
  Walmart: "/logos/walmart.svg",
  "Walmart Supercentre": "/logos/walmart.svg",
};

function directionsUrl(destination: string) {
  const origin = encodeURIComponent(zimAddress);
  const dest = encodeURIComponent(`${destination}, Ottawa, ON`);
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}`;
}

function BrandMark({ name, compact = false }: { name: string; compact?: boolean }) {
  const brand = brandStyles[name];
  const imageSrc = brandImages[name];

  if (!brand) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-[#c8d3e1] bg-[#f8fafc] px-2.5 py-1.5 text-[11px] font-extrabold text-slate-700">
        <span className="h-2 w-2 rounded-full bg-[#c8f535]" />
        {name}
      </span>
    );
  }

  if (imageSrc) {
    const isBeerStore = name === "The Beer Store";

    return (
      <span
        className={`inline-flex items-center justify-center rounded-[8px] bg-white ${
          compact
            ? isBeerStore
              ? "h-8 min-w-24 px-2"
              : "h-7 min-w-9 px-1.5"
            : isBeerStore
              ? "h-16 min-w-40 px-3"
              : "h-14 min-w-28 px-4"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={`${name} logo`}
          className={`object-contain ${
            compact
              ? isBeerStore
                ? "h-7 max-w-[116px]"
                : "h-5 max-w-[76px]"
              : isBeerStore
                ? "h-14 max-w-[190px]"
                : "h-10 max-w-[140px]"
          }`}
        />
      </span>
    );
  }

  if (name === "McDonald's") {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-[8px] font-black leading-none ${
          compact ? "h-7 min-w-8 px-2 text-[18px]" : "h-12 min-w-16 px-3 text-[30px]"
        }`}
        style={{ color: brand.color, backgroundColor: brand.bg }}
      >
        M
      </span>
    );
  }

  if (name === "Home Depot") {
    return (
      <span
        className={`inline-flex rotate-0 items-center justify-center rounded-[2px] text-center font-black leading-[0.88] ${
          compact ? "h-7 w-7 text-[7px]" : "h-12 w-12 text-[10px]"
        }`}
        style={{ color: brand.color, backgroundColor: brand.bg }}
      >
        THE
        <br />
        HOME
        <br />
        DEPOT
      </span>
    );
  }

  if (name === "Canadian Tire") {
    return (
      <span className="inline-flex items-center gap-2">
        <span
          className={`flex rotate-45 items-center justify-center rounded-[4px] ${
            compact ? "h-6 w-6" : "h-10 w-10"
          }`}
          style={{ backgroundColor: "#ed1b2f" }}
        >
          <span
            className={`-rotate-45 rounded-full bg-white ${
              compact ? "h-2.5 w-2.5" : "h-4 w-4"
            }`}
          />
        </span>
        {!compact && (
          <span className="text-[22px] font-black leading-none" style={{ color: brand.color }}>
            Canadian Tire
          </span>
        )}
      </span>
    );
  }

  if (name === "Starbucks") {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-full font-black ${
          compact ? "h-7 w-7 text-[10px]" : "h-12 w-12 text-[14px]"
        }`}
        style={{ color: "#ffffff", backgroundColor: brand.color }}
      >
        S
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-[8px] px-3 text-center font-black leading-none ${
        compact ? "h-7 text-[12px]" : "h-12 min-w-24 text-[22px]"
      }`}
      style={{ color: brand.color, backgroundColor: brand.bg }}
    >
      {brand.text}
    </span>
  );
}

function LogoPill({ tag }: { tag: string }) {
  const known = brandStyles[tag];

  if (!known) {
    return <BrandMark name={tag} compact />;
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-2.5 py-1.5 text-[11px] font-extrabold text-slate-800 shadow-[0_1px_2px_rgba(8,18,28,0.05)]">
      <BrandMark name={tag} compact />
      {tag === "Walmart Supercentre" ? "Walmart" : tag}
    </span>
  );
}

function LogoTile({ logo }: { logo: NearbyStoreLogo }) {
  return (
    <article className="flex min-h-[125px] flex-col items-center justify-center rounded-[8px] border border-black/[0.08] bg-white px-4 py-5 text-center shadow-[0_1px_2px_rgba(8,18,28,0.05)]">
      <BrandMark name={logo.name} />
      <p className="mt-3 text-[12px] font-extrabold text-zinc-950">
        {logo.label}
      </p>
    </article>
  );
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
            <LogoPill key={tag} tag={tag} />
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

              <div className="mt-5 flex flex-wrap gap-2">
                {hub.tags.map((tag) => (
                  <LogoPill key={tag} tag={tag} />
                ))}
              </div>

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

        <div className="mt-20">
          <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_430px] lg:items-start">
            <div>
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#60710f]">
                Logo wall
              </p>
              <h2 className="font-heading text-[2rem] font-extrabold leading-[1.05] text-zinc-950 md:text-[3rem]">
                Major nearby stores and services
              </h2>
            </div>
            <p className="text-[14px] leading-relaxed text-zinc-600">
              Color logo-style tiles make the local amenities easy to scan at
              a glance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {nearbyStoreLogos.map((logo) => (
              <LogoTile key={logo.name} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      <MapDrawer hub={selectedHub} onClose={() => setSelectedHub(null)} />
    </section>
  );
}
