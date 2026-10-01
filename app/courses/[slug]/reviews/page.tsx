import CourseHero, { CourseTabs } from "@/components/course/CourseHero";
import Footer from "@/components/Footer";
import { courses, getCourseBySlug } from "@/lib/courses";

const ratingBreakdown = [
  { stars: 5, count: 720 },
  { stars: 4, count: 120 },
  { stars: 3, count: 21 },
  { stars: 2, count: 12 },
  { stars: 1, count: 16 },
];

const reviews = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/images/avatar-04.png",
    text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/images/avatar-01.png",
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/images/avatar-05.jpg",
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/images/avatar-06.png",
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={"h-4 w-4 " + (i < count ? "text-[#d4fb20]" : "text-[#e5e6e8]")} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default async function CourseReviewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug) ?? courses[1];
  const maxCount = Math.max(...ratingBreakdown.map((r) => r.count));

  return (
    <main className="flex flex-col bg-white">
      <CourseHero course={course} activeTab="Reviews" />

      <section className="mx-auto flex w-[1200px] max-w-full flex-col gap-8 px-4 py-10 sm:px-8 lg:px-0 lg:py-[60px]">
        <CourseTabs slug={course.slug} active="Reviews" />

        <div>
          <h2 className="font-heading text-[24px] font-semibold text-[#040819]">What Learners Are Saying</h2>
          <p className="mt-3 max-w-[720px] font-satoshi text-[16px] leading-[1.7] text-[#4b4c53]">
            Discover what our learners have to say about their experience with &apos;{course.title}: A Comprehensive
            Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of
            mastering this subject.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 rounded-2xl border border-[#e5e6e8] p-6 sm:flex-row sm:gap-8">
          <div className="flex h-[110px] w-[110px] shrink-0 flex-col items-center justify-center gap-1 rounded-xl bg-[#d4fb20]">
            <span className="font-satoshi text-[13px] text-[#242528]">Ratings</span>
            <span className="font-heading text-[32px] font-semibold text-[#242528]">4.7</span>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            {ratingBreakdown.map((r) => (
              <div key={r.stars} className="flex items-center gap-4">
                <div className="h-2 flex-1 rounded-full bg-[#f0f0f0]">
                  <div
                    className="h-2 rounded-full bg-[#d4fb20]"
                    style={{ width: `${(r.count / maxCount) * 100}%` }}
                  />
                </div>
                <Stars count={r.stars} />
                <span className="w-10 shrink-0 font-satoshi text-[14px] text-[#82868e]">{r.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-[20px] font-semibold text-[#040819]">Individual Reviews:</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {["All rating", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"].map((label, i) => (
              <button
                key={label}
                className={
                  "rounded-[24px] px-4 py-2 font-satoshi font-medium text-[14px] " +
                  (i === 0 ? "bg-[#d4fb20] text-[#242528]" : "bg-[#f5f5f6] text-[#4b4c53]")
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-[#e5e6e8] p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.avatar} alt={r.name} width={44} height={44} className="rounded-full" />
                  <div>
                    <p className="font-satoshi font-medium text-[15px] text-[#040819]">{r.name}</p>
                    <p className="font-satoshi text-[13px] text-[#82868e]">{r.role}</p>
                  </div>
                </div>
                <span className="font-satoshi text-[13px] text-[#82868e]">{r.time}</span>
              </div>
              <div className="mt-3">
                <Stars />
              </div>
              <p className="mt-3 font-satoshi text-[15px] leading-[1.6] text-[#4b4c53]">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}
