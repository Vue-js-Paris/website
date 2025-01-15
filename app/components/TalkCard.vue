<script setup lang="ts">
const props = defineProps<{ talk: YouTubeVideo }>();

const slug = computed(() => slugify(props.talk.snippet.title));
</script>

<template>
  <article
    class="flex flex-col gap-5 rounded-2xl bg-slate-100 p-8 dark:bg-slate-900 lg:flex-row lg:gap-10"
  >
    <img
      :src="talk.snippet.thumbnails.high.url"
      :alt="talk.snippet.title"
      class="aspect-video h-fit w-full rounded-2xl object-cover lg:w-1/3"
    />
    <div class="flex w-full flex-col lg:w-2/3">
      <div>
        <ClientOnly>
          <h3 class="pb-2 text-lg font-semibold text-secondary dark:text-white">
            {{ decodeHTML(talk.snippet.title) }}
          </h3>
        </ClientOnly>
        <p class="line-clamp-3 pb-5 text-sm text-gray-500 dark:text-gray-400">
          {{ talk.snippet.description }}
        </p>
      </div>
      <div class="mt-auto">
        <AppButton :link="`/talks/${slug}`" class="p-3 xl:p-4">
          En savoir plus
          <Icon name="fa6-solid:arrow-right" />
        </AppButton>
      </div>
    </div>
  </article>
</template>
