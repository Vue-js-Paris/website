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
      class="text-primaryblue text-3xl font-semibold dark:text-white lg:text-5xl"
      :class="{
        'pb-5': description,
      }"
    >
      {{ title }}
    </h2>
    <p v-if="description" class="text-gray-500 dark:text-gray-300">
      {{ description }}
    </p>
    <div :class="{ 'pt-5': $slots.default }">
      <slot />
    </div>
  </div>
</template>
