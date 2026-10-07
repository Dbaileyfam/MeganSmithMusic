import { useId } from "react";

type MarkProps = {
  className?: string;
};

export function Mark({ className }: MarkProps) {
  const id = useId();
  const gradientId = `ms-mark-${id.replace(/:/g, "")}`;

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff6d4" />
          <stop offset="46%" stopColor="#d4ae62" />
          <stop offset="100%" stopColor="#8a642e" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#0c0a08" stroke={`url(#${gradientId})`} strokeWidth="1.4" />
      <path
        fill={`url(#${gradientId})`}
        d="M32 12.5 35.1 23.4 46.2 26.5 35.1 29.6 32 40.5 28.9 29.6 17.8 26.5 28.9 23.4 32 12.5Z"
      />
      <circle cx="46" cy="16" r="1.4" fill="#fff6d4" />
      <circle cx="18" cy="44" r="1.1" fill="#e8c98a" />
    </svg>
  );
}
