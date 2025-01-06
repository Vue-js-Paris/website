export interface YouTubeVideoListItem {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
  };
  // S’il est défini, c’est un live (ou un replay)
  liveStreamingDetails?: {
    actualStartTime?: string;
    actualEndTime?: string;
    scheduledStartTime?: string;
    scheduledEndTime?: string;
    concurrentViewers?: number;
    activeLiveChatId?: string;
  };
}

export interface YouTubeVideoListResponse {
  items: YouTubeVideoListItem[];
  // ... idem, vous pouvez ajouter d'autres propriétés si besoin
}
