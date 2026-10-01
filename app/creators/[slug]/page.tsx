import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterBar from "@/components/search/FilterBar";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses";

export default function CreatorProfilePage() {
  return (
    <main className="flex flex-col bg-white">
      <section className="relative w-full overflow-hidden bg-[#003be2] px-4 pb-12 pt-[110px] sm:px-8 sm:pt-[130px] lg:px-0 lg:pb-[80px] lg:pt-[150px]">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120.5px)",
          }}
        />
        <Header />

        <div className="relative z-10 mx-auto flex w-[1200px] max-w-full flex-col gap-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/creator-avatar.png"
              alt="PurePearl Studio"
              className="h-[72px] w-[72px] shrink-0 rounded-2xl object-cover sm:h-[90px] sm:w-[90px]"
            />
            <div className="flex flex-col items-center gap-2 pt-1 sm:items-start">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                <h1 className="font-heading text-[24px] font-semibold text-white sm:text-[28px]">PurePearl Studio</h1>
                <span className="rounded-[24px] bg-[#d4fb20] px-3 py-1 font-satoshi font-medium text-[13px] text-[#242528]">
                  Creator
                </span>
              </div>
              <p className="font-satoshi text-[16px] text-[#e5e6e8]">Passionate UI/UX, Web designer</p>
            </div>
          </div>

          <p className="max-w-[900px] text-center font-satoshi text-[15px] leading-[1.7] text-[#e5e6e8] sm:text-left sm:text-[16px]">
            Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and
            inspiration that drive my creative journey. Let&apos;s explore and learn together! Dive into my creative
            portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects,
            each piece tells a unique story. Explore the world of creativity with me.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="rounded-[24px] bg-white px-4 py-2 font-satoshi text-[14px] text-[#242528]">
                3 Products
              </span>
              <span className="rounded-[24px] bg-white px-4 py-2 font-satoshi text-[14px] text-[#242528]">
                12 Followers
              </span>
            </div>
            <button className="rounded-[24px] bg-[#d4fb20] px-6 py-2 font-satoshi font-medium text-[14px] text-[#242528]">
              Follow
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-[1200px] max-w-full flex-col gap-10 px-4 py-10 sm:px-8 lg:px-0 lg:py-[60px]">
        <FilterBar showCategories={false} />

        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[26px]">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.slug} {...course} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
