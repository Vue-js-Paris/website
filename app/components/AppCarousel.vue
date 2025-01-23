<script setup lang="ts">
const items = [
  "/images/meetupAtelier1.webp",
  "/images/meetupAtelier2.webp",
  "/images/meetupAtelier3.webp",
  "/images/meetupAtelier4.webp",
  "/images/meetupAtelier5.webp",
  "/images/meetupAtelier6.webp",
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<template>
  <section class="bg-slate-200 py-20 dark:bg-slate-900">
    <div
      class="flex w-screen flex-col-reverse gap-20 px-5 md:mx-auto md:w-4/5 md:flex-row md:px-0 xl:w-2/3"
    >
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="overflow-hidden rounded-2xl outline outline-4 outline-secondary dark:outline-white"
        indicators
      >
        <img :src="item" class="w-full object-cover" draggable="false" />
      </UCarousel>
      <SectionTitle
        title="Le meetup en image"
        description="Voici quelques photos de nos meetups."
      >
        <AppOutlineButton
          link="/about"
          border="border-gray-400"
          dark-border="dark:border-slate-600"
          class="w-fit text-center sm:w-full"
        >
          En savoir plus
        </AppOutlineButton>
      </SectionTitle>
    </div>
  </section>
</template>
