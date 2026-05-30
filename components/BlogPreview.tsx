import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

const featuredPosts = blogPosts.slice(0, 3);

export default function BlogPreview() {
  return (
    <section className="bg-[#f5f1e8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_380px] lg:items-end">
          <div>
            <p className="section-kicker mb-4 text-[#60710f]">
              Student housing guides
            </p>
            <h2 className="section-heading-tight text-zinc-950">
              <span className="headline-main">Learn before</span>
              <span className="headline-sub">
                you <span className="headline-accent">apply.</span>
              </span>
            </h2>
          </div>
          <p className="section-copy text-zinc-600">
            Practical tips for comparing rooms, planning your budget, and
            settling into student life near Algonquin.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-[8px] border border-black/[0.08] bg-white shadow-[0_1px_2px_rgba(8,18,28,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(8,18,28,0.12)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <p className="card-kicker text-[#60710f]">{post.category}</p>
                <h3 className="mt-2 text-[1.05rem] font-extrabold leading-tight text-zinc-950">
                  {post.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-zinc-600">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/blog"
          className="mt-6 inline-flex rounded-[10px] bg-[#07111b] px-5 py-3 text-[13px] font-extrabold text-white transition hover:bg-[#142536]"
        >
          View all student guides
        </Link>
      </div>
    </section>
  );
}
