<template>
  <section class="md:px-10">
    <div
      class="background flex w-full flex-col gap-10 border-2 border-bordercolor p-5 md:flex-row md:items-center md:gap-20 xl:gap-44 xl:p-20"
    >
      <AppSectionTitle
        title="Nos sponsors"
        description="Merci à nos sponsors : sans vous, ce meetup n'existerait pas !"
      />
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
