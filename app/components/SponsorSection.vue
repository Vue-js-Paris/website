<template>
  <section class="bg-slate-100 py-20 dark:bg-slate-800">
    <div
      class="flex w-screen flex-col gap-10 px-5 md:mx-auto md:w-4/5 md:px-0 xl:w-2/3"
    >
      <SectionTitle class="text-center" title="Nos sponsors" />
      <div class="flex w-full flex-col justify-evenly lg:flex-row">
        <SponsorCard
          image="/images/mastering_pinia.webp"
          name="Mastering Pinia"
          link="https://masteringpinia.com/"
        />
        <SponsorCard image="/images/Nx.webp" name="Nx" link="https://nx.dev/" />
        <SponsorCard
          image="/images/Neon.webp"
          name="Neon"
          link="https://neon.tech/"
        />
      </div>
    </div>
  </section>
</template>
