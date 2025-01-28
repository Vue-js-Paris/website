<template>
  <section class="relative h-screen overflow-hidden md:h-section">
    <div class="absolute top-0 flex h-full w-full flex-col gap-52">
      <h1
        class="mt-8 text-nowrap font-ultra text-[10.5vw] leading-none text-white"
      >
        VUE.JS PARIS
      </h1>
      <div class="ml-44 flex w-[500px] flex-col items-start gap-5">
        <h2 class="text-3xl font-semibold text-white sm:text-5xl">
          Rejoignez la communauté !
        </h2>
        <AppButton
          link="https://www.meetup.com/fr-FR/Vuejs-Paris/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Participer au prochain meetup
        </AppButton>
      </div>
    </div>
    <img src="/images/Paris7.png" alt="" class="w-screen object-cover" />
  </section>
</template>
