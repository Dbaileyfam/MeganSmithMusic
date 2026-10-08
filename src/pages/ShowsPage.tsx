import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { partitionShows } from "@/content/site";
import { routes } from "@/lib/routes";
import { fadeUp } from "@/lib/motion";
import { usePageTitle } from "@/lib/usePageTitle";
import { PageHero } from "@/components/PageHero";
import { ShowGrid } from "@/components/ShowCard";

export function ShowsPage() {
  usePageTitle("Shows");
  const { upcoming, past } = partitionShows();

  return (
    <>
      <PageHero
        eyebrow="Live"
        title="Shows"
        description="Upcoming dates and where to hear Megan live."
      />

      <section className="ms-page-shell">
        <div className="mx-auto max-w-6xl space-y-14">
          <div>
            <h2 className="ms-section-heading">Upcoming shows</h2>
            {upcoming.length > 0 ? (
              <div className="mt-8">
                <ShowGrid items={upcoming} heading="h3" />
              </div>
            ) : (
              <motion.div className="ms-card mt-8 p-10 text-center" {...fadeUp}>
                <Calendar className="relative z-10 mx-auto h-12 w-12 text-ms-gold" aria-hidden />
                <p className="relative z-10 mt-4 text-lg text-ms-cream">New dates coming soon.</p>
                <p className="relative z-10 mt-2 text-sm text-ms-cream-muted">
                  Check back here, or reach out to book a date.
                </p>
                <Link to={routes.contact} className="ms-btn-primary relative z-10 mt-8">
                  Book a show
                </Link>
              </motion.div>
            )}
          </div>

          {past.length > 0 ? (
            <div>
              <h2 className="ms-section-heading">Past shows</h2>
              <div className="mt-8">
                <ShowGrid items={past} heading="h3" past />
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
