"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/search" },
  { label: "Creators", href: "/creators/purepearl-studio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-4 sm:px-8 md:h-[120px] lg:px-[120px]">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Center nav — desktop only */}
        <nav className="hidden items-center gap-6 text-[16px] text-[#f5f5f6] md:flex">
          {navLinks.map((link, i) => (
            <Link key={link.label} href={link.href} className={"font-satoshi" + (i === 0 ? " font-medium" : "")}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right nav — desktop only */}
        <div className="hidden items-center gap-6 text-[16px] text-[#f5f5f6] md:flex">
          <Link href="/login" className="font-satoshi">
            Sign In
          </Link>
          <Link href="/register" className="font-satoshi">
            Join Us
          </Link>
          <button aria-label="Cart" className="h-6 w-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M6 8h12l-1 12H7L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          {open ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="mx-4 flex flex-col gap-1 rounded-2xl bg-[#002ca8] p-4 text-[16px] text-[#f5f5f6] md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-satoshi hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="my-2 h-px bg-white/15" />
          <Link href="/login" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-satoshi hover:bg-white/10">
            Sign In
          </Link>
          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-[24px] bg-[#d4fb20] px-3 py-3 text-center font-satoshi font-medium text-[#242528]"
          >
            Join Us
          </Link>
        </div>
      )}
    </header>
  );
}
