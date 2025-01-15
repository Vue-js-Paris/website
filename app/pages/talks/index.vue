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
  <section
    v-if="talks?.items?.length"
    class="w-screen px-5 md:mx-auto md:w-4/5 md:px-0 xl:w-2/3"
  >
    <h1
      class="py-10 text-center text-4xl font-semibold text-secondary dark:text-white"
    >
      Retrouvez tous nos talks ici !
    </h1>
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
    >
      <TalkCard
        v-for="talk in talks.items"
        :key="talk.id.videoId"
        :talk="talk"
      />
    </div>
  </section>
  <div v-else class="-mt-32 flex h-screen items-center justify-center">
    <Icon name="svg-spinners:6-dots-rotate" size="3em" />
  </div>
</template>
