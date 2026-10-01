import Header from "./Header";

const heroImage = "/images/hero-person.png";
const avatar1 = "/images/avatar-01.png";
const avatar2 = "/images/avatar-02.png";
const avatar3 = "/images/avatar-03.png";
const avatar4 = "/images/avatar-04.png";

const gridBg = {
  backgroundImage:
    "repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120.5px)",
};

function SearchBar({ className = "" }: { className?: string }) {
  return (
    <div className={"flex items-center gap-4 " + className}>
      <div className="flex h-[52px] w-full max-w-[461px] items-center gap-2 rounded-[24px] bg-white px-6 py-3">
        <svg className="h-6 w-6 shrink-0 text-[#82868e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span className="truncate font-satoshi text-[16px] text-[#82868e] sm:text-[18px]">Course, topic, creator</span>
      </div>
      <button className="shrink-0 rounded-[24px] bg-[#d4fb20] px-5 py-3 font-satoshi font-medium text-[16px] text-[#242528] sm:px-6 sm:text-[18px]">
        Search
      </button>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#003be2]">
      <div className="absolute inset-0 opacity-[0.35]" style={gridBg} />
      <Header />

      {/* ---------- Mobile / tablet layout (stacked, natural flow) ---------- */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-4 pb-16 pt-[120px] text-center sm:px-8 lg:hidden">
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-heading text-[32px] font-semibold leading-[1.15] tracking-[-0.3px] text-white sm:text-[44px]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[520px] font-satoshi text-[16px] leading-[1.6] text-[#e5e6e8] sm:text-[18px]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        <SearchBar className="w-full max-w-[520px] flex-col sm:flex-row" />

        <div className="relative w-full max-w-[500px] overflow-hidden rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt="Student on a laptop wearing headphones" className="h-auto w-full object-cover" />
        </div>

        <div className="grid w-full max-w-[500px] grid-cols-1 gap-4 text-left sm:grid-cols-2">
          <div className="flex flex-col items-start gap-2 rounded-2xl bg-white p-4">
            <p className="font-satoshi font-medium text-[14px] text-[#242528]">Learning Progress</p>
            <p className="font-heading text-[36px] font-semibold tracking-[-0.36px] text-[#242528]">55%</p>
            <div className="relative h-2 w-full rounded-full bg-[#f6f6f6]">
              <div className="absolute inset-y-0 left-0 w-[55%] rounded-full bg-[#d4fb20]" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-1 rounded-2xl bg-white p-4">
            <p className="font-satoshi font-medium text-[16px] text-[#242528]">UI/UX Design</p>
            <div className="flex gap-2 font-satoshi text-[12px] text-[#82868e]">
              <span>200 Courses</span>
              <span>•</span>
              <span>1000+ Students</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 rounded-2xl bg-white p-4 sm:col-span-2">
            <p className="font-satoshi font-medium text-[16px] text-[#242528]">Happy Students</p>
            <div className="flex items-center gap-1 -mt-2">
              <span className="font-satoshi text-[12px] text-[#242528]">4.5</span>
              <span className="font-satoshi text-[12px] text-[#82868e]">(240)</span>
              <svg className="h-4 w-4 text-[#d4fb20]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6L12 2z" />
              </svg>
            </div>
            <div className="flex items-start">
              {[avatar1, avatar2, avatar3, avatar4].map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt="" width={36} height={36} className="-mr-3 rounded-full ring-2 ring-white" />
              ))}
              <div className="relative -mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#d4fb20] ring-2 ring-white">
                <span className="font-satoshi font-bold text-[11px] text-[#242528]">2K+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Desktop layout (pixel-matched to the design) ---------- */}
      <div className="relative hidden h-[1024px] w-full lg:block">
        {/* Big lime ellipse behind the person image */}
        <div className="absolute left-1/2 top-[582px] h-[1149px] w-[1149px] -translate-x-1/2 rounded-full bg-[#d4fb20]" />

        {/* Decorative scattered shapes */}
        <svg className="absolute left-[-10px] top-[195px] h-[190px] w-[190px] text-[#d4fb20]" viewBox="0 0 100 100" fill="none">
          <path d="M10 15 L60 15 L20 45 L70 45 L30 75 L80 75" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="absolute left-[50px] top-[540px] h-[110px] w-[110px] rounded-full border-[22px] border-white" />
        <svg className="absolute left-[145px] top-[365px] h-[90px] w-[90px] text-white" viewBox="0 0 100 100" fill="none">
          <path d="M15 20 L45 20 L25 50 L55 50 L35 80" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="absolute right-[10px] top-[180px] h-[150px] w-[150px] rounded-[36px] bg-[#d4fb20]" />
        <div className="absolute right-[100px] top-[360px] h-0 w-0 border-l-[55px] border-r-[55px] border-b-[90px] border-l-transparent border-r-transparent border-b-white" />
        <svg className="absolute right-[30px] top-[555px] h-[170px] w-[170px] text-white" viewBox="0 0 100 100" fill="none">
          <path d="M10 15 L60 15 L20 45 L70 45 L30 75 L80 75" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Hero content */}
        <div className="absolute left-1/2 top-[169px] flex w-[1200px] -translate-x-1/2 flex-col items-center gap-[60px]">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="font-heading w-[935px] text-[72px] font-semibold leading-[1.2] tracking-[-0.72px] text-white">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="font-satoshi text-[18px] leading-[1.6] text-[#e5e6e8]">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
          </div>

          <SearchBar />
        </div>

        {/* Person image */}
        <div className="absolute left-1/2 top-[512px] h-[541px] w-[578px] -translate-x-1/2 overflow-hidden rounded-[24px] shadow-[0_40px_72px_rgba(0,0,0,0.13)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt="Student on a laptop wearing headphones" className="h-full w-full object-cover" />
        </div>

        {/* Learning Progress card */}
        <div className="absolute left-[842px] top-[651px] flex flex-col items-start gap-2 rounded-2xl bg-white p-4 backdrop-blur-md">
          <p className="font-satoshi font-medium text-[14px] text-[#242528]">Learning Progress</p>
          <p className="font-heading text-[48px] font-semibold tracking-[-0.48px] text-[#242528]">55%</p>
          <div className="relative h-2 w-[200px] rounded-full bg-[#f6f6f6]">
            <div className="absolute inset-y-0 left-0 w-[112px] rounded-full bg-[#d4fb20]" />
          </div>
        </div>

        {/* UI/UX Design card */}
        <div className="absolute left-[404px] top-[639px] flex flex-col items-start rounded-2xl bg-white p-4 backdrop-blur-md">
          <p className="font-satoshi font-medium text-[16px] text-[#242528]">UI/UX Design</p>
          <div className="flex gap-2 font-satoshi text-[12px] text-[#82868e]">
            <span>200 Courses</span>
            <span>•</span>
            <span>1000+ Students</span>
          </div>
        </div>

        {/* Happy Students card */}
        <div className="absolute left-[328px] top-[837px] flex w-[258px] flex-col items-start justify-center gap-2 rounded-2xl bg-white p-4 backdrop-blur-md">
          <div className="flex flex-col items-start">
            <p className="font-satoshi font-medium text-[16px] text-[#242528]">Happy Students</p>
            <div className="flex items-center gap-1">
              <span className="font-satoshi text-[12px] text-[#242528]">4.5</span>
              <span className="font-satoshi text-[12px] text-[#82868e]">(240)</span>
              <svg className="h-4 w-4 text-[#d4fb20]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6L12 2z" />
              </svg>
            </div>
          </div>
          <div className="flex items-start">
            {[avatar1, avatar2, avatar3, avatar4].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt="" width={43} height={43} className="-mr-4 rounded-full ring-2 ring-white" />
            ))}
            <div className="relative -mr-4 h-[43px] w-[43px] rounded-full bg-[#d4fb20] ring-2 ring-white">
              <span className="absolute inset-0 flex items-center justify-center font-satoshi font-bold text-[12px] text-[#242528]">
                2K+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
