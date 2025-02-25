<template>
  <section class="px-10">
    <div
      class="background border-bordercolor flex w-full flex-col-reverse gap-10 border-2 p-20 md:flex-row-reverse md:gap-20"
    >
      <div class="flex w-full flex-col justify-between gap-5">
        <!-- <SpeakerCard
          image="/images/Florian.webp"
          name="Florian Beaumont"
          title="Vue.js 3 : Performances et Composition API"
          description="Vue.js 3 est une version majeure du framework, offrant des performances améliorées grâce à son moteur réactif basé sur les Proxies. La Composition API permet une meilleure organisation et réutilisation du code, particulièrement utile pour les projets complexes. Avec des outils modernes comme Vite, Pinia, et le support natif de TypeScript, Vue.js 3 est idéal pour développer des applications modernes, performantes et scalables."
          linkedin="https://www.linkedin.com/in/florianbeaumont/"
          github="https://github.com/FlorianBx"
        /> -->
        <SpeakerCard />
      </div>
      <AppSectionTitle
        title="Les prochains talks"
        description="Un aperçu de ce qui vous attend au prochain meetup."
      />
    </div>
  </section>
</template>
