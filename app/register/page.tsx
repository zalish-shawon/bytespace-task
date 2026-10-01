"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/auth/AuthLayout";
import FormField from "@/components/FormField";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function validate() {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Full name is required.";
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
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => router.push("/"), 900);
    }, 700);
  }

  return (
    <AuthLayout
      eyebrow="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <p className="font-satoshi font-medium text-[14px] text-[#003be2]">Create an Account</p>
      <h2 className="font-heading text-[36px] font-semibold leading-[1.2] text-[#040819]">Welcome to ByteSpace</h2>

      <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <FormField label="Full Name" name="name" placeholder="Jamie Davis" value={name} error={errors.name} onChange={setName} autoComplete="name" />
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
          autoComplete="new-password"
        />

        <div className="mt-2 flex items-center justify-between gap-4">
          {status === "success" && (
            <p className="font-satoshi text-[14px] text-green-600">Account created — redirecting…</p>
          )}
          <button
            type="submit"
            disabled={status !== "idle"}
            className="ml-auto rounded-[24px] bg-[#d4fb20] px-6 py-3 font-satoshi font-medium text-[16px] text-[#242528] disabled:opacity-60"
          >
            {status === "submitting" ? "Creating…" : status === "success" ? "Created" : "Continue"}
          </button>
        </div>

        <p className="mt-6 text-center font-satoshi text-[16px] text-[#82868e]">
          Already have an account?{" "}
          <a href="/login" className="text-[#003be2]">
            Login
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}
