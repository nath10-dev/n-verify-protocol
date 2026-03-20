# N-Verify Protocol - Database Migrations

## Create Migration

```bash
# Create new migration
npx knex migrate:make create_users
```

## Run Migrations

```bash
# Run all pending
npx knex migrate:latest

# Rollback
npx knex migrate:rollback

# Check status
npx knex migrate:status
```

## Migration Files

- 001_create_users.sql
- 002_create_verifications.sql
- 003_create_validators.sql
- 004_create_certificates.sql
