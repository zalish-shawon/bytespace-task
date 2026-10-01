import Link from "next/link";

const avatar1 = "/images/avatar-01.png";
const avatar2 = "/images/avatar-02.png";
const avatar3 = "/images/avatar-03.png";
const avatar4 = "/images/avatar-04.png";

export type Course = {
  slug?: string;
  title: string;
  author?: string;
  price: string;
  rating: string;
  students: string;
  level?: string;
  lessons?: string;
  duration?: string;
  comments?: string;
  image?: string;
  imageFrom?: string;
  imageTo?: string;
};

export default function CourseCard({
  slug,
  title,
  author = "purepearl studio",
  price,
  rating,
  students,
  level = "Beginner",
  lessons = "17 Lessons",
  duration = "2 hours 16 mins",
  comments = "59 Comments",
  image,
  imageFrom = "#003be2",
  imageTo = "#001a6e",
}: Course) {
  const card = (
    <div className="w-[373px] max-w-full overflow-hidden rounded-[24px] border border-[#ced0d3] bg-white">
      {/* Thumbnail */}
      <div
        className="relative m-[15px] h-[195px] overflow-hidden rounded-xl"
        style={!image ? { background: `linear-gradient(135deg, ${imageFrom}, ${imageTo})` } : undefined}
      >
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="h-full w-full object-cover" />
        )}
        <div className="absolute bottom-[15px] left-[13px] flex gap-3">
          {[lessons, duration, comments].map((label) => (
            <span
              key={label}
              className="rounded-[24px] bg-[rgba(246,246,246,0.6)] px-3 py-[6px] font-satoshi font-medium text-[12px] text-[#4f4f4f] backdrop-blur"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex items-start justify-between px-[15px] pb-[15px]">
        <div className="flex flex-col items-start gap-4">
          <div>
            <p className="font-heading text-[20px] font-semibold tracking-[-0.2px] text-black">{title}</p>
            <p className="font-satoshi text-[12px] text-[#4f4f4f]">
              by <span className="text-[#003be2]">{author}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-[24px] bg-[#f5f5f6] px-3 py-[6px] font-satoshi font-medium text-[12px] text-[#4b4c53]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 18v-3M12 18V9M18 18V6" strokeLinecap="round" />
              </svg>
              {level}
            </span>
            <div className="flex items-center">
              {[avatar1, avatar2, avatar3, avatar4].map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt="" width={32} height={32} className="-mr-2 rounded-full ring-2 ring-white" />
              ))}
              <span className="relative -mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#d4fb20] ring-2 ring-white">
                <span className="font-satoshi font-medium text-[12px] text-[#242528]">{students}</span>
              </span>
            </div>
          </div>

          <div className="flex items-end">
            <span className="font-heading text-[20px] font-semibold tracking-[-0.2px] text-[#003be2]">{price}</span>
            <span className="font-satoshi text-[12px] text-[#4f4f4f]">/lifetime</span>
          </div>
        </div>

        <div className="flex items-center gap-1 pt-0">
          <span className="font-satoshi text-[18px] text-[#4f4f4f]">{rating}</span>
          <svg className="h-6 w-6 text-[#d4fb20]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.2l7.1-.6L12 2z" />
          </svg>
        </div>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link href={`/courses/${slug}`} className="block">
        {card}
      </Link>
    );
  }

  return card;
}
