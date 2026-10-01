import Logo from "../Logo";
import AuthCardStack from "./AuthCardStack";

export default function AuthLayout({
  eyebrow,
  description,
  children,
}: {
  eyebrow: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#003be2] px-4 py-16 sm:px-8 lg:flex-row lg:py-[120px]">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 120.5px)",
        }}
      />

      {/* Left: logo, copy, card stack */}
      <div className="relative z-10 flex w-full max-w-[520px] flex-col items-center gap-8 text-center lg:w-[640px] lg:max-w-full lg:items-start lg:gap-10 lg:px-[110px] lg:text-left">
        <Logo />
        <div className="flex flex-col items-center gap-3 lg:items-start">
          <h1 className="font-heading text-[24px] font-semibold text-white sm:text-[28px]">{eyebrow}</h1>
          <p className="max-w-[430px] font-satoshi text-[15px] leading-[1.6] text-[#e5e6e8] sm:text-[16px]">
            {description}
          </p>
        </div>
        <div className="hidden lg:block">
          <AuthCardStack />
        </div>
      </div>

      {/* Right: white form card */}
      <div className="relative z-10 mt-10 flex w-full max-w-[520px] flex-col justify-center rounded-[32px] bg-white px-6 py-10 shadow-[0_40px_80px_rgba(0,0,0,0.25)] sm:px-10 lg:mt-0 lg:w-[579px] lg:px-[58px] lg:py-[60px]">
        {children}
      </div>
    </div>
  );
}
