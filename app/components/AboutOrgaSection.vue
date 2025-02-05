<template>
  <section class="bg-slate-200 py-20 dark:bg-darkerbg">
    <div
      class="flex h-full w-screen flex-col gap-20 px-5 md:mx-auto md:w-[90%] md:flex-row md:px-0 xl:w-2/3"
    >
      <div
        class="flex flex-col-reverse justify-between gap-10 md:flex-row md:items-start"
      >
        <AboutCard
          image="/images/Eduardo.webp"
          alt="Eduardo San Martin Morote"
          name="Eduardo San Martin Morote"
          linkedin="https://www.linkedin.com/in/edsanmartin/"
          github="https://github.com/posva"
        />
        <AboutCard
          image="/images/Elise.webp"
          alt="Elise Patrikainen"
          name="Elise Patrikainen"
          linkedin="https://www.linkedin.com/in/elisepatrikainen/"
          github="https://github.com/ElisePatrikainen"
        />
        <AboutCard
          image="/images/Florian.webp"
          alt="Florian Beaumont"
          name="Florian Beaumont"
          linkedin="https://www.linkedin.com/in/florianbeaumont/"
          github="https://github.com/FlorianBx"
        />
      </div>
      <SectionTitle
        title="Les organisateurs"
        description="Rencontrez ceux qui donnent vie à la communauté Vue.js parisienne"
      />
    </div>
  </section>
</template>
