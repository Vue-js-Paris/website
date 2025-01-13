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
  <article class="flex w-full flex-col items-start gap-5">
    <img :src="image" :alt="alt" class="w-full rounded-2xl object-cover" />
    <h2
      class="w-full border-b-2 border-secondary pb-5 text-3xl font-semibold text-secondary"
    >
      {{ name }}
    </h2>
    <slot />
  </article>
</template>
