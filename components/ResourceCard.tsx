import Image from "next/image";
import Link from "next/link";
import type { Resource } from "@/data/resources";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Link
      href={resource.href}
      className="group block bg-white rounded-[8px] overflow-hidden border border-black/[0.06] shadow-[0_1px_2px_rgba(8,18,28,0.05)] hover:shadow-[0_16px_38px_rgba(8,18,28,0.12)] transition-shadow duration-300"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
        <Image
          src={resource.image}
          alt={resource.title}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
        />
      </div>
      <div className="px-5 py-5">
        <span className="card-kicker text-[#60710f]">
          {resource.category}
        </span>
        <h3 className="mt-2 text-zinc-950 font-extrabold text-[16px] leading-snug">
          {resource.title}
        </h3>
        <p className="mt-2 text-[12.5px] leading-[1.55] text-zinc-500">
          {resource.description}
        </p>
      </div>
    </Link>
  );
}
