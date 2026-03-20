# N-Verify Protocol - Troubleshooting

## Common Issues

### Can't connect to database
- Check DATABASE_URL
- Check Docker is running
- Try: `docker ps`

### API returns 500
- Check server logs
- Check database connection
- Restart backend: `npm run dev`

### Frontend not loading
- Check Next.js is running
- Check port 3000 is free
- Clear .next cache

### GitHub push fails
- Check git remote URL
- Check authentication
- Try: `git remote -v`

## Debug Commands

```bash
# Check logs
docker-compose logs -f

# Check ports
lsof -i :3000
lsof -i :4000

# Restart services
docker-compose restart

# Clear cache
rm -rf node_modules/.cache
```
