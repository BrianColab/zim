"use client";

import { useEffect, useState } from "react";

type ContactPayload = {
  roomType?: string;
  moveIn?: string;
  lease?: string;
};

const interestOptions = [
  "Book a tour",
  "Availability",
  "Unit A private room",
  "Unit A pair room - 2 friends",
  "Unit B single occupancy",
  "Unit B pair room - 2 friends",
  "General question",
];

const managerPhone = "1 (613) 298-2875";
const managerPhoneHref = "tel:+16132982875";

export default function ContactDrawer() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(interestOptions[0]);
  const [moveIn, setMoveIn] = useState("2026-09-01");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const openDrawer = (event: Event) => {
      const payload = (event as CustomEvent<ContactPayload>).detail;

      if (payload?.roomType && payload.roomType !== "Any room") {
        setInterest(payload.roomType);
      }

      if (payload?.moveIn) {
        setMoveIn(payload.moveIn);
      }

      if (payload?.roomType || payload?.moveIn || payload?.lease) {
        setMessage(
          [
            payload?.roomType ? `Room type: ${payload.roomType}` : "",
            payload?.moveIn ? `Move-in date: ${payload.moveIn}` : "",
            payload?.lease ? `Lease preference: ${payload.lease}` : "",
            payload?.roomType?.includes("pair")
              ? "Pair room note: we are two friends applying together."
              : "",
          ]
            .filter(Boolean)
            .join("\n"),
        );
      }

      setOpen(true);
    };

    window.addEventListener("zim:open-contact", openDrawer);
    return () => window.removeEventListener("zim:open-contact", openDrawer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        interest,
        moveIn,
        message,
        company,
      }),
    });

    const result = (await response.json().catch(() => ({}))) as {
      error?: string;
    };

    if (!response.ok) {
      setStatus("error");
      setStatusMessage(
        result.error ??
          "The message could not be sent. Please email info@homyspot.com directly.",
      );
      return;
    }

    setStatus("sent");
    setStatusMessage("Thanks. Your message was sent to ZIM.ca.");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    <div
      className={`fixed inset-0 z-[80] transition ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-[#07111b]/60 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close contact form"
      />

      <aside
        className={`absolute right-0 top-0 h-dvh w-full max-w-[480px] bg-[#f7f4ed] shadow-[0_0_80px_rgba(0,0,0,0.35)] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-black/[0.08] px-5 py-4 sm:px-6 sm:py-5">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#60710f]">
                Contact ZIM.ca
              </p>
              <h2 className="mt-1 font-heading text-[1.35rem] font-extrabold leading-tight text-zinc-950 sm:text-[1.65rem]">
                Book a tour or ask a question
              </h2>
              <a
                href={managerPhoneHref}
                className="mt-2 inline-flex text-[13px] font-extrabold text-[#60710f] transition hover:text-[#07111b]"
              >
                Call manager: {managerPhone}
              </a>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] text-zinc-500 transition hover:border-black/[0.18] hover:text-zinc-950"
              aria-label="Close contact form"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form
            className="flex-1 overflow-y-auto px-5 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-6"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4">
              <label className="hidden">
                Company
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-[12px] font-bold text-zinc-700">
                  Name
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-12 rounded-[8px] border border-black/[0.1] bg-white px-4 text-[14px] font-medium text-zinc-950 outline-none transition focus:border-[#8ca80d]"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-[12px] font-bold text-zinc-700">
                  Email
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 rounded-[8px] border border-black/[0.1] bg-white px-4 text-[14px] font-medium text-zinc-950 outline-none transition focus:border-[#8ca80d]"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-[12px] font-bold text-zinc-700">
                  Phone
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 rounded-[8px] border border-black/[0.1] bg-white px-4 text-[14px] font-medium text-zinc-950 outline-none transition focus:border-[#8ca80d]"
                  placeholder="Optional"
                />
              </label>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[12px] font-bold text-zinc-700">
                    Interest
                  </span>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="h-12 rounded-[8px] border border-black/[0.1] bg-white px-4 text-[14px] font-medium text-zinc-950 outline-none transition focus:border-[#8ca80d]"
                  >
                    {interestOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-[12px] font-bold text-zinc-700">
                    Move-in
                  </span>
                  <input
                    type="date"
                    value={moveIn}
                    onChange={(e) => setMoveIn(e.target.value)}
                    min="2026-05-29"
                    className="h-12 rounded-[8px] border border-black/[0.1] bg-white px-4 text-[14px] font-medium text-zinc-950 outline-none transition focus:border-[#8ca80d]"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-[12px] font-bold text-zinc-700">
                  Message
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="min-h-32 resize-none rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[14px] font-medium leading-relaxed text-zinc-950 outline-none transition focus:border-[#8ca80d]"
                  placeholder="Tell us what you are looking for."
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13.5px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {statusMessage ? (
              <p
                className={`mt-4 rounded-[8px] px-4 py-3 text-[12.5px] font-semibold leading-relaxed ${
                  status === "sent"
                    ? "bg-[#c8f535]/20 text-[#324000]"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {statusMessage}
              </p>
            ) : null}

            <p className="mt-4 text-[12px] leading-relaxed text-zinc-500">
              Inquiries are delivered to ZIM.ca and Homyspot property
              management. Include the property address and a brief introduction
              for the fastest reply.
            </p>
            <p className="mt-2 text-[12px] font-semibold leading-relaxed text-zinc-600">
              Prefer to call? Property manager:{" "}
              <a href={managerPhoneHref} className="font-extrabold text-zinc-950">
                {managerPhone}
              </a>
            </p>
          </form>
        </div>
      </aside>
    </div>
  );
}
