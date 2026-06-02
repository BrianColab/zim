# ZIM.ca SEO Indexing Checklist

This checklist is for Google Search Console setup, sitemap submission, indexing checks, and basic ranking diagnostics for the ZIM.ca student rental pages.

## Core URLs

- Sitemap: `https://www.zim.ca/sitemap.xml`
- Robots: `https://www.zim.ca/robots.txt`
- Canonical site URL: `https://www.zim.ca/`

## Important Public URLs

- `https://www.zim.ca/`
- `https://www.zim.ca/algonquin-student-rentals-ottawa`
- `https://www.zim.ca/student-rentals-nepean-baseline-station`
- `https://www.zim.ca/parents-student-housing-ottawa`
- `https://www.zim.ca/international-student-housing-ottawa`
- `https://www.zim.ca/algonquin-college-off-campus-housing-guide`
- `https://www.zim.ca/ottawa-student-housing-cost-guide`
- `https://www.zim.ca/september-student-rentals-ottawa`
- `https://www.zim.ca/furnished-student-room-vs-apartment-ottawa`

## Priority Indexing List

Inspect these first in Google Search Console and request indexing where appropriate:

1. `https://www.zim.ca/`
2. `https://www.zim.ca/algonquin-student-rentals-ottawa`
3. `https://www.zim.ca/student-rentals-nepean-baseline-station`
4. `https://www.zim.ca/september-student-rentals-ottawa`
5. `https://www.zim.ca/ottawa-student-housing-cost-guide`
6. `https://www.zim.ca/algonquin-college-off-campus-housing-guide`

## Google Search Console Setup

1. Add a property for `https://www.zim.ca`.
2. Verify ownership using either DNS verification or the HTML meta tag method.
3. For meta tag verification, set Railway variable `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to the token from Google.
4. Redeploy after adding the variable.
5. Confirm the rendered homepage contains `<meta name="google-site-verification" content="...">`.
6. Submit sitemap: `https://www.zim.ca/sitemap.xml`.
7. Use URL Inspection for each priority URL.
8. Request indexing for the homepage, Algonquin page, Baseline page, September page, cost guide, and Algonquin off-campus housing guide.
9. Check the Pages report after Google crawls the sitemap.
10. Monitor Performance queries weekly.

## Optional Analytics

Google Analytics is optional and loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` exists.

1. Create or choose a GA4 property.
2. Set Railway variable `NEXT_PUBLIC_GA_MEASUREMENT_ID` to the GA4 measurement ID, such as `G-XXXXXXXXXX`.
3. Redeploy.
4. Confirm traffic appears in GA4 Realtime.

## Target Queries To Monitor

Primary:

- Ottawa student rentals
- student rentals near Algonquin College
- Algonquin College off-campus housing
- furnished student rooms Ottawa
- student rooms near Baseline Station
- Nepean student rentals
- international student housing Ottawa
- September student rentals Ottawa

Secondary:

- affordable student housing Ottawa
- all-inclusive student rooms Ottawa
- student housing near College Square
- furnished rooms near Algonquin College
- Ottawa student housing cost
- student room vs apartment Ottawa

## Sitemap Checks

Confirm `https://www.zim.ca/sitemap.xml`:

- Loads with a `200` response.
- Uses only `https://www.zim.ca` URLs.
- Includes every important public URL listed above.
- Does not include localhost, staging, duplicate, malformed, or missing canonical URLs.
- Includes blog URLs if the blog remains public.

## Robots Checks

Confirm `https://www.zim.ca/robots.txt`:

- Loads with a `200` response.
- Allows public pages.
- Does not block SEO landing pages or guides.
- Blocks only intentionally non-public paths such as `/api/` and `/admin/`.
- References `https://www.zim.ca/sitemap.xml`.

## Structured Data Validation

Use Google Rich Results Test and Schema Markup Validator to validate:

- FAQ schema.
- Article schema.
- LocalBusiness, RealEstateAgent, or rental business schema.
- No fake `aggregateRating`.
- No fake `review` schema.
- No schema that is unsupported by visible page content.

## Metadata Validation

Confirm each priority page has:

- Unique title.
- Unique meta description.
- Canonical URL.
- Open Graph title.
- Open Graph description.
- One H1.
- No duplicate canonical tag.
- No `noindex` tag.

## Local Build And Test

Run:

```bash
npm install
npm run lint
npm run build
npm run dev
```

Then test:

- Homepage.
- All SEO pages listed above.
- `sitemap.xml`.
- `robots.txt`.
- Contact/showing form.
- Mobile layout.

## Notes

- Do not add fake reviews, fake ratings, fake availability, fake urgency, fake safety claims, or unsupported claims.
- Keep schema aligned with visible page content.
- Keep contact/showing form and Resend email logic unchanged during SEO verification work.
