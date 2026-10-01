import CourseHero, { CourseTabs } from "@/components/course/CourseHero";
import Footer from "@/components/Footer";
import { courses, getCourseBySlug } from "@/lib/courses";

const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const sneakPeek = [
  "/images/sneak-sketch-hand.png",
  "/images/sneak-code-laptop.jpg",
  "/images/sneak-monitor-plant.jpg",
  "/images/course-thumb-app.jpg",
];

export default async function CourseDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug) ?? courses[1];

  return (
    <main className="flex flex-col bg-white">
      <CourseHero course={course} activeTab="About" />

      <section className="mx-auto flex w-[1200px] max-w-full flex-col gap-8 px-4 py-10 sm:px-8 lg:px-0 lg:py-[60px]">
        <CourseTabs slug={course.slug} active="About" />

        <div>
          <h2 className="font-heading text-[24px] font-semibold text-[#040819]">Description</h2>
          <div className="mt-4 flex flex-col gap-4 font-satoshi text-[16px] leading-[1.7] text-[#4b4c53]">
            <p>{course.description}</p>
            <p>
              In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the
              foundational concepts that form the backbone of this subject. Understand the fundamental elements
              that constitute compelling, high-quality content and gain proficiency in leveraging these elements
              effectively.
            </p>
            <p>
              As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the
              nuances of the principles that drive impactful work. Engage in hands-on exercises that reinforce your
              understanding, allowing you to apply these principles in practical scenarios.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-[24px] font-semibold text-[#040819]">Sneak Peak</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {sneakPeek.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt="" className="h-[140px] w-full rounded-xl object-cover" />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-[24px] font-semibold text-[#040819]">Key Points</h2>
          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {keyPoints.map((p) => (
              <div key={p} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#003be2]">
                  <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="font-satoshi text-[15px] text-[#242528]">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}
