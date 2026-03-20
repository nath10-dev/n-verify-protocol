# N-Verify Protocol - Database Schema

## Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  role VARCHAR(50),
  organization VARCHAR(255),
  created_at TIMESTAMP,
  is_active BOOLEAN
);
```

## Verification Requests
```sql
CREATE TABLE verification_requests (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  domain VARCHAR(50),
  ai_output TEXT,
  status VARCHAR(50),
  created_at TIMESTAMP,
  completed_at TIMESTAMP
);
```

## Reasoning Graphs
```sql
CREATE TABLE reasoning_graphs (
  id UUID PRIMARY KEY,
  verification_request_id UUID,
  graph_data JSONB,
  created_at TIMESTAMP
);
```

## Reasoning Nodes
```sql
CREATE TABLE reasoning_nodes (
  id UUID PRIMARY KEY,
  graph_id UUID,
  node_type VARCHAR(50),
  content TEXT,
  dependencies JSONB,
  created_at TIMESTAMP
);
```

## Validators
```sql
CREATE TABLE validators (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  domain VARCHAR(50),
  reputation_score DECIMAL,
  stake_amount DECIMAL,
  wallet_address VARCHAR(42),
  is_active BOOLEAN
);
```

## Certificates
```sql
CREATE TABLE certificates (
  id UUID PRIMARY KEY,
  verification_request_id UUID,
  certificate_data JSONB,
  merkle_root VARCHAR(66),
  reliability_score VARCHAR(10),
  created_at TIMESTAMP
);
```
