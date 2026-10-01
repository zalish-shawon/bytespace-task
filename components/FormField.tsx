"use client";

type FormFieldProps = {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  autoComplete?: string;
};

export default function FormField({
  label,
  type = "text",
  name,
  placeholder,
  value,
  error,
  onChange,
  autoComplete,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-satoshi font-medium text-[14px] text-[#040819]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={
          "h-[52px] w-full rounded-[12px] border px-4 font-satoshi text-[16px] text-[#040819] placeholder:text-[#82868e] focus:outline-none focus:ring-2 " +
          (error
            ? "border-red-400 focus:border-red-400 focus:ring-red-100"
            : "border-[#e5e6e8] focus:border-[#003be2] focus:ring-[#003be2]/10")
        }
      />
      {error && (
        <p id={`${name}-error`} className="font-satoshi text-[13px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
