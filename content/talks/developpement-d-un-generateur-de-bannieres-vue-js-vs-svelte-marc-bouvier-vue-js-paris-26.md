---
title: "Développement d’un générateur de bannières, Vue.js vs Svelte - Marc Bouvier - Vue.js Paris #26"
videoId: "O74I-gakQGw"
date: "29-09-2024"
description: "Vue.js Paris meetup #26 Sponsors: Mastering Pinia & Nx Host: Valtech"
---

<YoutubeVideoDetails :video-id="videoId" :video-title="title" :video-description="description">

## Résumé du talk

Le speaker compare **Vue.js** et **Svelte**, en prenant pour exemple une petite application de génération de bannières (affichage de texte, d’images, export en image, etc.). L’idée est de montrer les similitudes et différences clés entre ces deux frameworks, puis d’introduire brièvement **Svelte 5** et son concept de “runes”.

---

### 1. Démarrage de projet et écosystème

- Vue et Svelte s’installent tous deux via un outil en ligne de commande (basé sur Vite).
- On retrouve des configurations similaires (scripts `npm run dev`, `npm run build`, etc.) et un écosystème de plugins (VS Code, JetBrains...).
- Vue a souvent plus de fichiers de base, ce qui peut nécessiter un petit nettoyage. Svelte propose une approche plus minimaliste dès le départ.

---

### 2. Philosophie et syntaxe

- **Vue** propose une approche “réactive” à l’aide des **refs** et de la directive `v-for` (ou autres directives `v-…`).
- **Svelte 4** mise sur la mutabilité des variables : la réassignation d’une variable est automatiquement détectée pour mettre à jour l’interface.
- **Svelte 5** introduit les “runes” (`$state`, `effect`, etc.), rapprochant le fonctionnement de celui de Vue (ou React) avec un système plus explicite et la possibilité de rendre la réactivité plus modulaire.

---

### 3. Exemple de code

- Le speaker montre comment implémenter l’ajout, la suppression d’éléments (speakers, sponsors) et l’exportation en image dans chaque framework.
- Les deux approches sont assez similaires en termes de logique et de quantité de code, malgré des syntaxes légèrement différentes.

---

### 4. SSR et écosystème

- Vue s’appuie sur **Nuxt** pour le serveur-side rendering.
- Svelte a une solution intégrée avec **SvelteKit**, où l’on peut directement créer des fichiers côté serveur (ex. `.server.js`) et choisir entre rendu statique ou dynamique.

---

### 5. Choix et perspectives

- Vue est apprécié pour sa **progressivité** et son écosystème très riche (plus de bibliothèques spécialisées).
- Svelte se distingue par sa **légèreté** et son approche “proche du JavaScript natif”, avec moins de code généré et de concepts “magiques”.
- À terme, il y a une convergence de concepts entre les frameworks (réactivité, composants, etc.), et le speaker imagine qu’une standardisation “nativement dans le navigateur” pourrait arriver dans le futur (à l’image de ce qui est arrivé avec jQuery).

---

### Conclusion

L’orateur conseille d’essayer **Svelte** pour de petits projets ou pour explorer de nouvelles idées, et de se tourner vers **Vue** si l’on a besoin d’un environnement plus complet ou d’outils déjà bien établis. Il souligne que les deux frameworks se ressemblent beaucoup et qu’il est donc facile de passer de l’un à l’autre.
</YoutubeVideoDetails>
