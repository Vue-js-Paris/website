<template>
  <section class="bg-white py-20 dark:bg-slate-800">
    <div
      class="flex w-screen flex-col gap-20 px-5 md:mx-auto md:w-4/5 md:flex-row md:px-0 xl:w-2/3"
    >
      <SectionTitle
        class="h-full w-full md:sticky md:top-[180px] md:max-w-[20%]"
        title="Nos sponsors"
        description="Ils nous soutiennent et nous aident à organiser des événements de qualité."
      >
        <AppButton
          link=""
          target="_blank"
          rel="noopener"
          class="w-fit !bg-primary text-center hover:!bg-tertiary sm:w-full"
        >
          Devenir sponsor
        </AppButton>
      </SectionTitle>
      <div class="flex w-full flex-col justify-between gap-10 lg:flex-row">
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
