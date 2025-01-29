<template>
  <section class="bg-slate-200 py-20 dark:bg-slate-900">
    <div
      class="flex w-screen flex-col items-center gap-20 px-5 md:mx-auto md:w-[90%] md:px-0 xl:w-2/3"
    >
      <SectionTitleWithBorder title="Vue.js Paris en images">
        <AppOutlineButton
          link="/about"
          class="text-center"
          background="bg-slate-100"
          dark-background="dark:bg-slate-800"
          dark-border="dark:border-slate-600"
        >
          En savoir plus
        </AppOutlineButton>
      </SectionTitleWithBorder>
      <AppCarousel
        :images="[
          '/images/meetupAtelier1.webp',
          '/images/meetupAtelier2.webp',
          '/images/meetupAtelier9.webp',
          '/images/meetupAtelier5.webp',
          '/images/meetupAtelier4.webp',
        ]"
        direction="left"
      />
      <AppCarousel
        :images="[
          '/images/meetupAtelier6.webp',
          '/images/meetupAtelier3.webp',
          '/images/meetupAtelier7.webp',
          '/images/meetupAtelier8.webp',
        ]"
        direction="right"
      />
    </div>
  </section>
</template>
