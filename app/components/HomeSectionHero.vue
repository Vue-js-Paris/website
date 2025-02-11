<template>
  <section
    class="h-[110vh] w-full bg-fixed bg-right bg-no-repeat md:bg-[url('/images/Paris_cover.webp')]"
  >
    <div class="flex h-[120vh] w-full flex-col gap-28 md:mx-auto md:w-[90%]">
      <h1
        class="mt-10 text-nowrap text-center font-herotitle text-[10vw] leading-none text-white md:text-left"
      >
        VUE.JS PARIS
      </h1>
      <div class="flex flex-col items-center gap-5 px-5 md:w-[500px] md:px-0">
        <h2 class="text-3xl font-semibold text-white sm:text-5xl">
          Découvrir, partager et connecter.
        </h2>
        <p class="text-slate-300">
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
  </section>
</template>
