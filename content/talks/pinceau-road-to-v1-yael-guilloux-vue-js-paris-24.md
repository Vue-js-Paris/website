---
title: "Pinceau, road to v1 - Yaël Guilloux - Vue.js Paris #24"
videoId: "3rqOkfFfN9Q"
date: "28-09-2024"
description: "Vue.js Paris meetup #24 Host: Contentsquare"
---

<YoutubeVideoDetails :video-id="videoId" :video-title="title" :video-description="description">

## Résumé du talk : Pinceau, un “CSS in JS in TS” pour Vue, React et Svelte\*\*

Le speaker présente **Pinceau**, une librairie open source de _styling_ typé (en TypeScript) et dynamique, conçue d’abord pour Vue, mais également compatible avec React et Svelte. L’objectif : profiter d’un **CSS in JS** moderne (similaire à styled-components ou Stitches) en **optimisant** la performance (génération statique du CSS quand c’est possible) et **enrichissant** l’expérience développeur (typage, autocomplétion, etc.).

---

### 1. Contexte et motivations

- **Seule “séparation des concerns” ?**  
  Vue met déjà au même endroit le template, le script et le style, mais on veut aller plus loin pour unifier le code JS/TS et la feuille de style.
- **Écosystème actuel du CSS** : Tailwind ou Windi sont très populaires, mais peu typés. De nombreuses librairies “CSS in JS” sont issues de l’univers React (emotion, styled-components…), parfois lourdes ou non adaptées à Vue/Svelte.

Pinceau vise à apporter :

1. **Un format standard “Design tokens”** pour définir un thème (couleurs, taille, variables).
2. **Une génération statique** du CSS pour éviter un overhead ou la duplication dans le bundle.
3. **Des APIs réactives** (computed styles, variants) qui restent petites et efficaces.
4. **Un code typed** : aligner les styles avec TypeScript pour minimiser les erreurs.

---

### 2. Définir un thème (design tokens)

- Fichier `theme.config.ts` (ou `.js`) où l’on déclare **couleurs, breakpoints, typographies**, etc.
- Pinceau génère ensuite des définitions TypeScript : les tokens deviennent **autocomplétés** et **typiés**.
- Possibilité de scinder/découper les thèmes (dark/light, etc.), ou d’hériter de thèmes existants.

---

### 3. APIs principales pour écrire du style

Pinceau propose plusieurs façons de styler ses composants :

1. **`$style()`** ou **`style()`** (inspiré de styled-components) :

   - On déclare un composant stylé directement en JS/TS, y compris dans un fichier `.vue`, `.svelte` ou `.tsx`.
   - Permet par ex. de définir un `const MyButton = style('button', { ... })` et l’importer dans la template.

2. **Bloc `<style lang="ts">`** (ou `<style>` classique dans un `.vue` SFC) :

   - On écrit du CSS “pinceau”, qui peut inclure `@apply` de tokens, etc.
   - Tout ce qui n’est pas dynamique est compilé statiquement, le JS n’est pas alourdi.

3. **Prop `:style="..."`** (pour des styles in-line) :

   - Peut prendre des fonctions réactives (computed styles) :
     ```js
     :style="() => ({ background: myRef.value })"
     ```
   - Permet un style 100% dynamique, directement typé.

4. **`css\`...\``** (fonction CSS) :
   - Écrit du style “littéral” n’importe où.
   - Génère un bloc statique ou dynamique selon le contenu.

#### Les “Computed styles” et “Variants”

- **Computed styles** : possibilité de faire réagir un style à un state (ex. position de la souris, ref, store…).
- **Variants** : système de styles immuables (ex. `size: { small, medium, large }`) qui génèrent des **props** typées sur le composant.

---

### 4. Performances et SSR

- **Génération statique** : tout style purement statique est compilé en CSS direct, sans JS supplémentaire.
- **Styles dynamiques** : injectés au runtime, mais de façon optimisée (pas de duplication).
- **Server-Side Rendering** : Pinceau peut **injecter** le CSS côté serveur, puis hydrater le thème en lisant la feuille déjà présente (plutôt que de doubler).
- **Bundle** : le runtime de Pinceau pèse ~5kB, avec déduplication des classes et compatibilité breakpoints/variants.

---

### 5. État actuel et roadmap

- **Version 1.0 Beta** : API jugée stable, réécriture importante depuis la première démo à Vue.js Amsterdam.
- **Extension VS Code** en cours : autocomplétion, détection des classes, mapping template/style, etc.
- **Playground en ligne** (similaire au SFC Playground de Vue) prévu pour tester en direct Vue, React ou Svelte avec Pinceau.

---

### Conclusion

**Pinceau** apporte au monde Vue/Svelte/React un “CSS in JS in TS” léger, **typé** et efficace. Il offre à la fois la **simplicité** de la compilation statique et des fonctionnalités avancées (variants, computed styles), tout en **limitation** la duplication ou le double-chargement CSS/JS. L’objectif : un styling réactif, **performant**, et une **expérience développeur** fluide grâce au typage TypeScript et à l’autocomplétion future dans VS Code.
