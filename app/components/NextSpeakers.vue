<template>
  <section class="relative bg-slate-200 py-20 dark:bg-slate-900">
    <div
      class="flex w-screen flex-col gap-20 px-5 md:mx-auto md:w-4/5 md:flex-row md:px-0 xl:w-2/3"
    >
      <SectionTitle
        title="Les prochains talks"
        description="Un aperçu de ce qui vous attend au prochain meetup."
      >
        <AppOutlineButton
          link="https://github.com/Vue-js-Paris/talks/issues/new?assignees=&labels=&projects=&template=new_talk_fr.yml"
          target="_blank"
          rel="noopener noreferrer"
          class="w-fit text-center sm:w-full"
          background="bg-slate-200"
          dark-background="dark:bg-slate-900"
          border="border-slate-400"
          dark-border="dark:border-slate-700"
        >
          Devenir speaker
        </AppOutlineButton>
      </SectionTitle>
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
    </div>
  </section>
</template>
