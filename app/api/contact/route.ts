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

const fallbackContactEmail = "bpallister@gmail.com";
const fromEmail =
  process.env.CONTACT_FROM_EMAIL ?? "ZIM.ca <onboarding@resend.dev>";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parseRecipientEmails(value: string | undefined) {
  return (value ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(isEmail);
}

const toEmails = Array.from(
  new Set([
    ...parseRecipientEmails(process.env.CONTACT_TO_EMAIL),
    fallbackContactEmail,
  ]),
);
const ccEmails = Array.from(
  new Set(parseRecipientEmails(process.env.CONTACT_CC_EMAIL)),
);

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

  const subject = "1660 Baseline Student Inquery - Zim.ca";
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

  const emailPayload = {
    from: fromEmail,
    to: toEmails,
    ...(ccEmails.length ? { cc: ccEmails } : {}),
    reply_to: email,
    subject,
    text,
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    console.error("Resend contact email failed", {
      status: response.status,
      body: errorText,
    });

    return NextResponse.json(
      { error: "The message could not be sent. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
