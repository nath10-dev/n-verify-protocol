# N-Verify Protocol - Database Performance

## Indexes

```sql
-- Users
CREATE INDEX idx_users_email ON users(email);

-- Verifications
CREATE INDEX idx_verifications_user ON verification_requests(user_id);
CREATE INDEX idx_verifications_status ON verification_requests(status);
CREATE INDEX idx_verifications_domain ON verification_requests(domain);

-- Reasoning
CREATE INDEX idx_graphs_request ON reasoning_graphs(verification_request_id);
CREATE INDEX idx_nodes_graph ON reasoning_nodes(graph_id);

-- Validators
CREATE INDEX idx_validators_domain ON validators(domain);
CREATE INDEX idx_validators_active ON validators(is_active);
```

## Query Optimization

1. Select only needed columns
2. Use LIMIT and OFFSET
3. Avoid SELECT *
4. Use EXPLAIN ANALYZE
5. Cache frequently accessed data
