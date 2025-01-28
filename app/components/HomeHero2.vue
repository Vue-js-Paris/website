<template>
  <section class="relative h-screen overflow-hidden md:h-section">
    <div class="absolute top-0 flex h-full w-full flex-col">
      <h1
        class="mt-8 text-nowrap text-center font-ultra text-[10vw] leading-none text-white md:ml-10 md:text-left"
      >
        VUE.JS PARIS
      </h1>
      <div
        class="absolute bottom-64 flex flex-col items-center gap-5 px-5 md:ml-10 md:w-[600px] md:px-0"
      >
        <h2 class="text-center text-3xl font-semibold text-white sm:text-5xl">
          Découvrir, partager et connecter.
        </h2>
        <p class="text-center">
          Rejoignez-nous pour notre prochain meetup et découvrez des talks
          passionnants et des moments de partage avec la communauté Vue.js
          Paris.
        </p>
        <AppButton
          link="https://www.meetup.com/fr-FR/Vuejs-Paris/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Participer au prochain meetup
        </AppButton>
      </div>
    </div>
    <img
      src="/images/Paris_cover_hero.png"
      alt=""
      class="h-full w-screen object-cover object-right"
    />
  </section>
</template>
