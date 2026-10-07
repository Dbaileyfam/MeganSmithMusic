import { Link } from "react-router-dom";
import { navLinks, site } from "@/content/site";
import { Mark } from "./Mark";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-ms-border/50 bg-ms-surface/45 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <Mark className="h-5 w-5" />
              <span className="ms-display text-xl text-ms-cream">{site.name}</span>
            </p>
            <p className="mt-3 text-xs text-ms-muted">
              &copy; {year} {site.artist}. All rights reserved.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-end">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ms-cream-muted transition hover:text-ms-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex justify-center md:justify-end">
          <SocialLinks size="sm" />
        </div>
      </div>
    </footer>
  );
}
