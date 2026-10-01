import type { ReactElement } from "react";
import SectionHeading from "./SectionHeading";

const categories: { label: string; icon: ReactElement }[] = [
  {
    label: "Design",
    icon: (
      <path d="M4 20l4-1 10-10-3-3L5 16l-1 4zM14 6l3 3" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "Development",
    icon: <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    label: "IT & Software",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8M12 16v4" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Business",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="1.5" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </>
    ),
  },
  {
    label: "Marketing",
    icon: <path d="M3 11v2l14 5V6L3 11zm14 0 5-3v10l-5-3" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    label: "Photography",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <circle cx="12" cy="13.5" r="3.5" />
        <path d="M9 7l1.5-2h3L15 7" />
      </>
    ),
  },
];

export default function CategoryIcons() {
  return (
    <section className="mx-auto flex w-[1200px] max-w-full flex-col items-center gap-10 px-4 py-10 sm:px-8 sm:py-12 lg:gap-[90px] lg:px-0 lg:py-[60px]">
      <SectionHeading
        title="Explore Diverse Learning Paths at Bytespace"
        titleWidth={792}
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        descriptionWidth={917}
      />

      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map(({ label, icon }) => (
          <div
            key={label}
            className="flex aspect-square w-full max-w-[167px] flex-col items-center justify-center gap-3 rounded-[24px] bg-[#f5f5f6] p-4 sm:gap-4"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white sm:h-[60px] sm:w-[60px]">
              <svg className="h-7 w-7 text-[#003be2] sm:h-9 sm:w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                {icon}
              </svg>
            </span>
            <p className="text-center font-satoshi font-medium text-[14px] text-[#242528] sm:text-[16px]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
