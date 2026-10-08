import portrait from "@/assets/megan-smith.jpg";
import { bio, epkNav, mediaPhotos, mediaVideos, quickFacts, site, streamingLinks } from "@/content/site";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { usePageTitle } from "@/lib/usePageTitle";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function EPKPage() {
  usePageTitle("Electronic Press Kit");

  return (
    <>
      <section className="border-b border-ms-border/60 px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-ms-blush">
            Electronic Press Kit
          </p>
          <figure className="mx-auto mt-6 w-28 overflow-hidden rounded-2xl border border-ms-border shadow-[0_12px_28px_rgba(0,0,0,0.45)] sm:w-32">
            <img
              src={portrait}
              alt="Megan Smith"
              width={767}
              height={1024}
              className="aspect-[3/4] w-full object-cover"
            />
          </figure>
          <h1 className="ms-display mt-4 text-5xl text-ms-cream sm:text-7xl">{site.artist}</h1>
          <div className="ms-ornament mx-auto mt-8 max-w-xs" aria-hidden />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button type="button" className="ms-btn-primary" onClick={() => scrollToSection("contact")}>
              Booking
            </button>
            <button type="button" className="ms-btn-ghost" onClick={() => scrollToSection("photos")}>
              Photos
            </button>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-[73px] z-40 border-b border-ms-border/70 bg-ms-bg/80 backdrop-blur-md"
        aria-label="EPK sections"
      >
        <div className="mx-auto flex max-w-6xl justify-center gap-1 overflow-x-auto px-4 py-3">
          {epkNav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide text-ms-cream-muted transition hover:bg-ms-elevated hover:text-ms-gold"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="border-b border-ms-border/50 px-4 py-10" aria-label="Quick facts">
        <ul className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
          {quickFacts.map((fact) => (
            <li key={fact.label} className="ms-card p-5 text-center">
              <p className="relative z-10 text-xs font-bold uppercase tracking-widest text-ms-gold">
                {fact.label}
              </p>
              <p className="relative z-10 mt-2 text-lg font-semibold text-ms-cream">{fact.value}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="bio" className="scroll-mt-36 px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="ms-section-heading">Bio</h2>
          <p className="mt-4 text-lg leading-relaxed text-ms-cream">{bio.short}</p>
          {bio.long.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-4 leading-relaxed text-ms-cream-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section id="music" className="scroll-mt-36 border-y border-ms-border/50 bg-ms-surface/30 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="ms-section-heading">Music</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {streamingLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="ms-btn-ghost">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mediaVideos.map((video) => (
              <li key={video.youtubeId} className={video.portrait ? "mx-auto w-full max-w-sm" : "sm:col-span-2 lg:col-span-3"}>
                <YouTubeEmbed video={video} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="photos" className="scroll-mt-36 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="ms-section-heading">Photos</h2>
          {mediaPhotos.length > 0 ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mediaPhotos.map((photo) => (
                <li key={photo.src}>
                  <figure className="ms-card overflow-hidden">
                    <img src={photo.src} alt={photo.alt} className="relative z-10 aspect-[3/4] w-full object-cover object-top" />
                    <figcaption className="relative z-10 px-4 py-3 text-sm font-semibold text-ms-cream">
                      {photo.title}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-ms-cream-muted">Press photos will be ready to view and download from here.</p>
          )}
        </div>
      </section>

      <section id="contact" className="scroll-mt-36 border-t border-ms-border/50 px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="ms-section-heading">Booking</h2>
          {site.booking.form ? (
            <a
              href={site.booking.form}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-btn-primary mt-6"
            >
              Booking inquiry
            </a>
          ) : null}
          {site.booking.email || site.booking.phone ? (
            <address className="mt-4 not-italic text-ms-cream">
              {site.booking.representative ? <p className="font-semibold">{site.booking.representative}</p> : null}
              {site.booking.email ? (
                <p className="mt-2">
                  <a className="text-ms-blush hover:text-ms-gold" href={`mailto:${site.booking.email}`}>
                    {site.booking.email}
                  </a>
                </p>
              ) : null}
              {site.booking.phone ? <p className="mt-2">{site.booking.phone}</p> : null}
            </address>
          ) : site.booking.form ? null : (
            <p className="mt-4 text-ms-cream-muted">Booking contact coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
