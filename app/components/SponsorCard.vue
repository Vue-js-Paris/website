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
  <article class="flex flex-col items-center gap-5 lg:w-fit">
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
    <div class="flex w-fit flex-col gap-2">
      <AppButton
        :link="link"
        target="_blank"
        rel="noopener"
        class="w-full text-center"
      >
        En savoir plus
        <Icon name="fa6-solid:arrow-right" />
      </AppButton>
    </div>
  </article>
</template>
