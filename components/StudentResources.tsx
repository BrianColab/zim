import Link from "next/link";
import ResourceCard from "./ResourceCard";
import { resources } from "@/data/resources";

export default function StudentResources() {
  return (
    <section className="bg-[#f7f4ed] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="section-kicker mb-4 text-[#c8f535]">
              Student resources
            </p>
            <h2 className="section-heading-tight text-zinc-950">
              <span className="headline-main">
                Settle <span className="headline-accent">in</span>
              </span>
              <span className="headline-sub">
                with <span className="headline-accent">confidence</span>
              </span>
            </h2>
          </div>
          <Link
            href="/resources"
            className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            See all resources
            <span aria-hidden className="text-[15px]">
              -&gt;
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
