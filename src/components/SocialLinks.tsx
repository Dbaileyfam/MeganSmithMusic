import { site } from "@/content/site";
import { Mark } from "./Mark";

const labels = {
  instagram: "Instagram",
  youtube: "YouTube",
  facebook: "Facebook",
} as const;

type SocialKey = keyof typeof labels;

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md";
};

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-11 w-11",
};

export function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const entries = (Object.entries(site.social) as [SocialKey, string | null][]).filter(
    (entry): entry is [SocialKey, string] => Boolean(entry[1]),
  );

  if (entries.length === 0) return null;

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {entries.map(([key, href]) => {
        const label = labels[key];
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.artist} on ${label}`}
              className={`inline-flex transition hover:scale-105 ${sizeClasses[size]}`}
            >
              <Mark className="h-full w-full" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
