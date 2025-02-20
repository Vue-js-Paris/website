import type { YouTubeVideo } from "../shared/types/YoutubeVideo";

interface TalkContent {
  _path: string;
  videoId: string;
  title: string;
  description?: string;
  date?: string;
}

export function useTalks() {
  const {
    data: talks,
    pending,
    error,
  } = useAsyncData("talks", async () => {
    const contents = await queryContent<TalkContent>("talks")
      .where({ videoId: { $exists: true } })
      .sort({ date: -1 })
      .find();

    return contents.map<YouTubeVideo>((talk) => ({
      id: { videoId: talk.videoId },
      snippet: {
        title: talk.title,
        description: talk.description || "",
        publishedAt: talk.date || "",
        thumbnails: {
          default: {
            url: `https://img.youtube.com/vi/${talk.videoId}/default.jpg`,
          },
          medium: {
            url: `https://img.youtube.com/vi/${talk.videoId}/mqdefault.jpg`,
          },
          high: {
            url: `https://img.youtube.com/vi/${talk.videoId}/hqdefault.jpg`,
          },
        },
      },
    }));
  });

  return { talks, pending, error };
}

export function useLatestTalks() {
  const {
    data: talks,
    pending,
    error,
  } = useAsyncData("latestTalks", async () => {
    const contents = await queryContent<TalkContent>("talks")
      .where({ videoId: { $exists: true } })
      .sort({ date: -1 })
      .limit(3)
      .find();

    return contents.map<YouTubeVideo>((talk) => ({
      id: { videoId: talk.videoId },
      snippet: {
        title: talk.title,
        description: talk.description || "",
        publishedAt: talk.date || "",
        thumbnails: {
          default: {
            url: `https://img.youtube.com/vi/${talk.videoId}/default.jpg`,
          },
          medium: {
            url: `https://img.youtube.com/vi/${talk.videoId}/mqdefault.jpg`,
          },
          high: {
            url: `https://img.youtube.com/vi/${talk.videoId}/hqdefault.jpg`,
          },
        },
      },
    }));
  });

  return { talks, pending, error };
}
