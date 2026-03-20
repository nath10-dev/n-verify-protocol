# N-Verify Protocol - Docker Commands

## Build Images
```bash
docker build -t nverify-backend ./backend
docker build -t nverify-frontend ./frontend
```

## Run Containers
```bash
docker run -d -p 4000:4000 nverify-backend
docker run -d -p 3000:3000 nverify-frontend
```

## Docker Compose
```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f
```

## Common Issues
- Port already in use
- Volume permissions
- Network issues
