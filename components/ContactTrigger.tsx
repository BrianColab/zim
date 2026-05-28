"use client";

type ContactTriggerProps = {
  children: React.ReactNode;
  className: string;
};

export default function ContactTrigger({
  children,
  className,
}: ContactTriggerProps) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("zim:open-contact"))}
      className={className}
    >
      {children}
    </button>
  );
}
