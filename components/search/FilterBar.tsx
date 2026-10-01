"use client";

const categories = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const sorts = ["Most relevant", "Price: Low to High", "Price: High to Low", "Top Rated"];

function PillButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 whitespace-nowrap rounded-[24px] border border-[#e5e6e8] px-4 py-[10px] font-satoshi text-[14px] text-[#242528] hover:border-[#003be2]/40"
    >
      {icon}
      {label}
    </button>
  );
}

export type FilterBarProps = {
  showCategories?: boolean;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
  level?: string;
  onLevelChange?: (level: string) => void;
  sort?: string;
  onSortChange?: (sort: string) => void;
};

export default function FilterBar({
  showCategories = true,
  activeCategory = "Featured",
  onCategoryChange,
  level = "All Levels",
  onLevelChange,
  sort = "Most relevant",
  onSortChange,
}: FilterBarProps) {
  function cycleLevel() {
    const i = levels.indexOf(level);
    onLevelChange?.(levels[(i + 1) % levels.length]);
  }
  function cycleSort() {
    const i = sorts.indexOf(sort);
    onSortChange?.(sorts[(i + 1) % sorts.length]);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <PillButton
            label="Filter"
            icon={
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 5h16M7 12h10M10 19h4" strokeLinecap="round" />
              </svg>
            }
          />
          <PillButton
            label={level}
            onClick={cycleLevel}
            icon={
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 19V10M12 19V5M19 19v-6" strokeLinecap="round" />
              </svg>
            }
          />
          <PillButton
            label="Category"
            icon={
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 20l4-11 4 11M6 16h4M14 8l3-4 3 4M14 12h6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
        </div>
        <PillButton
          label={sort}
          onClick={cycleSort}
          icon={
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h10M4 18h6" strokeLinecap="round" />
            </svg>
          }
        />
      </div>

      {showCategories && (
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => onCategoryChange?.(c)}
              className={
                "rounded-[24px] px-4 py-[10px] font-satoshi font-medium text-[14px] transition-colors " +
                (c === activeCategory ? "bg-[#d4fb20] text-[#242528]" : "bg-[#f5f5f6] text-[#4b4c53] hover:bg-[#ececed]")
              }
            >
              {c}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
