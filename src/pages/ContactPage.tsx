import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { bookingFits, site } from "@/content/site";
import { routes } from "@/lib/routes";
import { fadeUp } from "@/lib/motion";
import { usePageTitle } from "@/lib/usePageTitle";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";

export function ContactPage() {
  usePageTitle("Contact");
  const { booking } = site;
  const hasContact = Boolean(booking.email || booking.phone || booking.representative || booking.form);

  return (
    <>
      <PageHero
        eyebrow="Bookings"
        title="Contact"
        description="Shows, private events, and press."
      />

      <section className="ms-page-shell">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <motion.div className="ms-card p-8" {...fadeUp}>
            <div className="relative z-10">
              <h2 className="text-lg font-semibold text-ms-cream">Booking contact</h2>
              {hasContact ? (
                <address className="mt-6 not-italic">
                  {booking.representative ? (
                    <p className="text-lg font-semibold text-ms-cream">{booking.representative}</p>
                  ) : null}
                  {booking.email ? (
                    <p className="mt-3">
                      <a href={`mailto:${booking.email}`} className="text-ms-blush hover:text-ms-gold">
                        {booking.email}
                      </a>
                    </p>
                  ) : null}
                  {booking.phone ? (
                    <p className="mt-2">
                      <a
                        href={`tel:${booking.phone.replace(/\D/g, "")}`}
                        className="text-ms-blush hover:text-ms-gold"
                      >
                        {booking.phone}
                      </a>
                    </p>
                  ) : null}
                  {booking.form ? (
                    <a
                      href={booking.form}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-btn-primary mt-6"
                    >
                      Booking inquiry
                    </a>
                  ) : null}
                </address>
              ) : (
                <p className="mt-4 text-sm leading-relaxed text-ms-cream-muted">
                  A booking email and phone number will live on this card. Until then, promoters can start with the press kit.
                </p>
              )}
              <div className="mt-8 border-t border-ms-border/60 pt-6">
                <SocialLinks />
                <Link to={routes.epk} className="ms-btn-primary mt-6">
                  Open the press kit
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.08 }}>
            <h2 className="ms-section-heading">A fit for</h2>
            <ul className="mt-6 space-y-3">
              {bookingFits.map((item) => (
                <li key={item} className="text-ms-cream-muted">
                  · {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-ms-cream-muted">
              Photos and a short bio are gathered in the{" "}
              <Link to={routes.epk} className="font-semibold text-ms-blush hover:text-ms-gold">
                electronic press kit
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
