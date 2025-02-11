<template>
  <section
    class="relative h-[90vh] w-full md:h-[110vh] md:bg-[url('/images/Paris_cover.webp')] md:bg-fixed md:bg-right md:bg-no-repeat"
  >
    <img
      src="/logo/vuejs_paris_logo_dark.webp"
      alt=""
      class="absolute bottom-0 h-1/2 w-full object-contain px-5 md:hidden"
    />
    <div
      class="flex h-[120vh] w-full flex-col gap-10 md:mx-auto md:w-[90%] md:gap-28"
    >
      <h1
        class="hidden md:mt-10 md:block md:text-nowrap md:text-left md:font-herotitle md:text-[10vw] md:leading-none md:text-white"
      >
        VUE.JS PARIS
      </h1>
      <div
        class="mt-10 flex flex-col items-center gap-5 px-5 md:mt-0 md:w-[400px] md:px-0 lg:w-[500px]"
      >
        <h2 class="z-50 text-3xl font-semibold text-white sm:text-5xl md:z-0">
          Découvrir, partager et connecter.
        </h2>
        <p class="z-50 text-slate-300 md:z-0">
          Rejoignez-nous pour notre prochain meetup et découvrez des talks
          passionnants et des moments de partage avec la communauté Vue.js
          Paris.
        </p>
        <AppButton
          link="https://www.meetup.com/fr-FR/Vuejs-Paris/"
          target="_blank"
          rel="noopener noreferrer"
          class="z-50 md:z-0"
        >
          Participer au prochain meetup
        </AppButton>
      </div>
    </div>
  </section>
</template>
