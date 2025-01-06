<YoutubeVideoDetails video-id="BGju71aNpOA" video-title="Vue.js Paris Meetup #22 - Vue 3 Deep Dive / JAMstack is the future" 
video-description="
Vue.js Paris Meetup #22
  / vuejsparis
Talks:
   • Vue.js Paris Meetup #22 - Vue 3 Deep ...  
Vue 3 Deep Dive
François Hendriks Full-stack developer @Theodo
  / fr_hendriks  
   • Vue.js Paris Meetup #22 - Vue 3 Deep ...  
#JAMstack is the future. I think. Maybe.
Tim Benniks Director of web-development @Valtech
  / timbenniks  
Host : Valtech France
  / valtech_fr  ">

### **Talk 1 : Vue 3, TypeScript et la Composition API**

**Résumé du talk :**  
Le speaker aborde l’évolution de Vue 2 vers **Vue 3**, en se focalisant particulièrement sur l’introduction de la **Composition API** (anciennement “Function API”) et l’amélioration du support TypeScript. Il explique les raisons ayant motivé ces changements, les problèmes rencontrés avec TypeScript dans Vue 2, puis détaille la nouvelle approche de Vue 3, plus modulaire et plus adaptée aux gros projets.

---

#### 1. Limites de Vue 2 et motivations pour Vue 3

- **Typage et TypeScript** : difficulté à typer correctement les `props`, le `data` ou les magasins d’état (ex. Vuex) avec l’Option API classique.
- **Mixins et réutilisation de code** : la logique partagée via mixins ou higher-order components peut entraîner des collisions de noms et rendre le code moins clair.
- **Réactivité** : Vue 2 utilise `Object.defineProperty`, causant parfois des problèmes pour traquer les ajouts dynamiques de propriétés (caveats de réactivité). Vue 3 utilise les **Proxies**, d’où la fin du support IE11 dans la version “complète”.

#### 2. Composition API et setup()

- **Nouvelle fonction `setup()`** : point d’entrée pour déclarer les variables réactives (avec `ref()`), récupérer des valeurs calculées, définir des méthodes, etc.
- **Refs et réactivité** : introduit la notion de `ref`, où `myRef.value` stocke la donnée. L’accès se fait via `.value`, ce qui explicite la nature réactive.
- **Lifecycle hooks** : au lieu des options `mounted`, `created`, etc., on importe et appelle `onMounted`, `onUnmounted`, etc. directement dans `setup()`.
- **Excellente compatibilité TypeScript** : la Composition API permet de mieux inférer les types et d’éviter les soucis liés au `this`.

#### 3. Migration et compatibilité

- **API additive** : Vue 3 **conserve** l’Option API, donc pas de rupture totale. On peut mélanger Option API et Composition API dans le même composant.
- **Maintien de l’écosystème** : l’essentiel de Vue 2 (directives, template syntaxe, etc.) reste intact, avec des ajustements de noms (ex. `mounted` -> `onMounted`).
- **Choix IE11** : une build “legacy” pourrait exister pour IE11, sans bénéficier de la nouvelle réactivité “proxy”.

#### 4. Conclusion

Avec Vue 3, la **Composition API** apporte une meilleure organisation du code, un support TypeScript renforcé et une réutilisabilité accrue de la logique métier. Il est possible d’adopter cette nouvelle syntaxe de manière progressive. Pour des gros projets et un typage solide, cette évolution est vue comme un grand pas en avant.

---

### **Talk 2 : Jamstack, Netlify et Architecture sans serveur**

**Résumé du talk :**  
Le speaker présente la philosophie **Jamstack** (JavaScript, APIs, Markup) et son impact sur la structure d’une application web. Il montre comment déployer un site statique, utiliser un CMS sans serveur, configurer des “serverless functions”, et orchestrer le tout via des services cloud (Netlify, Azure, etc.).

---

#### 1. Pourquoi Jamstack ?

- **Sites statiques pré-générés** : l’essentiel du contenu est compilé à l’avance (markup), ce qui améliore les performances (HTML servi depuis un CDN).
- **API réutilisables** : la logique dynamique (authentification, données) se fait via des microservices (AWS Lambda, Azure Functions, etc.) plutôt qu’un gros backend monolithique.
- **Sécurité et coûts** : moins de serveurs “toujours actifs” -> moins de surface d’attaque, hébergement moins cher et plus simple à mettre à l’échelle.

#### 2. Déploiement et flux de travail

- **Static Site Generators (SSG)** : exemple avec Nuxt (`nuxt generate`) ou d’autres (Gatsby, Jekyll…) pour sortir des pages HTML statiques.
- **Netlify / Vercel** : services qui détectent un push Git et déclenchent la build, puis déploient le résultat sur un CDN global.
- **Netlify CMS / Git-based CMS** : pour éditer du contenu Markdown/JSON directement dans un navigateur ; toute modification fait un commit Git, relançant la build.
- **Webhooks et auto-commit** : possibilité d’automatiser des workflows (ex. un objet connecté envoie un webhook qui crée un commit ; Netlify redéploie le site).

#### 3. Exemple concret

- **Architecture simplifiée** :

  1. Le front (Nuxt, Vue) est buildé en statique.
  2. Le CMS (ex. Netlify CMS) gère du Markdown/JSON versionné dans Git.
  3. Services “serverless” (fonctions Azure/AWS) assurent l’authentification ou la mise à jour de données ponctuelles.
  4. Le tout est distribué via un CDN (Netlify/Vercel).

- **Démonstration** :
  - Site perso avec un blog, un usage de Strava pour récupérer et afficher des parcours sportifs en 3D (librairie Cesium), un webhook relié à une balance connectée qui auto-commit la nouvelle valeur de poids…
  - Chaque commit relance la build : le site est mis à jour sans action manuelle sur un serveur.

#### 4. Avantages et limites

- **Avantages** : performances excellentes, coûts bas (paiement à l’usage des fonctions), grande simplicité d’hébergement (CDN), sécurité (peu de backend exposé).
- **Limites** :
  - Pour des usages très dynamiques (produits e-commerce, data en temps réel), la multiplication des microservices peut complexifier l’orchestration.
  - Outils cloud encore en évolution : documentation incomplète, limites de compatibilité, configurations complexes pour des cas avancés.

#### Conclusion

Le Jamstack n’est pas une solution unique pour tous les sites, mais propose un **modèle puissant** pour la plupart des contenus statiques ou semi-dynamiques. Couplé aux fonctions serverless et à un CMS git-based, il offre un **flux de déploiement** rapide, peu coûteux et hautement **performant**. Néanmoins, l’industrialisation à grande échelle requiert parfois une orchestration complexe et un certain savoir-faire en Cloud/DevOps.
