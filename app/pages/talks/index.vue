<script setup lang="ts">
const config = useRuntimeConfig();
const { data: talks } = useFetch<YouTubeAPIResponse>(`/api/youtube`, {
  params: {
    channelId: config.public.youtubeChannelId,
    apiKey: config.public.youtubeApiKey,
  },
});
</script>

<template>
  <div v-if="talks?.items?.length">
    <h1 class="text-secondary py-10 text-center text-4xl font-semibold">
      Retrouvez tous nos talks ici !
    </h1>
    <div
      class="grid grid-cols-1 gap-6 p-6 px-5 sm:grid-cols-2 sm:px-10 lg:grid-cols-2 xl:grid-cols-3 xl:px-20"
    >
      <TalkCard
        v-for="talk in talks.items"
        :key="talk.id.videoId"
        :talk="talk"
      />
    </div>
  </div>
  <div v-else class="-mt-32 flex h-screen items-center justify-center">
    <Icon name="svg-spinners:6-dots-rotate" size="3em" />
  </div>
</template>
