<template>
  <section class="bg-slate-200 py-32 dark:bg-darkerbg">
    <div class="relative flex w-screen flex-col gap-10 px-5 md:mx-auto md:w-[90%] md:px-0 xl:w-2/3">
      <div class="relative flex flex-col md:flex-row w-full gap-20">
        <SectionTitle title="Vue.js Paris en images"
          description="Revivez les meilleurs moments du meetup en un clin d'œil !" />
        <div
          class="hidden md:block md:absolute md:inset-0 md:z-10 md:h-64 md:w-full md:bg-gradient-to-r md:from-darkerbg md:from-30% md:to-transparent md:to-40%">
          <SectionTitle title="Vue.js Paris en images"
            description="Revivez les meilleurs moments du meetup en un clin d'œil !" />
        </div>

        <AppCarousel :images="[
          '/images/meetupAtelier1.webp',
          '/images/meetupAtelier2.webp',
          '/images/meetupAtelier9.webp',
          '/images/meetupAtelier5.webp',
        ]" direction="left" />
      </div>

      <AppCarousel :images="[
        '/images/meetupAtelier6.webp',
        '/images/meetupAtelier3.webp',
        '/images/meetupAtelier7.webp',
        '/images/meetupAtelier8.webp',
        '/images/meetupAtelier4.webp',
      ]" direction="right" />
    </div>
  </section>
</template>
