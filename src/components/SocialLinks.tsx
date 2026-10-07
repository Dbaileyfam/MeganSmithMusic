import { Facebook, Instagram, Youtube } from "lucide-react";
import { site } from "@/content/site";
import { Mark } from "./Mark";

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

const markSize = {
  sm: "h-7 w-7",
  md: "h-8 w-8",
};

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
              className="inline-flex items-center gap-2 rounded-full border border-ms-blush/35 bg-ms-surface/80 py-1 pl-1 pr-3.5 text-ms-cream transition hover:border-ms-gold/70 hover:text-ms-gold"
            >
              <Mark className={markSize[size]} />
              <Icon className="h-4 w-4" aria-hidden />
              <span className="text-xs font-semibold tracking-wide">{label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
