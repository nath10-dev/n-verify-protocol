// Verification types

export interface User {
  id: string;
  email: string;
  role: 'user' | 'validator' | 'admin';
  organization?: string;
  createdAt: string;
  isActive: boolean;
}

export interface VerificationRequest {
  id: string;
  userId: string;
  domain: 'medical' | 'legal' | 'financial';
  aiOutput: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: string;
  completedAt?: string;
  ipfsHash?: string;
  certificateHash?: string;
}

export interface ReasoningNode {
  id: string;
  graphId: string;
  type: 'factual_claim' | 'logical_inference' | 'conclusion';
  content: string;
  positionIndex?: number;
  dependencies?: string[];
  verificationStatus?: 'verified' | 'pending' | 'failed';
  consensusScore?: number;
}

export interface ReasoningGraph {
  id: string;
  verificationRequestId: string;
  nodes: ReasoningNode[];
  edges: { from: string; to: string; type: string }[];
}

export interface Validator {
  id: string;
  userId: string;
  domain: 'medical' | 'legal' | 'financial';
  reputationScore: number;
  stakeAmount: number;
  walletAddress?: string;
  verificationCount: number;
  accuracyRate?: number;
  isActive: boolean;
}

export interface Verification {
  id: string;
  nodeId: string;
  validatorId: string;
  result: 'verified' | 'rejected' | 'uncertain';
  confidenceScore: number;
  evidenceCitations?: string[];
  signature?: string;
}

export interface Certificate {
  id: string;
  verificationRequestId: string;
  certificateData: object;
  merkleRoot: string;
  blockchainTxHash?: string;
  reliabilityScore: 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D';
  createdAt: string;
}

export interface ConsensusResult {
  nodeId: string;
  consensusReached: boolean;
  verifiedPercentage: number;
  totalValidators: number;
  stakeWeightedScore: number;
}
