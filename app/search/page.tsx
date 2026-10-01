"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterBar from "@/components/search/FilterBar";
import Pagination from "@/components/search/Pagination";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses";

const PAGE_SIZE = 6;

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Featured");
  const [level, setLevel] = useState("All Levels");
  const [sort, setSort] = useState("Most relevant");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = courses.slice();

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (c) => c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q) || c.author.toLowerCase().includes(q)
      );
    }

    if (category !== "Featured") {
      list = list.filter((c) => c.category === category);
    }

    if (level !== "All Levels") {
      list = list.filter((c) => c.level === level);
    }

    if (sort === "Price: Low to High") {
      list = list.slice().sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")));
    } else if (sort === "Price: High to Low") {
      list = list.slice().sort((a, b) => parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", "")));
    } else if (sort === "Top Rated") {
      list = list.slice().sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }

    return list;
  }, [query, category, level, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function handleFilterChange(setter: (v: string) => void) {
    return (value: string) => {
      setter(value);
      setPage(1);
    };
  }

  return (
    <main className="flex flex-col bg-white">
      <section className="relative flex min-h-[320px] w-full flex-col items-center justify-center overflow-hidden bg-[#003be2] px-4 py-24 sm:px-8 sm:py-20 lg:h-[360px] lg:py-0">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120.5px)",
          }}
        />
        <Header />

        <div className="relative z-10 flex w-full flex-col items-center gap-8">
          <h1 className="text-center font-heading text-[28px] sm:text-[36px] font-semibold text-white">Find Your Next Course</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-[600px] flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <div className="flex h-[52px] flex-1 items-center gap-2 rounded-[24px] bg-white px-6 py-3">
              <svg className="h-6 w-6 shrink-0 text-[#82868e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Search by title, category, or creator"
                className="w-full bg-transparent font-satoshi text-[16px] text-[#040819] placeholder:text-[#82868e] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex shrink-0 items-center justify-center gap-2 rounded-[24px] bg-[#d4fb20] px-6 py-3 font-satoshi font-medium text-[16px] text-[#242528]"
            >
              Courses
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto flex w-[1200px] max-w-full flex-col gap-10 px-4 py-[60px] sm:px-8 lg:px-0">
        <FilterBar
          activeCategory={category}
          onCategoryChange={handleFilterChange(setCategory)}
          level={level}
          onLevelChange={handleFilterChange(setLevel)}
          sort={sort}
          onSortChange={handleFilterChange(setSort)}
        />

        {visible.length > 0 ? (
          <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((course) => (
              <CourseCard key={course.slug} {...course} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-20 text-center">
            <p className="font-heading text-[20px] font-semibold text-[#040819]">No courses found</p>
            <p className="font-satoshi text-[15px] text-[#82868e]">Try a different search term or clear your filters.</p>
          </div>
        )}

        {totalPages > 1 && <Pagination current={currentPage} total={totalPages} onChange={setPage} />}
      </section>

      <Footer />
    </main>
  );
}
