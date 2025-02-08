<YoutubeVideoDetails video-id="6PzCYqLHKoE" video-title="Vue.js Paris Meetup #19 - Vue InstantSearch / JHipster" video-description="Building an Interactive Showcase with Vue.js & Vue InstantSearch
By Sarah Dayan, Frontend Developer @Algolia
Plein la Vue avec JHipster
Par Sahbi Ktifa, Full Stack Developer @IpponTech">

### **Talk 1 : “Building an Interactive Showcase with Vue.js & Vue InstantSearch”**

**Par** Sarah Dayan, Frontend Developer @Algolia

### Résumé du talk

La conf aborde la création d’une **application interactive** ou d’un “showcase” (ex. documentation ou démonstrateur produit) grâce à **Vue.js** et **Vue InstantSearch**. Sarah Dayan explique comment combiner la **logique de recherche** (Algolia) avec des composants Vue réutilisables pour offrir une expérience riche et dynamique.

---

#### 1. Vue.js et Vue InstantSearch

- **Vue InstantSearch** : bibliothèque fournissant des **widgets** prêts à l’emploi (ex. barres de recherche, facettes, pagination) connectés à Algolia.
- **Séparation de la logique** : usage de “connectors” pour isoler la logique de requête et la présentation (les composants Vue).
- **Documentation interactive** : possibilité de créer un site type “Storybook” où chaque composant est illustré avec des exemples concrets.

#### 2. Construction de widgets réutilisables

- **Slots et props** : personnaliser l’affichage tout en conservant la logique de base (résultats, filtres, etc.).
- **Exemples de widgets** :
  - _SearchBox_ : champ de recherche instantanée.
  - _RefinementList_ : liste de facettes pour filtrer.
  - _Hits_ : affichage paginé des résultats.
- **Interactivité** : combiner plusieurs widgets (catégories, pagination, cartes, etc.) et maintenir un état global unifié (connecteurs).

#### 3. Avantages et cas d’usage

- **Documentation “live”** : permettre aux utilisateurs de tester chaque composant (options, thèmes) sans quitter la page.
- **Performance** : Algolia traite la recherche côté back, Vue.js gère le rendu dynamique côté front.
- **Expérience développeur** : la structure en composants et connecteurs facilite la maintenance et l’évolution de l’app.

#### 4. Conclusion

Avec Vue.js et Vue InstantSearch, on peut créer facilement une **interface de recherche riche et modulable**, adaptée pour des sites de documentation, des démos produits, ou des applications nécessitant un moteur de recherche instantanée. La séparation nette entre la logique (API) et l’UI (composants Vue) améliore la réutilisabilité et la collaboration.

---

### **Talk 2 : “Plein la Vue avec JHipster”**

**Par** Sahbi Ktifa, Full Stack Developer @IpponTech

**Résumé du talk :**  
Le talk présente **JHipster**, un framework/générateur permettant de créer des applications **full stack** (backend Java/Spring Boot + frontend Vue.js) en quelques étapes. Sahbi Ktifa décrit les fonctionnalités offertes (authentification, entités CRUD, tests, déploiement) et l’intégration spécifique de Vue.js dans l’outillage JHipster.

---

#### 1. JHipster, c’est quoi ?

- **Java + Hipster** : un générateur en ligne de commande (ou GUI) qui pose des questions pour configurer le projet (auth, BDD, build, etc.).
- **Stack complète** : Spring Boot pour le backend (REST, sécurité…), Vue.js (ou Angular/React) pour le frontend.
- **Bonus** : scripts de tests (Jest, Cypress/Protractor…), intégration CI/CD (Docker, Heroku, Jenkins…), configuration TypeScript, etc.

#### 2. Génération d’une appli Vue.js

1. **Initialisation** : choix du type d’app (monolithe/microservices), de la base de données (SQL/NoSQL), du type d’authentification (JWT, session…), etc.
2. **Vue.js** : JHipster crée une structure basée sur Webpack, Vue Router, ESLint, Prettier, etc.
3. **App de base** : déjà fonctionnelle avec un module d’administration, un système de connexion et une page d’accueil.

#### 3. Entités et personnalisation

- **JHipster entity** : permet de créer des modèles côté Java + des formulaires, listings et routes côté Vue de manière automatique (CRUD complet).
- **Test end-to-end** : usage de Jest, Cypress/Protractor pour vérifier le comportement de l’appli.
- **Qualité du code** : linting TypeScript, analyse Sonar, etc. ; la taille du bundle reste raisonnable (~ quelques centaines de ko).

#### 4. Déploiement

- **Scripts intégrés** : JHipster fournit des commandes pour déployer sur Heroku, Docker, ou d’autres providers cloud.
- **Configuration** : la CLI gère automatiquement les propriétés, la config Docker, etc.

#### Conclusion

JHipster facilite grandement la mise en place d’une **application Java + Vue** : on obtient une app “clean”, typée, testée et prête pour la production (authentification, CI/CD, etc.). “Plein la Vue” témoigne de la simplicité à combiner **Spring Boot** et **Vue.js** pour construire rapidement un projet complet, maintenable et performant.
