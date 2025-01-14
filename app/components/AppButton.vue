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
    class="bg-tertiary flex w-fit items-center justify-center gap-2 rounded-2xl p-4 text-xl font-semibold text-white transition-all hover:scale-105 hover:bg-[#feaa4f] hover:shadow-lg hover:duration-300 hover:ease-in-out"
  >
    <slot />
  </NuxtLink>
</template>
