// Backend types

export interface User {
  id: string;
  email: string;
  role: 'user' | 'validator' | 'admin';
  organization?: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface VerificationRequest {
  id: string;
  userId: string;
  domain: 'medical' | 'legal' | 'financial';
  aiOutput: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: Date;
  completedAt?: Date;
  ipfsHash?: string;
  certificateHash?: string;
}

export interface ReasoningGraph {
  id: string;
  verificationRequestId: string;
  graphData: object;
  createdAt: Date;
}

export interface ReasoningNode {
  id: string;
  graphId: string;
  nodeType: 'factual_claim' | 'logical_inference' | 'conclusion';
  content: string;
  positionIndex?: number;
  dependencies?: string[];
  createdAt: Date;
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
  createdAt: Date;
}

export interface Verification {
  id: string;
  nodeId: string;
  validatorId: string;
  verificationResult: 'verified' | 'rejected' | 'uncertain';
  confidenceScore: number;
  evidenceCitations?: object;
  signature?: string;
  createdAt: Date;
}

export interface Certificate {
  id: string;
  verificationRequestId: string;
  certificateData: object;
  merkleRoot: string;
  blockchainTxHash?: string;
  reliabilityScore: string;
  createdAt: Date;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface AuthResponse {
  token: string;
  user: Pick<User, 'id' | 'email' | 'role' | 'organization'>;
  expiresIn: number;
}
