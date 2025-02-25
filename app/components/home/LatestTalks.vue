<script setup lang="ts">
import { useLatestTalks } from "../../../composables/useTalks";

const { talks, pending } = useLatestTalks();
</script>

<template>
  <section class="px-10 pb-10">
    <div
      v-if="!pending && talks?.length"
      class="background flex w-full flex-col-reverse gap-10 border-2 border-bordercolor p-20 md:flex-row-reverse"
    >
      <div class="flex h-full flex-col gap-5">
        <div v-for="talk in talks" :key="talk.id.videoId">
          <YoutubeCard :talk="talk" />
        </div>
      </div>
      <AppSectionTitle
        title="Nos derniers talks"
        description="Retrouvez ici les talks de notre dernier meetup."
      />
    </div>
    <div v-else class="-mt-32 flex h-screen items-center justify-center">
      <Icon name="svg-spinners:6-dots-rotate" size="3em" />
    </div>
  </section>
</template>
