<template>
  <section class="relative bg-white py-20 dark:bg-slate-900">
    <div
      class="flex w-screen flex-col gap-10 px-5 md:mx-auto md:w-4/5 md:flex-row md:px-0 xl:w-2/3"
    >
      <div class="h-full w-full md:sticky md:top-[180px] md:max-w-[20%]">
        <h2
          class="pb-5 text-4xl font-semibold text-secondary dark:text-white xl:text-5xl"
        >
          Les prochains speakers
        </h2>
        <p class="text-lg text-gray-300">
          Un aperçu de ce qui vous attend au prochain meetup.
        </p>
      </div>
      <div
        class="flex w-full flex-col justify-between gap-10 lg:flex-row lg:gap-0"
      >
        <SpeakerCard class="lg:w-[28%]" />
        <SpeakerCard class="lg:w-[28%]" />
        <SpeakerCard class="lg:w-[28%]" />
      </div>
    </div>
  </section>
</template>
