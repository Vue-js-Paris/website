<YoutubeVideoDetails video-id="Lzo8EStPyUI" video-title="Vue.js Paris Meetup #16 - Migration d'une application vers Vue.js / Nuxt.js" video-description="Talk sur la migration d’une app vers vue.js / nuxt.js par Marc Mendonça, Lead Front End @backmarket, le 04/07/2018
Hébergé par Back Market">

## Résumé du talk

Le speaker raconte comment, à partir de 2015, l’équipe technique de **Back Market** (appelée dans le talk “badoum” pour anonymiser) a progressivement migré leur code front-end d’un mélange Django/jQuery/Angular vers un nouveau socle **Vue.js** + **Nuxt**. Il illustre à la fois la **complexité** de cette transition (héritage technique, contraintes produit, deadlines) et la **méthode** retenue (migration progressive “route par route”) en insistant sur les défis rencontrés et les choix assumés.

---

### 1. Contexte et motivations de la migration

- **Stack initiale hétérogène** : du Django (côté backend), du jQuery, un morceau d’AngularJS, etc. Résultat :
  - Front-end peu performant.
  - Difficulté à ajouter de nouvelles fonctionnalités sans impliquer un dev backend.
  - Code CSS/JS très complexe (ex. usage massif de `!important`, `<br>` pour marges, etc.).
- **Croissance de l’entreprise** : Back Market commence à lever des fonds, grossit en effectif, vise le marché US. Besoin d’une stack front plus pérenne, plus modulaire.

---

### 2. Choix technologique : Vue + Nuxt

- Comparaison des grands frameworks (Angular, React, Vue) :
  - Besoin de **performances** (virtual DOM),
  - Facilité d’apprentissage,
  - Communauté open source active,
  - Possibilité de SSR (Server-Side Rendering) pour le SEO et la rapidité d’affichage.
- Décision de partir sur **Vue.js** avec **Nuxt** (soulignant que Nuxt est français, réactivité de la core team, bonne expérience développeur).

---

### 3. Méthodes de migration

- **Approche “route par route”** :
  1. Nouvelle app (surnommée “pastrami”) pour progressivement remplacer des pages existantes.
  2. Pendant la transition, coexistence de deux environnements (l’ancien site “badoum” et la nouvelle app Vue/Nuxt).
  3. Possibilité de tester en conditions réelles avant de tout basculer.
  4. On peut interrompre la migration si une urgence business survient (ex. lancement US).
- **Approche “en une fois”** (abordée brièvement) : plus risquée car gros “switch” pour tous les utilisateurs, besoin d’un code final “perfect” d’emblée.

---

### 4. Étapes clés de la migration

1. **Initialisation** (± 4 mois) : mise en place du layout (header, footer, navigation), configuration SSR, internationalisation (manuelle avant la sortie du module officiel Nuxt i18n).
2. **Funnel mobile & page d’achat** : première vraie page critique migrée, introduction d’AB-tests. Le design trop ambitieux fait chuter la conversion, retour arrière partiel -> montre la nécessité des itérations prudentes.
3. **Homepage** : refonte rapide (±1 mois) pour bénéficier du SSR, d’une meilleure UX et de transitions SPA.
4. **Pages produit** : cœur de l’e-commerce, gros focus sur l’UX/performance. Plusieurs AB-tests, ajustements design, retours en arrière pour conserver la conversion.
5. **Landing pages** (dernier chantier) : finalisation prévue pour fin août (au moment du talk).

---

### 5. Difficultés & enseignements

- **Synchronisation business** : régulièrement, les priorités changent (lancement US, nouvelle campagne marketing, etc.), imposant de “geler” la migration ou de revenir à l’ancienne app pour certaines features.
- **Adoption interne** : convaincre les parties prenantes (product, marketing…) qu’il faut du temps pour construire un nouveau socle solide.
- **Tests & performances** : affiner SSR, transitions SPA, AB-tests intensifs pour ne pas dégrader la conversion.
- **Prochaine étape** : partage de composants (storybook), architecture micro-frontend pour d’autres services (ex. revente produits, back-office marchand), poursuite d’autres migrations.

---

### Conclusion

- La migration progressive “route par route” a permis à Back Market de **valider** chaque étape (design, UX, perfs) tout en **limitant** les risques.
- Vue/Nuxt répond aux besoins de performance, SSR, design en composants et simplicité d’apprentissage.
- Le projet de migration se joue sur le temps long, avec de la **flexibilité** face aux priorités business (internationalisation, grosses features).
- Malgré les défis (techniques, organisationnels), la transition offre à Back Market un front-end plus moderne, évolutif et maintenable.
