-- N-Verify Protocol Database Schema
-- Run this SQL to set up your PostgreSQL database

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- USERS TABLE
-- =====================================================
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    wallet_address VARCHAR(42),
    role VARCHAR(50) DEFAULT 'user',
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_wallet ON users(wallet_address);

-- =====================================================
-- VERIFICATIONS TABLE
-- =====================================================
CREATE TABLE verifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    certificate_id VARCHAR(255) UNIQUE NOT NULL,
    domain VARCHAR(50) NOT NULL, -- medical, legal, financial
    ai_output TEXT NOT NULL,
    reasoning_chain JSONB,
    reliability_score VARCHAR(5),
    is_verified BOOLEAN DEFAULT false,
    verification_details JSONB,
    ipfs_hash VARCHAR(255),
    blockchain_tx_hash VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_verifications_user ON verifications(user_id);
CREATE INDEX idx_verifications_certificate ON verifications(certificate_id);
CREATE INDEX idx_verifications_domain ON verifications(domain);
CREATE INDEX idx_verifications_created ON verifications(created_at DESC);

-- =====================================================
-- VALIDATORS TABLE
-- =====================================================
CREATE TABLE validators (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    wallet_address VARCHAR(42) UNIQUE NOT NULL,
    domain VARCHAR(50) NOT NULL, -- medical, legal, financial
    stake_amount DECIMAL(78, 0) DEFAULT 0,
    is_active BOOLEAN DEFAULT false,
    reputation_score INTEGER DEFAULT 0,
    total_verifications INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_validators_wallet ON validators(wallet_address);
CREATE INDEX idx_validators_domain ON validators(domain);

-- =====================================================
-- VALIDATOR_VERIFICATIONS TABLE
-- =====================================================
CREATE TABLE validator_verifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    verification_id UUID REFERENCES verifications(id) ON DELETE CASCADE,
    validator_id UUID REFERENCES validators(id) ON DELETE CASCADE,
    vote VARCHAR(10) NOT NULL, -- approve, reject, abstain
    confidence_score INTEGER,
    comments TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_vv_verification ON validator_verifications(verification_id);
CREATE INDEX idx_vv_validator ON validator_verifications(validator_id);

-- =====================================================
-- CERTIFICATES TABLE
-- =====================================================
CREATE TABLE certificates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    verification_id UUID REFERENCES verifications(id) ON DELETE CASCADE,
    certificate_hash VARCHAR(255) UNIQUE NOT NULL,
    merkle_root VARCHAR(255),
    ipfs_url VARCHAR(500),
    issued_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_certificates_hash ON certificates(certificate_hash);
CREATE INDEX idx_certificates_verification ON certificates(verification_id);

-- =====================================================
-- API KEYS TABLE
-- =====================================================
CREATE TABLE api_keys (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    key_hash VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    is_active BOOLEAN DEFAULT true,
    last_used_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_api_keys_user ON api_keys(user_id);
CREATE INDEX idx_api_keys_hash ON api_keys(key_hash);

-- =====================================================
-- AUDIT LOGS TABLE
-- =====================================================
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50),
    entity_id UUID,
    details JSONB,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_audit_logs_user ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_created ON audit_logs(created_at DESC);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);

-- =====================================================
-- TRIGGERS FOR UPDATED_AT
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_verifications_updated_at BEFORE UPDATE ON verifications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_validators_updated_at BEFORE UPDATE ON validators
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- SEEDS (Optional - Demo Data)
-- =====================================================
-- INSERT INTO users (email, password_hash, name, role)
-- VALUES ('admin@nverify.io', '$2a$10$xxx', 'Admin', 'admin');

-- INSERT INTO validators (user_id, wallet_address, domain, is_active, stake_amount)
-- VALUES ('uuid-here', '0x1234567890123456789012345678901234567890', 'medical', true, 100000000000000000000);