"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/auth/AuthLayout";
import FormField from "@/components/FormField";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function validate() {
    const next: typeof errors = {};
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (!password) next.password = "Password is required.";
    else if (password.length < 6) next.password = "Password must be at least 6 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // No backend is wired up yet — simulate a request so the form is fully interactive.
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => router.push("/"), 900);
    }, 700);
  }

  return (
    <AuthLayout
      eyebrow="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <p className="font-satoshi font-medium text-[14px] text-[#003be2]">Sign In</p>
      <h2 className="font-heading text-[36px] font-semibold text-[#040819]">Welcome Back</h2>

      <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <FormField
          label="Email"
          name="email"
          type="email"
          placeholder="designer@example.com"
          value={email}
          error={errors.email}
          onChange={setEmail}
          autoComplete="email"
        />
        <FormField
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={password}
          error={errors.password}
          onChange={setPassword}
          autoComplete="current-password"
        />

        <div className="mt-2 flex items-center justify-between gap-4">
          {status === "success" && (
            <p className="font-satoshi text-[14px] text-green-600">Signed in — redirecting…</p>
          )}
          <button
            type="submit"
            disabled={status !== "idle"}
            className="ml-auto rounded-[24px] bg-[#d4fb20] px-6 py-3 font-satoshi font-medium text-[16px] text-[#242528] disabled:opacity-60"
          >
            {status === "submitting" ? "Signing In…" : status === "success" ? "Signed In" : "Sign In"}
          </button>
        </div>

        <div className="my-2 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#e5e6e8]" />
          <span className="font-satoshi text-[14px] text-[#82868e]">or</span>
          <div className="h-px flex-1 bg-[#e5e6e8]" />
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            aria-label="Continue with Facebook"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#040819]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Continue with Google"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#040819]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#fff" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.8 3-4.3 3-7.4Z" />
              <path fill="#fff" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2.1 1-3.4 1-2.6 0-4.9-1.8-5.7-4.2H3v2.6A10 10 0 0 0 12 22Z" />
              <path fill="#fff" d="M6.3 13.9a6 6 0 0 1 0-3.8V7.5H3a10 10 0 0 0 0 9l3.3-2.6Z" />
              <path fill="#fff" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 3 14.7 2 12 2A10 10 0 0 0 3 7.5l3.3 2.6C7.1 7.8 9.4 6 12 6Z" />
            </svg>
          </button>
        </div>

        <p className="mt-4 text-center font-satoshi text-[16px] text-[#82868e]">
          New user?{" "}
          <a href="/register" className="text-[#003be2]">
            Create an account
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}
