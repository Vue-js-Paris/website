<script setup lang="ts">
const props = defineProps<{ talk: YouTubeVideo }>();

const slug = computed(() => slugify(props.talk.snippet.title));
</script>

<template>
  <article class="flex gap-10 rounded-2xl bg-slate-100 p-8 dark:bg-slate-900">
    <img
      :src="talk.snippet.thumbnails.high.url"
      :alt="talk.snippet.title"
      class="aspect-video h-fit w-1/3 rounded-2xl object-cover"
    />
    <div class="h-f flex w-2/3 flex-col">
      <div>
        <ClientOnly>
          <h3 class="pb-2 text-lg font-semibold text-secondary dark:text-white">
            {{ decodeHTML(talk.snippet.title) }}
          </h3>
        </ClientOnly>
        <p class="line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
          {{ talk.snippet.description }}
        </p>
      </div>
      <div class="mt-auto">
        <AppButton :link="`/talks/${slug}`">
          En savoir plus
          <Icon name="fa6-solid:arrow-right" />
        </AppButton>
      </div>
    </div>
  </article>
</template>
