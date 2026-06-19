# ZIM.ca SEO Audit — Final Report
Date: 2026-06-19
Auditor: All-in-One SEO Expert (Claude Code)
Site: https://www.zim.ca
Business: Furnished all-inclusive student rooms at 1658-1660 Baseline Road, Nepean, Ottawa

---

## Summary

Full-stack SEO audit covering technical indexation, on-page metadata, content quality, search landscape, structured data, performance, and accessibility. 35 issues catalogued; 9 Gate A fixes implemented and validated; 10 Gate B proposals documented for approval.

---

## Search Position Snapshot (2026-06-19)

| Query | ZIM Position | Notes |
|---|---|---|
| student rentals near Algonquin College Ottawa | #1 and #4 | Strong double presence |
| student housing Nepean Ottawa | #2 | Homepage holds position |
| off campus housing Algonquin College | #7 | Visible; algonquincollege.com owns #1 |
| furnished student rooms Ottawa | Not ranked | Gap — kijiji.ca + 1eleven.ca dominate |
| all inclusive student rooms Ottawa | Not ranked | Gap — ottawastudenthousing.ca owns this |
| September student rentals Ottawa | Not ranked | High-intent seasonal gap |
| international student housing Ottawa | Not ranked | Aggregators dominate |

---

## Gate A Changes Implemented

All 9 applicable Gate A fixes have been implemented and validated (build clean, lint clean).

| ID | Issue | File | Status |
|---|---|---|---|
| A1 | OG tags on /resources | app/resources/page.tsx | Done |
| A2 | /resources in sitemap | app/sitemap.ts | Skipped — already present |
| A3 | comparableRent lint + calculator headline | components/IncludedValueCalculator.tsx | Done |
| A4 | aria-label on desktop nav | components/Header.tsx | Done |
| A5 | aria-expanded on mobile button | components/Header.tsx | Done |
| A6 | Skip-to-main-content link | components/Header.tsx + app/page.tsx | Done |
| A7 | lang="en-CA" | app/layout.tsx | Done |
| A8 | Footer h2 → p | components/Footer.tsx | Done |
| A9 | author on blog index schema | app/blog/page.tsx | Done |
| A10 | Static sitemap lastModified dates | app/sitemap.ts | Done |

---

## Gate B Proposals (Require Approval)

| ID | Issue | Impact | Effort | Risk |
|---|---|---|---|---|
| B1 | Differentiate /algonquin-student-rentals-ottawa vs /algonquin-college-off-campus-housing-guide | High | L | Medium |
| B2 | Differentiate /student-rentals-nepean-baseline-station with transit-first content | High | L | Medium |
| B3 | Rename /resources title to avoid cannibalization with /student-housing-resources-ottawa | Low | XS | Low |
| B4 | Add Canada-specific content to /international-student-housing-ottawa | Medium | L | Low |
| B5 | Add contextual internal links from blog posts to landing pages | High | M | Low |
| B6 | Trim page titles to under 60 characters on top-priority pages | Medium | M | Medium |
| B7 | Trim meta descriptions to under 155 characters | Low | M | Low |
| B8 | New page: "furnished-student-rooms-all-inclusive-ottawa" | High | L | Medium |
| B9 | Consolidate LocalBusiness @id to root #organization | Medium | S | Low |
| B10 | Refactor Hero to server component for LCP improvement | Medium | M | Medium |

Full proposals with evidence, rollback plans, and business context in `.seo-audit/plan/change-proposals.md`.

---

## Top 5 Next Actions (Ordered by Business Impact)

### 1. B5 — Internal links from blog posts to landing pages (Approve and implement)
ZIM's blog posts currently have zero internal links to commercial landing pages. Blog posts are the site's main content marketing asset, and at least 3 posts rank for informational queries. Adding 2-3 contextual links per post (e.g., "all-inclusive student housing" → /algonquin-student-rentals-ottawa) would pass PageRank to commercial pages and give organic visitors a path into the booking funnel. Effort: ~1 day.

### 2. B1 + B2 — Resolve cannibalization between /algonquin and /baseline pages
Both high-authority landing pages share similar H1s, images, and PropertyCards. Google currently ranks the housing guide page (#1 for "student rentals near Algonquin College") rather than the commercial page. Differentiating content — making the guide genuinely informational and the commercial page transactional — would clarify which page to rank for buying-intent queries. Effort: ~2-3 days.

### 3. B8 — New page targeting "furnished student rooms Ottawa" and "all-inclusive student rooms Ottawa"
ZIM is absent from both of these high-intent queries. The product is an exact match (furnished, all-inclusive), but no existing page directly targets these phrases. A new landing page would give ZIM a direct entry point into queries owned by Kijiji and ottawastudenthousing.ca. Effort: ~1 day.

### 4. B4 — Add Canada-specific content to /international-student-housing-ottawa
This page is currently a reskin of the parents page with no genuine guidance for international students (SIN setup, study permit address requirements, renting without Canadian credit). The query "international student housing Ottawa" is entirely owned by aggregators — a page with real utility could outperform them for students searching specifically for Algonquin or Nepean housing. Effort: ~half day.

### 5. B6 — Trim page titles to under 60 characters (validate Search Console first)
Most titles are 70-85 characters and Google is likely rewriting them. Before changing anything, open Search Console > Pages > Title elements to confirm whether Google is currently rewriting titles. If yes, prioritize shortening the homepage, /algonquin-student-rentals-ottawa, and /student-rentals-nepean-baseline-station. If titles are appearing correctly in results, deprioritize.

---

## Scope Limitations and Blind Spots

- **No Search Console access**: Rankings, impression data, click-through rates, crawl coverage, and actual title rewrite behaviour are unknown. Many P2 issues are estimated in severity.
- **No Analytics access**: Conversion rates, landing page traffic, and organic session data are unavailable.
- **No field CWV data**: Core Web Vitals performance is based on code review, not real-user measurements from CrUX.
- **SERP observations are snapshots**: Rankings were observed once on 2026-06-19. Positions shift daily.
- **Local pack status unknown**: ZIM's presence in Google Maps / local pack was not observed during this audit.
- **No backlink data**: Domain authority, backlink profile, and competitor link gaps were not assessed.

---

## No Guarantees

This audit identifies technical and content issues based on available evidence. SEO recommendations reflect best practices and observed patterns. No ranking improvements, traffic increases, or rich result eligibility are guaranteed.
