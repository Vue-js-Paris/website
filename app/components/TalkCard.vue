<script setup lang="ts">
const props = defineProps<{ talk: YouTubeVideo }>();

const slug = computed(() => slugify(props.talk.snippet.title));
</script>

<template>
  <article
    class="flex flex-col gap-5 rounded-2xl bg-slate-200 p-8 dark:bg-slate-900 lg:flex-row lg:gap-10"
  >
    <img
      :src="talk.snippet.thumbnails.high.url"
      :alt="talk.snippet.title"
      class="aspect-video h-fit w-full rounded-2xl object-cover lg:w-1/3"
    />
    <div class="flex w-full flex-col lg:w-2/3">
      <div>
        <ClientOnly>
          <h3
            class="pb-2 text-2xl font-semibold text-secondary dark:text-white"
          >
            {{ decodeHTML(talk.snippet.title) }}
          </h3>
        </ClientOnly>
        <p class="line-clamp-3 pb-5 text-lg text-gray-500 dark:text-gray-400">
          {{ talk.snippet.description }}
        </p>
      </div>
      <div class="mt-auto">
        <NuxtLink
          :to="`/talks/${slug}`"
          class="ml-auto flex w-fit items-center gap-1 hover:text-primary hover:underline hover:duration-200"
        >
          En savoir plus
          <Icon name="mdi:arrow-right" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
