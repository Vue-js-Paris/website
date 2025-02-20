---
title: "Ce que j'ai appris en créant une libraire de composants Vue 3 - Stanislas Ormières - Vuejs Paris #26"
videoId: "T-ZCpHOH0mc"
date: "29-09-2024"
description: "Vue.js Paris meetup #26 Sponsors: Mastering Pinia & Nx Host: Valtech"
---

<YoutubeVideoDetails :video-id="videoId" :video-title="title" :video-description="description">

## Résumé du talk

Le speaker (Stanislas Ormières) présente son retour d’expérience sur la création d’une **bibliothèque de composants Vue 3**, pensée pour respecter le **DSFR** (Design System de l’Administration Française) et les exigences d’accessibilité (RGAA). Il détaille les choix techniques (Vite, Rollup, Storybook, Vitest, Cypress, VitePress…), les bonnes pratiques de conception (structure, conventions de commit, tests), ainsi que les défis rencontrés (tests d’accessibilité, documentation, compatibilité SSR, etc.).

---

### 1. Démarrage de projet et écosystème

- **Objectifs** :
  - Construire des composants conformes au DSFR, réutilisables et accessibles.
  - Miser sur **Vue 3** (et non Vue 2) pour favoriser l’adoption de la dernière version.
  - Publier la bibliothèque sur NPM, documenter, tester et garantir l’accessibilité.
- **Choix de Vue 3** :
  - Bénéficier des nouveautés (Composition API, meilleure performance).
  - Encourager la migration vers la V3 dans l’écosystème du client.
- **Organisation** :
  - **Conventions Git** (Git flow ou GitHub flow) et **Conventional Commits** pour générer automatiquement le changelog.
  - **Open source** avec un dépôt GitHub, un serveur Discord pour faciliter la contribution.

---

### 2. Philosophie, syntaxe et tests

- **Stack technique** :
  - **Vite** pour un démarrage rapide et un bundle performant (initialement Rollup pour le mode “library”).
  - **Storybook** pour documenter et visualiser les composants de manière isolée.
  - **Vitest** pour les tests unitaires (propulsé par Vite, proche de Jest).
  - **Cypress** pour les tests end-to-end et de composants, notamment l’accessibilité (focus, navigation clavier, etc.).
- **Accessibilité** :
  - Respect du RGAA et intégration du “focus trap” pour les modales.
  - Vérification que le retour du focus se fasse à l’élément déclencheur.
  - Importance des tests de navigation clavier pour s’assurer de la conformité.

---

### 3. Exemple(s) de code

- Le speaker illustre différentes **approches** pour :
  - Ajouter des composants (boutons, modales, accordéons…),
  - Configurer la **personnalisation** (props, slots) tout en masquant la complexité DSFR (classes CSS, etc.),
  - Tester la réactivité et l’accessibilité à travers Cypress ou Storybook Play Functions.
- Chaque composant possède généralement :
  - Un fichier `.vue`,
  - Des tests unitaires (Vitest),
  - Des tests end-to-end (Cypress),
  - Une story (Storybook),
  - Une doc spécifique (VitePress).

---

### 4. SSR et écosystème

- **Compatibilité SSR** :
  - Le speaker souligne l’importance d’assurer une compatibilité SSR (par exemple avec Nuxt) pour certaines applications de l’administration.
  - Publication en **ES modules** pour une intégration plus facile dans différents environnements.
- **Écosystème additionnel** :
  - **create-vue-dsfr** : un assistant pour générer rapidement un projet Vue ou Nuxt préconfiguré avec la bibliothèque DSFR.
  - **Extension VS Code** : des snippets pour insérer plus rapidement les composants et respecter les conventions.

---

### 5. Choix et perspectives

- **Stack évolutive** :
  - Passage progressif à **Lightning CSS** (remplacement de PostCSS).
  - Possibilité de migrer les tests end-to-end vers d’autres outils (Playwright ou Storybook Play Functions), pour réduire le nombre de dépendances.
  - Abandon du format CommonJS au profit d’un build full ESM.
- **Documentation** :
  - Utilisation conjointe de **Storybook** et **VitePress** (avec **WFrame** pour isoler les styles DSFR).
  - Objectif : une doc unique côté “utilisateur” (composants, props) sans besoin de consulter directement la doc DSFR.

---

### Conclusion

Le speaker met en avant l’importance de **concevoir dès le départ** une bibliothèque de composants Vue 3 en tenant compte de **l’accessibilité**, de **l’automatisation** (CI/CD, changelog) et d’une **documentation** claire pour les équipes de développement. Il souligne que l’adoption de conventions (Git flow, Conventional Commits) et d’outils adaptés (Storybook, Vitest, Cypress, etc.) facilite grandement la maintenance et l’évolution du projet. Cette expérience montre combien il est essentiel de penser à la **cohérence visuelle**, à la **réutilisabilité** des composants et au **respect des standards** (DSFR, RGAA), afin de proposer une base solide pour tous les projets de l’administration ou de clients partageant les mêmes exigences.
