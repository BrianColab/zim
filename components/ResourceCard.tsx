import Image from "next/image";
import type { Resource } from "@/data/resources";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-[0_1px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.11)] transition-shadow duration-300 cursor-pointer">
      <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
        <Image
          src={resource.image}
          alt={resource.title}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
        />
      </div>
      <div className="px-5 py-4">
        <span className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-zinc-400">
          {resource.category}
        </span>
        <h3 className="mt-1.5 text-zinc-900 font-semibold text-[15px] leading-snug">
          {resource.title}
        </h3>
      </div>
    </article>
  );
}
