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
  ticketUrl?: string;
};

export const shows: Show[] = [];

export function partitionShows(now = new Date()) {
  const today = now.toISOString().slice(0, 10);
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
