<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <div class="h-full w-full md:sticky md:top-[120px] md:max-w-[20%]">
    <h2
      class="pb-5 text-3xl font-semibold text-secondary dark:text-white lg:text-5xl"
    >
      {{ title }}
    </h2>
    <p class="pb-5 text-gray-500 dark:text-gray-300">
      {{ description }}
    </p>
    <slot />
  </div>
</template>
