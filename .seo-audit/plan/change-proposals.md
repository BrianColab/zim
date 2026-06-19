# ZIM.ca SEO Change Proposals
Date: 2026-06-19

## Gate A Changes (safe to implement — no approval required)
These are metadata additions, semantic HTML fixes, accessibility improvements, and schema corrections where visible content already supports the markup.

### A1 — Add OG tags to /resources (OG-01, P1)
**File:** `app/resources/page.tsx`
**Change:** Add openGraph block to metadata export
**Evidence:** No OG block exists; social shares show homepage image/description
**Expected benefit:** Correct social preview when page is shared
**Risk:** None — purely additive
**Rollback:** Remove the openGraph block

### A2 — Add /resources to sitemap (SIT-04, P2)
**File:** `app/sitemap.ts`
**Change:** Add `{ url: "${baseUrl}/resources", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 }` entry
**Evidence:** Page is indexable but excluded from sitemap
**Expected benefit:** Ensures Googlebot discovery via sitemap
**Risk:** None
**Rollback:** Remove the entry

### A3 — Fix comparableRent lint warning + IncludedValueCalculator pending commit (LINT-01)
**File:** `components/IncludedValueCalculator.tsx`
**Change:** Use `comparableRent` in the bottom summary text; this is also the file with the uncommitted headline change
**Evidence:** ESLint warning: "comparableRent is assigned a value but never used"
**Expected benefit:** Clears lint warning; strengthens summary messaging
**Risk:** None

### A4 — Add aria-label to desktop nav in Header (ACC-02, P1)
**File:** `components/Header.tsx`
**Change:** Add `aria-label="Primary navigation"` to the `<nav>` element on line 68
**Evidence:** Desktop nav has no aria-label; page has multiple nav landmarks
**Expected benefit:** WCAG 1.3.6 compliance; screen reader users can identify primary nav
**Risk:** None — attribute addition only

### A5 — Add aria-expanded to mobile menu button (ACC-03, P1)
**File:** `components/Header.tsx`
**Change:** Add `aria-expanded={open}` to hamburger button
**Evidence:** Button has aria-label but no aria-expanded state
**Expected benefit:** WCAG 4.1.2 compliance
**Risk:** None

### A6 — Add skip-to-main-content link (ACC-01, P1)
**File:** `components/Header.tsx`
**Change:** Add visually-hidden skip link as first element inside header that becomes visible on focus
**Evidence:** No skip link anywhere in component tree; WCAG 2.4.1 failure
**Expected benefit:** Keyboard and screen reader users can bypass nav
**Risk:** None — hidden until focused; no visual change for mouse users

### A7 — Change lang="en" to lang="en-CA" in layout (LANG-01 / SCH-09, P3)
**File:** `app/layout.tsx`
**Change:** `<html lang="en"` → `<html lang="en-CA"`
**Evidence:** Schema uses `inLanguage: "en-CA"` but HTML lang is "en" — inconsistency
**Expected benefit:** Correct language signal for Canadian English; aligns with existing schema
**Risk:** None

### A8 — Fix Footer nav h2 → p (FTR-01, P3)
**File:** `components/Footer.tsx`
**Change:** Change `<h2 className="...">` to `<p className="...">` for nav group labels
**Evidence:** h2 elements used as nav section labels create spurious heading hierarchy on every page
**Expected benefit:** Cleaner heading structure; nav already has aria-label so no accessibility regression
**Risk:** None — visual classes unchanged

### A9 — Add author to blog index BlogPosting schema (SCH-07, P2)
**File:** `app/blog/page.tsx`
**Change:** Add `author: { "@type": "Organization", name: "ZIM.ca" }` to each nested BlogPosting in the Blog schema
**Evidence:** Blog page's nested BlogPosting items have no author; consistent with individual post pages
**Expected benefit:** Consistent structured data; helps E-E-A-T signal
**Risk:** None

### A10 — Fix sitemap lastModified for static routes (SIT-05, P3)
**File:** `app/sitemap.ts`
**Change:** Use fixed ISO date strings for static pages instead of `new Date()` (e.g., "2026-06-19")
**Evidence:** `new Date()` causes every deploy to mark all static pages as "just modified" — misleading freshness signal
**Expected benefit:** Accurate freshness signal for Googlebot
**Risk:** Low — sitemaps are hints not guarantees. Owner can update dates when content is actually changed.

---

## Gate B Proposals (require approval before implementation)

### B1 — Differentiate /algonquin-student-rentals-ottawa vs /algonquin-college-off-campus-housing-guide (CAN-01, P1)
**Proposed change:** Make the guide page genuinely informational (remove PropertyCards, add checklist content); assign full commercial signal to /algonquin-student-rentals-ottawa
**Evidence:** Both pages share H1 keywords, same hero image, same PropertyCards — cannibalizing each other
**Expected benefit:** Clearer signal to Google about which page to rank for transactional vs informational queries
**Risk:** Medium — removes PropertyCards from guide page which may affect conversions
**Approval required:** Yes — content change affecting commercial page structure

### B2 — Differentiate /student-rentals-nepean-baseline-station with transit-first content (CAN-02, P1)
**Proposed change:** Rewrite opening section to focus on OC Transpo routes, Baseline BRT, winter commute — not Algonquin proximity
**Evidence:** Near-duplicate of Algonquin page; same hero, same PropertyCards, overlapping keywords
**Expected benefit:** Distinct keyword footprint; genuine value for transit-first searchers
**Risk:** Medium — content rewrite
**Approval required:** Yes

### B3 — Change /resources title to tenant-specific to avoid cannibalization (CAN-03, P2)
**Proposed change:** Title → "ZIM.ca Resident Guides — Move-In and Shared Living"
**Evidence:** Current title "Student Housing Resources in Ottawa" semantically overlaps with /student-housing-resources-ottawa hub
**Expected benefit:** Cleaner separation of tenant utility page from SEO hub
**Risk:** Low — page already has low search traffic
**Approval required:** Yes — title change on indexed page

### B4 — Add substantive international student content to /international-student-housing-ottawa (INT-01, P1)
**Proposed change:** Add sections covering: SIN/bank setup context, Canadian lease guarantor situation, study permit address requirements, what to expect renting without Canadian credit history
**Evidence:** Page is a generic reskin of parents page with no Canada-specific guidance
**Expected benefit:** Genuine value for a real audience; higher E-E-A-T signal; potential to rank for international student queries where aggregators dominate
**Risk:** Low — additive content; no existing content removed
**Approval required:** Yes — content addition to public-facing page

### B5 — Add contextual internal links from blog posts to landing pages (LNK-01, P1)
**Proposed change:** In each of the 5 cornerstone blog posts, add 2-3 contextual inline links to relevant commercial landing pages
**Example:** student-housing-budget-ottawa → link "all-inclusive student housing" to /ottawa-student-housing-cost-guide and "near Algonquin College" to /algonquin-student-rentals-ottawa
**Evidence:** All 5 cornerstone posts have zero internal links to commercial pages
**Expected benefit:** Organic visitors have a path to the booking funnel; PageRank flows from ranking blog pages to commercial pages
**Risk:** Low — additive only; blog post content unchanged
**Approval required:** Yes — modifying blog post content which is factual reference material

### B6 — Trim page titles to under 60 characters on top-priority pages (TTL-01, P2)
**Proposed change:** For homepage, /algonquin-student-rentals-ottawa, and /student-rentals-nepean-baseline-station: shorten titles to fit in 60 characters while retaining primary keyword
**Evidence:** Titles are 75-85 characters; Google may rewrite them
**Expected benefit:** Reduced title rewrite risk; primary keyword appears in full
**Risk:** Medium — changing titles on highest-value pages; validate in Search Console first
**Approval required:** Yes — verify Search Console to check if Google is already rewriting before touching

### B7 — Trim meta descriptions to under 155 characters on top-priority pages (DESC-01, P2)
**Proposed change:** Rewrite descriptions for the 5 pages with most SERP impressions to stay under 155 chars
**Evidence:** 10 descriptions are 166-225 characters
**Expected benefit:** Reduced truncation; description matches what students read in results
**Risk:** Low — descriptions don't affect ranking directly, only CTR
**Approval required:** Yes — changes to multiple pages

### B8 — New page: "furnished-student-rooms-all-inclusive-ottawa" (GAP-01, GAP-02, P2)
**Proposed change:** Add a landing page specifically targeting "furnished student rooms Ottawa" and "all-inclusive student rooms Ottawa"
**Evidence:** ZIM is absent from both of these high-intent queries; ottawastudenthousing.ca owns all-inclusive with exact-match title; harringtonhousing.com owns furnished rooms
**Expected benefit:** Direct access to queries where ZIM's product is an exact match
**Risk:** Medium — new page risk of keyword dilution if not well-differentiated from existing pages; must have distinct content angle
**Approval required:** Yes

### B9 — Consolidate LocalBusiness @id to #organization (SCH-08, P1)
**Proposed change:** Add `"@id": "https://www.zim.ca/#organization"` or `sameAs` to each of the 4 LocalBusiness schemas so they reference the single root entity
**Evidence:** 4 disconnected LocalBusiness entities reduce schema authority
**Expected benefit:** Single authoritative business entity for local pack signals
**Risk:** Low — schema change only
**Approval required:** Yes — touches 4 pages

### B10 — Fix Hero to server component (LCP-01, P2)
**Proposed change:** Extract the walk-route button onClick into a minimal client component island; make the Hero section a server component
**Evidence:** Hero is use-client purely for one onClick handler; this delays LCP preload hint
**Expected benefit:** Faster LCP; main.png preload link in initial HTML
**Risk:** Medium — refactor of key homepage component
**Approval required:** Yes
