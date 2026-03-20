# N-Verify Protocol - Common Issues

## Build Issues

### Node version mismatch
- Use Node.js 20+
- Check with: node --version

### Missing dependencies
- Run: npm install
- Delete node_modules and reinstall

### TypeScript errors
- Check tsconfig.json
- Run: npx tsc --noEmit

## Runtime Issues

### Database connection
- Check DATABASE_URL
- Ensure PostgreSQL running

### Redis connection
- Check REDIS_URL
- Ensure Redis running

### API timeouts
- Check network
- Increase timeout settings
