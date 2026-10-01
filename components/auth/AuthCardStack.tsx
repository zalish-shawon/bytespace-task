const bigDataThumb = "/images/course-thumb-bigdata.jpg";
const digitalAssetThumb = "/images/course-thumb-digital-asset.png";
const avatars = ["/images/avatar-01.png", "/images/avatar-02.png", "/images/avatar-03.png", "/images/avatar-04.png"];
const happyAvatars = ["/images/avatar-05.jpg", "/images/avatar-06.png", "/images/avatar-01.png", "/images/avatar-03.png"];
const donut = "/images/shape-donut-lime.png";
const triangle = "/images/shape-triangle-lime.png";
const spring = "/images/shape-spring-white.png";

function MiniAvatarRow({ srcs }: { srcs: string[] }) {
  return (
    <div className="flex items-center">
      {srcs.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={i} src={src} alt="" width={32} height={32} className="-mr-2 rounded-full ring-2 ring-white" />
      ))}
      <span className="relative -mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#242528] font-satoshi font-medium text-[11px] text-white ring-2 ring-white">
        26+
      </span>
    </div>
  );
}

export default function AuthCardStack() {
  return (
    <div className="relative h-[640px] w-[610px] max-w-full shrink-0">
      {/* Back card: Build Digital Asset (partially hidden) */}
      <div className="absolute left-[15px] top-[130px] h-[360px] w-[325px] overflow-hidden rounded-[24px] border border-[#ced0d3] bg-white">
        <div className="relative m-[15px] h-[130px] overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={digitalAssetThumb} alt="Build Digital Asset" className="h-full w-full object-cover" />
        </div>
        <div className="px-[15px]">
          <p className="font-heading text-[18px] font-semibold text-black">Build Digital Asset</p>
          <p className="font-satoshi text-[12px] text-[#4f4f4f]">
            by <span className="text-[#003be2]">purepearl studio</span>
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-[24px] bg-[#f5f5f6] px-3 py-1 font-satoshi font-medium text-[12px] text-[#4b4c53]">
              Beginner
            </span>
          </div>
          <p className="mt-3 font-heading text-[18px] font-semibold text-[#003be2]">
            $25<span className="font-satoshi text-[11px] font-normal text-[#4f4f4f]">/lifetime</span>
          </p>
        </div>
      </div>

      {/* Front card: the Power of Big Data */}
      <div className="absolute left-[148px] top-[45px] h-[415px] w-[347px] overflow-hidden rounded-[24px] border border-[#ced0d3] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
        <div className="relative m-[15px] h-[172px] overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bigDataThumb} alt="the Power of Big Data" className="h-full w-full object-cover" />
          <div className="absolute bottom-[10px] left-[10px] flex gap-2">
            {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((l) => (
              <span
                key={l}
                className="rounded-[24px] bg-[rgba(246,246,246,0.6)] px-2 py-1 font-satoshi font-medium text-[10px] text-[#4f4f4f] backdrop-blur"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-start justify-between px-[15px]">
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-heading text-[20px] font-semibold text-black">the Power of Big Data</p>
              <p className="font-satoshi text-[12px] text-[#4f4f4f]">
                by <span className="text-[#003be2]">purepearl studio</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-[24px] bg-[#f5f5f6] px-3 py-1 font-satoshi font-medium text-[12px] text-[#4b4c53]">
                Beginner
              </span>
              <MiniAvatarRow srcs={avatars} />
            </div>
            <p className="font-heading text-[20px] font-semibold text-[#003be2]">
              $25<span className="font-satoshi text-[12px] font-normal text-[#4f4f4f]">/lifetime</span>
            </p>
          </div>
          <div className="flex items-center gap-1 pt-1">
            <span className="font-satoshi text-[16px] text-[#4f4f4f]">4.5</span>
            <svg className="h-5 w-5 text-[#d4fb20]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6L12 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Happy Students card */}
      <div className="absolute left-[258px] top-[480px] flex h-[138px] w-[257px] flex-col justify-center gap-2 rounded-2xl bg-[#d4fb20] p-4">
        <div>
          <p className="font-satoshi font-medium text-[16px] text-[#242528]">Happy Students</p>
          <div className="flex items-center gap-1">
            <span className="font-satoshi text-[12px] text-[#242528]">4.5</span>
            <span className="font-satoshi text-[12px] text-[#3d3f14]">(240)</span>
            <svg className="h-3.5 w-3.5 text-[#242528]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6L12 2z" />
            </svg>
          </div>
        </div>
        <MiniAvatarRow srcs={happyAvatars} />
      </div>

      {/* Decorative shapes */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={donut} alt="" className="absolute left-[85px] top-[78px] h-[114px] w-[125px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={triangle} alt="" className="absolute left-[35px] top-[482px] h-[118px] w-[123px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={spring} alt="" className="absolute left-[420px] top-[400px] h-[100px] w-[98px]" />
    </div>
  );
}
