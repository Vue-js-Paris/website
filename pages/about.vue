<template>
  <div>
    <h1 class="mt-10 text-center text-5xl font-semibold text-secondary">
      Les organisateurs de Paris Vue.js
    </h1>
    <div class="mx-10 mt-10 flex flex-col justify-between gap-10 md:flex-row">
      <AboutCard
        image="/images/Eduardo.webp"
        alt="Eduardo San Martin Morote"
        name="Eduardo San Martin Morote"
      >
        <p class="text-lg text-gray-600">
          Spécialisé en développement Front-End, Eduardo se consacre à résoudre
          des problématiques métiers en créant des solutions adaptées, avec une
          attention particulière portée à l'UI/UX. Membre de l'équipe core de
          Vue.js, il contribue activement à l'écosystème, organise le meetup
          Vue.js à Paris et partage régulièrement ses connaissances lors de
          conférences. Ce qui l'inspire le plus, c'est de collaborer avec des
          équipes motivées sur des projets créatifs et ambitieux.
        </p>
      </AboutCard>
      <AboutCard
        image="/images/Elise.webp"
        alt="Elise Patrikainen"
        name="Elise Patrikainen"
      >
        <p class="text-lg text-gray-600">
          Elise est une professionnelle freelance spécialisée dans Vue.js. Elle
          occupe actuellement le poste de lead front-end chez Elephantastic, une
          plateforme d'investigation OSINT, et travaille également comme
          consultante pour NuxtLabs. Elle adore contribuer à la communauté en
          intervenant lors de meetups et de conférences.
        </p>
      </AboutCard>
      <AboutCard
        image="/images/Florian.webp"
        alt="Florian Beaumont"
        name="Florian Beaumont"
      >
        <p class="text-lg text-gray-600">
          Florian est un développeur front-end passionné par l'écosystème Vue.js
          et la création d'expériences web modernes et performantes.
          Co-organisateur du meetup VueJS Paris, il aime partager ses
          connaissances, échanger avec la communauté tech, et apprendre en
          continu. Quand il n'est pas en train de coder, Florian
          participecactivement à des meetups, où il adore rencontrer d'autres
          passionnés de tech et discuter des dernières tendances.
        </p>
      </AboutCard>
    </div>
  </div>
</template>
