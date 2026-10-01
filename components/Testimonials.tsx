const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-14 sm:px-8 lg:px-0">
      <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-10 lg:gap-[72px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <h2 className="font-heading max-w-full text-[28px] font-semibold leading-[1.2] text-[#040819] sm:text-[36px] lg:w-[577px] lg:text-[44px] lg:tracking-[-0.44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-full font-satoshi text-[16px] leading-[1.6] text-[#82868e] sm:text-[18px] lg:w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[26px]">
          {testimonials.map((t) => (
            <div key={t.name} className="flex w-full max-w-[374px] flex-col gap-6 rounded-[24px] border border-[#ced0d3] p-6">
              <div className="h-20 w-20 rounded-full bg-[#f5f5f6]" />
              <div>
                <p className="font-heading text-[20px] font-semibold text-[#040819]">{t.name}</p>
                <p className="font-satoshi text-[14px] text-[#82868e]">{t.role}</p>
              </div>
              <p className="font-satoshi text-[16px] leading-[1.6] text-[#4b4c53]">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
