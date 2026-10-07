import { bio, epkNav, quickFacts, site } from "@/content/site";
import { usePageTitle } from "@/lib/usePageTitle";
import { Mark } from "@/components/Mark";

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
          <div className="mt-6 flex justify-center">
            <Mark className="h-28 w-28" />
          </div>
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
        <div className="mx-auto max-w-3xl">
          <h2 className="ms-section-heading">Music</h2>
          <p className="mt-4 text-ms-cream-muted">
            Streaming links and featured songs will sit in this section.
          </p>
        </div>
      </section>

      <section id="photos" className="scroll-mt-36 px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="ms-section-heading">Photos</h2>
          <p className="mt-4 text-ms-cream-muted">
            Press photos will be ready to view and download from here.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-36 border-t border-ms-border/50 px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="ms-section-heading">Booking</h2>
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
          ) : (
            <p className="mt-4 text-ms-cream-muted">Booking contact coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
