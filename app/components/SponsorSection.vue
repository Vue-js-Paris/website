<template>
  <section class="bg-slate-200 py-20 dark:bg-slate-900">
    <div
      class="flex w-screen flex-col items-center gap-10 px-5 md:mx-auto md:w-[90%] md:px-0 xl:w-2/3"
    >
      <SectionTitleWithBorder title="Nos sponsors">
        <AppOutlineButton
          link="/sponsor"
          class="text-center"
          background="bg-slate-100"
          dark-background="dark:bg-slate-800"
          dark-border="dark:border-slate-600"
        >
          Devenir sponsor
        </AppOutlineButton>
      </SectionTitleWithBorder>
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
