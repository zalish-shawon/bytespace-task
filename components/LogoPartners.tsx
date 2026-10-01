import type { ReactElement } from "react";

const icons: ReactElement[] = [
  // Leaf / cloud swoosh
  <path key="1" d="M4 14c0-5 4-9 9-9 4 0 7 2.5 8 6-1-1-2.5-1.5-4-1.5-4 0-7 3-7 7 0 .7.1 1.3.3 2C7 18 4 16.5 4 14Z" />,
  // Sun burst
  <g key="2">
    <circle cx="12" cy="12" r="4" />
    <path
      d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
    />
  </g>,
  // Lightning bolt
  <path key="3" d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  // Infinity / paw loops
  <g key="4">
    <circle cx="8" cy="12" r="5" />
    <circle cx="16" cy="12" r="5" />
  </g>,
  // Spiral
  <path
    key="5"
    d="M12 4a8 8 0 1 1-5.7 2.3M12 8a4 4 0 1 1-2.8 1.2M12 12a1.5 1.5 0 1 1-1 .4"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
  />,
];

export default function LogoPartners() {
  return (
    <section className="w-full bg-[#f5f5f6] px-4 py-10 sm:px-8 lg:py-[80px]">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-6 text-[#82868e] sm:gap-x-[72px]">
        {icons.map((icon, i) => (
          <div key={i} className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="sm:h-7 sm:w-7">
              {icon}
            </svg>
            <span className="font-heading text-[16px] font-semibold sm:text-[20px]">Logoipsum</span>
          </div>
        ))}
      </div>
    </section>
  );
}
