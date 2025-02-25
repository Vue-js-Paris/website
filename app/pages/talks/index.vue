<script setup lang="ts">
import { useTalks } from "../../../composables/useTalks";

const { talks, pending } = useTalks();

const searchQuery = ref("");
const searchedTalks = computed(() => {
  if (!talks.value) return [];

  const query = searchQuery.value.toLowerCase();
  return talks.value.filter((talk) => {
    const title = talk.snippet.title.toLowerCase();
    const description = talk.snippet.description.toLowerCase();
    return title.includes(query) || description.includes(query);
  });
});

function updatedSearch(value: string) {
  searchQuery.value = value;
}
</script>

<template>
  <section v-if="!pending && talks" class="px-10 pt-10">
    <div
      class="background flex min-h-screen w-full flex-col items-center gap-10 border-2 border-bordercolor p-20 sm:items-start md:flex-row md:gap-20"
    >
      <AppSectionTitle
        title="Les Talks"
        description="Retrouvez ici tous les talks de notre meetup."
      >
        <SearchBar class="w-full" @update-search="updatedSearch" />
      </AppSectionTitle>

      <div v-if="searchedTalks.length" class="flex flex-col gap-5 md:w-[80%]">
        <div
          v-for="talk in searchedTalks"
          :key="talk.id.videoId"
          :to="`/talks/${talk.id.videoId}`"
        >
          <YoutubeCard :talk="talk" />
        </div>
      </div>

      <div v-else class="w-full text-center">
        <p>Aucun talk ne correspond à votre recherche.</p>
      </div>
    </div>
  </section>

  <div v-else class="-mt-32 flex h-screen items-center justify-center">
    <Icon name="svg-spinners:6-dots-rotate" size="3em" />
  </div>
</template>
