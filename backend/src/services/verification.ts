import { pool } from '../index';
import { verifyClaim } from './reasoning';
import { v4 as uuidv4 } from 'uuid';
import { logger } from '../utils/logger';

export interface VerificationResult {
  nodeId: string;
  result: 'verified' | 'rejected' | 'uncertain';
  confidence: number;
  evidence: string[];
  validatorId: string;
}

export async function processVerification(
  requestId: string,
  domain: 'medical' | 'legal' | 'financial'
): Promise<void> {
  try {
    // Update status to processing
    await pool.query(
      "UPDATE verification_requests SET status = 'processing' WHERE id = $1",
      [requestId]
    );

    // Get the AI output
    const result = await pool.query(
      'SELECT ai_output FROM verification_requests WHERE id = $1',
      [requestId]
    );

    if (result.rows.length === 0) {
      throw new Error('Verification request not found');
    }

    const aiOutput = result.rows[0].ai_output;

    // TODO: Call reasoning extraction service
    // For now, create a basic reasoning graph
    const graphId = uuidv4();
    await pool.query(
      `INSERT INTO reasoning_graphs (id, verification_request_id, graph_data)
       VALUES ($1, $2, $3)`,
      [graphId, requestId, JSON.stringify({ nodes: [], edges: [] })]
    );

    // TODO: Call validators to verify each node
    // For MVP, we'll auto-verify with a placeholder
    
    // Create consensus result
    await pool.query(
      `INSERT INTO consensus_results (node_id, consensus_reached, verified_percentage, total_validators, stake_weighted_score)
       VALUES ($1, true, 85, 3, 85)`,
      [uuidv4()]
    );

    // Generate certificate
    await generateCertificate(requestId, graphId);

    // Mark as completed
    await pool.query(
      "UPDATE verification_requests SET status = 'completed', completed_at = NOW() WHERE id = $1",
      [requestId]
    );

    logger.info(`Verification ${requestId} completed`);
  } catch (error) {
    logger.error(`Verification ${requestId} failed:`, error);
    await pool.query(
      "UPDATE verification_requests SET status = 'failed' WHERE id = $1",
      [requestId]
    );
  }
}

async function generateCertificate(
  requestId: string,
  graphId: string
): Promise<void> {
  const certificateId = uuidv4();
  const merkleRoot = `0x${Buffer.from(graphId).toString('hex').padEnd(64, '0')}`;
  const reliabilityScore = 'A';

  await pool.query(
    `INSERT INTO certificates (id, verification_request_id, certificate_data, merkle_root, reliability_score)
     VALUES ($1, $2, $3, $4, $5)`,
    [
      certificateId,
      requestId,
      JSON.stringify({
        requestId,
        graphId,
        generatedAt: new Date().toISOString(),
        version: '1.0.0',
      }),
      merkleRoot,
      reliabilityScore,
    ]
  );
}

// Consensus engine
export async function calculateConsensus(
  nodeId: string
): Promise<{
  consensusReached: boolean;
  verifiedPercentage: number;
  totalValidators: number;
  stakeWeightedScore: number;
}> {
  const result = await pool.query(
    `SELECT 
       v.verification_result,
       v.confidence_score,
       vl.stake_amount
     FROM verifications v
     JOIN validators vl ON v.validator_id = vl.id
     WHERE v.node_id = $1`,
    [nodeId]
  );

  if (result.rows.length === 0) {
    return {
      consensusReached: false,
      verifiedPercentage: 0,
      totalValidators: 0,
      stakeWeightedScore: 0,
    };
  }

  const verified = result.rows.filter(
    (r) => r.verification_result === 'verified'
  ).length;
  const total = result.rows.length;
  const verifiedPercentage = (verified / total) * 100;

  // Calculate stake-weighted score
  const totalStake = result.rows.reduce(
    (sum, r) => sum + Number(r.stake_amount),
    0
  );
  const verifiedStake = result.rows
    .filter((r) => r.verification_result === 'verified')
    .reduce((sum, r) => sum + Number(r.stake_amount), 0);
  const stakeWeightedScore = totalStake > 0 ? (verifiedStake / totalStake) * 100 : 0;

  const consensusReached = verifiedPercentage >= 51;

  return {
    consensusReached,
    verifiedPercentage,
    totalValidators: total,
    stakeWeightedScore,
  };
}
