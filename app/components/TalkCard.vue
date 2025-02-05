<script setup lang="ts">
const props = defineProps<{ talk: YouTubeVideo }>();

const slug = computed(() => slugify(props.talk.snippet.title));
</script>

<template>
  <article
    class="flex flex-col gap-5 rounded-2xl bg-slate-200 p-8 border-2 border-gray-700 dark:bg-darkbg lg:flex-row lg:gap-10">
    <div class="h-fit overflow-hidden rounded-2xl lg:w-1/3">
      <img :src="talk.snippet.thumbnails.high.url" :alt="talk.snippet.title" class="h-full w-full object-cover" />
    </div>
    <div class="flex w-full flex-col lg:w-2/3">
      <div>
        <ClientOnly>
          <h3 class="text-primaryblue pb-2 text-2xl font-semibold dark:text-white">
            {{ decodeHTML(talk.snippet.title) }}
          </h3>
        </ClientOnly>
        <p class="line-clamp-3 pb-5 text-gray-500 dark:text-gray-400">
          {{ talk.snippet.description }}
        </p>
      </div>
      <div class="mt-auto">
        <AppLink :link="`/talks/${slug}`">
          En savoir plus
          <Icon name="mdi:arrow-right" />
        </AppLink>
      </div>
    </div>
  </article>
</template>
