<template>
  <section class="relative h-screen overflow-hidden md:h-section">
    <div class="absolute top-0 flex h-full w-full flex-col gap-72">
      <h1
        class="ml-10 mt-8 text-nowrap font-ultra text-[10vw] leading-none text-white"
      >
        VUE.JS PARIS
      </h1>
      <div class="ml-10 flex w-[600px] flex-col items-center gap-5">
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
    <img src="/images/Paris4.png" alt="" class="w-screen object-cover" />
  </section>
</template>
