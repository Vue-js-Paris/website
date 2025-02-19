<script setup lang="ts">
const config = useRuntimeConfig();
const { data: talks } = useFetch<YouTubeAPIResponse>(`/api/youtube`, {
  params: {
    channelId: config.public.youtubeChannelId,
  },
});

const searchQuery = ref("");
const filteredTalks = computed(() => {
  if (!talks.value?.items) return [];

  const query = searchQuery.value.toLowerCase();

  return talks.value.items.filter((talk) => {
    const title = talk.snippet.title.toLowerCase();
    const description = talk.snippet.description.toLowerCase();

    return title.includes(query) || description.includes(query);
  });
});
</script>

<template>
  <section
    v-if="talks?.items?.length"
    class="flex min-h-screen w-screen flex-col items-center gap-10 px-5 sm:items-start md:mx-auto md:w-[90%] md:flex-row md:gap-20 md:px-0 md:pt-10 xl:w-2/3"
  >
    <AppSectionTitle
      title="Les Talks"
      description="Retrouvez ici tous les talks de notre meetup."
    >
      <SearchBar v-model="searchQuery" class="w-full" />
    </AppSectionTitle>
    <div v-if="filteredTalks.length" class="flex flex-col gap-5 md:w-[80%]">
      <YoutubeCard
        v-for="talk in filteredTalks"
        :key="talk.id.videoId"
        :talk="talk"
      />
    </div>
    <div v-else class="w-full text-center">
      <p>Aucun talk ne correspond à votre recherche.</p>
    </div>
  </section>
  <div v-else class="-mt-32 flex h-screen items-center justify-center">
    <Icon name="svg-spinners:6-dots-rotate" size="3em" />
  </div>
</template>
