import { useId, type ComponentType } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { site } from "@/content/site";

const links = {
  instagram: { label: "Instagram", icon: Instagram },
  youtube: { label: "YouTube", icon: Youtube },
  facebook: { label: "Facebook", icon: Facebook },
} as const;

type SocialKey = keyof typeof links;

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md";
};

const badgeSize = {
  sm: "h-14 w-14",
  md: "h-20 w-20",
};

const iconSize = {
  sm: "h-3.5 w-3.5",
  md: "h-[1.15rem] w-[1.15rem]",
};

function SocialStar({ icon: Icon, iconClass }: { icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>; iconClass: string }) {
  const id = useId().replace(/:/g, "");
  const gradientId = `ms-social-${id}`;

  return (
    <span className="relative inline-flex h-full w-full">
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
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
          fillRule="evenodd"
          d="M32 10 L41.19 22.81 L54 32 L41.19 41.19 L32 54 L22.81 41.19 L10 32 L22.81 22.81 Z M24 32 A8 8 0 1 0 40 32 A8 8 0 1 0 24 32"
        />
        <circle cx="46" cy="14" r="1.4" fill="#fff6d4" />
        <circle cx="16" cy="48" r="1.1" fill="#e8c98a" />
      </svg>
      <Icon className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-ms-gold ${iconClass}`} aria-hidden />
    </span>
  );
}

export function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const entries = (Object.entries(site.social) as [SocialKey, string | null][]).filter(
    (entry): entry is [SocialKey, string] => Boolean(entry[1]),
  );

  if (entries.length === 0) return null;

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {entries.map(([key, href]) => {
        const { label, icon: Icon } = links[key];
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.artist} on ${label}`}
              className={`relative inline-flex transition hover:scale-105 ${badgeSize[size]}`}
            >
              <SocialStar icon={Icon} iconClass={iconSize[size]} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
