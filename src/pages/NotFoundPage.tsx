import { Link } from "react-router-dom";
import { routes } from "@/lib/routes";
import { usePageTitle } from "@/lib/usePageTitle";

export function NotFoundPage() {
  usePageTitle("Page not found");
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="ms-display text-8xl text-ms-gold">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-ms-cream">Page not found</h1>
      <p className="mt-2 text-ms-cream-muted">That page is not part of the site.</p>
      <Link to={routes.home} className="ms-btn-primary mt-8">
        Back home
      </Link>
    </section>
  );
}
