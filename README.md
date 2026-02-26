# Mon Petit Bazaar - E-commerce 🛍️

Site e-commerce en cours de développement pour www.monpetitbazaar.fr

## 🚧 État actuel
- Page "En construction" déployée sur GitHub Pages
- Domaine configuré : www.monpetitbazaar.fr
- Design amusant et responsive

## 🚀 Déploiement

Le site est automatiquement déployé sur GitHub Pages à chaque push sur la branche `main`.

### Configuration du domaine
1. Le fichier `CNAME` configure le domaine personnalisé
2. Dans les paramètres OVH, configurer les enregistrements DNS :
   - CNAME : www.monpetitbazaar.fr → votre-username.github.io
   - A : monpetitbazaar.fr → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

## 📁 Structure
```
├── index.html          # Page d'accueil (site en construction)
├── CNAME              # Configuration du domaine
└── README.md          # Documentation
```

## 🧭 Accès local (rappel rapide)
- Frontend (Vite): http://localhost:5173 (lancer avec `npm run dev` ou Docker).
- Backend API: attendu sur http://localhost:8080 (référence dans `VITE_API_URL`).  
  Note: aucun service backend n’est défini dans `docker-compose.yml` à ce jour.
- PostgreSQL: `localhost:5432` (db: `monpetitbazaar`, user: `admin`, password: `password`).
- Adminer (UI DB): http://localhost:8081 (serveur: `postgres`).
- Redis: `localhost:6379`.

## 🎨 Fonctionnalités actuelles
- Design coloré et animé
- Responsive (mobile-friendly)
- Animations CSS amusantes
- Message d'attente engageant

## 📧 Contact
contact@monpetitbazaar.fr
