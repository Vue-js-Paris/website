<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "Sponsor logo",
  },
  name: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <article>
    <NuxtLink
      :to="link"
      target="_blank"
      rel="noopener noreferrer"
      class="flex h-60 w-60 flex-col items-center gap-5 rounded-2xl outline-2 outline-primary hover:outline"
    >
      <img
        :src="image"
        :alt="alt"
        class="h-64 w-64 rounded-2xl object-contain object-bottom lg:h-44 lg:w-44"
      />
      <h2
        class="w-full text-center text-xl font-semibold text-secondary dark:text-white"
      >
        {{ name }}
      </h2>
    </NuxtLink>
  </article>
</template>
