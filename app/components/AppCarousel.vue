<template>
  <section class="bg-slate-200 py-20 dark:bg-slate-900">
    <div
      class="flex w-screen flex-col-reverse gap-20 px-5 md:mx-auto md:w-4/5 md:flex-row md:px-0 xl:w-2/3"
    >
      <div class="carousel w-full rounded-2xl">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="/images/meetupAtelier1.webp" class="w-full" />
          <div
            class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
          >
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="/images/meetupAtelier2.webp" class="w-full" />
          <div
            class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
          >
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="/images/meetupAtelier3.webp" class="w-full" />
          <div
            class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
          >
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="/images/meetupAtelier4.webp" class="w-full" />
          <div
            class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
          >
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
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
