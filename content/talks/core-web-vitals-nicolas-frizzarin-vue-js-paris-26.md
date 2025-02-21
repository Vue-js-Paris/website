---
title: "Core web vitals - Nicolas Frizzarin - Vue.js Paris #26"
videoId: "xkFWZvl3JZE"
date: "29-09-2024"
description: "Vue.js Paris meetup #26 Sponsors: Mastering Pinia & Nx Host: Valtech"
---

<YoutubeVideoDetails :video-id="videoId" :video-title="title" :video-description="description">

## Résumé du talk

Nolas Frarin, développeur advocate et senior staff engineer, expose les **principaux problèmes de performance** que rencontrent les utilisateurs sur le web, puis présente les **Core Web Vitals** de Google et leurs optimisations. Même si l’exemple est illustré avec Angular, les bonnes pratiques sont **génériques** et s’appliquent aussi bien à Vue qu’à d’autres frameworks ou au vanilla JavaScript.

---

### Pourquoi les utilisateurs sont mécontents

1. **Page blanche** au chargement (ou un loader interminable).
2. **Instabilité** de l’affichage (scroll soudain, perte de focus de lecture).
3. **Interactivité lente** : le clic ou l’action met trop de temps avant de donner un retour à l’utilisateur.

Ces problèmes font perdre des utilisateurs (et donc de l’argent) car ils nuisent à l’expérience et la concurrence est rude.

---

### Les Core Web Vitals

Google a introduit les Core Web Vitals pour définir des **indicateurs clés** de l’expérience utilisateur :

1. **LCP (Largest Contentful Paint)** : temps d’affichage du plus gros élément visuel (image, bloc de texte).
2. **CLS (Cumulative Layout Shift)** : mesure de la **stabilité** visuelle (évite l’effet “écran qui bouge”).
3. **INP (Interaction to Next Paint)** : remplace le FID (First Input Delay). Évalue le délai entre l’**interaction** de l’utilisateur et l’affichage de la frame suivante (c’est la plus récente et encore expérimentale).

- **Seuils** généraux :
  - **LCP** : moins de 2,5s conseillé.
  - **CLS** : moins de 0,1 (cumul de décalage) conseillé.
  - **INP** : moins de 200ms conseillé.

---

### Mesurer les performances

- **Field data (données réelles)** : mesures en production via Chrome UX Report, PageSpeed Insights, la lib Web Vitals JS, etc.
- **Lab data (données de labo)** : simulation en local ou via Lighthouse, Chrome DevTools… (mais INP est mal simulé).

Les deux approches sont complémentaires :

- Le Lab permet de **détecter tôt** les problèmes avant la prod.
- Le Field reflète la **vraie expérience** sur divers appareils et réseaux.

---

### Optimiser chaque métrique

#### 1. Optimiser le LCP

- **Améliorer le “Time to First Byte”** (par ex. config serveur).
- **Précharger** (preload) les ressources critiques (CSS, images).
- **Différer** (defer) ou découper (split) le JavaScript.
- **Charger en parallèle** les composants/libraries non indispensables au premier rendu.

#### 2. Réduire le CLS

- **Réserver l’espace** pour les images (largeur/hauteur, aspect-ratio).
- Éviter d’injecter des éléments “tardivement” (ex. iframes, pubs) sans taille fixe.
- Gérer correctement les **fontes** (utiliser `font-size-adjust` ou `font-display`).
- Tirer parti des solutions côté framework (ex. Suspense, SSR).

#### 3. Mieux gérer l’INP

- **Fractionner** les longues tâches JavaScript (long tasks) : utiliser des `setTimeout`, promises, ou l’API (expérimentale) `scheduler.postTask`.
- Ne pas bloquer le main thread avec trop de code ou d’actions successives (fetch, analytics, etc. peuvent se faire en différé).
- Réduire la complexité DOM/CSS (éviter des selecteurs trop lourds).
- Gérer en priorité ce qui est **critique** pour l’utilisateur (affichage immédiat), décaler le reste pour ne pas retarder le feedback.

---

### Conclusion

En **moins de 20 minutes**, le talk illustre :

- **Pourquoi** l’utilisateur peut juger l’app trop lente ou peu agréable.
- **Comment** chaque métrique (LCP, CLS, INP) représente un aspect clé de l’expérience.
- **Quelles techniques** simples mettre en place pour optimiser la performance sur tous les frameworks (Vue, Angular, React, vanilla…).

Le mot d’ordre : **réduire la taille et la complexité** des ressources critiques, **différer** le reste et **donner un retour rapide** à l’utilisateur pour améliorer l’expérience globale.
