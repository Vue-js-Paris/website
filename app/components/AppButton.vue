<script setup lang="ts">
defineProps({
  link: {
    type: String,
    default: "",
  },
  target: {
    type: String,
    default: "",
  },
  rel: {
    type: String,
    default: "noopener",
  },
});
</script>

<template>
  <NuxtLink
    :to="link"
    :target="target"
    :rel="rel"
    class="flex w-fit items-center justify-center gap-2 rounded-2xl bg-tertiary p-4 text-xl font-semibold text-white transition-all hover:scale-105 hover:bg-primary hover:shadow-lg hover:duration-300 hover:ease-in-out"
  >
    <slot />
  </NuxtLink>
</template>
