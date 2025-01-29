<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="flex w-full items-center justify-center gap-10 border-b-2 border-slate-300 pb-5 dark:border-white"
  >
    <h2
      class="text-3xl font-semibold text-secondary dark:text-white lg:text-5xl"
    >
      {{ title }}
    </h2>
    <div>
      <slot />
    </div>
  </div>
</template>
