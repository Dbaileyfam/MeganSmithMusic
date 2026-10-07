import { Facebook, Instagram, Youtube } from "lucide-react";
import { site } from "@/content/site";

const icons = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
} as const;

type SocialKey = keyof typeof icons;

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md";
};

const sizeClasses = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
};

export function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const entries = (Object.entries(site.social) as [SocialKey, string | null][]).filter(
    (entry): entry is [SocialKey, string] => Boolean(entry[1]),
  );

  if (entries.length === 0) return null;

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {entries.map(([key, href]) => {
        const Icon = icons[key];
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.artist} on ${label}`}
              className={`inline-flex items-center justify-center rounded-full border border-ms-blush/35 bg-ms-surface/80 text-ms-cream transition hover:border-ms-gold/70 hover:text-ms-gold ${sizeClasses[size]}`}
            >
              <Icon className={iconSizes[size]} aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
