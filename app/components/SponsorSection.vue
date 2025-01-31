<template>
  <section class="bg-slate-200 pb-32 pt-64 dark:bg-darkerbg">
    <div
      class="flex w-screen flex-col gap-20 px-5 md:mx-auto md:w-[90%] md:flex-row md:px-0 xl:w-2/3"
    >
      <SectionTitle title="Nos sponsors">
        <AppOutlineButton
          link="/sponsor"
          class="text-center"
          background="bg-slate-100"
          dark-background="dark:bg-darkerbg"
          dark-border="dark:border-slate-600"
        >
          Devenir sponsor
        </AppOutlineButton>
      </SectionTitle>
      <div class="flex w-full justify-between">
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
