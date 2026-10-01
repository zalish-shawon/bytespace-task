import CourseHero, { CourseTabs } from "@/components/course/CourseHero";
import Footer from "@/components/Footer";
import { courses, getCourseBySlug } from "@/lib/courses";

const modules = [
  {
    number: 1,
    title: "Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    number: 2,
    title: "Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    number: 4,
    title: "User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    number: 5,
    title: "Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    number: 6,
    title: "Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    number: 7,
    title: "Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export default async function CourseLessonsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug) ?? courses[1];

  return (
    <main className="flex flex-col bg-white">
      <CourseHero course={course} activeTab="Lesson" />

      <section className="mx-auto flex w-[1200px] max-w-full flex-col gap-8 px-4 py-10 sm:px-8 lg:px-0 lg:py-[60px]">
        <CourseTabs slug={course.slug} active="Lesson" />

        <div>
          <h2 className="font-heading text-[24px] font-semibold text-[#040819]">Explore the Modules</h2>
          <p className="mt-3 font-satoshi text-[16px] leading-[1.7] text-[#4b4c53]">
            Immerse yourself in the course content as we break down each module into comprehensive lessons,
            providing practical insights and hands-on experiences.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-[24px] font-semibold text-[#040819]">Lesson List</h2>
          <div className="mt-4 flex flex-col gap-5">
            {modules.map((m) => (
              <div key={m.number} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d4fb20]">
                  <svg className="h-5 w-5 text-[#242528]" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                    <path d="m17 10 5-3v10l-5-3" />
                  </svg>
                </span>
                <div>
                  <p className="font-heading text-[16px] font-semibold text-[#040819]">
                    Module {m.number}: {m.title}
                  </p>
                  <p className="mt-1 font-satoshi text-[15px] leading-[1.6] text-[#4b4c53]">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-[24px] font-semibold text-[#040819]">Lesson Content</h2>
          <p className="mt-3 font-satoshi text-[16px] leading-[1.7] text-[#4b4c53]">
            Engage with each lesson through captivating video content, detailed textual explanations, and
            interactive elements. Download resources, complete assignments, and test your understanding with
            quizzes.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-[24px] font-semibold text-[#040819]">Lesson Progress Tracking</h2>
          <p className="mt-3 font-satoshi text-[16px] leading-[1.7] text-[#4b4c53]">
            Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you
            through your learning journey.
          </p>

          <div className="mt-6 flex w-[400px] max-w-full flex-col gap-2 rounded-2xl border border-[#e5e6e8] p-6">
            <p className="font-satoshi font-medium text-[14px] text-[#242528]">Learning Progress</p>
            <p className="font-heading text-[36px] font-semibold text-[#242528]">55%</p>
            <div className="relative h-2 w-full rounded-full bg-[#f0f0f0]">
              <div className="absolute inset-y-0 left-0 w-[55%] rounded-full bg-[#d4fb20]" />
            </div>
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
