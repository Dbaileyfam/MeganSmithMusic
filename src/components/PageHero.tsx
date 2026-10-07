import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-ms-border/60 px-4 py-14 sm:py-16">
      <motion.div className="mx-auto max-w-6xl text-center" {...fadeUp}>
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-ms-blush">{eyebrow}</p>
        ) : null}
        <h1 className="ms-display mt-3 text-5xl text-ms-cream sm:text-7xl">{title}</h1>
        {description ? (
          <p className="ms-script mx-auto mt-4 max-w-2xl text-3xl text-ms-blush sm:text-4xl">
            {description}
          </p>
        ) : null}
        <div className="ms-ornament mx-auto mt-8 max-w-xs" aria-hidden />
        {children ? <div className="mt-8">{children}</div> : null}
      </motion.div>
    </section>
  );
}
