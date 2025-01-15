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
  <section class="relative bg-white py-10 dark:bg-slate-800">
    <div
      v-if="talks?.items.length"
      class="flex w-screen flex-col gap-10 px-5 sm:px-0 md:mx-auto md:w-4/5 md:flex-row xl:w-2/3"
    >
      <div class="h-full w-full md:sticky md:top-[180px] md:w-[20%]">
        <h2 class="pb-5 text-5xl font-semibold text-secondary dark:text-white">
          Nos derniers talks
        </h2>
        <p class="text-lg text-gray-300">
          Retrouvez ici les derniers talks de notre meetup.
        </p>
      </div>

      <div class="flex h-full flex-col gap-5">
        <TalkCard
          v-for="talk in talks?.items"
          :key="talk.id.videoId"
          :talk="talk"
        />
      </div>
    </div>
    <div v-else class="-mt-32 flex h-screen items-center justify-center">
      <Icon name="svg-spinners:6-dots-rotate" size="3em" />
    </div>
  </section>
</template>
