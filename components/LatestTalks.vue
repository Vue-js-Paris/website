<script setup lang="ts">
import type { YouTubeAPIResponse } from "@/types/YoutubeAPIResponse";

const config = useRuntimeConfig();

const { data: talks } = useFetch<YouTubeAPIResponse>(`/api/youtube/latest`, {
  params: {
    channelId: config.public.youtubeChannelId,
    apiKey: config.public.youtubeApiKey,
  },
});
</script>

<template>
  <div v-if="talks?.items.length" class="flex flex-col items-center">
    <h2 class="pb-5 text-center text-4xl font-semibold">Nos derniers talks</h2>
    <div
      class="grid grid-cols-1 gap-6 p-6 px-5 sm:grid-cols-2 sm:px-10 lg:grid-cols-2 xl:grid-cols-3 xl:px-20"
    >
      <TalkCard
        v-for="talk in talks?.items"
        :key="talk.id.videoId"
        :talk="talk"
      />
    </div>
    <AppButton link="/talks">
      En voir plus
      <Icon name="fa6-solid:arrow-right" />
    </AppButton>
  </div>
  <div v-else class="-mt-32 flex h-screen items-center justify-center">
    <Icon name="svg-spinners:6-dots-rotate" size="3em" />
  </div>
</template>
