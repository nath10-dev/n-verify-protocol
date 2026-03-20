-- N-Verify Protocol Database Initialization
-- PostgreSQL Schema

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user',
    organization VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

-- Verification Requests Table
CREATE TABLE IF NOT EXISTS verification_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    domain VARCHAR(50) NOT NULL,
    ai_output TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    ipfs_hash VARCHAR(255),
    certificate_hash VARCHAR(255)
);

-- Reasoning Graphs Table
CREATE TABLE IF NOT EXISTS reasoning_graphs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    verification_request_id UUID REFERENCES verification_requests(id),
    graph_data JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reasoning Nodes Table
CREATE TABLE IF NOT EXISTS reasoning_nodes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    graph_id UUID REFERENCES reasoning_graphs(id),
    node_type VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    position_index INTEGER,
    dependencies JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Validators Table
CREATE TABLE IF NOT EXISTS validators (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    domain VARCHAR(50) NOT NULL,
    reputation_score DECIMAL(10,2) DEFAULT 100.0,
    stake_amount DECIMAL(18,8) DEFAULT 0,
    wallet_address VARCHAR(42),
    verification_count INTEGER DEFAULT 0,
    accuracy_rate DECIMAL(5,2),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Verifications Table
CREATE TABLE IF NOT EXISTS verifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    node_id UUID REFERENCES reasoning_nodes(id),
    validator_id UUID REFERENCES validators(id),
    verification_result VARCHAR(50),
    confidence_score DECIMAL(5,2),
    evidence_citations JSONB,
    signature VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Consensus Results Table
CREATE TABLE IF NOT EXISTS consensus_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    node_id UUID REFERENCES reasoning_nodes(id),
    consensus_reached BOOLEAN,
    verified_percentage DECIMAL(5,2),
    total_validators INTEGER,
    stake_weighted_score DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Certificates Table
CREATE TABLE IF NOT EXISTS certificates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    verification_request_id UUID REFERENCES verification_requests(id),
    certificate_data JSONB NOT NULL,
    merkle_root VARCHAR(66),
    blockchain_tx_hash VARCHAR(66),
    reliability_score VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Knowledge Base Table
CREATE TABLE IF NOT EXISTS knowledge_base (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    domain VARCHAR(50) NOT NULL,
    claim_hash VARCHAR(64) UNIQUE,
    claim_text TEXT NOT NULL,
    verification_result VARCHAR(50),
    evidence_sources JSONB,
    verification_count INTEGER DEFAULT 1,
    last_verified TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Audit Logs Table
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(50),
    resource_id UUID,
    metadata JSONB,
    ip_address INET,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_verification_requests_user ON verification_requests(user_id);
CREATE INDEX IF NOT EXISTS idx_verification_requests_status ON verification_requests(status);
CREATE INDEX IF NOT EXISTS idx_reasoning_graphs_verification ON reasoning_graphs(verification_request_id);
CREATE INDEX IF NOT EXISTS idx_reasoning_nodes_graph ON reasoning_nodes(graph_id);
CREATE INDEX IF NOT EXISTS idx_verifications_node ON verifications(node_id);
CREATE INDEX IF NOT EXISTS idx_verifications_validator ON verifications(validator_id);
CREATE INDEX IF NOT EXISTS idx_consensus_node ON consensus_results(node_id);
CREATE INDEX IF NOT EXISTS idx_certificates_verification ON certificates(verification_request_id);
CREATE INDEX IF NOT EXISTS idx_knowledge_base_domain ON knowledge_base(domain);
CREATE INDEX IF NOT EXISTS idx_knowledge_base_hash ON knowledge_base(claim_hash);

-- Insert default admin user (password: admin123)
INSERT INTO users (email, password_hash, role, organization)
VALUES ('admin@nverify.io', '$2a$10$rVqKxKqKqKqKqKqKqKqKqOqKqKqKqKqKqKqKqKqKqKqKqKqKqKqKqK', 'admin', 'N-Verify Protocol')
ON CONFLICT (email) DO NOTHING;

-- Insert sample validator (password: validator123)
INSERT INTO users (email, password_hash, role, organization)
VALUES ('validator@nverify.io', '$2a$10$rVqKxKqKqKqKqKqKqKqKqOqKqKqKqKqKqKqKqKqKqKqKqKqKqKqK', 'validator', 'N-Verify Validators')
ON CONFLICT (email) DO NOTHING;
