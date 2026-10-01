"use client";

import { useState } from "react";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

type CategoryPillsProps = {
  active?: string;
  onSelect?: (label: string) => void;
};

export default function CategoryPills({ active, onSelect }: CategoryPillsProps) {
  const [internalActive, setInternalActive] = useState("Featured");
  const current = active ?? internalActive;

  function handleClick(label: string) {
    if (onSelect) onSelect(label);
    else setInternalActive(label);
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {categories.map((label) => {
        const isActive = label === current;
        return (
          <button
            key={label}
            type="button"
            onClick={() => handleClick(label)}
            className={
              "rounded-[24px] px-4 py-3 font-satoshi font-medium text-[14px] sm:text-[16px] transition-colors " +
              (isActive ? "bg-[#d4fb20] text-[#242528]" : "bg-[#f5f5f6] text-[#4b4c53] hover:bg-[#ececed]")
            }
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
