<template>
  <section class="bg-slate-200 py-20 dark:bg-slate-900">
    <div
      class="flex w-screen flex-col-reverse gap-20 px-5 md:mx-auto md:w-[90%] md:flex-row md:px-0 xl:w-2/3"
    >
      <div class="text-primaryblue flex flex-col gap-5 dark:text-white">
        <div class="flex flex-col gap-5">
          <h2 class="text-xl font-semibold">Pourquoi accueillir le meetup ?</h2>
          <p>
            Vous disposez d’un espace convivial et vous souhaitez contribuer à
            la dynamique de la communauté web ? En accueillant
            <strong>Vue.js Paris</strong>, vous offrez aux membres un lieu
            chaleureux pour se retrouver, partager et apprendre. C’est également
            une excellente occasion de faire découvrir votre entreprise ou votre
            organisation.
          </p>
          <p>En devenant hôte du meetup, vous :</p>
          <ul class="list-inside list-disc">
            <li>
              Favorisez le <strong>networking</strong> et les échanges autour
              des technologies Vue.js.
            </li>
            <li>
              Mettez en valeur votre <strong>culture d’entreprise</strong> et
              vos locaux auprès d’une audience technique.
            </li>
            <li>
              Contribuez à l’essor de la
              <strong>communauté open source</strong> en offrant un cadre
              propice au partage de connaissances.
            </li>
          </ul>
        </div>

        <h2 class="text-xl font-semibold">Comment nous accueillir ?</h2>
        <p>
          Il vous suffit de mettre à disposition une salle pouvant accueillir
          nos participant·e·s, idéalement équipée d’un projecteur et d’un réseau
          Wi-Fi fiable. Que vous soyez une entreprise, une école ou un espace de
          coworking, votre soutien est précieux pour le succès de nos
          rencontres.
        </p>
      </div>

      <SectionTitle
        title="Accueillir le meetup"
        description="Vous souhaitez ouvrir vos portes à la communauté Vue.js ?"
      >
        <AppOutlineButton
          link="https://x.com/messages/747975155733893124-831503542703816704"
          target="_blank"
          rel="noopener noreferrer"
          class="w-fit text-center sm:w-full"
          background="bg-slate-100"
          dark-background="dark:bg-slate-800"
          dark-border="dark:border-slate-600"
        >
          Nous contacter
        </AppOutlineButton>
      </SectionTitle>
    </div>
  </section>
</template>
