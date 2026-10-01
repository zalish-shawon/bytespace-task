export default function SectionHeading({
  title,
  description,
  titleWidth,
  descriptionWidth,
}: {
  title: string;
  description: string;
  titleWidth?: number;
  descriptionWidth?: number;
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2
        className="font-heading max-w-full text-[28px] font-semibold leading-[1.2] tracking-[-0.3px] text-[#040819] sm:text-[36px] lg:text-[44px] lg:tracking-[-0.44px]"
        style={titleWidth ? { maxWidth: titleWidth } : undefined}
      >
        {title}
      </h2>
      <p
        className="max-w-full font-satoshi text-[15px] leading-[1.6] text-[#82868e] sm:text-[16px] lg:text-[18px]"
        style={descriptionWidth ? { maxWidth: descriptionWidth } : undefined}
      >
        {description}
      </p>
    </div>
  );
}
