# N-Verify Protocol - Backup

## What's Backed Up
- Database (PostgreSQL)
- Files (uploads)
- Blockchain state

## Schedule
- Database: Daily
- Files: Weekly
- Config: On change

## Storage
- AWS S3
- Encrypted
- Versioned

## Recovery
- RTO: 1 hour
- RPO: 24 hours
- Tested monthly
