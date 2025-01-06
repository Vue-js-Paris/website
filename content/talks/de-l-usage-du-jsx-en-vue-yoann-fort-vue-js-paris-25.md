<YoutubeVideoDetails video-id="NcunWlFPpSc" video-title="De l'usage du JSX en Vue - Yoann Fort - Vue.js Paris #25"
video-description="Vue.js Paris meetup #25 Sponsors: Mastering Pinia & Nx Host: L'Atelier">

**Résumé du talk : Utiliser du JSX dans Vue.js pour des fonctions de rendu plus lisibles**

Le speaker présente l’usage du **JSX** dans Vue.js afin de simplifier les **fonctions de rendu** (render functions) et rendre le code plus clair, notamment pour des cas de logique complexe. Voici l’essentiel à retenir :

---

## 1. Qu’est-ce que le JSX ?

- **JSX** est une extension syntaxique de JavaScript qui permet d’écrire du code ressemblant à du HTML directement dans du JS/TS.
- Inventé par Facebook pour React (2013), il est désormais **transpilable** pour fonctionner dans d’autres environnements, dont Vue.js.
- Il **bénéficie de toute la puissance** du langage TypeScript (map, filter, typage, etc.) pour générer dynamiquement du HTML.

---

## 2. Pourquoi aller au-delà du template classique de Vue ?

1. **Fonctions de rendu (render functions)** :

   - Introduites pour donner un contrôle plus fin que le template classique.
   - Permettent d’utiliser `h` (ou `createVNode`) afin de construire un Virtual DOM en pur JavaScript.
   - Mais la syntaxe “manuelle” de `h` peut rapidement devenir **verbeuse** et **moins lisible** quand la structure HTML est complexe.

2. **Avantages du JSX par rapport à la render function “classique”** :

   - **Lisibilité** : on écrit une syntaxe proche du HTML, plutôt qu’enchaîner des appels à `h(...)`.
   - **Écriture plus concise** : pas besoin de balises `<template>` ni d’astuces pour les conditions et boucles complexes.
   - **Bénéfice total de TypeScript** : typage, tooling, IntelliSense, etc.
   - **Meilleure maîtrise de la logique** : on peut utiliser nativement `map`, `filter`, ou renvoyer `null` pour ne pas rendre d’élément.

3. **Performances et taille de bundle** :
   - Comme les fonctions de rendu, le JSX est directement compilé en Virtual DOM ;
   - **Moins de parsing** côté Vue, un code plus direct, ce qui peut **réduire** la taille du composant et améliorer la performance.

---

## 3. Mise en place de JSX dans Vue

- **Configuration Babel** (ou Vite) minimale :
  - Installer le plugin Babel pour JSX (ex. `@vue/babel-plugin-jsx` ou équivalent).
  - Dans la config, activer `preserve: true` afin que le compilateur ne retire pas la syntaxe JSX.
- **Déclarer “lang=jsx”** dans vos Single File Components (ou créer des fichiers `.jsx`/`.tsx`).

Exemple de configuration Babel succincte :

```js
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "@vue/babel-plugin-jsx",
      {
        /* options */
      },
    ],
  ],
};
```

---

## 4. Exemple de code

#### Avant (render function manuelle) :

```js
import { h } from "vue";

export default {
  render() {
    return h("div", { class: "hello" }, [
      h("h1", null, "Hello World"),
      // ...
    ]);
  },
};
```

#### Après (JSX) :

```jsx
export default {
  setup() {
    return () => (
      <div class="hello">
        <h1>Hello World</h1>
        {/* ... */}
      </div>
    );
  },
};
```

- On **retrouve la lecture “HTML”** tout en restant dans du JavaScript.
- On peut facilement faire des `conditions`, des `maps`, etc.

---

## 5. Quand le JSX brille vraiment ?

- **Logique conditionnelle complexe** : plus besoin de “tricher” avec `v-if/v-for` ou un `<template>` intermédiaire.
- **Manipulation de listes** : `map()`, `filter()`… Renvoyer `null` si on ne veut rien afficher.
- **Composants à structure très dynamique** : JSX donne la liberté de composer l’HTML selon des calculs, des props, etc.
- **Possibilité de cohabiter** avec l’Option API, la Composition API et même le template classique.

---

## Conclusion

Le **JSX dans Vue** est une alternative puissante et **moins connue** pour écrire vos composants lorsque les templates deviennent trop complexes ou trop verbeux.

- Il **reste réactif** (utilise les `ref`, `computed`, etc. de Vue).
- Il offre une **lisibilité plus proche du HTML** qu’avec la render function “brute”.
- La **mise en place** se fait via un plugin Babel/Vite, avec quelques lignes de config.

Pour les développeurs familiers avec **React** ou cherchant plus de souplesse dans **Vue**, **le JSX** est un atout pour créer des interfaces dynamiques, tout en restant dans l’écosystème Vue.
