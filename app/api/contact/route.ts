import { NextResponse } from "next/server";

type ContactRequest = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  moveIn?: string;
  message?: string;
  company?: string;
};

const propertyManagerEmail = "info@homyspot.com";
const primaryContactEmail = process.env.CONTACT_TO_EMAIL ?? "bpallister@gmail.com";
const toEmails = Array.from(
  new Set(
    [primaryContactEmail, propertyManagerEmail]
      .flatMap((email) => email.split(","))
      .map((email) => email.trim())
      .filter(Boolean),
  ),
);
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ?? "ZIM.ca <onboarding@resend.dev>";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactRequest;

  try {
    payload = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  if (clean(payload.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const interest = clean(payload.interest);
  const moveIn = clean(payload.moveIn);
  const message = clean(payload.message);

  if (!name || !isEmail(email) || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Email is not configured yet. Add RESEND_API_KEY to enable contact form delivery.",
      },
      { status: 503 },
    );
  }

  const subject = `ZIM.ca inquiry: ${interest || "Contact form"}`;
  const text = [
    "New ZIM.ca contact form inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    interest ? `Interest: ${interest}` : "",
    moveIn ? `Move-in: ${moveIn}` : "",
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: toEmails,
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "The message could not be sent. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
