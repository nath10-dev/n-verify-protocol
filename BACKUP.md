# N-Verify Protocol - Backup & Recovery

## Backup

### Database
```bash
docker exec -it n-verify-db pg_dump -U nverify nverify > backup_$(date +%Y%m%d).sql
```

### Files
```bash
tar -czvf nverify_backup_$(date +%Y%m%d).tar.gz ./n-verify
```

## Restore

### Database
```bash
docker exec -i n-verify-db psql -U nverify nverify < backup_20260315.sql
```

### Files
```bash
tar -xzvf nverify_backup_20260315.tar.gz
```

## Automated Backups

### Cron (daily at 2am)
```bash
0 2 * * * /path/to/backup.sh
```

## Recovery Plan

1. Identify failure
2. Assess damage
3. Restore from backup
4. Verify integrity
5. Bring online
