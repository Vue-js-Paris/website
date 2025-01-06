<script setup lang="ts">
import type { YouTubeVideo } from "@/types/YoutubeVideo";
import { decodeHTML } from "@/utils/decodeHTML";
import { slugify } from "@/utils/slugify";

const props = defineProps<{ talk: YouTubeVideo }>();

const slug = computed(() => slugify(props.talk.snippet.title));
</script>

<template>
  <NuxtLink :to="`/talks/${slug}`" role="navigation">
    <article
      class="group flex flex-col items-start overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
    >
      <img
        :src="talk.snippet.thumbnails.high.url"
        :alt="talk.snippet.title"
        class="aspect-video w-full rounded-t-lg object-cover transition-all group-hover:scale-105"
      />
      <div class="h-full max-h-40 min-h-40 p-4">
        <ClientOnly>
          <h3 class="text-lg font-semibold">
            {{ decodeHTML(talk.snippet.title) }}
          </h3>
        </ClientOnly>
        <p class="mt-2 line-clamp-3 text-sm text-gray-500">
          {{ talk.snippet.description }}
        </p>
      </div>
    </article>
  </NuxtLink>
</template>
