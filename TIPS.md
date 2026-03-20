# N-Verify Protocol - Tips & Tricks

## Development Tips

### VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Solidity (Hardhat)
- GitLens

### Useful Commands

```bash
# Backend
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Lint code

# Frontend  
npm run dev          # Start Next.js
npm run build        # Build for production
npm run lint        # Lint code

# Docker
docker-compose up -d     # Start services
docker-compose logs -f   # View logs

# Git
git status            # Check changes
git add .            # Stage all
git commit -m ""     # Commit
git push            # Push to remote
```

### Debugging
- Use console.log for quick debugging
- Use debugger for complex issues
- Check browser DevTools
- Check server logs

### Performance
- Use Redis caching
- Optimize database queries
- Lazy load components
- Use SSR wisely
