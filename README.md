# Mon Petit Bazaar - E-commerce 🛍️

Site e-commerce headless en cours de développement pour www.monpetitbazaar.fr

## 🧱 Stack Technique (Jamstack)

| Composant | Technologie | Statut | Notes |
|-----------|-------------|---------|-------|
| **Framework** | Astro | ⏳ À implémenter | Ultra rapide, moderne, parfait pour GitHub Pages |
| **Styling** | Tailwind CSS | ⏳ À implémenter | Framework CSS utilitaire |
| **Gestion Produits** | Markdown + Frontmatter | ⏳ À implémenter | Stockage dans `/content/produits/*.md` |
| **Panier & Paiement** | Snipcart | ⏳ À implémenter | Solution headless sans backend |
| **Déploiement** | GitHub Pages | ✅ Configuré | Automatique via GitHub Actions |
| **CMS (optionnel)** | Netlify CMS | ⏳ Futur | Interface admin pour gérer les produits |

## 📋 Progression du Développement

### Phase 1: Infrastructure de base
- [x] Page "En construction" déployée
- [x] Domaine configuré (www.monpetitbazaar.fr)
- [x] GitHub Pages opérationnel
- [ ] Migration vers Astro
- [ ] Configuration Tailwind CSS
- [ ] Structure de dossiers Astro

### Phase 2: Gestion des Produits
- [ ] Création du système de produits en Markdown
- [ ] Templates Astro pour les pages produits
- [ ] Page de listing des produits
- [ ] Pages produit individuelles
- [ ] Système de catégories

### Phase 3: E-commerce
- [ ] Intégration Snipcart
- [ ] Boutons "Ajouter au panier"
- [ ] Page panier
- [ ] Configuration des moyens de paiement
- [ ] Tests de commande

### Phase 4: UX/UI
- [ ] Design système complet
- [ ] Navigation responsive
- [ ] Optimisation mobile
- [ ] Images et médias
- [ ] SEO et métadonnées

### Phase 5: Fonctionnalités avancées
- [ ] Recherche de produits
- [ ] Filtres et tri
- [ ] Wishlist
- [ ] Recommandations
- [ ] Newsletter

### Phase 6: Administration
- [ ] CMS pour gestion des produits
- [ ] Analytics et suivi
- [ ] Gestion des commandes
- [ ] Support client

## 🚀 Déploiement

Le site est automatiquement déployé sur GitHub Pages à chaque push sur la branche `main`.

### Configuration du domaine
1. Le fichier `CNAME` configure le domaine personnalisé
2. Dans les paramètres OVH, configurer les enregistrements DNS :
   - CNAME : www.monpetitbazaar.fr → votre-username.github.io
   - A : monpetitbazaar.fr → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

## 📁 Structure Actuelle
```
├── index.html          # Page d'accueil (site en construction)
├── CNAME              # Configuration du domaine
└── README.md          # Documentation
```

## 📁 Structure Cible (après migration Astro)
```
├── src/
│   ├── components/     # Composants réutilisables
│   ├── layouts/        # Templates de page
│   ├── pages/          # Pages du site
│   └── styles/         # Styles globaux
├── content/
│   ├── produits/       # Fiches produits (Markdown)
│   └── collections/    # Collections de produits
├── public/
│   ├── images/         # Images statiques
│   └── assets/         # Autres ressources
├── astro.config.mjs    # Configuration Astro
├── tailwind.config.mjs # Configuration Tailwind
├── package.json        # Dépendances Node.js
└── README.md          # Documentation
```

## 🎯 Objectifs

**Vision :** Créer un e-commerce moderne, rapide et facile à maintenir
- ⚡ Performance optimale (Jamstack)
- 📱 Mobile-first
- 🎨 Design attractif et professionnel
- 🛒 Expérience d'achat fluide
- 📊 Administration simple

## 🎨 Fonctionnalités Actuelles
- Design coloré et animé
- Responsive (mobile-friendly)
- Animations CSS amusantes
- Message d'attente engageant

## � Notes de Développement

_Utilisez cette section pour noter vos réflexions, difficultés rencontrées, et solutions trouvées au fur et à mesure du développement._

### [Date] - Nom de l'étape
- **Objectif :** 
- **Réalisé :**
- **Difficultés :**
- **Solutions :**
- **Prochaines étapes :**

## �📧 Contact
contact@monpetitbazaar.fr

---
**Dernière mise à jour :** 14 juillet 2025