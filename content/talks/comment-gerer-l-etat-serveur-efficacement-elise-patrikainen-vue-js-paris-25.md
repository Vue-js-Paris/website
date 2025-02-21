---
title: "Comment gérer l'état serveur efficacement ? - Elise Patrikainen - Vue.js Paris #25"
videoId: "4Vgz2wteyNs"
date: "28-09-2024"
description: ""
---

<YoutubeVideoDetails :video-id="videoId" :video-title="title" :video-description="description">

## Résumé du talk : Server State Management (côté front-end)

La speaker introduit la notion de _server state management_ **dans un contexte purement front-end**, en distinguant deux types d’état dans une application :

- **L’état côté serveur (“server state”)** : données récupérées depuis un back-end (ex. liste de produits d’un e-commerce).
- **L’état côté client (“client state”)** : données propres à l’interface utilisateur (ex. le contenu du panier, sélection locale, etc.).

Elle montre ensuite pourquoi gérer l’état serveur peut rapidement devenir **complexe** (chargement asynchrone, gestion du cache, erreurs, rafraîchissement…), et propose d’explorer des **librairies de “server state management”** pour éviter de tout coder à la main.

---

### 1. Les défis du “server state”

1. **Asynchronisme** : nécessite du fetch, des états de “loading” et “erreur”.
2. **Multiples mutations** : la donnée peut changer à tout moment côté serveur (par d’autres utilisateurs, par exemple).
3. **Rafraîchissement, invalidation et cache** : ne pas re-fetcher en permanence, mais garder des données à jour.

Les approches habituelles en front-end (stocker la donnée dans un composant ou dans un store classique) ne couvrent pas forcément la gestion du cache, du re-fetch, etc.

---

### 2. Présentation de TanStack Query

La speaker présente **TanStack Query** (anciennement React Query) qui est désormais **framework-agnostique** grâce à un “cœur” pur JavaScript, avec des adaptateurs pour React, Vue, etc.

### 2.1 Concepts clés

- **Query** : pour **fetcher** des données (GET) de manière déclarative.

  - On définit une _query key_ (identifiant) et une _query function_ (comment on fetch).
  - On configure diverses options (ex. `staleTime` pour marquer les données “fraîches” pendant un certain temps).
  - **Retours** d’état (ex. `data`, `isLoading`, `isError`) sont _réactifs_.

- **Mutation** : pour **envoyer** ou **mettre à jour** des données (POST, PATCH, DELETE…).

  - Impérative (déclenchée via une fonction `mutate`).
  - Permet d’exécuter des callbacks de succès, d’erreur…
  - Peut faire des **optimistic updates** (mettre à jour le cache immédiatement, puis rollback si échec).

- **Query Client** : un “store” interne qui centralise toutes les queries/mutations.
  - Peut préfetcher (`prefetchQuery`), invalider des queries, ou modifier directement le cache (`setQueryData`).

### 2.2 Démonstration

Sur une application e-commerce (Vue/Nuxt + Tailwind + Superbase), la speaker illustre :

1. **Fetch** de la liste de produits avec une `useQuery`.
2. **Fetch** du détail produit selon un `productId`, en utilisant la même configuration “queryOptions”.
3. **Optimisations** :
   - **Placeholder data** : remplir les infos déjà connues (ex. tirées de la liste) avant que la requête ne se termine.
   - **Prefetch** : lancer en arrière-plan une requête pour le détail d’un produit dès que l’utilisateur survole un lien.
4. **Mutation** : ajout d’un produit au panier, qui met à jour l’info de disponibilité dans le cache.
   - Possibilité de mettre à jour le cache en “optimistic update” et de faire un “rollback” en cas d’erreur.

---

### 3. Alternatives à TanStack Query

- **Apollo Client** : fonctionne très bien mais plutôt dédié à GraphQL.
- **Pinacolada** (en développement par Eduardo) : une solution inspirée de Pinia pour la gestion du “server state” côté Vue.

Enfin, pour en savoir plus :

- Le blog de **TKDodo** (un contributeur majeur de TanStack Query), avec plein d’articles détaillés.
- Le code de la démo est disponible en ligne.

---

### Conclusion

Gérer l’état serveur (“Server state”) diffère sensiblement de l’état purement local. Des librairies comme **TanStack Query** simplifient énormément la vie : elles gèrent le cache, le re-fetch, l’invalidation et même l’optimistic UI. Cette approche fonctionne quelle que soit la stack (Vue, React, Nuxt…) et permet de **conserver une application fluide** avec un code plus propre.
