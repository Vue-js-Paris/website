<template>
  <section class="bg-slate-100 py-20 dark:bg-darkerbg">
    <div
      class="flex w-screen flex-col gap-20 px-5 md:mx-auto md:w-[90%] md:flex-row md:px-0 xl:w-2/3"
    >
      <SectionTitle
        title="Devenir sponsor de Vue.js Paris"
        description="Soutenez la communauté Vue.js Paris en devenant sponsor de l'événement."
      >
        <AppOutlineButton
          link="https://x.com/messages/747975155733893124-831503542703816704"
          target="_blank"
          rel="noopener noreferrer"
          background="bg-slate-100"
          dark-background="dark:bg-slate-800"
          dark-border="dark:border-slate-600"
          class="w-fit text-center sm:w-full"
        >
          Contactez-nous
        </AppOutlineButton>
      </SectionTitle>

      <div class="flex flex-col gap-5 text-primaryblue dark:text-white">
        <div class="flex flex-col gap-5">
          <h2 class="text-xl font-semibold">Pourquoi devenir sponsor ?</h2>
          <p>
            Le <strong>Meetup Vue.js Paris</strong> est un événement à but non
            lucratif qui rassemble une communauté dynamique de
            développeur·euse·s passionné·e·s par Vue.js et le développement web.
            En devenant sponsor, vous jouez un rôle essentiel dans
            l’organisation et la pérennité de nos rencontres.
          </p>
          <p>Grâce à votre soutien, nous pouvons :</p>
          <ul class="list-inside list-disc">
            <li>
              Inviter des <strong>speakers reconnus</strong> et offrir à la
              communauté des conférences enrichissantes.
            </li>
            <li>
              Assurer un accueil de qualité grâce à des
              <strong>goodies, boissons et autres supports</strong> qui rendent
              chaque événement plus convivial.
            </li>
            <li>
              Faire rayonner <strong>l’écosystème Vue.js</strong> en proposant
              des contenus de qualité et en renforçant l’engagement de la
              communauté.
            </li>
          </ul>
        </div>

        <h2 class="text-xl font-semibold">Les avantages pour vous</h2>
        <ul class="list-inside list-disc">
          <li>
            🚀 <strong>Visibilité</strong> : valorisez votre marque auprès d’une
            audience qualifiée et passionnée par les technologies web.
          </li>
          <li>
            💡 <strong>Engagement</strong> : soutenez un projet communautaire et
            montrez votre intérêt pour l'innovation et le partage.
          </li>
          <li>
            🔍 <strong>Recrutement</strong> : entrez en contact avec des talents
            et des profils techniques variés.
          </li>
        </ul>

        <h2 class="text-xl font-semibold">Comment nous soutenir ?</h2>
        <p>
          Nous proposons plusieurs formules adaptées à vos objectifs :
          sponsoring financier, logistique, goodies, etc. Chaque contribution
          compte pour faire de Vue.js Paris un événement de référence !
        </p>
      </div>
    </div>
  </section>
</template>
