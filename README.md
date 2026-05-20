# 🍺 Bière QC — API Backend

API REST pour trouver des bières de microbrasseries au Québec et leurs points de vente.

## Stack
- Node.js + Express
- Supabase (PostgreSQL)

## Installation

```bash
npm install
cp .env.example .env
# Remplis les valeurs dans .env
npm run dev
```

## Endpoints

| Méthode | Route | Description |
|---|---|---|
| GET | /health | Vérifier que l'API tourne |
| GET | /beers | Liste toutes les bières |
| GET | /beers?search=blanche | Recherche par nom |
| GET | /beers?style=ipa | Filtre par style |
| GET | /beers/:id | Détail d'une bière |
| GET | /beers/:id/locations | Points de vente d'une bière |
| GET | /breweries | Liste toutes les brasseries |
| GET | /breweries?city=montreal | Filtre par ville |
| GET | /breweries/:id | Détail + bières d'une brasserie |

## Structure du projet

```
src/
├── db/
│   └── supabase.js        # Client Supabase
├── controllers/
│   ├── beersController.js
│   └── breweriesController.js
├── routes/
│   ├── beers.js
│   └── breweries.js
├── middleware/
│   └── errorHandler.js
└── index.js
```
