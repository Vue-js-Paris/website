<template>
  <div
    class="flex w-screen flex-col items-start px-5 md:mx-auto md:w-2/3 md:px-0"
  >
    <h1
      class="py-10 text-5xl font-semibold text-secondary underline decoration-primary dark:text-white"
    >
      À propos
    </h1>
    <section>
      <h2
        class="py-10 text-4xl font-semibold text-secondary underline decoration-primary dark:text-white"
      >
        Qu'est ce que Paris Vue.js ?
      </h2>
      <p class="pb-5 text-xl text-secondary dark:text-white">
        Vue.js Paris est une communauté parisienne passionnée par le framework
        Vue.js. Son objectif est de rassembler les utilisateur·rice·s,
        développeur·euse·s et enthousiastes de Vue.js de la région parisienne et
        au-delà. Nous organisons des rencontres bimensuelles ouvertes à tou·te·s
        et gratuites afin de partager des connaissances, des expériences, et de
        découvrir les dernières innovations autour de Vue.js.
      </p>
      <p class="pb-5 text-xl text-secondary dark:text-white">
        Ces événements se tiennent tous les deux mois, avec un mélange
        d'interventions inspirantes, de discussions techniques, et d'échanges
        conviviaux. Lors de chaque meetup, nous explorons des sujets variés
        autour de Vue.js et des technologies du web moderne. Après les
        conférences, nous nous réunissons pour un moment d'échange autour d'un
        apéritif, idéal pour rencontrer d'autres membres de la communauté et
        approfondir les discussions.
      </p>
      <p class="text-xl text-secondary dark:text-white">
        Ces rencontres sont rendus possibles grâce au soutien de nos sponsors,
        qui nous offrent des lieux pour accueillir les rencontres et participent
        à l'organisation des moments conviviaux. Rejoignez-nous pour partager,
        apprendre, et contribuer à l’écosystème Vue.js dans une ambiance
        chaleureuse et collaborative !
      </p>
    </section>
    <section>
      <h2
        class="py-10 text-4xl font-semibold text-secondary underline decoration-primary dark:text-white"
      >
        Les organisateurs
      </h2>
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
    </section>
    <section>
      <h2
        class="py-10 text-4xl font-semibold text-secondary underline decoration-primary dark:text-white"
      >
        Qui peut rejoindre ?
      </h2>
      <p class="pb-5 text-xl text-secondary dark:text-white">
        Vue.js Paris est ouvert à toutes et tous, que vous soyez débutant·e, en
        apprentissage, ou expert·e en Vue.js ou dans le développement web. Que
        vous souhaitiez découvrir le framework, partager vos connaissances, ou
        rencontrer d'autres passionnés, vous êtes le·la bienvenu·e !
      </p>
      <p class="text-xl text-secondary dark:text-white">
        Nos meetups sont gratuits, sur inscription, et ouverts à toutes les
        personnes intéressées par Vue.js et les technologies associées. Les
        étudiant·e·s, les développeur·euse·s confirmé·e·s, et les curieux·ses de
        la région parisienne ou au-delà sont invités à participer pour
        apprendre, partager, et se connecter à une communauté accueillante.
      </p>
    </section>
    <section>
      <h2
        class="py-10 text-4xl font-semibold text-secondary underline decoration-primary dark:text-white"
      >
        Comment nous rejoindre ?
      </h2>
      <p class="pb-5 text-xl text-secondary dark:text-white">
        Vous avez plusieurs façons de rejoindre notre communauté dynamique :
      </p>
      <ul class="list-inside list-disc text-xl text-secondary dark:text-white">
        <li>
          Vous inscrire sur notre
          <NuxtLink
            to="https://www.meetup.com/fr-FR/Vuejs-Paris/"
            target="_blank"
            rel="noopener"
            class="hover:text-tertiary hover:decoration-tertiary inline-block font-semibold text-primary underline decoration-primary"
          >
            groupe Meetup
          </NuxtLink>
          pour être informé·e des prochains événements.
        </li>
        <li>
          Participer à nos prochains rassemblements en tant que spectateur·rice
          ou intervenant·e.
        </li>
        <li>
          Partager nos événements avec vos collègues et amis, ou les inviter à
          se joindre à nous.
        </li>
        <li>
          Devenir partenaire ou sponsor pour soutenir nos événements et
          contribuer à leur succès.
        </li>
        <li>En parler autour de vous pour faire grandir notre communauté !</li>
      </ul>
    </section>
    <section>
      <h2
        class="py-10 text-4xl font-semibold text-secondary underline decoration-primary dark:text-white"
      >
        Nous contacter
      </h2>
      <p class="pb-5 text-xl text-secondary dark:text-white">
        Parce qu'une communauté ne vit que par ses interactions et ses échanges,
        rejoignez-nous et contribuez à Vue.js Paris sur les réseaux sociaux et
        les plateformes de discussion.
      </p>
      <p class="text-xl text-secondary dark:text-white">
        Pour toute question ou suggestion, contactez-nous directement !
      </p>
    </section>
  </div>
</template>
