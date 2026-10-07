import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Camera, X } from "lucide-react";
import { mediaPhotos, mediaVideos, streamingLinks } from "@/content/site";
import { fadeUp } from "@/lib/motion";
import { usePageTitle } from "@/lib/usePageTitle";
import { PageHero } from "@/components/PageHero";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

export function MediaPage() {
  usePageTitle("Media");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? mediaPhotos[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null || mediaPhotos.length === 0) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? index : (index + 1) % mediaPhotos.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null ? index : (index - 1 + mediaPhotos.length) % mediaPhotos.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Media"
        description="Performance video, streaming, and photos."
      />

      <section className="ms-page-shell">
        <div className="mx-auto max-w-6xl space-y-14">
          <div>
            <h2 className="ms-section-heading">Video</h2>
            {streamingLinks.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-3">
                {streamingLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-btn-ghost"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
            {mediaVideos.length > 0 ? (
              <ul className="mt-8 grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {mediaVideos.map((video, index) => (
                  <motion.li
                    key={video.youtubeId}
                    className={video.portrait ? "mx-auto w-full max-w-sm" : "sm:col-span-2 lg:col-span-3"}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                  >
                    <YouTubeEmbed video={video} />
                  </motion.li>
                ))}
              </ul>
            ) : (
              <motion.div className="ms-card mt-8 aspect-video max-w-3xl" {...fadeUp}>
                <div className="relative z-10 flex h-full min-h-56 flex-col items-center justify-center px-6 text-center">
                  <Camera className="h-10 w-10 text-ms-gold" aria-hidden />
                  <p className="mt-4 text-lg text-ms-cream">Performance video coming soon.</p>
                </div>
              </motion.div>
            )}
          </div>

          <div>
            <h2 className="ms-section-heading">Photos</h2>
            {mediaPhotos.length > 0 ? (
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mediaPhotos.map((photo, index) => (
                  <li key={photo.src}>
                    <button
                      type="button"
                      className="ms-card block w-full overflow-hidden text-left"
                      onClick={() => setActiveIndex(index)}
                    >
                      <img src={photo.src} alt={photo.alt} className="relative z-10 aspect-[4/5] w-full object-cover" />
                      <span className="relative z-10 block px-4 py-3 text-sm font-semibold text-ms-cream">
                        {photo.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Portrait", "On stage", "In the room"].map((label) => (
                  <li key={label} className="ms-card flex min-h-52 items-end p-5">
                    <p className="relative z-10">
                      <span className="ms-script block text-3xl text-ms-gold">{label}</span>
                      <span className="mt-1 block text-sm text-ms-cream-muted">Coming soon</span>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
            onClick={() => setActiveIndex(null)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
          <img src={active.src} alt={active.alt} className="max-h-[85vh] max-w-full rounded-2xl object-contain" />
        </div>
      ) : null}
    </>
  );
}
