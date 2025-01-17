<template>
  <section class="relative bg-slate-200 py-20 dark:bg-slate-900">
    <div
      class="flex w-screen flex-col gap-20 px-5 md:mx-auto md:w-4/5 md:flex-row md:px-0 xl:w-2/3"
    >
      <SectionTitle
        class="h-full w-full md:sticky md:top-[180px] md:max-w-[20%]"
        title="Les prochains talks"
        description="Un aperçu de ce qui vous attend au prochain meetup."
      >
        <AppButton
          link="https://github.com/Vue-js-Paris/talks/issues/new?assignees=&labels=&projects=&template=new_talk_fr.yml"
          target="_blank"
          rel="noopener"
          class="w-fit !bg-primary text-center hover:!bg-tertiary sm:w-full"
        >
          Devenir speaker
        </AppButton>
      </SectionTitle>
      <div class="flex w-full flex-col justify-between gap-5">
        <!-- <SpeakerCard image="/images/Florian.webp" name="Florian Beaumont" /> -->
        <SpeakerCard />
      </div>
    </div>
  </section>
</template>
