import { showDirectionsHref, showMapEmbedSrc, type Show } from "@/content/site";

type ShowCardProps = {
  show: Show;
  heading?: "h2" | "h3";
  past?: boolean;
};

export function ShowCard({ show, heading = "h3", past = false }: ShowCardProps) {
  const Heading = heading;
  const [month, day] = show.dateLabel.split(" ");

  const place = [show.location, show.time].filter(Boolean).join(" · ");

  return (
    <li className={`ms-card flex flex-col gap-5 p-5 sm:flex-row sm:items-start ${past ? "opacity-80" : ""}`}>
      <time
        dateTime={show.date}
        className="relative z-10 flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-ms-pink/15 text-ms-gold"
      >
        <span className="text-xs font-bold uppercase">{month}</span>
        <span className="ms-display text-2xl leading-none">{day?.replace(",", "")}</span>
      </time>
      <div className="relative z-10 min-w-0 flex-1">
        {show.event ? (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ms-blush">{show.event}</p>
        ) : null}
        <Heading className="text-lg font-semibold text-ms-cream">{show.venue}</Heading>
        <p className="text-sm text-ms-cream-muted">{place}</p>
        {show.address ? (
          <p className="mt-2 text-sm text-ms-cream">{show.address}</p>
        ) : null}
        {show.address || (show.ticketUrl && !past) ? (
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {show.ticketUrl && !past ? (
              <a
                href={show.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-ms-blush hover:text-ms-gold"
              >
                Tickets →
              </a>
            ) : null}
            {show.address ? (
              <a
                href={showDirectionsHref(show)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-ms-blush hover:text-ms-gold"
              >
                Directions →
              </a>
            ) : null}
          </p>
        ) : null}
      </div>
      {show.address ? (
        <div className="relative z-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-ms-border sm:w-80 sm:shrink-0">
          <iframe
            title={`Map to ${show.venue}`}
            src={showMapEmbedSrc(show)}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : null}
    </li>
  );
}

export function ShowGrid({
  items,
  heading,
  past = false,
}: {
  items: Show[];
  heading?: "h2" | "h3";
  past?: boolean;
}) {
  return (
    <ul className="grid gap-4">
      {items.map((show) => (
        <ShowCard
          key={`${show.date}-${show.venue}`}
          show={show}
          heading={heading}
          past={past}
        />
      ))}
    </ul>
  );
}
