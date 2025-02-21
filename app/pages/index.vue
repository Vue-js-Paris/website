<template>
  <div>
    <SectionHero class="mb-10 md:mb-20" />
    <div
      class="flex flex-col gap-20 md:gap-72 [&>hr:nth-of-type(even)]:ml-auto"
    >
      <SponsorSection class="md:-mb-44" />
      <hr class="w-2/3" />
      <NextSpeakers />
      <hr class="w-2/3 text-right" />
      <SectionGallery />
      <hr class="w-2/3" />
      <LatestTalks />
    </div>
  </div>
</template>
