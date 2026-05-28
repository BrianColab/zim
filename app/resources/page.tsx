import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ContactTrigger from "@/components/ContactTrigger";

const guides = [
  {
    id: "move-in",
    label: "Before arrival",
    title: "Move-In Guide",
    intro:
      "A clear first-day checklist for arriving at 1658-1660 Baseline Road ready to settle in.",
    items: [
      "Bring bedding, towels, personal toiletries, and everyday kitchen items.",
      "Rooms include a bed, mattress, desk, and office chair.",
      "Hydro, water, heat, central A/C, gigabit internet, and laundry are included.",
      "Parking is available for $80 per month if arranged ahead of time.",
    ],
  },
  {
    id: "shared-living",
    label: "At ZIM.ca",
    title: "Shared Living Guide",
    intro:
      "ZIM.ca is built for students who want a calm, respectful place to study and recharge.",
    items: [
      "Keep kitchens, bathrooms, laundry areas, and common spaces clean.",
      "Observe quiet hours and be mindful of study schedules.",
      "Share routine chores such as garbage disposal and common-area cleaning.",
      "No pets are accepted due to allergies.",
    ],
  },
  {
    id: "neighbourhood",
    label: "Nearby",
    title: "Neighbourhood Guide",
    intro:
      "Daily essentials are close by, with Algonquin College, transit, groceries, and retail nearby.",
    items: [
      "Bus stops are just meters away from the property.",
      "College Square, Baseline retail, and Merivale shopping are short trips away.",
      "Algonquin College is close for classes, campus services, and study space.",
      "Carleton University is reachable by transit or drive.",
    ],
  },
  {
    id: "faq",
    label: "House basics",
    title: "FAQ & Rules",
    intro:
      "Quick answers for the questions students and parents usually ask first.",
    items: [
      "Unit A offers single and double occupancy options.",
      "Unit B offers single and double occupancy options.",
      "Rooms are furnished and all-inclusive.",
      "Residents must value peaceful cohabitation and respectful shared living.",
    ],
  },
];

const quickStats = [
  ["Address", "1658-1660 Baseline Road"],
  ["Campus", "Near Algonquin College"],
  ["Internet", "Unlimited gigabit"],
  ["Laundry", "In-unit washer/dryer"],
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f5f1e8]">
        <section className="relative overflow-hidden bg-[#07111b] pt-32">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(200,245,53,.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:46px_46px] opacity-45" />
          <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c8f535]">
                  Resident resources
                </p>
                <h1 className="mt-5 font-heading text-[3.2rem] font-extrabold leading-[0.92] text-white md:text-[5.5rem]">
                  Everything before move-in.
                </h1>
                <p className="mt-6 max-w-[560px] text-[1.05rem] font-medium leading-relaxed text-white/62">
                  Practical guides for living at ZIM.ca: what is included, how
                  shared living works, what is nearby, and how to ask the right
                  questions before choosing a room.
                </p>
              </div>

              <div className="rounded-[10px] border border-white/[0.1] bg-white/[0.06] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
                <div className="grid grid-cols-2 gap-3">
                  {quickStats.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[8px] border border-white/[0.08] bg-[#07111b]/60 p-4"
                    >
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#c8f535]">
                        {label}
                      </p>
                      <p className="mt-2 text-[13px] font-extrabold leading-snug text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-2">
              {guides.map((guide) => (
                <article
                  id={guide.id}
                  key={guide.id}
                  className="scroll-mt-28 overflow-hidden rounded-[10px] border border-black/[0.08] bg-white shadow-[0_1px_2px_rgba(8,18,28,0.05)]"
                >
                  <div className="border-b border-black/[0.06] bg-[#07111b] p-6">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c8f535]">
                      {guide.label}
                    </p>
                    <h2 className="mt-3 font-heading text-[2rem] font-extrabold leading-tight text-white">
                      {guide.title}
                    </h2>
                    <p className="mt-3 text-[14px] leading-relaxed text-white/58">
                      {guide.intro}
                    </p>
                  </div>

                  <div className="grid gap-3 p-5">
                    {guide.items.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-[8px] border border-zinc-100 bg-[#fbfaf7] p-4"
                      >
                        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c8f535]" />
                        <p className="text-[13px] font-semibold leading-relaxed text-zinc-700">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[10px] bg-[#07111b] p-7 shadow-[0_24px_70px_rgba(8,18,28,0.18)]">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c8f535]">
                    Still deciding?
                  </p>
                  <h2 className="mt-3 font-heading text-[2rem] font-extrabold leading-tight text-white">
                    Ask about Unit A or Unit B before you apply.
                  </h2>
                  <p className="mt-3 max-w-[620px] text-[14px] leading-relaxed text-white/58">
                    Include the property address and a brief introduction so the
                    team can respond with the right availability details.
                  </p>
                </div>
                <ContactTrigger className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-6 py-4 text-[13.5px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]">
                  Contact ZIM.ca
                </ContactTrigger>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
