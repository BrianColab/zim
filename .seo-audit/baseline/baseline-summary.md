# ZIM.ca SEO Baseline Summary
Date: 2026-06-19
Git HEAD: d8c701f

## Page Inventory & Metadata

| Route | Title (chars) | Description (chars) | Canonical | OG title | OG desc | OG image |
|---|---|---|---|---|---|---|
| / | Ottawa Student Rentals Near Algonquin College \| Furnished Rooms from $850 \| ZIM.ca (84) | Furnished all-inclusive student rooms… (192) | https://www.zim.ca/ | ✓ | ✓ | ✓ |
| /blog | Ottawa Student Housing Blog (27 — uses template → +ZIM.ca) | SEO-rich student housing guides… (132) | /blog (relative) | ✓ (absolute in og) | ✓ | ✓ (relative path) |
| /blog/[slug] | Dynamic from post.title | Dynamic from post.description | /blog/{slug} (relative) | ✓ | ✓ | ✓ |
| /resources | Student Housing Resources in Ottawa (35 — uses template → +ZIM.ca) | Move-in, shared living… (117) | /resources (relative) | ✗ MISSING | ✗ MISSING | ✗ MISSING |
| /student-housing-resources-ottawa | Ottawa Student Rentals Guide \| Rooms Near Algonquin & Baseline \| ZIM.ca (71) | Find furnished student rooms… (210) | https://www.zim.ca/student-housing-resources-ottawa | ✓ | ✓ | ✓ |
| /algonquin-student-rentals-ottawa | Student Rentals Near Algonquin College \| Furnished Rooms in Ottawa \| ZIM.ca (74) | Find furnished all-inclusive… (211) | https://www.zim.ca/algonquin-student-rentals-ottawa | ✓ | ✓ | ✓ |
| /student-rentals-nepean-baseline-station | Student Rentals Near Baseline Station \| Furnished Rooms in Nepean \| ZIM.ca (73) | Furnished all-inclusive student rooms… (198) | https://www.zim.ca/student-rentals-nepean-baseline-station | ✓ | ✓ | ✓ |
| /parents-student-housing-ottawa | Student Housing in Ottawa for Parents \| Furnished Rooms Near Algonquin \| ZIM.ca (80) | Helping your student find… (224) | https://www.zim.ca/parents-student-housing-ottawa | ✓ | ✓ | ✓ |
| /international-student-housing-ottawa | International Student Housing in Ottawa \| Furnished Rooms Near Algonquin \| ZIM.ca (82) | Moving to Ottawa for school?… (210) | https://www.zim.ca/international-student-housing-ottawa | ✓ | ✓ | ✓ |
| /algonquin-college-off-campus-housing-guide | Algonquin College Off-Campus Housing Guide \| Student Rentals Ottawa \| ZIM.ca (77) | Looking for off-campus housing near… (222) | https://www.zim.ca/algonquin-college-off-campus-housing-guide | ✓ | ✓ | ✓ |
| /ottawa-student-housing-cost-guide | How Much Does Student Housing Cost in Ottawa? \| Student Rental Guide \| ZIM.ca (79) | Compare student housing costs… (198) | https://www.zim.ca/ottawa-student-housing-cost-guide | ✓ | ✓ | ✓ |
| /september-student-rentals-ottawa | September Student Rentals in Ottawa \| Furnished Rooms Near Algonquin \| ZIM.ca (77) | Looking for September student rentals… (225) | https://www.zim.ca/september-student-rentals-ottawa | ✓ | ✓ | ✓ |
| /furnished-student-room-vs-apartment-ottawa | Furnished Student Room vs Apartment in Ottawa \| Student Housing Guide \| ZIM.ca (80) | Compare furnished student rooms… (195) | https://www.zim.ca/furnished-student-room-vs-apartment-ottawa | ✓ | ✓ | ✓ |

## Issues Spotted at Baseline

### P1 — Missing OG tags on /resources
- /resources has no openGraph block at all (no og:title, og:description, og:url, og:image)
- This means social sharing of this page shows no preview

### P2 — Meta descriptions over 160 characters
The following descriptions will likely be truncated in SERPs:
- / : 192 chars
- /algonquin-student-rentals-ottawa: 211 chars  
- /student-rentals-nepean-baseline-station: 198 chars
- /parents-student-housing-ottawa: 224 chars
- /international-student-housing-ottawa: 210 chars
- /algonquin-college-off-campus-housing-guide: 222 chars
- /september-student-rentals-ottawa: 225 chars
- /student-housing-resources-ottawa: 210 chars

### P2 — Title lengths over 60 characters
Nearly all titles are 70-84 characters. Google rewrites titles over ~60 chars.
Most critical (longest):
- /parents-student-housing-ottawa: 80 chars
- /international-student-housing-ottawa: 82 chars
- / (homepage): 84 chars

### P2 — Relative canonical on /blog and /resources
- /blog uses canonical: "/blog" (relative)
- /resources uses canonical: "/resources" (relative)
- /blog/[slug] uses canonical: `/blog/${slug}` (relative)
- metadataBase is set to https://www.zim.ca so these should resolve — but absolute is safer

### P3 — Blog page OG image uses relative path
- /blog OG image: "/images/og-zim-student-rentals.jpg" (relative)
- metadataBase should resolve this but worth confirming

## Sitemap Accuracy
Routes in app/sitemap.ts vs actual routes:
- ✓ / 
- ✓ /resources
- ✓ /student-housing-resources-ottawa
- ✓ /algonquin-student-rentals-ottawa
- ✓ /student-rentals-nepean-baseline-station
- ✓ /parents-student-housing-ottawa
- ✓ /international-student-housing-ottawa
- ✓ /algonquin-college-off-campus-housing-guide
- ✓ /ottawa-student-housing-cost-guide
- ✓ /september-student-rentals-ottawa
- ✓ /furnished-student-room-vs-apartment-ottawa
- ✓ /blog
- ✓ /blog/[slug] (dynamic, pulled from blogPosts)
- NOTE: /api/contact correctly excluded (dynamic API route)

## Uncommitted Changes at Baseline
- components/IncludedValueCalculator.tsx: calculator headline update (pending commit from this session)

## Analytics
- Google Analytics hardcoded: G-236GG4Z62B in layout.tsx as fallback
- Loaded with strategy="afterInteractive" — correct
