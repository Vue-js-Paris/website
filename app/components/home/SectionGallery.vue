<template>
  <section class="relative">
    <div
      class="relative flex w-screen flex-col gap-10 px-5 md:mx-auto md:w-[90%] md:px-0 xl:w-2/3"
    >
      <div class="relative flex w-full flex-col gap-10 md:flex-row md:gap-20">
        <AppSectionTitle
          title="Vue.js Paris en images"
          description="Revivez les meilleurs moments du meetup en un clin d'œil !"
        />
        <div
          class="hidden md:absolute md:inset-0 md:z-10 md:block md:h-64 md:w-full md:bg-gradient-to-r md:from-darkerbg md:from-25% md:to-transparent md:to-40%"
        >
          <AppSectionTitle
            title="Vue.js Paris en images"
            description="Revivez les meilleurs moments du meetup en un clin d'œil !"
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
