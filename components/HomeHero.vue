<script setup lang="ts">
const { x, y } = useMouse({ touch: false });

const getParallaxStyles = computed(() => {
  if (typeof window === "undefined") {
    return { transform: "none" };
  }

  const offsetX = (x.value / window.innerWidth - 0.5) * 30;
  const offsetY = (y.value / window.innerHeight - 0.5) * 30;

  return {
    transform: `translate(${offsetX}px, ${offsetY}px)`,
  };
});
</script>

<template>
  <section>
    <div>
      <img
        src="../assets/images/fakeHero.webp"
        alt="fakeHeroImage"
        class="h-screen w-full object-cover"
      />
      <div class="absolute top-1/4 flex w-full flex-col items-center">
        <img
          src="../assets/images/logo-uwu.png"
          alt="logo VueJS"
          class="transition-transform duration-300 ease-out md:h-96"
          :style="getParallaxStyles"
        />
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
