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
  <section class="relative bg-slate-100 py-20 dark:bg-slate-800">
    <div
      v-if="talks?.items.length"
      class="flex w-screen flex-col gap-20 px-5 md:mx-auto md:w-4/5 md:flex-row md:px-0 xl:w-2/3"
    >
      <div class="flex h-full flex-col gap-5">
        <TalkCard
          v-for="talk in talks?.items"
          :key="talk.id.videoId"
          :talk="talk"
        />
      </div>
      <SectionTitle
        title="Nos derniers talks"
        description="Retrouvez ici les talks de notre dernier meetup."
        class="h-full w-full md:sticky md:top-[180px] md:max-w-[20%]"
      >
        <AppButton
          link="/talks"
          class="w-fit !bg-primary text-center sm:w-full"
        >
          Voir tous les talks
        </AppButton>
      </SectionTitle>
    </div>
    <div v-else class="-mt-32 flex h-screen items-center justify-center">
      <Icon name="svg-spinners:6-dots-rotate" size="3em" />
    </div>
  </section>
</template>
