<template>
  <div>
    <HomeHero2 />
    <SponsorSection />
    <NextSpeakers />
    <section class="bg-slate-200 py-20 dark:bg-slate-900">
      <div class="flex flex-col gap-20">
        <AppCarousel
          :images="[
            '/images/meetupAtelier1.webp',
            '/images/meetupAtelier2.webp',
            '/images/meetupAtelier3.webp',
            '/images/meetupAtelier4.webp',
            '/images/meetupAtelier5.webp',
            '/images/meetupAtelier6.webp',
          ]"
          direction="left"
        />
        <AppCarousel
          :images="[
            '/images/meetupAtelier1.webp',
            '/images/meetupAtelier2.webp',
            '/images/meetupAtelier3.webp',
            '/images/meetupAtelier4.webp',
            '/images/meetupAtelier5.webp',
            '/images/meetupAtelier6.webp',
          ]"
          direction="right"
        />
      </div>
    </section>
    <LatestTalks />
  </div>
</template>
