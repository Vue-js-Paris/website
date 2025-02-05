<template>
  <section class="bg-slate-200 py-20 dark:bg-darkerbg">
    <div
      class="flex h-full w-screen flex-col items-center gap-10 px-5 md:mx-auto md:w-[90%] md:px-0 xl:w-2/3"
    >
      <SectionTitle
        title="Les organisateurs"
        class="!static !max-w-[80%] border-b-2 border-slate-300 text-center dark:border-white md:!max-w-[50%]"
      />
      <div
        class="flex flex-col justify-between gap-10 md:flex-row md:items-start"
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
    </div>
  </section>
</template>
