import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import { blogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ottawa Student Housing Blog",
  description:
    "SEO-rich student housing guides for Algonquin College, Nepean, Baseline Road, furnished rooms, student budgets, and move-in planning in Ottawa.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Ottawa Student Housing Blog | ZIM.ca",
    description:
      "Helpful guides for students comparing housing near Algonquin College, Baseline Road, and Nepean.",
    url: "/blog",
    images: ["/images/og-zim-student-rentals.jpg"],
  },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "ZIM.ca Ottawa Student Housing Blog",
    description: metadata.description,
    url: "https://www.zim.ca/blog",
    publisher: {
      "@type": "Organization",
      name: "ZIM.ca",
      url: "https://www.zim.ca",
    },
    blogPost: blogPosts.map((post, index) => ({
      "@type": "BlogPosting",
      position: index + 1,
      headline: post.title,
      description: post.description,
      url: `https://www.zim.ca/blog/${post.slug}`,
      datePublished: post.published,
      dateModified: post.updated,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Header />
      <main className="bg-[#f5f1e8]">
        <section className="relative overflow-hidden bg-[#07111b] pt-32 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(200,245,53,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:46px_46px] opacity-45" />
          <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="section-kicker text-[#c8f535]">
                Student housing blog
              </p>
              <h1 className="mt-6 max-w-[13ch] font-heading text-[clamp(3.4rem,8vw,6.5rem)] font-black leading-[0.86] tracking-[-0.025em]">
                Guides for renting smarter in Ottawa.
              </h1>
              <p className="section-copy mt-7 text-white/62">
                Practical articles for students and parents comparing
                Algonquin College housing, Nepean student rentals, furnished
                rooms, commute routes, budgets, and move-in details.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.map((post) => (
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
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="card-kicker text-[#60710f]">
                        {post.category}
                      </span>
                      <span className="text-[11px] font-bold text-zinc-400">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="mt-3 text-[1.25rem] font-extrabold leading-tight text-zinc-950">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-zinc-600">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex text-[13px] font-extrabold text-[#07111b]">
                      Read guide -&gt;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
