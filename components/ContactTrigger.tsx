"use client";

type ContactTriggerProps = {
  children: React.ReactNode;
  className: string;
  onOpen?: () => void;
  payload?: {
    roomType?: string;
    moveIn?: string;
    lease?: string;
  };
};

export default function ContactTrigger({
  children,
  className,
  onOpen,
  payload,
}: ContactTriggerProps) {
  return (
    <button
      type="button"
      onClick={() => {
        onOpen?.();
        window.dispatchEvent(
          new CustomEvent("zim:open-contact", { detail: payload })
        );
      }}
      className={className}
    >
      {children}
    </button>
  );
}
