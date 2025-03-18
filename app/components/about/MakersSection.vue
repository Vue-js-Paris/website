<template>
  <section class="md:px-10">
    <div
      class="background border-bordercolor flex h-full w-full flex-col-reverse gap-10 border-2 p-5 md:flex-row md:gap-20 md:p-10 xl:p-20"
    >
      <div
        class="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-20"
      >
        <AppSectionTitle
          title="L'équipe derrière le projet"
          description="Un projet conçu avec passion et expertise par deux créatifs."
        />
        <div class="flex flex-col items-start gap-10 md:flex-row md:gap-0">
          <MakerCard
            image="/images/photoAlex.webp"
            alt="Alexis Vachet"
            name="Alexis Vachet"
            description="Développeur Front-End"
            linkedin="https://www.linkedin.com/in/alexis-vachet/"
            github="https://github.com/Alx78370"
          />
          <MakerCard
            image="/images/Elise.webp"
            alt="Jessica Blondel"
            name="Jessica Blondel"
            description="UX/UI Designer"
            linkedin="https://www.linkedin.com/in/florianbeaumont/"
          />
        </div>
      </div>
    </div>
  </section>
</template>
