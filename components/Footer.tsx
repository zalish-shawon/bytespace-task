"use client";

import { useState } from "react";
import Logo from "./Logo";

const columns = [
  {
    heading: "Browse",
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    heading: "",
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    heading: "Platform",
    links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      setSubscribed(false);
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="w-full border-t border-[#e5e6e8] bg-white">
      <div className="mx-auto flex w-[1200px] max-w-full flex-col gap-14 px-4 py-[60px] sm:px-8 md:py-[71px] lg:px-0">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-16">
          {/* Newsletter */}
          <div className="flex w-full flex-col gap-8 md:w-[420px] lg:w-[528px]">
            <Logo color="#003be2" textColor="#040819" />
            <p className="font-satoshi text-[16px] text-[#4b4c53]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className={
                    "h-[52px] flex-1 rounded-[24px] border bg-transparent px-6 font-satoshi text-[16px] text-[#040819] placeholder:text-[#82868e] focus:outline-none focus:ring-2 focus:ring-[#003be2]/10 " +
                    (error ? "border-red-400" : "border-[#e5e6e8] focus:border-[#003be2]")
                  }
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-[24px] bg-[#003be2] px-6 py-3 font-satoshi font-medium text-[16px] text-white"
                >
                  Search
                </button>
              </div>
              {error && <p className="font-satoshi text-[13px] text-red-500">{error}</p>}
              {subscribed && (
                <p className="font-satoshi text-[13px] text-green-600">Thanks — you&apos;re subscribed!</p>
              )}
              <p className="font-satoshi text-[14px] text-[#82868e]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:flex md:gap-16">
            {columns.map((col, i) => (
              <div key={i} className="flex w-full flex-col gap-6 md:w-[167px]">
                <p className="font-satoshi font-medium text-[16px] text-[#040819]">{col.heading || "\u00A0"}</p>
                <div className="flex flex-col gap-[14px]">
                  {col.links.map((link) => (
                    <a key={link} href="#" className="font-satoshi text-[16px] text-[#4b4c53]">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 border-t border-[#e5e6e8] pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-satoshi text-[14px] text-[#4b4c53] sm:text-[16px]">
              @ 2023 ByteSpace. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="font-satoshi text-[14px] text-[#4b4c53] sm:text-[16px]">
                Privacy Policy
              </a>
              <a href="#" className="font-satoshi text-[14px] text-[#4b4c53] sm:text-[16px]">
                Terms of Service
              </a>
              <a href="#" className="font-satoshi text-[14px] text-[#4b4c53] sm:text-[16px]">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
