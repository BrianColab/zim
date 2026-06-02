import Link from "next/link";

type ResourceKey =
  | "home"
  | "resourceHub"
  | "algonquin"
  | "baseline"
  | "parents"
  | "international"
  | "algonquinGuide"
  | "costGuide"
  | "september"
  | "comparison";

type StudentHousingResourcesProps = {
  title?: string;
  intro?: string;
  links?: ResourceKey[];
  theme?: "light" | "dark";
};

const resources: Record<
  ResourceKey,
  { label: string; href: string; description: string }
> = {
  home: {
    label: "Ottawa Student Rentals",
    href: "/",
    description: "Start with furnished student rooms in Ottawa near Algonquin.",
  },
  resourceHub: {
    label: "Ottawa Student Housing Resources",
    href: "/student-housing-resources-ottawa",
    description:
      "Browse student housing guides for students and parents comparing Ottawa rentals.",
  },
  algonquin: {
    label: "Student Rentals Near Algonquin College",
    href: "/algonquin-student-rentals-ottawa",
    description: "See rooms near Algonquin College, Baseline Station, and College Square.",
  },
  baseline: {
    label: "Student Rooms Near Baseline Station",
    href: "/student-rentals-nepean-baseline-station",
    description: "Compare Nepean student rentals near transit and daily essentials.",
  },
  parents: {
    label: "Student Housing Information for Parents",
    href: "/parents-student-housing-ottawa",
    description: "Review included costs, location, rooms, and showing details.",
  },
  international: {
    label: "International Student Housing in Ottawa",
    href: "/international-student-housing-ottawa",
    description: "Helpful guidance for students moving to Ottawa for school.",
  },
  algonquinGuide: {
    label: "Algonquin College Off-Campus Housing Guide",
    href: "/algonquin-college-off-campus-housing-guide",
    description: "Learn what to check before renting near Algonquin College.",
  },
  costGuide: {
    label: "Ottawa Student Housing Cost Guide",
    href: "/ottawa-student-housing-cost-guide",
    description: "Compare rent, utilities, internet, furniture, and move-in costs.",
  },
  september: {
    label: "September Student Rentals in Ottawa",
    href: "/september-student-rentals-ottawa",
    description: "Plan fall move-in timing, included costs, and showing questions.",
  },
  comparison: {
    label: "Furnished Room vs Apartment Guide",
    href: "/furnished-student-room-vs-apartment-ottawa",
    description: "Compare rooms, apartments, and student residences in Ottawa.",
  },
};

export default function StudentHousingResources({
  title = "Explore Student Housing Resources",
  intro = "Helpful pages for comparing furnished student rooms, location, costs, and move-in timing in Ottawa.",
  links = ["algonquin", "baseline", "parents", "international", "costGuide"],
  theme = "light",
}: StudentHousingResourcesProps) {
  const dark = theme === "dark";

  return (
    <section className={dark ? "bg-[#07111b] py-16" : "bg-[#f5f1e8] py-16"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_430px] lg:items-end">
          <div>
            <p className={`section-kicker ${dark ? "text-[#c8f535]" : "text-[#60710f]"}`}>
              Student housing hub
            </p>
            <h2
              className={`section-heading-tight mt-4 ${
                dark ? "headline-on-dark text-white" : "text-zinc-950"
              }`}
            >
              {title}
            </h2>
          </div>
          <p className={`section-copy ${dark ? "text-white/58" : "text-zinc-600"}`}>
            {intro}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((key) => {
            const resource = resources[key];

            return (
              <Link
                key={key}
                href={resource.href}
                className={`group rounded-[8px] border p-5 transition ${
                  dark
                    ? "border-white/[0.08] bg-white/[0.04] hover:border-[#c8f535]/45"
                    : "border-black/[0.08] bg-white hover:border-[#60710f]/35"
                }`}
              >
                <h3
                  className={`text-[15px] font-extrabold leading-tight ${
                    dark ? "text-white" : "text-zinc-950"
                  }`}
                >
                  {resource.label}
                </h3>
                <p
                  className={`mt-3 text-[12.5px] font-medium leading-relaxed ${
                    dark ? "text-white/58" : "text-zinc-600"
                  }`}
                >
                  {resource.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
