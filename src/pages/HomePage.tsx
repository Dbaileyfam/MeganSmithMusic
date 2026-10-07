import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import glitter from "@/assets/gold-bokeh.png";
import portrait from "@/assets/megan-smith.jpg";
import { bio, identity, quickFacts, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { fadeUp } from "@/lib/motion";
import { usePageTitle } from "@/lib/usePageTitle";
import { SocialLinks } from "@/components/SocialLinks";

const glitterTiles = Array.from({ length: 6 }, (_, index) => index);

export function HomePage() {
  usePageTitle("Home");

  return (
    <div className="relative isolate">
      <div className="ms-glitter" aria-hidden>
        <div className="ms-glitter-sheet">
          {glitterTiles.map((tile) => (
            <img key={tile} src={glitter} alt="" />
          ))}
        </div>
      </div>
      <section className="relative overflow-hidden px-4 pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.figure
            className="w-full max-w-[16rem] overflow-hidden rounded-3xl border border-ms-border shadow-[0_18px_40px_rgba(0,0,0,0.55)] sm:max-w-xs"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={portrait}
              alt="Megan Smith"
              width={767}
              height={1024}
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.figure>
          <div className="mt-8">
            <motion.p
              className="text-xs font-bold uppercase tracking-[0.35em] text-ms-blush"
              {...fadeUp}
            >
              {identity.genres.join(" • ")}
            </motion.p>
            <motion.h1
              className="ms-display mt-3 text-6xl text-ms-cream sm:text-7xl md:text-8xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {site.artist}
            </motion.h1>
            <motion.p
              className="mt-4 text-sm font-semibold tracking-[0.16em] text-ms-gold sm:text-base"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              {identity.roles.join(" • ")}
            </motion.p>
            <motion.p
              className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ms-cream-muted md:text-base"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.14 }}
            >
              {bio.short}
            </motion.p>
            <motion.ul
              className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-semibold tracking-[0.14em] text-ms-blush sm:text-sm"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.16 }}
            >
              {identity.events.map((item, index) => (
                <li key={item} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">•</span> : null}
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div
              className="mt-7 flex flex-wrap justify-center gap-3"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.18 }}
            >
              <Link to={routes.shows} className="ms-btn-primary">
                {identity.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to={routes.contact} className="ms-btn-ghost">
                Book a show
              </Link>
            </motion.div>
            <motion.div
              className="mt-5 flex justify-center"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.22 }}
            >
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 border-y border-ms-border/60 bg-ms-surface/35 px-4 py-12 md:py-14"
      >
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div {...fadeUp}>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-ms-blush">The artist</p>
            <h2 className="ms-section-heading mt-2">{identity.headline}</h2>
            {bio.long.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mt-4 text-sm leading-relaxed text-ms-cream-muted md:text-base">
                {paragraph}
              </p>
            ))}
            <Link to={routes.shows} className="ms-btn-primary mt-6">
              {identity.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>

          <div className="grid gap-4">
            <motion.div className="ms-card p-5" {...fadeUp} transition={{ delay: 0.08 }}>
              <div className="relative z-10">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ms-gold">
                  <Star className="h-4 w-4" aria-hidden />
                  Quick facts
                </h3>
                <ul className="mt-4 space-y-3">
                  {quickFacts.map((fact) => (
                    <li key={fact.label} className="border-b border-ms-border/50 pb-3 last:border-0 last:pb-0">
                      <p className="text-xs font-bold uppercase tracking-wide text-ms-blush">{fact.label}</p>
                      <p className="mt-0.5 text-sm text-ms-cream">{fact.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
