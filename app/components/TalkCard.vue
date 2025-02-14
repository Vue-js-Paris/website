<script setup lang="ts">
const props = defineProps<{ talk: YouTubeVideo }>();

const slug = computed(() => slugify(props.talk.snippet.title));
</script>

<template>
  <article
    class="flex flex-col gap-5 rounded-2xl border-2 border-slate-500 bg-transparent p-8 lg:flex-row lg:gap-10"
  >
    <div
      class="h-32 w-full overflow-hidden rounded-2xl sm:h-56 md:h-64 lg:h-28 lg:w-1/3 xl:h-36"
    >
      <img
        :src="talk.snippet.thumbnails.high.url"
        :alt="talk.snippet.title"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="flex w-full flex-col lg:w-2/3">
      <div>
        <ClientOnly>
          <h3 class="pb-2 text-xl font-semibold text-white lg:text-2xl">
            {{ decodeHTML(talk.snippet.title) }}
          </h3>
        </ClientOnly>
        <p class="line-clamp-3 pb-5 text-gray-400">
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
