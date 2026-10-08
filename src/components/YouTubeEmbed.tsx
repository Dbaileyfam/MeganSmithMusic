import type { MediaVideo } from "@/content/site";

type YouTubeEmbedProps = {
  video: MediaVideo;
};

function frameClass(portrait?: boolean) {
  return portrait
    ? "relative z-10 mx-auto aspect-[9/16] w-full max-w-sm bg-black"
    : "relative z-10 aspect-video bg-black";
}

export function YouTubeEmbed({ video }: YouTubeEmbedProps) {
  const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  if (video.embed === false) {
    return (
      <figure className="ms-card overflow-hidden">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${frameClass(video.portrait)} block`}
        >
          <img
            src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
            alt={video.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-x-0 bottom-4 flex justify-center">
            <span className="rounded-full bg-black/75 px-4 py-2 text-sm font-semibold text-white">
              Watch on YouTube
            </span>
          </span>
        </a>
      </figure>
    );
  }

  return (
    <figure className="ms-card overflow-hidden">
      <div className={frameClass(video.portrait)}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
          title={video.title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </figure>
  );
}
