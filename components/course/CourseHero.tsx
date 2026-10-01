import Header from "../Header";
import type { Course } from "@/lib/courses";

const curriculum = [
  { title: "Introduction to Digital Assets", time: "12 mins" },
  { title: "Design Principles for Impacts", time: "21 mins" },
  { title: "Advanced Techniques in Digital Creation", time: "16 mins" },
];

const includes = [
  { label: "Learning Resources", icon: "book" },
  { label: "Quality Lesson Videos", icon: "video" },
  { label: "Certificate of Completion", icon: "certificate" },
  { label: "Private Consultation", icon: "chat" },
];

function IncludeIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    book: <path d="M4 4h11a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V4Z" />,
    video: (
      <>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="m16 10 5-3v10l-5-3" />
      </>
    ),
    certificate: (
      <>
        <circle cx="12" cy="9" r="6" />
        <path d="M8 14l-2 7 6-3 6 3-2-7" />
      </>
    ),
    chat: <path d="M4 4h16v12H8l-4 4V4Z" />,
  };
  return (
    <svg
      className="h-5 w-5 shrink-0 text-[#003be2]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

export const courseTabs = [
  { label: "About", href: (slug: string) => `/courses/${slug}` },
  { label: "Lesson", href: (slug: string) => `/courses/${slug}/lessons` },
  { label: "Reviews", href: (slug: string) => `/courses/${slug}/reviews` },
];

export default function CourseHero({ course, activeTab }: { course: Course; activeTab: "About" | "Lesson" | "Reviews" }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#003be2] px-4 pb-12 sm:px-8 lg:px-0 lg:pb-[80px]">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120.5px)",
        }}
      />
      <Header />

      <div className="relative z-10 mx-auto flex w-[1200px] max-w-full flex-col gap-6 pt-[110px] sm:pt-[130px] lg:pt-[150px]">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-[24px] font-semibold text-white sm:text-[30px] lg:text-[36px]">
              {course.title}: A Comprehensive Guide
            </h1>
            <p className="font-satoshi text-[16px] text-[#e5e6e8] sm:text-[18px]">
              Unlock the Power of {course.category} with Expert Guidance
            </p>
            <p className="font-satoshi text-[16px] text-[#e5e6e8]">
              by <span className="text-[#d4fb20]">{course.author}</span>
            </p>
          </div>
          <button className="flex shrink-0 items-center gap-2 rounded-[24px] bg-[#d4fb20] px-5 py-[10px] font-satoshi font-medium text-[14px] text-[#242528]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Share
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 rounded-[24px] bg-white px-4 py-2 font-satoshi text-[13px] text-[#242528] sm:text-[14px]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 18v-3M12 18V9M18 18V6" strokeLinecap="round" />
            </svg>
            {course.level}
          </span>
          <span className="flex items-center gap-2 rounded-[24px] bg-white px-4 py-2 font-satoshi text-[13px] text-[#242528] sm:text-[14px]">
            <svg className="h-4 w-4 text-[#d4fb20]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6L12 2z" />
            </svg>
            {course.rating} (172 reviews)
          </span>
          <span className="flex items-center gap-2 rounded-[24px] bg-white px-4 py-2 font-satoshi text-[13px] text-[#242528] sm:text-[14px]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="9" cy="8" r="3" />
              <path d="M2 20c0-3 3-5 7-5s7 2 7 5M17 8a3 3 0 1 1 0-6M17 11c3 0 5 2 5 5" strokeLinecap="round" />
            </svg>
            199 Students
          </span>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="relative h-[220px] w-full overflow-hidden rounded-2xl sm:h-[340px] lg:h-[430px] lg:w-[720px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/course-video-thumb.jpg" alt={course.title} className="h-full w-full object-cover" />
            <button
              aria-label="Play preview video"
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-black/40 backdrop-blur sm:h-16 sm:w-16"
            >
              <svg className="ml-1 h-6 w-6 text-white sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          <div className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 lg:w-[350px]">
            <div>
              <p className="font-heading text-[18px] font-semibold text-[#040819]">112 Lessons (24 hours)</p>
              <div className="mt-4 flex flex-col gap-3">
                {curriculum.map((c, i) => (
                  <div key={c.title} className="flex items-start justify-between gap-3">
                    <p className="font-satoshi text-[14px] text-[#4b4c53]">
                      <span className="text-[#82868e]">0{i + 1}</span> {c.title}
                    </p>
                    <span className="shrink-0 font-satoshi text-[12px] text-[#003be2]">{c.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 font-satoshi text-[13px] text-[#82868e]">99 more videos</p>
            </div>

            <p className="font-satoshi text-[13px] text-[#4b4c53]">
              Ready to Dive In? Enroll Now and Start Building Your Future!
            </p>

            <p className="font-heading text-[28px] font-semibold text-[#003be2]">
              {course.price}
              <span className="font-satoshi text-[13px] font-normal text-[#82868e]">/lifetime</span>
            </p>

            <button className="rounded-[24px] bg-[#d4fb20] py-3 font-satoshi font-medium text-[16px] text-[#242528]">
              Enroll Now
            </button>

            <div className="flex flex-col gap-3 border-t border-[#e5e6e8] pt-4">
              <p className="font-satoshi font-medium text-[14px] text-[#040819]">This course include</p>
              {includes.map((inc) => (
                <div key={inc.label} className="flex items-center gap-2">
                  <IncludeIcon name={inc.icon} />
                  <span className="font-satoshi text-[14px] text-[#4b4c53]">{inc.label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 border-t border-[#e5e6e8] pt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/avatar-04.png" alt={course.author} width={40} height={40} className="rounded-full" />
              <div>
                <p className="font-satoshi font-medium text-[14px] text-[#040819]">PureRead Studio</p>
                <p className="font-satoshi text-[12px] text-[#82868e]">Professional Creator</p>
              </div>
            </div>
            <p className="font-satoshi text-[13px] text-[#4b4c53]">
              Ready to Dive In? Enroll Now and Start Building Your Future!
            </p>
            <button className="rounded-[24px] border border-[#e5e6e8] py-3 font-satoshi font-medium text-[14px] text-[#040819]">
              See Full Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CourseTabs({ slug, active }: { slug: string; active: "About" | "Lesson" | "Reviews" }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {courseTabs.map((tab) => (
        <a
          key={tab.label}
          href={tab.href(slug)}
          className={
            "rounded-[24px] px-5 py-[10px] font-satoshi font-medium text-[14px] " +
            (tab.label === active ? "bg-[#d4fb20] text-[#242528]" : "bg-[#f5f5f6] text-[#4b4c53]")
          }
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
}
