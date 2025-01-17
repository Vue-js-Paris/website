<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="h-full w-full">
    <h2
      class="pb-5 text-4xl font-semibold text-secondary dark:text-white xl:text-5xl"
    >
      {{ title }}
    </h2>
    <p class="pb-5 text-lg text-gray-500 dark:text-gray-300">
      {{ description }}
    </p>
    <slot />
  </div>
</template>
