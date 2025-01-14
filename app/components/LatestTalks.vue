<script setup lang="ts">
const config = useRuntimeConfig();

const { data: talks } = useFetch<YouTubeAPIResponse>(`/api/youtube/latest`, {
  params: {
    channelId: config.public.youtubeChannelId,
    apiKey: config.public.youtubeApiKey,
  },
});
</script>

<template>
  <div
    v-if="talks?.items.length"
    class="flex w-screen flex-col items-center px-3 md:mx-auto md:w-2/3 md:px-0"
  >
    <h2
      class="pb-5 text-center text-4xl font-semibold text-secondary dark:text-white"
    >
      Nos derniers talks
    </h2>
    <div
      class="grid grid-cols-1 gap-6 pb-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
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
