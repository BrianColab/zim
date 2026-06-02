# Seasonal SEO Checklist

Use this checklist to keep ZIM.ca current before and during the student rental cycle without adding fake urgency, fake availability, or unsupported claims.

## Config To Update

Seasonal copy is managed in `lib/seasonalSeo.ts`.

Update these values when the rental cycle changes:

- `currentLeasingSeason`
- `leasingCycleLabel`
- `seasonIntroMessage`
- `availabilityDisclaimer`
- `lastContentReviewDate`
- `lastContentReviewLabel`
- `nextSuggestedReviewDate`
- `nextSuggestedReviewLabel`
- `calloutCtaLabel`

If a new year or season needs to be emphasized in metadata, update page titles and descriptions carefully. Prefer evergreen metadata such as `September Student Rentals in Ottawa | Furnished Rooms Near Algonquin | ZIM.ca` unless the year will be maintained.

## Monthly Schedule

March:

- Review pricing language.
- Confirm room inventory wording.
- Check contact form.
- Check Search Console impressions.

April:

- Refresh September rental page.
- Refresh Algonquin page.
- Confirm sitemap is submitted.

May:

- Add or update move-in planning language.
- Review room photos and alt text.
- Check target rankings.

June:

- Review parent and international student pages.
- Confirm property manager contact workflow.

July:

- Strengthen showing CTA.
- Confirm availability wording.
- Check Search Console queries.

August:

- Update September page.
- Confirm no fake urgency.
- Check form submissions and email delivery.

September:

- Switch content from "planning for September" to "current school year / upcoming availability".
- Review what should remain live.

## Safe Seasonal Copy

Good:

- "Contact us to confirm current rooms and move-in dates."
- "Planning for September student housing?"
- "Availability and pricing may vary."
- "Rooms from $850/month where available."
- "Students and parents should compare options early."
- "Furnished rooms can simplify move-in."

Avoid:

- "Only a few rooms left" unless verified.
- "Guaranteed availability."
- "Cheapest student housing in Ottawa."
- "Safest student housing near Algonquin."
- "Last chance."
- "Limited time."
- Any claim that cannot be supported.

## Pages To Review

- `/`
- `/algonquin-student-rentals-ottawa`
- `/student-rentals-nepean-baseline-station`
- `/parents-student-housing-ottawa`
- `/international-student-housing-ottawa`
- `/algonquin-college-off-campus-housing-guide`
- `/ottawa-student-housing-cost-guide`
- `/september-student-rentals-ottawa`
- `/furnished-student-room-vs-apartment-ottawa`

## Metadata Freshness

- Keep September metadata evergreen unless the current year will be updated every season.
- Confirm every priority page has a unique title and meta description.
- Confirm canonical URLs still use `https://www.zim.ca`.
- Confirm Open Graph metadata still uses the optimized social image.
- Confirm no `noindex` tag appears on public SEO pages.

## Schema Freshness

- Article `datePublished` should remain stable.
- Article `dateModified` can use `lastContentReviewDate` from `lib/seasonalSeo.ts` after real review.
- FAQ schema should match visible FAQ content.
- Do not add fake `review`, `aggregateRating`, fake availability, or schema unsupported by page content.

## Internal Linking

Seasonal copy should naturally connect students to:

- `/september-student-rentals-ottawa`
- `/algonquin-student-rentals-ottawa`
- `/student-rentals-nepean-baseline-station`
- The existing contact/showing form through `ContactTrigger`.

## Test Before Publishing

Run:

```bash
npm run lint
npm run build
```

Then manually check:

- Homepage seasonal callout.
- Algonquin page seasonal callout.
- Baseline/Nepean page seasonal callout.
- Parents page seasonal callout.
- International students page seasonal callout.
- September page seasonal callout and copy.
- Guide page "Last reviewed" lines.
- Contact/showing form still opens.
- Mobile layout remains clean.
