<template>
  <section class="py-32">
    <div
      class="flex h-full w-screen flex-col-reverse gap-20 px-5 md:mx-auto md:w-[90%] md:flex-row md:px-0 xl:w-2/3"
    >
      <SectionTitle
        title="Foire aux questions"
        description="Vous avez des questions ? Nous avons des réponses !"
      />
      <div class="flex flex-col gap-5 text-primaryblue dark:text-white">
        <div class="flex flex-col gap-5">
          <h2 class="text-xl font-semibold">Qui peut nous rejoindre ?</h2>
          <p>
            Vue.js Paris est ouvert à toutes et tous, que vous soyez débutant·e,
            en apprentissage, ou expert·e en Vue.js ou dans le développement
            web. Que vous souhaitiez découvrir le framework, partager vos
            connaissances, ou rencontrer d'autres passionnés, vous êtes le·la
            bienvenu·e !
          </p>
          <p>
            Nos meetups sont gratuits, sur inscription, et ouverts à toutes les
            personnes intéressées par Vue.js et les technologies associées. Les
            étudiant·e·s, les développeur·euse·s confirmé·e·s, et les
            curieux·ses de la région parisienne ou au-delà sont invités à
            participer pour apprendre, partager, et se connecter à une
            communauté accueillante.
          </p>
        </div>

        <h2 class="text-xl font-semibold">Comment nous rejoindre ?</h2>
        <p>
          Vous avez plusieurs façons de rejoindre notre communauté dynamique :
        </p>
        <ul class="list-inside list-disc">
          <li>
            Vous inscrire sur notre
            <NuxtLink
              to="https://www.meetup.com/fr-FR/Vuejs-Paris/"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-tertiary hover:decoration-tertiary inline-block font-semibold text-primarygreen-200 underline decoration-primarygreen-200"
            >
              groupe Meetup
            </NuxtLink>
            pour être informé·e des prochains événements.
          </li>
          <li>
            Participer à nos prochains rassemblements en tant que
            spectateur·rice ou intervenant·e.
          </li>
          <li>
            Proposer un sujet de talk via notre
            <NuxtLink
              to="https://github.com/Vue-js-Paris/talks/issues/new?assignees=&labels=&projects=&template=new_talk_fr.yml"
              target="_blank"
              rel="noopener"
              class="hover:text-tertiary hover:decoration-tertiary inline-block font-semibold text-primarygreen-200 underline decoration-primarygreen-200"
            >
              Github
            </NuxtLink>
          </li>
          <li>
            Partager nos événements avec vos collègues et amis, ou les inviter à
            se joindre à nous.
          </li>
          <li>
            Devenir partenaire ou sponsor pour soutenir nos événements et
            contribuer à leur succès.
          </li>
          <li>
            En parler autour de vous pour faire grandir notre communauté !
          </li>
        </ul>
        <h2 class="text-xl font-semibold">Comment nous contacter ?</h2>
        <div class="flex flex-col gap-5">
          <p>
            Parce qu'une communauté ne vit que par ses interactions et ses
            échanges, rejoignez-nous et contribuez à Vue.js Paris sur les
            réseaux sociaux et les plateformes de discussion.
          </p>
          <p>Pour toute question ou suggestion, contactez-nous directement !</p>
        </div>
      </div>
    </div>
  </section>
</template>
