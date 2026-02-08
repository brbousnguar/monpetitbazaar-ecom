# 🐳 Docker Setup for Mon Petit Bazaar

Complete containerized setup for the e-commerce platform with Docker Compose.

## 🚀 Quick Start

### Development Mode (with hot reload)

```bash
# Start all services
docker-compose up

# Or run in background
docker-compose up -d

# View logs
docker-compose logs -f frontend
```

**Access the app**: http://localhost:3000

### Production Mode

```bash
# Build and start production containers
docker-compose -f docker-compose.prod.yml up --build

# Or run in background
docker-compose -f docker-compose.prod.yml up -d
```

**Access the app**: http://localhost

---

## 📦 Services Included

| Service | Port | Description |
|---------|------|-------------|
| **frontend** | 3000 | React app with Vite (dev mode) |
| **postgres** | 5432 | PostgreSQL 16 database |
| **redis** | 6379 | Redis cache |
| **adminer** | 8081 | Database management UI |

---

## 🛠️ Available Commands

### Start Services
```bash
# Development mode
docker-compose up

# Production mode
docker-compose -f docker-compose.prod.yml up

# Rebuild containers
docker-compose up --build

# Run in background (detached)
docker-compose up -d
```

### Stop Services
```bash
# Stop all containers
docker-compose down

# Stop and remove volumes (⚠️ deletes data)
docker-compose down -v

# Stop production containers
docker-compose -f docker-compose.prod.yml down
```

### View Logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f frontend
docker-compose logs -f postgres
docker-compose logs -f redis
```

### Execute Commands in Container
```bash
# Shell access to frontend container
docker-compose exec frontend sh

# Run npm commands
docker-compose exec frontend npm install <package>
docker-compose exec frontend npm run build

# Access PostgreSQL
docker-compose exec postgres psql -U admin -d monpetitbazaar

# Redis CLI
docker-compose exec redis redis-cli
```

---

## 🗄️ Database Management

### Using Adminer (Web UI)
1. Open http://localhost:8081
2. Login with:
   - **System**: PostgreSQL
   - **Server**: postgres
   - **Username**: admin
   - **Password**: password
   - **Database**: monpetitbazaar

### Using Command Line
```bash
# Connect to PostgreSQL
docker-compose exec postgres psql -U admin -d monpetitbazaar

# Backup database
docker-compose exec postgres pg_dump -U admin monpetitbazaar > backup.sql

# Restore database
docker-compose exec -T postgres psql -U admin -d monpetitbazaar < backup.sql

# View tables
docker-compose exec postgres psql -U admin -d monpetitbazaar -c "\dt"
```

---

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and customize:

```bash
cp .env.example .env
```

Edit `.env`:
```env
# Database
DB_USER=admin
DB_PASSWORD=your_secure_password
POSTGRES_DB=monpetitbazaar

# Redis
REDIS_PASSWORD=your_redis_password

# Application
NODE_ENV=production
VITE_API_URL=http://localhost:8080
```

### Hot Reload (Development)

In development mode, these directories are mounted for hot reload:
- `./src` - Source code
- `./public` - Public assets
- `./index.html` - HTML template
- Config files (vite, tailwind, postcss)

Just save your files and see changes instantly!

---

## 📁 Docker Files Explained

### `docker-compose.yml` (Development)
- Mounts source code for hot reload
- Exposes all ports for debugging
- Includes Adminer for database management
- Uses development Dockerfile

### `docker-compose.prod.yml` (Production)
- Optimized production build
- Uses Nginx to serve static files
- Minimal attack surface
- Environment variable support
- Automatic restarts

### `Dockerfile.dev` (Development)
- Based on Node.js 20 Alpine
- Installs all dependencies
- Runs Vite dev server

### `Dockerfile` (Production)
- Multi-stage build
- Builds optimized production bundle
- Serves with Nginx
- Much smaller image size

---

## 🎯 Common Workflows

### Fresh Start
```bash
# Remove everything and start fresh
docker-compose down -v
docker-compose up --build
```

### Update Dependencies
```bash
# Update package.json
docker-compose exec frontend npm install

# Or rebuild container
docker-compose up --build frontend
```

### Check Service Health
```bash
# Check all container status
docker-compose ps

# Check specific service logs
docker-compose logs frontend --tail=50

# Check database health
docker-compose exec postgres pg_isready -U admin
```

### Database Migrations
```bash
# Run SQL script
docker-compose exec -T postgres psql -U admin -d monpetitbazaar < migration.sql

# Interactive SQL
docker-compose exec postgres psql -U admin -d monpetitbazaar
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Check what's using the port
lsof -i :3000
lsof -i :5432

# Change ports in docker-compose.yml
ports:
  - "3001:3000"  # Use 3001 instead
```

### Container Won't Start
```bash
# Check logs
docker-compose logs frontend

# Rebuild from scratch
docker-compose down -v
docker-compose build --no-cache
docker-compose up
```

### Permission Denied
```bash
# Fix ownership (macOS/Linux)
sudo chown -R $USER:$USER .

# Or run with sudo (not recommended)
sudo docker-compose up
```

### Database Connection Failed
```bash
# Wait for database to be ready
docker-compose up postgres
# Wait 10-15 seconds, then start other services
docker-compose up frontend

# Or use health checks (already configured)
```

### Hot Reload Not Working
```bash
# Ensure volumes are mounted correctly
docker-compose down
docker-compose up

# On Windows, may need to enable file watching
# Add to vite.config.js:
server: {
  watch: {
    usePolling: true
  }
}
```

---

## 📊 Resource Usage

### Check Container Stats
```bash
# Real-time stats
docker stats

# Specific container
docker stats monpetitbazaar-frontend
```

### Optimize Resources
```bash
# Remove unused images
docker image prune

# Remove unused volumes
docker volume prune

# Remove everything unused (⚠️ careful!)
docker system prune -a
```

---

## 🚀 Production Deployment

### Build Production Images
```bash
# Build optimized image
docker-compose -f docker-compose.prod.yml build

# Test locally
docker-compose -f docker-compose.prod.yml up
```

### Deploy to Server
```bash
# Export images
docker save -o monpetitbazaar.tar monpetitbazaar-frontend-prod

# Copy to server
scp monpetitbazaar.tar user@server:/path/

# On server: load and run
docker load -i monpetitbazaar.tar
docker-compose -f docker-compose.prod.yml up -d
```

### Using Docker Registry
```bash
# Tag image
docker tag monpetitbazaar-frontend-prod registry.example.com/monpetitbazaar:latest

# Push to registry
docker push registry.example.com/monpetitbazaar:latest

# Pull on server
docker pull registry.example.com/monpetitbazaar:latest
```

---

## 🔐 Security Best Practices

1. **Change default passwords** in `.env`
2. **Don't commit `.env`** to git (already in .gitignore)
3. **Use secrets** for production (Docker Swarm/Kubernetes)
4. **Keep images updated**:
   ```bash
   docker-compose pull
   docker-compose up -d
   ```
5. **Limit exposed ports** in production
6. **Use non-root user** in Dockerfile (already configured)

---

## 📝 Next Steps

### Adding Backend (Spring Boot)
1. Create `backend/` directory
2. Add Spring Boot Dockerfile
3. Update `docker-compose.yml`:
   ```yaml
   backend:
     build: ./backend
     ports:
       - "8080:8080"
     depends_on:
       - postgres
       - redis
   ```

### Adding More Services
- **Nginx Reverse Proxy**: Route traffic to services
- **Elasticsearch**: For product search
- **RabbitMQ**: For async tasks
- **Monitoring**: Prometheus + Grafana

---

## ✅ Advantages of This Setup

1. ✅ **No local Node.js needed** - everything in containers
2. ✅ **Consistent environment** - works same everywhere
3. ✅ **Hot reload** - changes reflect instantly (dev mode)
4. ✅ **Database included** - ready for backend integration
5. ✅ **Easy scaling** - just add more containers
6. ✅ **Production ready** - optimized builds included
7. ✅ **Team friendly** - everyone gets same setup

---

## 🎉 You're All Set!

Start developing without installing anything locally:

```bash
docker-compose up
```

Visit http://localhost:3000 and start coding! 🚀
