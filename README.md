# Mon Petit Bazaar

E-commerce site for selling personal items at competitive prices — [www.monpetitbazaar.fr](https://www.monpetitbazaar.fr)

## Stack

- React 18 + Vite 5 + Tailwind CSS
- React Router v6 (client-side routing)
- Cart state via React Context, persisted to `localStorage`
- Contact form via EmailJS (no backend required)
- Deployed on GitHub Pages (auto-deploy on push to `main`)

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run lint
npm run format
```

## Docker (optional)

```bash
docker-compose up --build                              # dev, http://localhost:5173
docker-compose -f docker-compose.prod.yml up --build  # production build, http://localhost
```

## Adding products

Edit `src/data/products.json`. Each product needs:

```json
{
  "id": 6,
  "name": "Nom du produit",
  "slug": "nom-du-produit",
  "category": "Catégorie",
  "price": 19.99,
  "description": "Description complète...",
  "image": "https://...",
  "images": ["https://...", "https://..."],
  "inStock": true
}
```

- `slug` must be URL-friendly (lowercase, hyphens, no spaces)
- Set `inStock: false` to hide the "Add to cart" button

## Contact form (EmailJS)

Copy `.env.example` to `.env` and fill in your EmailJS credentials (see `CONTACT_FORM_SETUP.md`).
Without configuration, the form falls back to a `mailto:` link.

## Deployment

GitHub Actions (`deploy-gh-pages.yml`) builds and deploys to GitHub Pages on every push to `main`.
Domain: `www.monpetitbazaar.fr` configured via the `CNAME` file and OVH DNS.
