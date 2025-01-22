export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { channelId } = getQuery(event) as { channelId: string };

  if (!channelId) {
    throw createError({
      statusCode: 400,
      statusMessage: "channelId est requis",
    });
  }

  try {
    const searchResponse = await $fetch<YouTubeSearchResponse>(
      `${config.youtubeApiBaseUrl}/search`,
      {
        params: {
          part: "snippet",
          channelId,
          maxResults: 50,
          type: "video",
          order: "date",
          key: config.youtubeApiKey,
        },
      },
    );

    const videoIds = searchResponse.items
      .map((item) => item.id.videoId)
      .filter(Boolean)
      .join(",");

    if (!videoIds) {
      return { items: [] };
    }

    const videosResponse = await $fetch<YouTubeVideoListResponse>(
      `${config.youtubeApiBaseUrl}/videos`,
      {
        params: {
          part: "snippet,liveStreamingDetails",
          id: videoIds,
          key: config.youtubeApiKey,
        },
      },
    );

    const filteredItems = videosResponse.items.filter(
      (item) => !item.liveStreamingDetails,
    );

    const pureVideos: YouTubeVideo[] = filteredItems.map((item) => {
      return {
        id: {
          videoId: item.id,
        },
        snippet: {
          title: item.snippet.title,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
          thumbnails: {
            default: { url: item.snippet.thumbnails.default.url },
            medium: { url: item.snippet.thumbnails.medium.url },
            high: { url: item.snippet.thumbnails.high.url },
          },
        },
      };
    });

    return { items: pureVideos };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage:
        (error as Error).message ||
        "Erreur lors de la récupération des données YouTube",
    });
  }
});
