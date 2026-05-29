"use client";

type ContactTriggerProps = {
  children: React.ReactNode;
  className: string;
  payload?: {
    roomType?: string;
    moveIn?: string;
    lease?: string;
  };
};

export default function ContactTrigger({
  children,
  className,
  payload,
}: ContactTriggerProps) {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent("zim:open-contact", { detail: payload })
        )
      }
      className={className}
    >
      {children}
    </button>
  );
}
