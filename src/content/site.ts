import portrait from "@/assets/megan-smith.jpg";
import { routes } from "@/lib/routes";

/**
 * Megan Smith Music copy and listings.
 * Fill in bio, shows, photos, videos, and links as they come in.
 */

export const site = {
  name: "Megan Smith Music",
  artist: "Megan Smith",
  description:
    "Soulful live music rooted in R&B, blues, funk, jazz and pop. Megan Smith is a vocalist, performer, and songwriter.",
  social: {
    instagram: "https://www.instagram.com/megan.sarah.smith",
    youtube: "https://www.youtube.com/@megansmithmusic",
    facebook: null as string | null,
  },
  booking: {
    representative: null as string | null,
    email: null as string | null,
    phone: null as string | null,
    form: "https://docs.google.com/forms/d/e/1FAIpQLSctiiEBfK0UpmJGfcmOWNDjmwRlwGxoLej83hwadquoiobh0A/viewform",
  },
} as const;

export const navLinks = [
  { to: routes.home, label: "Home" },
  { to: routes.shows, label: "Shows" },
  { to: routes.media, label: "Media" },
  { to: routes.contact, label: "Contact" },
  { to: routes.epk, label: "EPK" },
] as const;

export const identity = {
  genres: ["Soul", "R&B", "Blues", "Jazz"],
  roles: ["Vocalist", "Performer", "Songwriter"],
  events: ["Weddings", "Corporate", "Private Events", "Venues"],
  headline: "Music that makes you feel something",
  cta: "Come hear me live",
} as const;

export const bio = {
  short: "Soulful live music rooted in R&B, blues, funk, jazz and pop.",
  long: [
    "I’m Megan Smith, a vocalist, performer, and songwriter drawn to music that makes you feel something.",
    "My sound lives at the intersection of soul, R&B, blues, funk, jazz, and pop. Whether I’m performing an intimate acoustic set, bringing a soulful energy to a wedding or corporate event, or sharing my own original music, I want every performance to feel honest, expressive, and alive.",
    "For me, music isn’t just about hitting the right notes. It’s about connection—the moment a song makes someone stop, listen, remember, or feel understood.",
    "I’m currently performing throughout Utah while developing my original music and growing as a live artist.",
  ],
};

export const quickFacts = [
  { label: "Based in", value: "Utah" },
  { label: "Roles", value: "Vocalist, performer, songwriter" },
  { label: "Sound", value: "Soul, R&B, blues, funk, jazz, and pop" },
  { label: "Bookings", value: "Weddings, corporate, private events, venues" },
] as const;

export const bookingFits = [
  "Weddings",
  "Corporate",
  "Private events",
  "Venues",
] as const;

export const epkNav = [
  { id: "bio", label: "Bio" },
  { id: "music", label: "Music" },
  { id: "photos", label: "Photos" },
  { id: "contact", label: "Booking" },
] as const;

export type Show = {
  date: string;
  dateLabel: string;
  venue: string;
  location: string;
  time?: string;
  event?: string;
  address?: string;
  ticketUrl?: string;
};

export const shows: Show[] = [
  {
    date: "2026-10-08",
    dateLabel: "Oct 8",
    venue: "Mint Tapas & Sushi",
    location: "Sugar House, Salt Lake City",
    time: "6–8pm",
    address: "2121 S McClelland St, Salt Lake City, UT 84106",
  },
  {
    date: "2026-10-10",
    dateLabel: "Oct 10",
    event: "Grand Opening",
    venue: "Rockwell Ice Cream",
    location: "Daybreak, South Jordan",
    time: "10–11pm",
    address: "5446 Center Field Dr, South Jordan, UT 84009",
  },
  {
    date: "2026-10-11",
    dateLabel: "Oct 11",
    venue: "Piper Down Pub",
    location: "Salt Lake City",
    time: "7pm",
    address: "1492 S State St, Salt Lake City, UT 84115",
  },
  {
    date: "2026-10-14",
    dateLabel: "Oct 14",
    venue: "Athena VII",
    location: "Sandy",
    time: "6pm",
    address: "111 W 9000 S, Sandy, UT 84070",
  },
  {
    date: "2026-10-22",
    dateLabel: "Oct 22",
    venue: "Mint Tapas & Sushi",
    location: "Sugar House, Salt Lake City",
    time: "6–8pm",
    address: "2121 S McClelland St, Salt Lake City, UT 84106",
  },
  {
    date: "2026-10-28",
    dateLabel: "Oct 28",
    venue: "Athena VII",
    location: "Sandy",
    time: "6pm",
    address: "111 W 9000 S, Sandy, UT 84070",
  },
  {
    date: "2026-12-11",
    dateLabel: "Dec 11",
    event: "Pink Floyd Tribute",
    venue: "The Pearl on Main",
    location: "Midvale",
    time: "Time TBA",
    address: "7711 S Main St, Midvale, UT 84047",
  },
];

export function showMapQuery(show: Show) {
  return encodeURIComponent(show.address || `${show.venue}, ${show.location}`);
}

export function showMapEmbedSrc(show: Show) {
  return `https://maps.google.com/maps?hl=en&q=${showMapQuery(show)}&z=15&output=embed`;
}

export function showDirectionsHref(show: Show) {
  return `https://www.google.com/maps/dir/?api=1&destination=${showMapQuery(show)}`;
}

function localTodayIso(now = new Date()) {
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

export function partitionShows(now = new Date()) {
  const today = localTodayIso(now);
  const upcoming = shows
    .filter((show) => show.date >= today)
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = shows
    .filter((show) => show.date < today)
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  return { upcoming, past };
}

export type MediaPhoto = {
  src: string;
  alt: string;
  title: string;
};

export type MediaVideo = {
  youtubeId: string;
  title: string;
  alt: string;
  portrait?: boolean;
  embed?: boolean;
};

export const spotifyEmbed = {
  title: "Lose Control",
  src: "https://open.spotify.com/embed/track/4JiGw9TjVHSS81MUe45H3E?utm_source=generator&theme=0",
} as const;

export const streamingLinks = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/4XzpneNPPEbFztdGL6Qx87",
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/ca/artist/megan-sarah-smith/1736040615",
  },
] as const;

export const mediaPhotos: MediaPhoto[] = [
  {
    src: portrait,
    alt: "Portrait of Megan Smith",
    title: "Portrait",
  },
];

export const mediaVideos: MediaVideo[] = [
  {
    youtubeId: "UcNejXFEQbg",
    title: "I Put A Spell On You — Annie Lennox (Cover)",
    alt: "Megan Smith singing I Put A Spell On You",
    portrait: true,
  },
  {
    youtubeId: "H813AzmfjZM",
    title: "Oscar Winning Tears — Raye (Cover)",
    alt: "Megan Smith singing Oscar Winning Tears",
    portrait: true,
  },
  {
    youtubeId: "ZBPN82REFTk",
    title: "Respect — Aretha Franklin",
    alt: "Megan Smith singing Respect",
    portrait: true,
    embed: false,
  },
];
