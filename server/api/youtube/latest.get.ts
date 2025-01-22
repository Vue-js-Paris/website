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
    const apiUrl = `${config.youtubeApiBaseUrl}/search`;
    const params = {
      part: "snippet",
      channelId: channelId,
      maxResults: 3,
      order: "date",
      type: "video",
      key: config.youtubeApiKey,
    };

    const response: YouTubeAPIResponse = await $fetch(apiUrl, {
      params,
    });

    return { items: response.items };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage:
        (error as Error).message ||
        "Erreur lors de la récupération des données YouTube",
    });
  }
});
