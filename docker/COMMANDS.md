# Docker Commands

## Development

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild
docker-compose build --no-cache
```

## Production

```bash
# Build images
docker-compose -f docker-compose.prod.yml build

# Start production
docker-compose -f docker-compose.prod.yml up -d
```

## Database

```bash
# Connect to PostgreSQL
docker exec -it n-verify-db psql -U nverify -d nverify

# Run migrations
docker exec -it n-verify-api npx prisma migrate deploy

# Backup database
docker exec -it n-verify-db pg_dump -U nverify nverify > backup.sql
```
