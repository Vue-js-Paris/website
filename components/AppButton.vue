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
    class="flex w-fit items-center justify-center gap-2 rounded-2xl bg-[#FFB05B] p-4 text-xl font-semibold text-white transition-all hover:scale-105 hover:bg-[#feaa4f] hover:shadow-lg"
  >
    <slot />
  </NuxtLink>
</template>
