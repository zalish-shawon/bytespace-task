export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#003be2] px-4 py-16 sm:px-8 lg:px-0 lg:py-[85px]">
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120.5px)",
        }}
      />
      <div className="absolute -left-10 -top-24 h-[190px] w-[190px] rounded-full bg-[#d4fb20]/70" />
      <div className="absolute -right-10 top-10 h-[150px] w-[150px] rounded-[40px] bg-[#d4fb20]/70" />
      <div className="absolute bottom-0 right-[15%] hidden h-[170px] w-[170px] rounded-full border-[22px] border-white/70 sm:block" />

      <div className="relative mx-auto flex w-[964px] max-w-full flex-col items-center gap-6 text-center sm:gap-9">
        <h2 className="font-heading max-w-full text-[26px] font-semibold leading-[1.2] text-white sm:text-[36px] lg:w-[710px] lg:text-[44px] lg:tracking-[-0.44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="font-satoshi text-[15px] leading-[1.6] text-[#e5e6e8] sm:text-[18px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <a
          href="/register"
          className="rounded-[24px] bg-[#d4fb20] px-6 py-3 font-satoshi font-medium text-[16px] text-[#242528] sm:text-[18px]"
        >
          Join as Creator
        </a>
      </div>
    </section>
  );
}
