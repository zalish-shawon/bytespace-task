"use client";

export default function Pagination({
  current = 1,
  total = 5,
  onChange,
}: {
  current?: number;
  total?: number;
  onChange?: (page: number) => void;
}) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        type="button"
        aria-label="Previous page"
        disabled={current <= 1}
        onClick={() => onChange?.(Math.max(1, current - 1))}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e6e8] text-[#4b4c53] disabled:opacity-40"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange?.(p)}
          className={
            "flex h-10 w-10 items-center justify-center rounded-full font-satoshi text-[14px] transition-colors " +
            (p === current ? "bg-[#040819] text-white" : "text-[#4b4c53] hover:bg-[#f5f5f6]")
          }
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        aria-label="Next page"
        disabled={current >= total}
        onClick={() => onChange?.(Math.min(total, current + 1))}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e6e8] text-[#4b4c53] disabled:opacity-40"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
