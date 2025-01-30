<script setup lang="ts">
const config = useRuntimeConfig();

const { data: talks } = useFetch<YouTubeAPIResponse>(`/api/youtube/latest`, {
  params: {
    channelId: config.public.youtubeChannelId,
  },
});
</script>

<template>
  <section class="bg relative bg-slate-100 py-32 dark:bg-darkerbg">
    <div
      v-if="talks?.items.length"
      class="flex w-screen flex-col gap-20 px-5 md:mx-auto md:w-[90%] md:flex-row md:px-0 xl:w-2/3"
    >
      <SectionTitle
        title="Nos derniers talks"
        description="Retrouvez ici les talks de notre dernier meetup."
      >
        <AppOutlineButton
          link="/talks"
          class="w-fit text-center sm:w-full"
          background="bg-slate-100"
          dark-background="dark:bg-darkerbg"
          dark-border="dark:border-slate-600"
        >
          Voir tous les talks
        </AppOutlineButton>
      </SectionTitle>
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
