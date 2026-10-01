import CourseCard from "./CourseCard";
import CategoryPills from "./CategoryPills";
import SectionHeading from "./SectionHeading";
import { courses } from "@/lib/courses";

export default function CoursesGrid() {
  return (
    <section className="mx-auto flex w-[1200px] max-w-full flex-col items-center gap-10 px-4 py-16 sm:gap-14 sm:px-8 md:py-20 lg:gap-[90px] lg:px-0 lg:py-[120px]">
      <SectionHeading
        title="Discover Your Passion, Build Your Skills"
        titleWidth={588}
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        descriptionWidth={917}
      />

      <CategoryPills />

      <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[26px]">
        {courses.slice(0, 6).map((course) => (
          <CourseCard key={course.slug} {...course} />
        ))}
      </div>
    </section>
  );
}
