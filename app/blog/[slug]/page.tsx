import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ContactTrigger from "@/components/ContactTrigger";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import type { Metadata } from "next";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const metadataImage =
    post.image === "/images/main.png"
      ? "/images/og-zim-student-rentals.jpg"
      : post.image;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.published,
      modifiedTime: post.updated,
      images: [
        {
          url: metadataImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [metadataImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `https://www.zim.ca${
      post.image === "/images/main.png"
        ? "/images/og-zim-student-rentals.jpg"
        : post.image
    }`,
    datePublished: post.published,
    dateModified: post.updated,
    author: {
      "@type": "Organization",
      name: "ZIM.ca",
    },
    publisher: {
      "@type": "Organization",
      name: "ZIM.ca",
      logo: {
        "@type": "ImageObject",
        url: "https://www.zim.ca/icon.svg",
      },
    },
    mainEntityOfPage: `https://www.zim.ca/blog/${post.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.zim.ca",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.zim.ca/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.zim.ca/blog/${post.slug}`,
      },
    ],
  };

  const relatedPosts = blogPosts
    .filter((related) => related.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="bg-[#f5f1e8]">
        <article>
          <section className="relative overflow-hidden bg-[#07111b] pt-32 text-white">
            <div className="absolute inset-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-28"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07111b] via-[#07111b]/88 to-[#07111b]/42" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#07111b]/50 via-transparent to-[#07111b]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <Link
                  href="/blog"
                  className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#c8f535] transition hover:text-[#d6fa57]"
                >
                  &lt;- Student housing blog
                </Link>
                <p className="section-kicker mt-8 text-[#c8f535]">
                  {post.category}
                </p>
                <h1 className="mt-5 font-heading text-[clamp(2.85rem,7vw,5.8rem)] font-black leading-[0.88] tracking-[-0.022em]">
                  {post.title}
                </h1>
                <p className="section-copy mt-7 text-white/66">
                  {post.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-[12px] font-bold text-white/46">
                  <span>{post.readTime}</span>
                  <span>Updated {post.updated}</span>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,760px)_320px] lg:px-8">
              <div className="rounded-[10px] border border-black/[0.08] bg-white p-6 shadow-[0_1px_2px_rgba(8,18,28,0.05)] sm:p-8">
                <p className="text-[1.1rem] font-semibold leading-[1.8] text-zinc-700">
                  {post.excerpt}
                </p>

                <div className="mt-10 grid gap-10">
                  {post.sections.map((section) => (
                    <section key={section.heading}>
                      <h2 className="font-heading text-[2rem] font-extrabold leading-tight text-zinc-950">
                        {section.heading}
                      </h2>
                      <div className="mt-4 grid gap-4">
                        {section.body.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-[15px] font-medium leading-[1.85] text-zinc-600"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <section className="mt-12 rounded-[10px] bg-[#07111b] p-6 text-white">
                  <p className="section-kicker text-[#c8f535]">
                    Quick answers
                  </p>
                  <h2 className="mt-4 font-heading text-[2rem] font-extrabold leading-tight">
                    Frequently asked questions
                  </h2>
                  <div className="mt-6 grid gap-4">
                    {post.faqs.map((faq) => (
                      <div
                        key={faq.question}
                        className="rounded-[8px] border border-white/[0.09] bg-white/[0.055] p-4"
                      >
                        <h3 className="text-[15px] font-extrabold">
                          {faq.question}
                        </h3>
                        <p className="mt-2 text-[13.5px] leading-relaxed text-white/62">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-[10px] border border-black/[0.08] bg-white p-5 shadow-[0_18px_44px_rgba(8,18,28,0.08)]">
                  <p className="section-kicker text-[#60710f]">
                    Looking for a room?
                  </p>
                  <h2 className="mt-4 font-heading text-[1.75rem] font-extrabold leading-tight text-zinc-950">
                    See furnished student rooms near Algonquin.
                  </h2>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-zinc-600">
                    ZIM.ca offers furnished, all-inclusive student rooms at
                    1658-1660 Baseline Road in Nepean.
                  </p>
                  <div className="mt-5 grid gap-3">
                    <Link
                      href="/#suites"
                      className="inline-flex justify-center rounded-[10px] bg-[#07111b] px-5 py-3 text-[13px] font-extrabold text-white transition hover:bg-[#142536]"
                    >
                      View suites
                    </Link>
                    <ContactTrigger className="inline-flex justify-center rounded-[10px] bg-[#c8f535] px-5 py-3 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]">
                      Ask availability
                    </ContactTrigger>
                  </div>
                </div>

                <div className="mt-5 rounded-[10px] border border-black/[0.08] bg-white p-5">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-zinc-400">
                    Related guides
                  </p>
                  <div className="mt-4 grid gap-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group border-t border-black/[0.06] pt-4 first:border-t-0 first:pt-0"
                      >
                        <p className="text-[13px] font-extrabold leading-snug text-zinc-950 transition group-hover:text-[#60710f]">
                          {related.title}
                        </p>
                        <p className="mt-1 text-[11px] font-bold text-zinc-400">
                          {related.category}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
