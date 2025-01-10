export function slugify(title: string): string {
  return (
    title
      // Décoder l'entité HTML &#39; en véritable apostrophe
      .replace(/&#39;/g, "'")
      // Décompose les caractères accentués (NFD)
      .normalize("NFD")
      // Supprime les diacritiques (accents)
      .replace(/[\u0300-\u036f]/g, "")
      // Convertit en minuscules
      .toLowerCase()
      // Remplace explicitement les apostrophes par des tirets
      .replace(/[’']/g, "-")
      // Remplace tous les caractères non alphanumériques ou tirets existants
      // par des tirets (pour éviter d'autres caractères spéciaux)
      .replace(/[^a-z0-9-]+/g, "-")
      // Remplace les tirets multiples par un seul
      .replace(/-+/g, "-")
      // Supprime les tirets en début et fin de chaîne
      .replace(/^-+|-+$/g, "")
  );
}
