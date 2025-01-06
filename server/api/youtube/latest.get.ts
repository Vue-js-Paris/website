import type { YouTubeAPIResponse } from "@/types/YoutubeAPIResponse";

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
    const response: YouTubeAPIResponse = await $fetch(
      `${config.public.youtubeApiBaseUrl}/search?part=snippet&channelId=${channelId}&maxResults=3&order=date&type=video&key=${apiKey}`,
    );

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
