export default function Logo({ color = "#d4fb20", textColor = "#f5f5f6" }: { color?: string; textColor?: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stem with a small curl at the top */}
        <path
          d="M11 2c-4 1-6 4-5 8 0.6 2.4 2.6 3.6 5 3.2V34a4 4 0 0 1-4-4"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Triangular bowl */}
        <path d="M14 18l13 8-13 8V18z" fill={color} />
      </svg>
      <span className="font-clash text-2xl font-bold" style={{ color: textColor }}>
        ByteSpace
      </span>
    </div>
  );
}
