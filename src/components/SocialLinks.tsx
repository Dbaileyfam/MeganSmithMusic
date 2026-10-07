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

const iconSize = {
  sm: "h-5 w-5",
  md: "h-7 w-7",
};

export function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const entries = (Object.entries(site.social) as [SocialKey, string | null][]).filter(
    (entry): entry is [SocialKey, string] => Boolean(entry[1]),
  );

  if (entries.length === 0) return null;

  return (
    <ul className={`flex flex-wrap items-center gap-4 ${className}`}>
      {entries.map(([key, href]) => {
        const { label, icon: Icon } = links[key];
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.artist} on ${label}`}
              className="inline-flex text-[#e8c98a] transition hover:scale-105 hover:text-[#fff6d4]"
            >
              <Icon className={iconSize[size]} strokeWidth={1.75} aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
