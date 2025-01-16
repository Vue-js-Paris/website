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
    <SectionTitle
      title="Les Talks"
      description="Retrouvez ici tous les talks de notre meetup."
      class="h-full w-full md:sticky md:top-[180px] md:max-w-[20%]"
    />
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
