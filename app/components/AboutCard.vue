<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <article class="flex w-full flex-col items-center gap-5">
    <img :src="image" :alt="alt" class="w-2/3 rounded-full object-cover" />
    <h2
      class="w-full border-b-2 border-secondary pb-5 text-3xl font-semibold text-secondary dark:text-white"
    >
      {{ name }}
    </h2>
    <p class="text-xl text-gray-600 dark:text-white">
      <slot />
    </p>
  </article>
</template>
