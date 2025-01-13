<script setup lang="ts">
const props = defineProps<{ talk: YouTubeVideo }>();

const slug = computed(() => slugify(props.talk.snippet.title));
</script>

<template>
  <NuxtLink :to="`/talks/${slug}`" role="navigation">
    <article
      class="group flex flex-col items-start overflow-hidden rounded-lg bg-slate-100 shadow-md transition-shadow hover:shadow-lg dark:bg-slate-900 dark:shadow-primary"
    >
      <img
        :src="talk.snippet.thumbnails.high.url"
        :alt="talk.snippet.title"
        class="aspect-video w-full rounded-t-lg object-cover transition-all group-hover:scale-105"
      />
      <div class="h-full max-h-40 min-h-40 p-4">
        <ClientOnly>
          <h3 class="text-lg font-semibold text-secondary dark:text-white">
            {{ decodeHTML(talk.snippet.title) }}
          </h3>
        </ClientOnly>
        <p class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
          {{ talk.snippet.description }}
        </p>
      </div>
    </article>
  </NuxtLink>
</template>
