# N-VERIFY PROTOCOL - Complete Developer Agent Brief

Version 1.0.0 | Build from Scratch to MVP

## TABLE OF CONTENTS
- Project Overview
- System Architecture
- Technical Stack
- Database Schemas
- API Specifications
- Smart Contract Architecture
- Development Roadmap
- Code Structure
- Security & Compliance
- Testing Strategy
- Deployment Pipeline
- N Nexus Integration

---

## PROJECT OVERVIEW

### Mission Statement
Build a decentralized verification layer that transforms AI model outputs into cryptographically auditable reasoning chains, enabling reliable trust infrastructure for high-stakes AI decision-making in regulated industries.

### Core Value Proposition

**Problem:** AI systems are black boxes in contexts where decisions have legal, financial, or safety consequences

**Solution:** Extract reasoning chains from AI outputs, verify each step through distributed validators, create tamper-proof audit certificates

**Market:** Healthcare, legal, financial services requiring EU AI Act compliance

### MVP Success Criteria
- Decompose AI outputs into structured reasoning graphs (factual claims, inferences, conclusions)
- Verify reasoning steps against domain knowledge bases (medical literature, legal precedent, financial data)
- Generate cryptographic verification certificates with validator consensus
- Support 3 domains: Medical, Legal, Financial
- Process verification in <5 seconds
- Handle 100+ concurrent verification requests

---

## SYSTEM ARCHITECTURE (continued)

### Data Flow
1. User submits AI output → REST API
2. Reasoning Decomposition extracts graph
3. Graph nodes distributed to validator pool
4. Validators check against knowledge bases
5. Consensus engine aggregates results
6. Certificate generator creates proof
7. Certificate stored on blockchain
8. Reasoning graph stored on IPFS
9. Metadata stored in PostgreSQL
10. Return verification report to user

---

## TECHNICAL STACK

### Frontend
- Framework: Next.js 14.2.0
- Language: TypeScript 5.4.0
- UI Library: React 18.3.0
- Styling: Tailwind CSS 3.4.0
- State Management: Zustand 4.5.0
- Forms: React Hook Form 7.51.0
- Charts: Recharts 2.12.0
- HTTP Client: Axios 1.6.8
- Web3: ethers.js 6.11.0

### Backend
- Framework: Node.js 20.x with Express 4.19.0
- Language: TypeScript 5.4.0
- API: REST + GraphQL (Apollo Server 4.10.0)
- Validation: Zod 3.22.4
- Authentication: JWT + OAuth2
- Rate Limiting: express-rate-limit 7.2.0
- Logging: Winston 3.13.0
- Monitoring: Prometheus + Grafana

### AI/ML Layer
- LLM Provider: OpenAI GPT-4 Turbo
- Reasoning Extraction: Custom fine-tuned model
- Framework: LangChain 0.1.0
- Vector DB: Pinecone / Chroma
- Embeddings: OpenAI text-embedding-3-large
- Prompt Engineering: LangSmith for testing

### Verification Engine

**Medical Validation:**
- PubMed API
- UMLS (Unified Medical Language System)
- RxNorm (drug database)
- SNOMED CT

**Legal Validation:**
- Legal precedent databases
- Case law APIs
- Regulatory compliance databases

**Financial Validation:**
- Bloomberg API / Alpha Vantage
- SEC EDGAR
- Financial models library

### Blockchain Layer
- Network: Ethereum (Sepolia testnet → Mainnet)
- Smart Contract Language: Solidity 0.8.24
- Framework: Hardhat 2.22.0
- Libraries: OpenZeppelin Contracts 5.0.0
- Oracle: Chainlink (for external data)
- Storage: IPFS via Pinata / Web3.Storage
- Wallet Integration: WalletConnect, MetaMask

### Database
- Primary DB: PostgreSQL 16
- Cache: Redis 7.2
- Vector Store: Pinecone / Chroma
- File Storage: AWS S3 / IPFS
- Search: Elasticsearch 8.12 (optional for MVP)

### DevOps
- Containerization: Docker 25.0
- Orchestration: Docker Compose (MVP) → Kubernetes (production)
- CI/CD: GitHub Actions
- Hosting: AWS / Vercel (frontend)
- CDN: Cloudflare
- Monitoring: Datadog / New Relic
- Error Tracking: Sentry

---

## DATABASE SCHEMAS

### PostgreSQL Schema

```sql
-- Users Table
CREATE TABLE users (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 email VARCHAR(255) UNIQUE NOT NULL,
 password_hash VARCHAR(255) NOT NULL,
 role VARCHAR(50) NOT NULL, -- 'user', 'validator', 'admin'
 organization VARCHAR(255),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 is_active BOOLEAN DEFAULT true
);

-- Verification Requests Table
CREATE TABLE verification_requests (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 user_id UUID REFERENCES users(id),
 domain VARCHAR(50) NOT NULL, -- 'medical', 'legal', 'financial'
 ai_output TEXT NOT NULL,
 status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'processing', 'completed', 'failed'
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 completed_at TIMESTAMP,
 ipfs_hash VARCHAR(255), -- Link to full reasoning graph on IPFS
 certificate_hash VARCHAR(255) -- Blockchain transaction hash
);

-- Reasoning Graphs Table
CREATE TABLE reasoning_graphs (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 verification_request_id UUID REFERENCES verification_requests(id),
 graph_data JSONB NOT NULL, -- Full reasoning graph structure
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reasoning Nodes Table
CREATE TABLE reasoning_nodes (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 graph_id UUID REFERENCES reasoning_graphs(id),
 node_type VARCHAR(50) NOT NULL, -- 'factual_claim', 'logical_inference', 'conclusion'
 content TEXT NOT NULL,
 position_index INTEGER,
 dependencies JSONB, -- Array of node IDs this depends on
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Validators Table
CREATE TABLE validators (
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

-- Verifications Table (individual validator checks)
CREATE TABLE verifications (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 node_id UUID REFERENCES reasoning_nodes(id),
 validator_id UUID REFERENCES validators(id),
 verification_result VARCHAR(50), -- 'verified', 'rejected', 'uncertain'
 confidence_score DECIMAL(5,2),
 evidence_citations JSONB,
 signature VARCHAR(255), -- Cryptographic signature
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Consensus Results Table
CREATE TABLE consensus_results (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 node_id UUID REFERENCES reasoning_nodes(id),
 consensus_reached BOOLEAN,
 verified_percentage DECIMAL(5,2),
 total_validators INTEGER,
 stake_weighted_score DECIMAL(10,2),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Certificates Table
CREATE TABLE certificates (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 verification_request_id UUID REFERENCES verification_requests(id),
 certificate_data JSONB NOT NULL,
 merkle_root VARCHAR(66),
 blockchain_tx_hash VARCHAR(66),
 reliability_score VARCHAR(10), -- 'A+', 'A', 'B+', etc.
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Knowledge Base Table (cached verification data)
CREATE TABLE knowledge_base (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 domain VARCHAR(50) NOT NULL,
 claim_hash VARCHAR(64) UNIQUE, -- Hash of the claim for deduplication
 claim_text TEXT NOT NULL,
 verification_result VARCHAR(50),
 evidence_sources JSONB,
 verification_count INTEGER DEFAULT 1,
 last_verified TIMESTAMP,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Audit Logs Table
CREATE TABLE audit_logs (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 user_id UUID REFERENCES users(id),
 action VARCHAR(100) NOT NULL,
 resource_type VARCHAR(50),
 resource_id UUID,
 metadata JSONB,
 ip_address INET,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_verification_requests_user ON verification_requests(user_id);
CREATE INDEX idx_verification_requests_status ON verification_requests(status);
CREATE INDEX idx_reasoning_graphs_verification ON reasoning_graphs(verification_request_id);
CREATE INDEX idx_reasoning_nodes_graph ON reasoning_nodes(graph_id);
CREATE INDEX idx_verifications_node ON verifications(node_id);
CREATE INDEX idx_verifications_validator ON verifications(validator_id);
CREATE INDEX idx_consensus_node ON consensus_results(node_id);
CREATE INDEX idx_certificates_verification ON certificates(verification_request_id);
CREATE INDEX idx_knowledge_base_domain ON knowledge_base(domain);
CREATE INDEX idx_knowledge_base_hash ON knowledge_base(claim_hash);
```

### Redis Cache Structure

```
# Verification sessions
verification:session:{requestId} = {
 status: string,
 progress: number,
 currentPhase: string
}

# Validator availability
validator:pool:{domain} = Set<validatorId>

# Rate limiting
ratelimit:{userId}:{endpoint} = count

# Knowledge base cache (hot claims)
kb:claim:{claimHash} = {
 verificationResult: string,
 evidenceSources: array,
 cachedAt: timestamp
}
```

---

## API SPECIFICATIONS

### REST API Endpoints

#### Authentication

**POST /api/v1/auth/register**
```json
// Request
{
 email: string;
 password: string;
 organizationName?: string;
 role: 'user' | 'validator';
}

// Response
{
 token: string;
 user: UserObject;
}
```

**POST /api/v1/auth/login**
```json
// Request
{
 email: string;
 password: string;
}

// Response
{
 token: string;
 user: UserObject;
 expiresIn: number;
}
```

**POST /api/v1/auth/refresh**
- Headers: `{ Authorization: 'Bearer <token>' }`
- Response: `{ token: string; expiresIn: number; }`

#### Verification Requests

**POST /api/v1/verify**
- Headers: `{ Authorization: 'Bearer <token>' }`
```json
// Request
{
 domain: 'medical' | 'legal' | 'financial';
 aiOutput: string;
 metadata?: {
   modelUsed?: string;
   timestamp?: string;
   contextData?: object;
 }
}

// Response
{
 requestId: string;
 status: 'pending';
 estimatedTime: number;
}
```

**GET /api/v1/verify/:requestId**
- Response:
```json
{
 requestId: string;
 status: 'pending' | 'processing' | 'completed' | 'failed';
 progress: number; // 0-100
 reasoningGraph?: ReasoningGraphObject;
 verificationResults?: VerificationResultObject;
 certificate?: CertificateObject;
}
```

**GET /api/v1/verify/:requestId/certificate**
- Response:
```json
{
 certificateId: string;
 certificate: CertificateObject;
 downloadUrl: string; // PDF download
 blockchainTx: string;
}
```

#### Reasoning Graph

**GET /api/v1/reasoning/:graphId**
- Response:
```json
{
 graphId: string;
 nodes: Array<{
   id: string;
   type: 'factual_claim' | 'logical_inference' | 'conclusion';
   content: string;
   verificationStatus: 'verified' | 'pending' | 'failed';
   validators: number;
   consensusScore: number;
 }>;
 edges: Array<{
   from: string;
   to: string;
   type: 'supports' | 'contradicts' | 'requires';
 }>;
}
```

**GET /api/v1/reasoning/:graphId/nodes/:nodeId**
- Response:
```json
{
 nodeId: string;
 content: string;
 type: string;
 verifications: Array<{
   validatorId: string;
   result: string;
   confidence: number;
   evidence: array;
   timestamp: string;
 }>;
}
```

#### Validators

**POST /api/v1/validators/register**
- Headers: `{ Authorization: 'Bearer <token>' }`
```json
// Request
{
 domain: string;
 credentials: object;
 walletAddress: string;
 stakeAmount: number;
}

// Response
{
 validatorId: string;
 status: 'pending_approval' | 'active';
}
```

**GET /api/v1/validators/:validatorId/stats**
```json
{
 validatorId: string;
 domain: string;
 reputationScore: number;
 verificationCount: number;
 accuracyRate: number;
 stakeAmount: number;
 earnings: number;
}
```

**POST /api/v1/validators/:validatorId/verify-node**
```json
// Request
{
 nodeId: string;
 result: 'verified' | 'rejected' | 'uncertain';
 confidence: number;
 evidence: array;
}

// Response
{
 verificationId: string;
 signature: string;
}
```

#### Analytics & Metrics

**GET /api/v1/analytics/dashboard**
```json
{
 totalVerifications: number;
 averageVerificationTime: number;
 domainBreakdown: object;
 successRate: number;
 activeValidators: number;
}
```

**GET /api/v1/analytics/domain/:domain**
```json
{
 domain: string;
 verificationCount: number;
 averageReliabilityScore: string;
 commonFailurePoints: array;
 topValidators: array;
}
```

---

## SMART CONTRACT ARCHITECTURE

### Contracts Overview
```
contracts/
├── VerificationRegistry.sol    # Main registry contract
├── ValidatorStaking.sol        # Staking and reputation management
├── CertificateNFT.sol          # NFT certificates
└── GovernanceDAO.sol           # Protocol governance (future)
```

### VerificationRegistry.sol
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract VerificationRegistry is AccessControl, ReentrancyGuard, Pausable {
    bytes32 public constant VALIDATOR_ROLE = keccak256("VALIDATOR_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    
    struct VerificationRecord {
        string requestId;
        string domain;
        string merkleRoot;
        uint256 timestamp;
        address[] validators;
        uint8 consensusPercentage;
        string ipfsHash;
        bool isVerified;
    }
    
    mapping(string => VerificationRecord) public verifications;
    mapping(address => uint256) public validatorReputations;
    
    event VerificationRecorded(
        string indexed requestId,
        string domain,
        string merkleRoot,
        uint256 timestamp
    );
    
    event ValidatorParticipated(
        string indexed requestId,
        address indexed validator
    );
    
    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }
    
    function recordVerification(
        string memory _requestId,
        string memory _domain,
        string memory _merkleRoot,
        address[] memory _validators,
        uint8 _consensusPercentage,
        string memory _ipfsHash
    ) public onlyRole(VALIDATOR_ROLE) nonReentrant whenNotPaused {
        require(bytes(_requestId).length > 0, "Invalid request ID");
        require(_consensusPercentage >= 51, "Consensus threshold not met");
        
        VerificationRecord storage record = verifications[_requestId];
        record.requestId = _requestId;
        record.domain = _domain;
        record.merkleRoot = _merkleRoot;
        record.timestamp = block.timestamp;
        record.validators = _validators;
        record.consensusPercentage = _consensusPercentage;
        record.ipfsHash = _ipfsHash;
        record.isVerified = true;
        
        emit VerificationRecorded(_requestId, _domain, _merkleRoot, block.timestamp);
        
        for (uint i = 0; i < _validators.length; i++) {
            emit ValidatorParticipated(_requestId, _validators[i]);
        }
    }
    
    function getVerification(
        string memory _requestId
    ) public view returns (VerificationRecord memory) {
        return verifications[_requestId];
    }
}
```
