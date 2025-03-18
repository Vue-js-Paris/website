<script setup lang="ts">
const { x: mouseX, y: mouseY } = useMouse();
const backgroundRef = ref<HTMLElement | null>(null);

const mousePosition = computed(() => {
  if (!backgroundRef.value) return { x: -100, y: -100 };

  const rect = backgroundRef.value.getBoundingClientRect();
  return {
    x: mouseX.value - rect.left - window.scrollX,
    y: mouseY.value - rect.top - window.scrollY,
  };
});
</script>

<template>
  <section class="md:px-10">
    <div class="flex w-full flex-col gap-2">
      <h1
        class="background border-bordercolor border-2 p-5 text-center text-4xl leading-none font-semibold text-nowrap text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[11rem]"
      >
        VUE.JS PARIS
      </h1>
      <div class="flex w-full justify-between gap-2">
        <div
          ref="backgroundRef"
          class="background background-dots border-bordercolor flex h-[500px] w-full justify-between gap-2 border-2 p-5 lg:w-2/3 xl:w-[70%] xl:p-20"
          :style="{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`,
          }"
        >
          <div
            class="flex h-full w-full items-center justify-start md:items-end"
          >
            <div
              class="flex flex-col items-center gap-5 md:max-w-[400px] md:px-0 lg:max-w-[500px]"
            >
              <h2
                class="z-50 text-center text-3xl font-semibold text-white sm:text-5xl md:z-0 md:text-start"
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
                class="z-20 md:hidden"
              >
                Participer au meetup
              </AppButton>
            </div>
          </div>
        </div>
        <img
          src="/images/hero image.svg"
          alt="tour eiffel"
          class="hidden h-[500px] w-1/3 object-cover saturate-[0.75] lg:block xl:w-[30%]"
        />
      </div>
    </div>
  </section>
</template>
