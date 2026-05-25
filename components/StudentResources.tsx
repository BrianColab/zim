import Link from "next/link";
import ResourceCard from "./ResourceCard";
import { resources } from "@/data/resources";

export default function StudentResources() {
  return (
    <section className="bg-[#f4f3ee] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-heading font-bold text-zinc-900 text-[1.6rem] md:text-[1.85rem]">
            Student Resources
          </h2>
          <Link
            href="#"
            className="hidden sm:flex items-center gap-1 text-[13px] font-medium text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            See all resources
            <span aria-hidden className="text-[15px]">
              →
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
