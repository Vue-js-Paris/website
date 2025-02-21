<template>
  <section class="h-screen px-10">
    <div class="flex w-full flex-col gap-2 pt-2">
      <h1
        class="text-nowrap rounded-2xl border-2 border-[#4f4d4d] bg-black px-10 text-center text-[12vw] leading-none text-white"
      >
        VUE.JS PARIS
      </h1>
      <div class="relative flex w-full">
        <div
          class="flex h-[600px] w-[85%] justify-between gap-2 rounded-2xl border-2 border-[#4f4d4d] bg-black p-5"
        >
          <div class="flex h-full w-full items-end justify-start rounded-2xl">
            <div
              class="mt-10 flex flex-col gap-5 px-5 md:mt-0 md:w-[400px] md:px-0 lg:w-[500px]"
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
            </div>
          </div>
          <img
            src="/images/hero image.svg"
            alt=""
            class="absolute right-0 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
