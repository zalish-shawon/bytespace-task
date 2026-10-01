import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="flex flex-col bg-white">
      <section className="relative flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-[#003be2] px-4 py-24 sm:px-8 sm:py-28 lg:py-0">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120.5px)",
          }}
        />
        <Header />

        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          <h1
            className="font-heading text-[110px] font-bold leading-none sm:text-[160px] lg:text-[220px]"
            style={{
              backgroundImage: "linear-gradient(180deg, #d4fb20 0%, #4a8f6a 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            404
          </h1>
          <h2 className="font-heading -mt-6 text-[28px] font-bold leading-tight text-white sm:-mt-10 sm:text-[40px] lg:-mt-16 lg:text-[56px]">
            The page you are looking
            <br />
            for doesn&apos;t exist
          </h2>
          <p className="font-satoshi text-[16px] text-[#e5e6e8] sm:text-[18px]">
            Try to use a correct url or go back to homepage to start again
          </p>
          <a
            href="/"
            className="mt-2 rounded-[24px] bg-[#d4fb20] px-6 py-3 font-satoshi font-medium text-[16px] text-[#242528] sm:text-[18px]"
          >
            Back to Home
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
