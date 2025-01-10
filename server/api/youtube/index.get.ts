export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { channelId, apiKey } = getQuery(event) as {
    channelId: string;
    apiKey: string;
  };

  if (!channelId || !apiKey) {
    throw createError({
      statusCode: 400,
      statusMessage: "channelId et apiKey sont requis",
    });
  }

  try {
    // Étape 1 : récupérer la liste des IDs de vidéos (search.list)
    const searchResponse = await $fetch<YouTubeSearchResponse>(
      `${config.public.youtubeApiBaseUrl}/search` +
        `?part=snippet` +
        `&channelId=${channelId}` +
        `&maxResults=50` +
        `&type=video` +
        `&order=date` +
        `&key=${apiKey}`,
    );

    // On extrait tous les IDs
    const videoIds = searchResponse.items
      .map((item) => item.id.videoId)
      .filter(Boolean)
      .join(",");

    if (!videoIds) {
      return { items: [] };
    }

    // Étape 2 : récupérer les détails de chaque vidéo (videos.list)
    //           pour savoir si c’est un live ou pas.
    const videosResponse = await $fetch<YouTubeVideoListResponse>(
      `${config.public.youtubeApiBaseUrl}/videos` +
        `?part=snippet,liveStreamingDetails` +
        `&id=${videoIds}` +
        `&key=${apiKey}`,
    );

    // Étape 3 : filtrer (exclure) celles qui possèdent liveStreamingDetails
    const filteredItems = videosResponse.items.filter(
      (item) => !item.liveStreamingDetails,
    );

    // Étape 4 : mapper (transformer) le format "videos.list" en format `YouTubeVideo`
    //           (avec id: { videoId }, etc.)
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
