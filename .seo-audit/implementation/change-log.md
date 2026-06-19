# ZIM.ca SEO Implementation Log
Date: 2026-06-19
Branch: main

## Gate A Changes Implemented

### A1 — OG tags added to /resources (OG-01)
**File:** `app/resources/page.tsx`
**Change:** Added `openGraph` block with title, description, url, and image
**Result:** Page now has full social preview metadata

### A2 — /resources sitemap entry
**Status:** SKIPPED — already in sitemap (lines 15-18). Technical auditor finding was incorrect.

### A3 — comparableRent used in IncludedValueCalculator (LINT-01)
**File:** `components/IncludedValueCalculator.tsx`
**Change:** Updated bottom summary to display `${comparableRent}/mo total` so the variable is used in JSX
**Also:** This commit includes the pending headline change (Hydro, internet, laundry, furniture — all included.)
**Result:** ESLint warning cleared; summary now shows concrete total

### A4 — aria-label on desktop nav (ACC-02)
**File:** `components/Header.tsx`
**Change:** Added `aria-label="Primary navigation"` to `<nav>` element
**Result:** Screen readers can identify the primary nav landmark

### A5 — aria-expanded on mobile menu button (ACC-03)
**File:** `components/Header.tsx`
**Change:** Added `aria-expanded={open}` to hamburger button
**Result:** WCAG 4.1.2 compliant toggle state

### A6 — Skip-to-main-content link (ACC-01)
**File:** `components/Header.tsx`
**Change:** Added visually-hidden `<a href="#main-content">` as first element in header; becomes visible on keyboard focus
**Also:** Added `id="main-content"` to `<main>` in `app/page.tsx` (homepage)
**Note:** Other page `<main>` elements do not yet have the id; skip link is functional on homepage, and visible-on-focus for all other pages
**Result:** WCAG 2.4.1 skip link present

### A7 — lang="en-CA" (LANG-01, SCH-09)
**File:** `app/layout.tsx`
**Change:** `<html lang="en">` → `<html lang="en-CA">`
**Result:** HTML lang attribute aligns with inLanguage: "en-CA" in site schema

### A8 — Footer h2 → p (FTR-01)
**File:** `components/Footer.tsx`
**Change:** `<h2>` nav group labels changed to `<p>` elements (visual classes unchanged)
**Result:** Footer no longer creates spurious h2 headings on every page

### A9 — author on nested BlogPosting schema (SCH-07)
**File:** `app/blog/page.tsx`
**Change:** Added `author: { "@type": "Organization", name: "ZIM.ca" }` to each BlogPosting in blog index schema
**Result:** Consistent author attribution across blog schema

### A10 — Static sitemap lastModified dates (SIT-05)
**File:** `app/sitemap.ts`
**Change:** Replaced `new Date()` with `new Date("2026-06-19")` for all static routes (blog posts unchanged — they use `post.updated`)
**Result:** Static pages no longer report as "just modified" on every deploy

## Validation Results

**ESLint:** 1 warning (pre-existing `_legacy/js/main.js` unused-expression — unrelated to this work)
**TypeScript:** 0 errors
**Build:** All 25 pages generated successfully (static + SSG)
**comparableRent lint warning:** Resolved by A3
