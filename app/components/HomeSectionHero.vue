<template>
  <section class="h-screen">
    <div class="flex w-full flex-col gap-10">
      <h1
        class="text-nowrap text-justify font-herotitle text-[13.6vw] leading-none text-white"
      >
        VUE.JS PARIS
      </h1>
      <div class="flex h-[500px] justify-between gap-5">
        <div class="flex h-full w-full rounded-2xl">
          <div
            class="mt-10 flex flex-col gap-5 px-5 md:mt-0 md:w-[400px] md:items-center md:px-0 lg:w-[500px]"
          >
            <h2
              class="z-50 text-3xl font-semibold text-white sm:text-5xl md:z-0"
            >
              Découvrir, partager et connecter.
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
          <div class="flex w-[60%] items-end justify-between">
            <SponsorCard
              image="/images/mastering_pinia.webp"
              name="Mastering Pinia"
              link="https://masteringpinia.com/"
            />
            <SponsorCard
              image="/images/Nx.webp"
              name="Nx"
              link="https://nx.dev/"
            />
            <SponsorCard
              image="/images/Neon.webp"
              name="Neon"
              link="https://neon.tech/"
            />
          </div>
        </div>

        <img
          src="/logo/Vue.js_paris_logo-eiffel-tower.png"
          alt=""
          class="h-full rounded-2xl border-2 border-primarygreen-100 object-cover px-40 py-10"
        />
      </div>
    </div>
  </section>
</template>
