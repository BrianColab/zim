---
name: project-architecture
description: ZIM.ca technical SEO architecture facts — stack, metadataBase, canonical pattern, sitemap, schema approach, routing
metadata:
  type: project
---

ZIM.ca is a Next.js 16.2.6 / React 19 / Tailwind v4 / TypeScript site deployed on Vercel.

**metadataBase** is set in `app/layout.tsx` to `new URL("https://www.zim.ca")`. This means relative canonicals (e.g. `/blog`, `/resources`, `/blog/${slug}`) resolve correctly to absolute URLs at render time.

**Canonical pattern:**
- Homepage (`app/page.tsx`): absolute `https://www.zim.ca/`
- Blog index (`app/blog/page.tsx`): relative `/blog`
- Blog post (`app/blog/[slug]/page.tsx`): relative `/blog/${post.slug}`
- Resources (`app/resources/page.tsx`): relative `/resources`
- All SEO landing pages: absolute URLs (hardcoded `https://www.zim.ca/...`)

**Sitemap:** `app/sitemap.ts` — lists all static routes + dynamic blog posts from `data/blogPosts.ts`. Missing: `/blog` individual posts are included, but `app/resources/page.tsx` route exists and IS in sitemap.

**Schema approach:** JSON-LD inline via `dangerouslySetInnerHTML`. Layout has site-level Organization + WebSite (with `inLanguage: "en-CA"`). Individual pages add LocalBusiness, FAQPage, Article, BlogPosting, BreadcrumbList, ApartmentComplex, etc. No `@id` cross-references from page schemas back to layout WebSite/@id on most pages (except student-housing-resources-ottawa which uses `isPartOf`).

**robots:** `app/robots.ts` (not public/robots.txt) — allows all, disallows /api/ and /admin/, references sitemap.xml.

**lang attribute:** `<html lang="en">` — set to generic "en" while `inLanguage` on WebSite schema uses "en-CA". Minor inconsistency.

**H1 pattern:** One H1 per page. Homepage H1 is in `components/Hero.tsx` (client component). Blog index has H1 in JSX. All SEO landing pages have H1 in hero section JSX.

**Internal linking:** Footer covers all 11 SEO pages + blog + resources. Header nav covers 4 main landing pages. All SEO pages cross-link heavily via inline anchor chips.

**Why:** This architecture snapshot was captured during a full technical SEO audit on 2026-06-19.
**How to apply:** Use when scoping future SEO work, checking canonical consistency, or evaluating schema cross-reference gaps.
