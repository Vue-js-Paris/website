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
    class="flex w-screen flex-col items-center gap-10 px-5 sm:items-start md:mx-auto md:w-4/5 md:flex-row md:px-0 md:pt-10 xl:w-2/3"
  >
    <div class="h-full md:sticky md:top-[180px] md:w-[20%]">
      <h1 class="pb-5 text-5xl font-semibold text-secondary dark:text-white">
        Les Talks
      </h1>
      <p class="text-lg text-gray-300">
        Retrouvez ici tous les talks de notre meetup.
      </p>
    </div>

    <div class="flex flex-col gap-5 md:w-[80%]">
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
