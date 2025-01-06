<YoutubeVideoDetails video-id="3SUwuFj4VeI" video-title="Nuxt Islands - Julien Huang - Vue.js Paris #24" video-description="Vue.js Paris meetup #24
Host: Contentsquare">

**Résumé du talk : Composants Serveur (Server Components) et Islands dans Nuxt**

Le speaker (Julien) explique comment **Nuxt** (framework full stack basé sur Vue) prend en charge des rendus encore plus fins et performants grâce à :

1. **Server Components** : des composants rendus uniquement côté serveur et non hydratés côté client.
2. **Islands** (ou “Islands Architecture”) : des morceaux d’UI isolés qui peuvent être rechargés ou mis en cache, sans nécessiter l’hydratation de toute l’application.

---

## 1. Rappels sur Nuxt

- **Nuxt** est un meta-framework “full stack” autour de Vue, qui facilite le **SSR (Server-Side Rendering)**, le **SSG (Static Site Generation)**, ou le **client-side rendering**.
- Il s’appuie sur **Nitro** (moteur de rendu côté serveur) et Vue pour le front.
- Grande force de Nuxt : expérience développeur (auto-imports, modules, hooks…), compatibilité multi-providers (Node, Bun, Netlify, etc.).

---

## 2. Pourquoi des Server Components ?

1. **Contexte historique**

   - Avant, on avait des **monolithes** (PHP, Laravel…), où le HTML était généré par le serveur et envoyé au client (peu de JS).
   - Avec l’arrivée des **SPAs** (Single Page Applications), on a déplacé quasiment toute la logique front côté client, impliquant souvent des performances initiales plus faibles (besoin de charger JS et de fetcher les données).
   - Les **meta-frameworks** (Nuxt, Next.js, SvelteKit…) combinent les avantages du SSR et de la SPA : on sert un HTML prêt à l’emploi, puis hydraté pour l’interactivité.

2. **Problème : l’hydratation**
   - Le SSR + hydrater signifie qu’on exécute le rendu 2 fois : côté serveur puis côté client.
   - Parfois, pour des composants **non interactifs** (ex. un composant lourd de parsing Markdown), on ne souhaiterait pas ré-importer son code JS ni le ré-instancier côté client.
   - **Server Components** résolvent ce souci : le composant est rendu côté serveur et ne charge **pas** le JavaScript associé côté client (pas d’hydratation inutile).

---

## 3. Nuxt Islands

Introduits en Nuxt 3.2 (et enrichis à chaque version), les **Nuxt Islands** sont l’implémentation de Nuxt pour :

- **Rendre un composant sur le serveur** ;
- L’isoler pour qu’il ne soit pas hydraté complètement côté client, sauf si nécessaire (ou partiellement).

### 3.1 Fonctionnement général

- Il existe un endpoint interne (`/_nuxt/island`) qui, pour chaque île (island), génère le HTML du composant côté serveur et renvoie le résultat en JSON (HTML).
- Sur la page, un composant `<NuxtIsland name="..." :props="..." />` déclenche cet appel, récupère le HTML et l’insère dans le DOM.
- **Si c’est un “pure server component”**, aucun JS n’est chargé côté client, donc pas d’hydratation.
- On peut faire d’autres scénarios (ex. re-fetcher le composant si des props changent).

### 3.2 Différence “Server Component” vs “Island”

- **Server Component** (suffixe `.server.vue`) :

  - Se comporte comme un composant Vue classique, mais **rendu côté serveur uniquement**.
  - Pas de JS envoyé au client, pas d’hydratation.
  - On peut utiliser des APIs 100% côté serveur (`useRuntimeConfig()`, requêtes directes à la DB, etc.).
  - Se déclare habituellement dans `components/xxx.server.vue`.

- **Island** (dans `components/islands/`) :
  - On l’appelle via `<NuxtIsland name="..." :props="..." />`.
  - Permet d’**isoler** l’exécution d’un composant (qui peut lui-même être “server only”) avec, potentiellement, la possibilité de rechargements, de mises en cache, etc.

### 3.3 Principales fonctionnalités déjà disponibles

- **Slots** (depuis Nuxt 3.4) : passer du contenu parent (potentiellement interactif) vers un composant serveur.
- **Payload cache** : mémoriser la réponse du composant serveur avec des props identiques.
- **Remote Islands** (Nuxt 3.7) : on peut rendre une île via un **autre serveur** (distant) si celui-ci renvoie le format attendu (ex. un CMS headless), ce qui ouvre la porte à une architecture distribuée.
- **`<next-client>`** (bientôt en 3.8) : rendre un sous-composant réellement “client side” dans une île, si on veut une petite partie interactive (ex. `NuxtLink`).

---

## 4. Avantages

- **Moins de JavaScript** à charger et exécuter côté client pour les blocs “statiques” (pur SSR).
- **Performance** améliorée : on évite la double-exécution “SSR + client” pour les composants non interactifs.
- **Sécurité** : on peut directement utiliser des API côté serveur sans exposer des secrets au client.

---

## 5. Roadmap

- Stabilisation de l’API (slots, `IslandResponse`…) : certains aspects sont encore en phase “expérimentale”.
- **Server-only** dans un composant mixte : pouvoir définir une portion du template comme “server only” (ex. un bloc lourd de Markdown, le reste est hydraté).
- “**Deep client components**” : marquer spécifiquement un sous-composant comme interactif (`<Foo nuxt-client>`), même s’il est dans une “island”.

---

### Conclusion

Les **composants serveur** et l’**architecture Islands** de Nuxt répondent à la volonté de rendre un site plus **rapide** et **léger** côté client, tout en bénéficiant d’un SSR flexible. C’est en cours d’évolution (avec des attributs `nuxt-client`, la gestion de slots, etc.), mais déjà fonctionnel dans Nuxt 3. L’implémentation continuera de s’affiner, permettant de mieux scinder l’app en “îlots” : certains 100% serveur, d’autres 100% client, et d’autres encore un mix des deux.
