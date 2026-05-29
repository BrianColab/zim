import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const monthlyPostsPath = path.join(repoRoot, "data", "monthlyBlogPosts.json");
const model = process.env.OPENAI_MODEL || "gpt-5.4-mini";
const apiKey = process.env.OPENAI_API_KEY;

const topics = [
  {
    slugBase: "algonquin-college-walking-commute",
    title: "Walking to Algonquin College from Baseline Road: What Students Should Check",
    category: "Commute",
    keywords: [
      "walk to Algonquin College",
      "Algonquin College commute",
      "Baseline Road student housing",
      "student housing near Algonquin College",
    ],
  },
  {
    slugBase: "ottawa-student-room-questions",
    title: "Questions to Ask Before Renting a Student Room in Ottawa",
    category: "Rental Tips",
    keywords: [
      "student room questions Ottawa",
      "renting student rooms Ottawa",
      "Ottawa student housing tips",
      "furnished student rooms Ottawa",
    ],
  },
  {
    slugBase: "nepean-student-life-without-car",
    title: "Student Life in Nepean Without a Car: Transit, Groceries, and Campus Routes",
    category: "Neighbourhood",
    keywords: [
      "Nepean student life",
      "student housing without car Ottawa",
      "Baseline Road transit",
      "Algonquin College student rentals",
    ],
  },
  {
    slugBase: "all-inclusive-student-rent",
    title: "What All-Inclusive Student Rent Should Include in Ottawa",
    category: "Budgeting",
    keywords: [
      "all-inclusive student rent Ottawa",
      "student housing utilities included",
      "furnished student room Ottawa",
      "Ottawa student rental costs",
    ],
  },
  {
    slugBase: "parents-guide-ottawa-student-housing",
    title: "A Parent's Guide to Student Housing Near Algonquin College",
    category: "Parents",
    keywords: [
      "parents guide student housing Ottawa",
      "Algonquin College housing parents",
      "safe student housing Ottawa",
      "Nepean student rentals",
    ],
  },
  {
    slugBase: "shared-living-rules-students",
    title: "Shared Living Rules That Help Student Houses Stay Calm",
    category: "Shared Living",
    keywords: [
      "student shared living rules",
      "student house expectations",
      "Ottawa student rooms",
      "respectful student housing",
    ],
  },
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function assertString(value, field) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Generated post is missing ${field}.`);
  }
}

function validatePost(post) {
  for (const field of [
    "slug",
    "title",
    "description",
    "category",
    "published",
    "updated",
    "readTime",
    "image",
    "excerpt",
  ]) {
    assertString(post[field], field);
  }

  if (!Array.isArray(post.keywords) || post.keywords.length < 4) {
    throw new Error("Generated post needs at least four keywords.");
  }

  if (!Array.isArray(post.sections) || post.sections.length < 4) {
    throw new Error("Generated post needs at least four sections.");
  }

  if (!Array.isArray(post.faqs) || post.faqs.length < 3) {
    throw new Error("Generated post needs at least three FAQs.");
  }
}

function extractResponseText(data) {
  if (typeof data.output_text === "string") {
    return data.output_text;
  }

  const textParts = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (typeof content.text === "string") {
        textParts.push(content.text);
      }
    }
  }

  return textParts.join("\n");
}

function parseJsonObject(text) {
  const trimmed = text.trim();
  const withoutFence = trimmed
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "");
  return JSON.parse(withoutFence);
}

async function readMonthlyPosts() {
  const file = await readFile(monthlyPostsPath, "utf8").catch(() => "[]");
  const posts = JSON.parse(file);
  if (!Array.isArray(posts)) {
    throw new Error("data/monthlyBlogPosts.json must contain an array.");
  }
  return posts;
}

function chooseTopic(existingPosts) {
  const existingSlugs = new Set(existingPosts.map((post) => post.slug));
  const unusedTopic = topics.find((topic) => !existingSlugs.has(topic.slugBase));
  return unusedTopic || topics[existingPosts.length % topics.length];
}

async function generatePost(topic, existingPosts) {
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is required to generate monthly blog posts.");
  }

  const today = new Date().toISOString().slice(0, 10);
  const existingTitles = existingPosts.map((post) => post.title).join("\n- ");

  const prompt = `
Generate one original, helpful, local SEO blog post for ZIM.ca student rentals.

Business context:
- ZIM.ca offers furnished, all-inclusive student rooms at 1658-1660 Baseline Road, Nepean, Ottawa.
- The site targets students and parents searching for housing near Algonquin College, Baseline Road, Nepean, and Ottawa.
- Amenities include utilities, gigabit internet, furniture, laundry, shared living expectations, and single or two-friend pair room options.
- Pair rooms are only for two friends applying together. Do not imply stranger matching.
- Tone: practical, trustworthy, clear, student-friendly, not salesy.
- Avoid promises about safety, legal advice, or guaranteed commute times.

Topic to write:
${JSON.stringify(topic, null, 2)}

Existing monthly post titles to avoid repeating:
- ${existingTitles || "None yet"}

Return ONLY valid JSON matching this exact TypeScript shape:
{
  "slug": "kebab-case-slug",
  "title": "SEO title under 70 characters if possible",
  "description": "meta description under 160 characters if possible",
  "category": "short category",
  "published": "${today}",
  "updated": "${today}",
  "readTime": "5 min read",
  "image": "/images/main.png",
  "keywords": ["keyword 1", "keyword 2", "keyword 3", "keyword 4", "keyword 5"],
  "excerpt": "one useful summary sentence",
  "sections": [
    { "heading": "H2 heading", "body": ["paragraph", "paragraph"] }
  ],
  "faqs": [
    { "question": "question", "answer": "answer" }
  ]
}

Requirements:
- Use 4 to 6 sections.
- Each section must have 2 concise paragraphs.
- Include 3 to 5 FAQs.
- Mention Ottawa, Nepean, Algonquin College, Baseline Road, and student housing naturally where relevant.
- Use one of these images only: /images/main.png, /images/unit-bedroom.jpg, /images/unit-dining.jpg, /images/1-main.jpg.
- No markdown, no HTML, no citations.
`;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "system",
          content:
            "You are an expert local SEO content strategist for student housing websites. Return only valid JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI request failed: ${response.status} ${error}`);
  }

  const data = await response.json();
  const text = extractResponseText(data);
  if (!text) {
    throw new Error("OpenAI response did not include generated text.");
  }

  const post = parseJsonObject(text);
  post.slug = slugify(post.slug || topic.slugBase);
  post.published = today;
  post.updated = today;
  validatePost(post);
  return post;
}

async function main() {
  const posts = await readMonthlyPosts();
  const topic = chooseTopic(posts);
  const post = await generatePost(topic, posts);

  const usedSlugs = new Set(posts.map((existing) => existing.slug));
  let uniqueSlug = post.slug;
  let suffix = 2;
  while (usedSlugs.has(uniqueSlug)) {
    uniqueSlug = `${post.slug}-${suffix}`;
    suffix += 1;
  }
  post.slug = uniqueSlug;

  const updatedPosts = [...posts, post];
  await writeFile(monthlyPostsPath, `${JSON.stringify(updatedPosts, null, 2)}\n`);

  console.log(`Generated monthly blog post: ${post.title}`);
  console.log(`Slug: ${post.slug}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
