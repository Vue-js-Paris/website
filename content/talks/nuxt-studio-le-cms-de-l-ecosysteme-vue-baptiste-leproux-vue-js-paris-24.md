---
title: "Nuxt Studio, le CMS de l'écosystème Vue - Baptiste Leproux - Vue.js Paris #24"
videoId: "upMtd1QtK4M"
date: "28-09-2024"
description: "Host: Contentsquare"
---

<YoutubeVideoDetails :video-id="videoId" :video-title="title" :video-description="description">

**Résumé du talk : Démonstration de **Nuxt Studio** (anciennement « N Studio »)**

Le speaker montre **Nuxt Studio**, une solution de CMS “Git-based” pour gérer du contenu et déployer un site **Nuxt Content** sans devoir manipuler directement le code. Cette démonstration se concentre sur :

- La création d’un projet basé sur un **starter minimal** fourni par Nuxt Studio.
- L’intégration de composants et de styles (via, par exemple, **Nuxt UI Pro**).
- L’édition et la configuration du contenu (fichiers `.md` et configuration `appConfig`) **directement dans l’interface** de Nuxt Studio.
- Le déploiement automatique sur GitHub Pages et la synchronisation via Git.

---

## 1. Contexte : Qu’est-ce que Nuxt Content ?

- **Nuxt Content** est un module open source, maintenu par NuxtLabs, qui facilite la gestion de contenus de type Markdown (ou MDX) dans un site Nuxt.
- On dispose d’un dossier `content/` dans lequel sont stockés les fichiers `.md`.
- On peut ensuite **requêter** (avec un “query builder” intégré) et afficher ces contenus dans ses pages Nuxt.

Nuxt Studio s’appuie sur cette structure pour proposer une interface d’édition conviviale des contenus Markdown, tout en restant synchronisé avec votre dépôt Git.

---

## 2. Nuxt Studio : un “Git-based CMS”

1. **Création ou import d’un projet** :
   - Soit on part d’un repo Nuxt Content existant,
   - Soit on utilise un **starter** ou un **thème** proposé par Studio (ex. blog, documentation…).
2. **Interface web** :
   - Permet d’éditer en temps réel les fichiers Markdown, de gérer l’arborescence et de prévisualiser immédiatement.
   - Crée ou met à jour automatiquement un dépôt GitHub (synchronisation totale).
   - Propose un flux de déploiement simplifié (ex. GitHub Pages).

---

## 3. Démo pas à pas

1. **Création du projet via Studio**

   - Le speaker choisit un starter minimal depuis Nuxt Studio : un repo Git est créé et synchronisé avec Studio.
   - Déploiement automatique sur GitHub Pages.

2. **Ajout de composants et configuration “appConfig”**

   - Dans son code local (VS Code), le speaker installe des modules (`@nuxthq/ui`, `nuxt-ui-pro`, etc.).
   - Il personnalise la page principale (templates, slots, etc.) pour obtenir un **layout** plus riche (header, footer, navigation…).
   - Les fichiers Markdown sont toujours gérés via `Nuxt Content`, mais peuvent être stylisés à l’aide des composants de `@nuxthq/ui` ou `nuxt-ui-pro`.

3. **Mise en place de l’édition studio**

   - Le speaker crée un composant `picture-card.vue` (header, body, footer) avec des **content slots** (ex. `<template #title>`, `<template #description>`).
   - Dans ses pages Markdown, l’utilisateur peut insérer ce composant via des balises `<picture-card>`, remplir chaque slot, choisir des couleurs, etc.
   - Également, un fichier `app.config.ts` (et un schéma `nuxt.schema`) expose des paramètres (icônes, liens sociaux, display du footer, etc.). Nuxt Studio déduit alors une interface “formulaire” plus ergonomique (toggle, color picker, etc.).

4. **Synchronisation Git & collaboration**
   - Les modifications faites dans Studio sont converties en commits Git (avec possibilité de créer des branches).
   - On peut transférer un projet sur une “Team” Studio, ajoutant d’autres collaborateurs.
   - L’éditeur peut donc travailler sur le contenu (champs, images, navigation) **sans** toucher à la partie code.

---

## 4. Avantages et fonctionnalités

1. **Git-based** : pas besoin d’une base de données séparée ; le versioning se fait via GitHub.
2. **Live preview** : l’utilisateur voit immédiatement le rendu des modifications.
3. **Collaboration** : gestion de branches, possibilité de faire des PRs pour valider les changements.
4. **Schema et AppConfig** : permet de générer des formulaires dans Studio (icônes, booleans, couleurs, etc.) pour personnaliser l’apparence et le contenu d’une appli Nuxt.
5. **Extensibilité** : le speaker mentionne une future interface “no-code” plus accessible, et le support de Nuxt UI Pro pour améliorer le design.

---

### Conclusion

**Nuxt Studio** offre une **expérience CMS fluide** pour un site Nuxt Content, sans exiger la mise en place d’une base de données ou d’un backend dédié. Tout est géré via GitHub, permettant d’éditer, versionner et déployer son contenu facilement. L’approche “**Git-based**” convient aussi bien à des **développeurs** (contrôle total, PRs) qu’à des **éditeurs** (interface Studio simple, navigation arborescente, formulaires pour config, etc.).
