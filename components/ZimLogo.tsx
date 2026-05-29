type ZimLogoProps = {
  compact?: boolean;
};

export default function ZimLogo({ compact = false }: ZimLogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-[8px] bg-[#c8f535] text-[#07111b] shadow-[0_10px_28px_rgba(200,245,53,0.18)] ${
          compact ? "h-7 w-7" : "h-10 w-10"
        }`}
      >
        <span
          className={`font-heading font-black tracking-[-0.04em] ${
            compact ? "text-[10px]" : "text-[13px]"
          }`}
        >
          ZIM
        </span>
      </span>
      <span className="grid leading-none">
        <span
          className={`font-heading font-black tracking-[0.04em] text-white ${
            compact ? "text-[16px]" : "text-[19px]"
          }`}
        >
          ZIM.ca
        </span>
        {!compact ? (
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/45">
            Student Rentals
          </span>
        ) : null}
      </span>
    </span>
  );
}
