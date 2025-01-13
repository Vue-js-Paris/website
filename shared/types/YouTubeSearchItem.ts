export interface YouTubeSearchItem {
  id: {
    videoId: string;
  };
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
}

export interface YouTubeSearchResponse {
  items: YouTubeSearchItem[];
  // ... vous pouvez ajouter d'autres propriétés si besoin (pageInfo, etc.)
}
