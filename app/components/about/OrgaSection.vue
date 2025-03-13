<template>
  <section class="md:px-10">
    <div
      class="background flex h-full w-full flex-col-reverse gap-10 border-2 border-bordercolor p-5 md:flex-row md:gap-20 md:p-10 xl:p-20"
    >
      <div class="flex flex-col items-center justify-between gap-10 md:gap-20">
        <AppSectionTitle
          title="Les organisateurs"
          class="static! text-center!"
        />
        <div class="flex flex-col md:flex-row">
          <OrgCard
            image="/images/Eduardo.webp"
            alt="Eduardo San Martin Morote"
            name="Eduardo San Martin Morote"
            linkedin="https://www.linkedin.com/in/edsanmartin/"
            github="https://github.com/posva"
          />
          <OrgCard
            image="/images/Elise.webp"
            alt="Elise Patrikainen"
            name="Elise Patrikainen"
            linkedin="https://www.linkedin.com/in/elisepatrikainen/"
            github="https://github.com/ElisePatrikainen"
          />
          <OrgCard
            image="/images/Florian.webp"
            alt="Florian Beaumont"
            name="Florian Beaumont"
            linkedin="https://www.linkedin.com/in/florianbeaumont/"
            github="https://github.com/FlorianBx"
          />
        </div>
      </div>
    </div>
  </section>
</template>
