<template>
  <section class="bg-slate-200 py-32 dark:bg-darkerbg">
    <div
      class="relative flex w-screen flex-col gap-20 px-5 md:mx-auto md:w-[90%] md:px-0 xl:w-2/3"
    >
      <div class="flex w-full">
        <div
          class="absolute inset-0 z-10 h-64 w-full bg-gradient-to-r from-darkerbg from-20% to-transparent"
        >
          <SectionTitle
            title="Vue.js Paris en images"
            description="Revivez les meilleurs moments du meetup en un clin d'œil !"
            class="md:min-w-[20%]"
          />
        </div>

        <AppCarousel
          :images="[
            '/images/meetupAtelier1.webp',
            '/images/meetupAtelier2.webp',
            '/images/meetupAtelier9.webp',
            '/images/meetupAtelier5.webp',
          ]"
          direction="left"
          class="w-max"
        />
      </div>

      <AppCarousel
        :images="[
          '/images/meetupAtelier6.webp',
          '/images/meetupAtelier3.webp',
          '/images/meetupAtelier7.webp',
          '/images/meetupAtelier8.webp',
          '/images/meetupAtelier4.webp',
        ]"
        direction="right"
      />
    </div>
  </section>
</template>
