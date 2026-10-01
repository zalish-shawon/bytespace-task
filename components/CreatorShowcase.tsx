import CourseCard from "./CourseCard";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <p className="font-heading text-[28px] font-semibold text-[#040819] sm:text-[36px]">{value}</p>
      <p className="font-satoshi text-[15px] text-[#82868e] sm:text-[18px]">{label}</p>
    </div>
  );
}

function FeatureRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4fb20]">
        <svg className="h-4 w-4 text-[#242528]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <p className="font-satoshi font-medium text-[16px] text-[#040819] sm:text-[18px]">{label}</p>
    </div>
  );
}

export default function CreatorShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-8 md:py-20 lg:px-0 lg:py-[120px]">
      <div className="mx-auto flex w-[1258px] max-w-full flex-col gap-16 lg:gap-[90px]">
        {/* Block A: growth stats + course preview */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="flex w-full flex-col gap-6 lg:w-[574px] lg:gap-[36px]">
            <h2 className="font-heading text-[28px] font-semibold leading-[1.2] text-[#040819] sm:text-[36px] lg:text-[44px] lg:tracking-[-0.44px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="font-satoshi text-[16px] leading-[1.6] text-[#82868e] sm:text-[18px]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
              career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark
              on a new career path entirely, we have the resources you need.
            </p>
            <div className="flex gap-10 sm:gap-[56px]">
              <StatCard value="12K" label="Students" />
              <StatCard value="70+" label="Courses" />
              <StatCard value="16" label="Creators" />
            </div>
          </div>

          {/* Desktop: full floating composition */}
          <div className="relative hidden w-[577px] shrink-0 lg:block">
            <div
              className="h-[540px] w-[577px] rounded-[24px]"
              style={{ background: "linear-gradient(135deg,#003be2,#001a6e)" }}
            />
            <div className="absolute -bottom-10 -left-10 w-[280px] scale-90">
              <CourseCard title="Learn Figma from Basic" price="$25" rating="4.5" students="26+" />
            </div>
            <div className="absolute -right-6 top-10 flex flex-col items-start gap-2 rounded-2xl bg-white p-4 shadow-lg">
              <p className="font-satoshi font-medium text-[14px] text-[#242528]">Learning Progress</p>
              <p className="font-heading text-[48px] font-semibold tracking-[-0.48px] text-[#242528]">55%</p>
              <div className="relative h-2 w-[200px] rounded-full bg-[#f6f6f6]">
                <div className="absolute inset-y-0 left-0 w-[112px] rounded-full bg-[#d4fb20]" />
              </div>
            </div>
          </div>

          {/* Mobile/tablet: simplified stacked visual */}
          <div className="relative w-full max-w-[480px] lg:hidden">
            <div
              className="h-[260px] w-full rounded-[24px] sm:h-[320px]"
              style={{ background: "linear-gradient(135deg,#003be2,#001a6e)" }}
            />
            <div className="mt-4 flex flex-col gap-2 rounded-2xl border border-[#e5e6e8] bg-white p-4">
              <p className="font-satoshi font-medium text-[14px] text-[#242528]">Learning Progress</p>
              <p className="font-heading text-[36px] font-semibold tracking-[-0.36px] text-[#242528]">55%</p>
              <div className="relative h-2 w-full rounded-full bg-[#f6f6f6]">
                <div className="absolute inset-y-0 left-0 w-[55%] rounded-full bg-[#d4fb20]" />
              </div>
            </div>
          </div>
        </div>

        {/* Block B: revenue stats + course editor pitch */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Desktop: full floating composition */}
          <div className="relative hidden w-[541px] shrink-0 lg:block">
            <div
              className="ml-7 h-[596px] w-[435px] rounded-[24px]"
              style={{ background: "linear-gradient(135deg,#0891b2,#0f172a)" }}
            />
            <div className="absolute left-0 top-11 flex w-[232px] flex-col gap-1 rounded-2xl bg-white p-4 shadow-lg">
              <p className="font-satoshi font-medium text-[14px] text-[#242528]">Total Revenue</p>
              <p className="font-satoshi text-[10px] text-[#82868e]">July 1-28</p>
              <div className="flex items-center gap-3 pt-2">
                <p className="font-heading text-[32px] font-semibold text-[#242528]">$120.29</p>
                <span className="rounded-full bg-[#d4fb20] px-2 py-1 font-satoshi font-medium text-[12px] text-[#242528]">
                  +12$
                </span>
              </div>
              <div className="mt-2 h-2 w-[200px] rounded-full bg-[#f6f6f6]" />
            </div>
            <div className="absolute left-0 top-[194px] flex w-[134px] flex-col gap-1 rounded-2xl bg-white p-4 shadow-lg">
              <p className="font-satoshi font-medium text-[14px] text-[#242528]">Year to Date</p>
              <p className="font-satoshi text-[10px] text-[#82868e]">2023</p>
              <p className="font-heading text-[24px] font-semibold text-[#242528]">$1,200.38</p>
              <span className="w-fit rounded-full bg-[#d4fb20] px-2 py-1 font-satoshi font-medium text-[12px] text-[#242528]">
                +12$
              </span>
            </div>
            <div className="absolute bottom-8 left-[283px] flex w-[258px] flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg">
              <div>
                <p className="font-satoshi font-medium text-[16px] text-[#242528]">Happy Students</p>
                <p className="font-satoshi text-[12px] text-[#82868e]">4.5 (240) ★</p>
              </div>
              <div className="flex h-[43px] items-center">
                <span className="flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#d4fb20] font-satoshi font-bold text-[12px] text-[#242528]">
                  2K+
                </span>
              </div>
            </div>
          </div>

          {/* Mobile/tablet: simplified stacked visual */}
          <div className="relative w-full max-w-[480px] lg:hidden">
            <div
              className="h-[260px] w-full rounded-[24px] sm:h-[320px]"
              style={{ background: "linear-gradient(135deg,#0891b2,#0f172a)" }}
            />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1 rounded-2xl border border-[#e5e6e8] bg-white p-4">
                <p className="font-satoshi font-medium text-[13px] text-[#242528]">Total Revenue</p>
                <p className="font-heading text-[22px] font-semibold text-[#242528]">$120.29</p>
                <span className="w-fit rounded-full bg-[#d4fb20] px-2 py-1 font-satoshi font-medium text-[11px] text-[#242528]">
                  +12$
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-2xl border border-[#e5e6e8] bg-white p-4">
                <p className="font-satoshi font-medium text-[13px] text-[#242528]">Happy Students</p>
                <p className="font-satoshi text-[12px] text-[#82868e]">4.5 (240) ★</p>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d4fb20] font-satoshi font-bold text-[11px] text-[#242528]">
                  2K+
                </span>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 lg:w-[580px] lg:gap-[36px]">
            <h2 className="font-heading text-[24px] font-semibold leading-[1.2] text-[#040819] sm:text-[30px] lg:text-[36px] lg:tracking-[-0.36px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="font-satoshi text-[16px] leading-[1.6] text-[#82868e] sm:text-[18px]">
              ByteSpace supports individuals or entities in the creation, publication, and administration of
              educational courses.
            </p>
            <div className="flex flex-col gap-4 sm:gap-5">
              <FeatureRow label="Share Your Expertise" />
              <FeatureRow label="Monetize Your Passion" />
              <FeatureRow label="Flexibility and Autonomy" />
              <FeatureRow label="Build a Community" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
