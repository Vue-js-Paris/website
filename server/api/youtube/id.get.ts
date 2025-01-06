import type { YouTubeAPIResponse } from "@/types/YoutubeAPIResponse";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { videoId, apiKey } = getQuery(event) as {
    videoId: string;
    apiKey: string;
  };

  if (!videoId || !apiKey) {
    throw createError({
      statusCode: 400,
      statusMessage: "videoId et apiKey sont requis",
    });
  }

  try {
    const response: YouTubeAPIResponse = await $fetch(
      `${config.public.youtubeApiBaseUrl}/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`,
    );

    if (response.items.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: "Aucune vidéo trouvée pour cet ID",
      });
    }

    return { video: response.items[0] };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage:
        (error as Error).message ||
        "Erreur lors de la récupération des détails de la vidéo YouTube",
    });
  }
});
