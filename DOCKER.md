# Docker

## Development (hot reload)

```bash
docker-compose up --build
```

Frontend available at http://localhost:5173. Source code is mounted — changes reflect instantly.

## Production

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

Serves the optimized build via Nginx at http://localhost.

## Useful commands

```bash
# Stop containers
docker-compose down

# View logs
docker-compose logs -f frontend

# Shell access
docker-compose exec frontend sh

# Rebuild from scratch (clears node_modules volume)
docker-compose down -v && docker-compose up --build
```

## Files

| File | Purpose |
|------|---------|
| `Dockerfile.dev` | Node 20 + Vite dev server |
| `Dockerfile` | Multi-stage: build → Nginx |
| `docker-compose.yml` | Dev stack |
| `docker-compose.prod.yml` | Production stack |
| `nginx.conf` | Nginx config for SPA routing |
