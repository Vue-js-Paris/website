<template>
  <section class="relative">
    <div
      class="flex w-screen flex-col gap-10 px-5 md:mx-auto md:w-[90%] md:flex-row md:gap-20 md:px-0 xl:w-2/3 xl:gap-44"
    >
      <SectionTitle
        title="Nos sponsors"
        description="Merci à nos sponsors : sans vous, ce meetup n'existerait pas !"
        class="hidden md:block"
      />
      <SectionTitle
        description="Merci à nos sponsors"
        class="pt-20 text-center md:hidden"
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
