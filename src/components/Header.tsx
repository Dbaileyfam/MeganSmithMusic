import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { Mark } from "./Mark";

function navClass(isActive: boolean) {
  return [
    "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
    isActive
      ? "bg-ms-pink/20 text-ms-gold"
      : "text-ms-cream-muted hover:bg-white/5 hover:text-ms-cream",
  ].join(" ");
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ms-border/50 bg-ms-bg/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link
          to={routes.home}
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Mark className="h-10 w-10 shrink-0 transition group-hover:scale-105" />
          <span className="min-w-0 text-left">
            <span className="ms-display block truncate text-lg text-ms-cream transition group-hover:text-ms-blush sm:text-xl">
              {site.name}
            </span>
            <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-ms-muted sm:block">
              Vocalist · Performer · Songwriter
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === routes.home}
              className={({ isActive }) => navClass(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-ms-border bg-ms-surface text-ms-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-ms-border/60 bg-ms-surface/95 md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === routes.home}
                  className={({ isActive }) => `${navClass(isActive)} w-full text-center`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
