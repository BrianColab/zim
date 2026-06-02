# Pre-Deployment SEO QA

Last audited: June 2, 2026

## Pages Checked

- `/`
- `/algonquin-student-rentals-ottawa`
- `/student-rentals-nepean-baseline-station`
- `/parents-student-housing-ottawa`
- `/international-student-housing-ottawa`
- `/algonquin-college-off-campus-housing-guide`
- `/ottawa-student-housing-cost-guide`
- `/september-student-rentals-ottawa`
- `/furnished-student-room-vs-apartment-ottawa`
- `/student-housing-resources-ottawa`

Local route audit result:

- All listed pages returned `200` on the local dev server.
- `sitemap.xml` returned `200`.
- `robots.txt` returned `200`.
- No duplicate route conflicts or accidental redirects were found during local route checks.

## Build And Lint Status

Run before every production deploy:

```bash
npm run lint
npm run build
```

Latest QA result:

- `npm run lint`: passed with one pre-existing warning in `_legacy/js/main.js`.
- `npm run build`: passed.

Known lint warning:

- `_legacy/js/main.js`: `@typescript-eslint/no-unused-expressions`
- This file is outside the active Next.js app flow. It should be cleaned up later, but it did not block build or current deployment QA.

## Metadata Check

Confirm every priority page has:

- Unique title.
- Unique meta description.
- Canonical URL.
- Open Graph title.
- Open Graph description.
- Open Graph URL.
- No `noindex`.
- No localhost, staging, Railway, or Vercel URLs in public metadata.

Latest QA result:

- All listed pages had one title, meta description, canonical URL, Open Graph title, Open Graph description, and Open Graph URL.
- No `noindex` was found.
- Metadata is natural and page-specific.

## Heading Check

Latest QA result:

- Each listed page rendered exactly one H1.
- H1s matched the page topic.
- Supporting headings were descriptive and not hidden keyword-stuffed headings.

## Sitemap Check

Required sitemap URL:

- `https://www.zim.ca/sitemap.xml`

Latest QA result:

- Local sitemap included all priority SEO pages.
- No localhost or staging URLs were found.
- Priorities and change frequencies are reasonable for an SEO hub.

Required URLs:

- `https://www.zim.ca/`
- `https://www.zim.ca/algonquin-student-rentals-ottawa`
- `https://www.zim.ca/student-rentals-nepean-baseline-station`
- `https://www.zim.ca/parents-student-housing-ottawa`
- `https://www.zim.ca/international-student-housing-ottawa`
- `https://www.zim.ca/algonquin-college-off-campus-housing-guide`
- `https://www.zim.ca/ottawa-student-housing-cost-guide`
- `https://www.zim.ca/september-student-rentals-ottawa`
- `https://www.zim.ca/furnished-student-room-vs-apartment-ottawa`
- `https://www.zim.ca/student-housing-resources-ottawa`

## Robots Check

Required robots URL:

- `https://www.zim.ca/robots.txt`

Latest QA result:

- Local robots file references `https://www.zim.ca/sitemap.xml`.
- Public SEO pages are allowed.
- `/api/` and `/admin/` are disallowed.

## Internal Link Check

Latest QA result:

- Footer links include the SEO hub and resource pages.
- Resource cards link to all key SEO pages and guides.
- Important SEO pages are linked from the homepage or footer.
- No broken local internal page links were found during route checks.

## Schema Check

Latest QA result:

- JSON-LD parsed as valid JSON on all listed pages.
- FAQ schema is generated from the same FAQ data rendered visibly on FAQ sections.
- Article schema is used on guide/article-style pages.
- LocalBusiness, RealEstateAgent, WebPage, and BreadcrumbList schema use visible, factual business/page information.
- No fake review schema or fake `aggregateRating` schema was found.

Validate before production launch:

- Google Rich Results Test.
- Schema Markup Validator.

## Image And Accessibility Check

Latest QA result:

- Rendered image tags had alt attributes.
- Meaningful image alt text describes the actual image.
- Decorative thumbnails/logos use empty alt where appropriate.
- Rendered image URLs returned successfully on local dev.
- Icon-only buttons have accessible labels where needed.
- Form fields are wrapped with visible labels.

Manual mobile checks still recommended:

- Hero text fit.
- CTA tap targets.
- Drawer form usability.
- Footer link wrapping.
- Resource card stacking.
- No horizontal scrolling.

## Contact Form Test Steps

Local automated checks:

- Invalid required fields returned `400` with `Name, email, and message are required.`
- Honeypot submission returned `200` and did not require Resend.

Manual local test:

1. Run `npm run dev`.
2. Open the homepage.
3. Click `Book a Showing` or `Confirm Availability`.
4. Confirm the drawer opens.
5. Confirm name, email, and message are required.
6. Change the move-in date and confirm the message body updates.
7. Submit only in an environment where Resend is intentionally configured.

## Resend ENV Checklist

Keep secrets server-side only.

Required:

- `RESEND_API_KEY`: server-side only.
- `CONTACT_TO_EMAIL`: main recipient.

Recommended:

- `RESEND_FROM`: verified Resend sender domain.

Backward-compatible existing variable:

- `CONTACT_FROM_EMAIL`: still supported as a fallback sender.

Optional:

- `CONTACT_CC_EMAIL`: optional CC recipient list, comma-separated.

Do not expose `RESEND_API_KEY` through any `NEXT_PUBLIC_` variable.

## Post-Deploy Checklist

After deployment:

1. Visit every priority live URL.
2. Confirm each page returns `200`.
3. Visit `https://www.zim.ca/sitemap.xml`.
4. Visit `https://www.zim.ca/robots.txt`.
5. Submit sitemap in Google Search Console.
6. Inspect priority URLs.
7. Request indexing for priority pages.
8. Test the live contact form with a real controlled submission.
9. Check Resend logs after the test submission.
10. Check mobile layout live.
11. Check page source for title, description, canonical, and Open Graph tags.
12. Validate schema with Google Rich Results Test.

## Content Quality Rules

- Do not add fake reviews.
- Do not add fake ratings.
- Do not add fake availability.
- Do not add fake urgency.
- Do not add fake safety claims.
- Do not claim school affiliation or partnerships unless confirmed.
- Keep pricing and availability language factual, including: "Availability and pricing may vary. Contact us to confirm current rooms, rent and move-in dates."
