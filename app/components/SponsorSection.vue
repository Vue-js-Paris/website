<template>
  <section class="bg-slate-100 py-20 dark:bg-slate-800">
    <div
      class="flex w-screen flex-col items-center gap-10 px-5 md:mx-auto md:w-4/5 md:px-0 xl:w-2/3"
    >
      <SectionTitle
        class="!static !max-w-[80%] border-b-2 border-slate-300 text-center dark:border-white md:!max-w-[50%]"
        title="Nos sponsors"
      />
      <div class="flex w-full justify-evenly">
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
