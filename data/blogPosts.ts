import monthlyBlogPostsJson from "./monthlyBlogPosts.json";

export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  readTime: string;
  image: string;
  keywords: string[];
  excerpt: string;
  sections: BlogSection[];
  faqs: BlogFaq[];
};

const cornerstoneBlogPosts: BlogPost[] = [
  {
    slug: "algonquin-college-housing-guide",
    title: "Algonquin College Housing Guide: Where Students Can Live in Ottawa",
    description:
      "A practical guide to student housing near Algonquin College, including Nepean, Baseline Road, transit, furnished rooms, and what to check before applying.",
    category: "Algonquin College",
    published: "2026-05-29",
    updated: "2026-05-29",
    readTime: "6 min read",
    image: "/images/main.png",
    keywords: [
      "Algonquin College housing",
      "student housing near Algonquin College",
      "Ottawa student rentals",
      "Nepean student rooms",
      "Baseline Road student housing",
    ],
    excerpt:
      "Choosing student housing near Algonquin is easier when you compare campus access, included costs, transit, and the daily essentials around Nepean.",
    sections: [
      {
        heading: "Start with the daily route to campus",
        body: [
          "For many Algonquin College students, the best rental is not only the cheapest room. It is the room that makes everyday life easier: getting to class, buying groceries, doing laundry, studying, and coming home to a calm space.",
          "Housing around Baseline Road and College Square can work well because students are close to Algonquin College, transit, groceries, banking, restaurants, and everyday services. Before choosing a room, students should check the walking route, bus options, and how the commute feels during winter weather.",
        ],
      },
      {
        heading: "Compare included costs, not only rent",
        body: [
          "A lower rent can become more expensive if utilities, internet, laundry, furniture, and setup costs are extra. For students moving to Ottawa for the first time, an all-inclusive furnished room can make budgeting simpler.",
          "Ask whether hydro, water, heat, air conditioning, internet, laundry, bed, desk, and chair are included. These details matter for students and parents because they affect the real monthly cost.",
        ],
      },
      {
        heading: "Look for a student-focused shared home",
        body: [
          "Shared student housing works best when expectations are clear. Students should ask about quiet hours, cleaning, guests, laundry, kitchen use, and how shared spaces are managed.",
          "A good student rental should feel practical and respectful. It should support study routines, sleep schedules, and simple day-to-day living.",
        ],
      },
      {
        heading: "Why Nepean and Baseline Road can be a strong fit",
        body: [
          "Nepean gives students access to Algonquin College without needing to live in a busy downtown area. Baseline Road is also useful for transit and local shopping, which helps students handle errands without long trips.",
          "Students who attend Algonquin, Carleton, uOttawa, or other Ottawa schools may still choose this area if they want furnished housing, predictable costs, and a calmer residential setting.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Baseline Road convenient for Algonquin College students?",
        answer:
          "Yes. Baseline Road is near Algonquin College, College Square, transit, groceries, and common student errands. Students should still check the walking or transit route for their exact schedule.",
      },
      {
        question: "What should Algonquin students ask before renting a room?",
        answer:
          "Ask what is included in rent, whether the room is furnished, how shared spaces are managed, whether laundry and internet are included, and how close the home is to campus and transit.",
      },
      {
        question: "Are furnished rooms helpful for first-year students?",
        answer:
          "Furnished rooms can reduce move-in costs and stress because students do not need to buy or transport a bed, desk, chair, and other basics.",
      },
    ],
  },
  {
    slug: "student-housing-budget-ottawa",
    title: "Student Housing Budget in Ottawa: What Rent Really Costs",
    description:
      "Learn how Ottawa students can compare rent, utilities, internet, laundry, furniture, transit, and food costs before choosing student housing.",
    category: "Budgeting",
    published: "2026-05-29",
    updated: "2026-05-29",
    readTime: "5 min read",
    image: "/images/unit-bedroom.jpg",
    keywords: [
      "student housing budget Ottawa",
      "Ottawa student rent costs",
      "all-inclusive student rentals",
      "furnished student rooms Ottawa",
    ],
    excerpt:
      "The rent number is only one part of the budget. Students should compare the full monthly cost before choosing a room.",
    sections: [
      {
        heading: "Rent is only the starting point",
        body: [
          "When students compare rentals in Ottawa, the monthly rent is usually the first number they notice. But the real monthly cost can include utilities, internet, laundry, furniture, parking, transit, and move-in supplies.",
          "A room that looks cheaper at first may cost more once those extras are added. That is why all-inclusive student housing can be easier to compare.",
        ],
      },
      {
        heading: "Common student housing extras",
        body: [
          "Students should ask whether hydro, water, heat, air conditioning, internet, laundry, furniture, and appliances are included. If not, estimate those costs before signing.",
          "Furniture is often overlooked. A bed, mattress, desk, office chair, lamps, and basic household items can add up quickly, especially for out-of-town students.",
        ],
      },
      {
        heading: "Budget for the location too",
        body: [
          "The right location can reduce transportation costs and save time. Living close to campus, transit, grocery stores, and services can make the student budget more predictable.",
          "For students near Algonquin College, Nepean and Baseline Road can be practical because many daily errands are close by.",
        ],
      },
      {
        heading: "Use a simple monthly comparison",
        body: [
          "Add rent plus utilities, internet, laundry, furniture costs, transit, and parking if needed. Then compare that total with an all-inclusive furnished room.",
          "The goal is not only to find the lowest price. The goal is to find a room that supports school, daily routines, and a manageable monthly budget.",
        ],
      },
    ],
    faqs: [
      {
        question: "What costs should students include in a housing budget?",
        answer:
          "Students should include rent, utilities, internet, laundry, furniture, transit, parking if needed, food, tenant insurance, and move-in supplies.",
      },
      {
        question: "Is all-inclusive student rent easier to budget?",
        answer:
          "Often, yes. All-inclusive rent can make monthly planning simpler because major housing costs are already included in one number.",
      },
      {
        question: "Why does furnished housing matter for budgeting?",
        answer:
          "Furnished housing can reduce upfront costs because students do not need to buy or move large items like a bed, mattress, desk, and chair.",
      },
    ],
  },
  {
    slug: "furnished-student-room-move-in-checklist",
    title: "Furnished Student Room Move-In Checklist for Ottawa Students",
    description:
      "A move-in checklist for students renting a furnished room in Ottawa, including what to bring, what may already be included, and what to confirm.",
    category: "Move-In",
    published: "2026-05-29",
    updated: "2026-05-29",
    readTime: "5 min read",
    image: "/images/Unit B Double.png",
    keywords: [
      "student move-in checklist Ottawa",
      "furnished student room checklist",
      "what to bring to student housing",
      "Ottawa student rentals",
    ],
    excerpt:
      "Furnished rooms make move-in simpler, but students should still bring personal essentials and confirm exactly what is included.",
    sections: [
      {
        heading: "Confirm what furnished means",
        body: [
          "Not every furnished room includes the same items. Before moving in, students should confirm whether the room includes a bed, mattress, desk, chair, storage, and access to kitchen appliances.",
          "It is also helpful to ask whether internet, utilities, laundry, and basic shared spaces are included in the rent.",
        ],
      },
      {
        heading: "What students usually need to bring",
        body: [
          "Students usually bring bedding, pillows, towels, toiletries, clothing, school supplies, laptop, chargers, personal dishes, and any personal comfort items.",
          "For shared housing, students should keep personal kitchen items organized and label anything that should not be shared.",
        ],
      },
      {
        heading: "Documents and practical details",
        body: [
          "Before move-in, students should have photo ID, lease information, payment details, emergency contacts, and any school or work schedule details they need.",
          "Students should also know the move-in time, parking instructions, laundry rules, WiFi access, and how to contact property management.",
        ],
      },
      {
        heading: "Make the first week easier",
        body: [
          "The first week is smoother when students unpack the study area first, test internet access, find the closest grocery store, and learn the route to campus.",
          "A simple routine helps students settle quickly and focus on school instead of logistics.",
        ],
      },
    ],
    faqs: [
      {
        question: "What should I bring to a furnished student room?",
        answer:
          "Bring bedding, towels, toiletries, clothing, laptop, chargers, school supplies, personal dishes, and important documents.",
      },
      {
        question: "Do furnished rooms include bedding?",
        answer:
          "Usually bedding is personal and not included. Students should confirm with the rental provider before move-in.",
      },
      {
        question: "What should students confirm before move-in day?",
        answer:
          "Confirm move-in time, keys, payment details, WiFi, laundry, kitchen use, parking, and shared living expectations.",
      },
    ],
  },
  {
    slug: "living-near-baseline-road-nepean",
    title: "Living Near Baseline Road in Nepean: A Student Area Guide",
    description:
      "Explore why Baseline Road in Nepean can be practical for Ottawa students, with access to Algonquin College, transit, groceries, and retail.",
    category: "Neighbourhood",
    published: "2026-05-29",
    updated: "2026-05-29",
    readTime: "6 min read",
    image: "/images/1-main.jpg",
    keywords: [
      "Baseline Road student housing",
      "Nepean student rentals",
      "living near Baseline Road",
      "Ottawa student housing near Algonquin",
    ],
    excerpt:
      "Baseline Road gives students a practical mix of campus access, transit, groceries, and everyday services in west Ottawa.",
    sections: [
      {
        heading: "A practical west-end student location",
        body: [
          "Baseline Road is one of the more practical areas for students who want access to Algonquin College, Nepean services, and transit without living downtown.",
          "The area works well for students who value daily convenience: groceries, pharmacies, restaurants, banking, and campus access are all important parts of student life.",
        ],
      },
      {
        heading: "Access to Algonquin College and transit",
        body: [
          "Students near Baseline Road can plan routes to Algonquin College by walking, biking, bus, or driving depending on the exact address and schedule.",
          "Before renting, students should check live maps for the commute at the time they expect to travel, especially during winter or peak hours.",
        ],
      },
      {
        heading: "Daily errands nearby",
        body: [
          "Nearby shopping areas such as College Square, Baseline retail, Merivale retail, and Meadowlands can make daily student life easier.",
          "Being close to groceries and essentials can reduce stress, especially for students without a car.",
        ],
      },
      {
        heading: "What to look for in the area",
        body: [
          "Students should look for a calm home, clear shared living expectations, included utilities, reliable internet, and a realistic commute.",
          "A good location should support school routines, not add friction to them.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Baseline Road good for students without a car?",
        answer:
          "It can be, especially if the rental is close to transit, groceries, and campus routes. Students should check walking and bus options before applying.",
      },
      {
        question: "What schools are reachable from Nepean?",
        answer:
          "Algonquin College is nearby, and students may also commute to Carleton University, uOttawa, or other Ottawa schools depending on schedule and route.",
      },
      {
        question: "Why do students choose Nepean?",
        answer:
          "Students often choose Nepean for practical access to campus, transit, shopping, and quieter residential housing options.",
      },
    ],
  },
  {
    slug: "single-vs-pair-student-rooms",
    title: "Single vs Pair Student Rooms: What Students Should Know",
    description:
      "Understand the difference between single student rooms and pair rooms for two friends applying together, including privacy, budget, and shared living expectations.",
    category: "Room Types",
    published: "2026-05-29",
    updated: "2026-05-29",
    readTime: "4 min read",
    image: "/images/unit-dining.jpg",
    keywords: [
      "single student room",
      "pair student room",
      "double occupancy student housing",
      "Ottawa student rooms",
    ],
    excerpt:
      "Single rooms and pair rooms serve different student needs. The key is understanding privacy, budget, and who you are sharing with.",
    sections: [
      {
        heading: "Single rooms are for one student",
        body: [
          "A single room is usually best for a student who wants their own private sleeping and study space. It can be simpler for students who have different schedules, study habits, or privacy needs.",
          "Students should confirm whether the room is rented to one person only and what shared spaces are included.",
        ],
      },
      {
        heading: "Pair rooms are for two friends applying together",
        body: [
          "A pair room is different from being matched with a stranger. It is meant for two students who already know each other and apply together.",
          "This distinction matters. Students should not assume they can move into a room already booked as single, and they should not expect a rental provider to place an unknown roommate into a shared room.",
        ],
      },
      {
        heading: "Budget and comfort both matter",
        body: [
          "Pair rooms can make sense for two friends who want to reduce individual cost and are comfortable sharing. Single rooms can make sense for students who value quiet and privacy.",
          "The right choice depends on budget, friendship, schedules, and how much personal space each student needs.",
        ],
      },
      {
        heading: "Ask clear questions before applying",
        body: [
          "Students should ask how occupancy works, whether both applicants must apply together, and what happens if one person changes plans.",
          "Clear expectations help avoid confusion and protect the living experience for everyone in the home.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can one student move into a pair room alone?",
        answer:
          "Pair rooms are intended for two friends applying together. Availability and occupancy rules should always be confirmed before applying.",
      },
      {
        question: "Will a second student be added to a room booked as single?",
        answer:
          "A room booked as single should remain for one student unless the rental terms clearly say otherwise.",
      },
      {
        question: "Are pair rooms the same as roommate matching?",
        answer:
          "No. Pair rooms are for two friends applying together, not for matching strangers into one room.",
      },
    ],
  },
];

const monthlyBlogPosts = monthlyBlogPostsJson as BlogPost[];

export const blogPosts: BlogPost[] = [
  ...cornerstoneBlogPosts,
  ...monthlyBlogPosts,
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
