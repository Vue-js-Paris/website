<template>
  <section class="md:px-10">
    <div
      class="background relative flex w-full flex-col gap-5 border-2 border-bordercolor p-5 md:gap-10 xl:p-20"
    >
      <div class="relative flex w-full flex-col gap-10 md:flex-row">
        <AppSectionTitle
          title="Vue.js Paris en images"
          description="Revivez les meilleurs moments du meetup en un clin d'œil !"
          class="md:max-w-[30%] lg:max-w-[20%]"
        />
        <div
          class="hidden md:absolute md:inset-0 md:z-10 md:block md:h-64 md:w-full md:bg-gradient-to-r md:from-black md:from-35% md:to-transparent md:to-50% lg:from-25% lg:to-40%"
        >
          <AppSectionTitle
            title="Vue.js Paris en images"
            description="Revivez les meilleurs moments du meetup en un clin d'œil !"
            class="md:max-w-[30%] lg:max-w-[20%]"
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
