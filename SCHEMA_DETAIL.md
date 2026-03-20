# N-Verify Protocol - Database Schema

## Tables

### users
- id (UUID, PK)
- email (VARCHAR, unique)
- password_hash (VARCHAR)
- wallet_address (VARCHAR)
- name (VARCHAR)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### verifications
- id (UUID, PK)
- user_id (UUID, FK)
- domain (VARCHAR) - medical, legal, financial
- status (VARCHAR) - pending, processing, completed, failed
- input_data (JSONB)
- reasoning_chain (JSONB)
- verification_result (JSONB)
- certificate_hash (VARCHAR)
- created_at (TIMESTAMP)

### validators
- id (UUID, PK)
- wallet_address (VARCHAR)
- stake_amount (BIGINT)
- domain (VARCHAR)
- status (VARCHAR)
- created_at (TIMESTAMP)

### certificates
- id (UUID, PK)
- verification_id (UUID, FK)
- merkle_root (VARCHAR)
- ipfs_hash (VARCHAR)
- blockchain_tx (VARCHAR)
- issued_at (TIMESTAMP)
