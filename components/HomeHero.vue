<template>
  <section class="relative h-screen">
    <div>
      <img
        src="../assets/images/fakeHero.webp"
        alt="fakeHeroImage"
        class="h-screen w-full object-cover"
      />
      <ShootingStars />
      <ShinningStars />

      <div class="absolute top-1/4 flex w-full flex-col items-center">
        <AnimatedLogo />
        <div class="flex flex-col items-center gap-5">
          <h1 class="text-center text-3xl text-white sm:text-5xl">
            Rejoignez la communauté Vue.js Paris !
          </h1>
          <AppButton
            link="https://www.meetup.com/fr-FR/Vuejs-Paris/"
            target="_blank"
          >
            Participer au prochain meetup
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>
