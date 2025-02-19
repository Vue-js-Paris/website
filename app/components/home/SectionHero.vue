<template>
  <section
    class="relative w-full md:h-[110vh] md:bg-[url('/images/Paris_cover.webp')] md:bg-fixed md:bg-right md:bg-no-repeat"
  >
    <img
      src="/logo/vuejs_paris_logo_dark.webp"
      alt=""
      class="absolute right-0 top-36 h-64 w-64 object-contain md:hidden"
    />
    <div
      class="flex h-96 w-full flex-col gap-10 md:mx-auto md:h-[120vh] md:w-[90%] md:gap-28"
    >
      <h1
        class="hidden md:mt-10 md:block md:text-nowrap md:text-left md:font-herotitle md:text-[10vw] md:leading-none md:text-white"
      >
        VUE.JS PARIS
      </h1>
      <div
        class="mt-10 flex flex-col gap-5 px-5 md:mt-0 md:w-[400px] md:items-center md:px-0 lg:w-[500px]"
      >
        <h2 class="z-50 text-3xl font-semibold text-white sm:text-5xl md:z-0">
          Découvrir, partager et connecter
        </h2>
        <p class="z-50 hidden text-slate-300 md:z-0 md:block">
          Rejoignez-nous pour notre prochain meetup et découvrez des talks
          passionnants et des moments de partage avec la communauté Vue.js
          Paris.
        </p>
        <AppButton
          link="https://www.meetup.com/fr-FR/Vuejs-Paris/"
          target="_blank"
          rel="noopener noreferrer"
          class="z-50 !w-40 !p-2 text-xs md:z-0 md:!w-fit md:!p-4 md:text-base"
        >
          Participer au prochain meetup
        </AppButton>
      </div>
    </div>
  </section>
</template>
