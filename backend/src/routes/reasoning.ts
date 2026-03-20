import { Router, Response } from 'express';
import { pool } from '../index';
import { AppError } from '../middleware/errorHandler';
import { authenticate, AuthRequest } from '../middleware/auth';

const router = Router();

// Get reasoning graph
router.get('/:graphId', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const { graphId } = req.params;

    const graphResult = await pool.query(
      `SELECT rg.*, vr.domain, vr.user_id
       FROM reasoning_graphs rg
       JOIN verification_requests vr ON rg.verification_request_id = vr.id
       WHERE rg.id = $1`,
      [graphId]
    );

    if (graphResult.rows.length === 0) {
      throw new AppError('Reasoning graph not found', 404);
    }

    // Check access
    if (graphResult.rows[0].user_id !== req.user!.id && req.user!.role !== 'admin') {
      throw new AppError('Access denied', 403);
    }

    const graph = graphResult.rows[0];

    // Get nodes
    const nodesResult = await pool.query(
      `SELECT rn.*, 
              cr.consensus_reached, cr.verified_percentage,
              COUNT(DISTINCT v.id) as verification_count
       FROM reasoning_nodes rn
       LEFT JOIN consensus_results cr ON rn.id = cr.node_id
       LEFT JOIN verifications v ON rn.id = v.node_id
       WHERE rn.graph_id = $1
       GROUP BY rn.id, cr.consensus_reached, cr.verified_percentage
       ORDER BY rn.position_index`,
      [graphId]
    );

    // Get edges (from dependencies)
    const edges: any[] = [];
    nodesResult.rows.forEach((node: any) => {
      if (node.dependencies) {
        (node.dependencies as string[]).forEach((depId: string) => {
          edges.push({
            from: depId,
            to: node.id,
            type: 'supports',
          });
        });
      }
    });

    res.json({
      success: true,
      graphId: graph.id,
      domain: graph.domain,
      nodes: nodesResult.rows.map(n => ({
        id: n.id,
        type: n.node_type,
        content: n.content,
        verificationStatus: n.verification_count > 0 
          ? (n.consensus_reached ? 'verified' : 'pending')
          : 'pending',
        validators: parseInt(n.verification_count),
        consensusScore: n.verified_percentage || 0,
      })),
      edges,
    });
  } catch (error) {
    next(error);
  }
});

// Get specific node details
router.get('/:graphId/nodes/:nodeId', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const { nodeId } = req.params;

    const nodeResult = await pool.query(
      `SELECT rn.*, rg.verification_request_id
       FROM reasoning_nodes rn
       JOIN reasoning_graphs rg ON rn.graph_id = rg.id
       WHERE rn.id = $1`,
      [nodeId]
    );

    if (nodeResult.rows.length === 0) {
      throw new AppError('Node not found', 404);
    }

    // Get verifications for this node
    const verificationsResult = await pool.query(
      `SELECT v.*, u.email as validator_email
       FROM verifications v
       JOIN validators vl ON v.validator_id = vl.id
       JOIN users u ON vl.user_id = u.id
       WHERE v.node_id = $1`,
      [nodeId]
    );

    res.json({
      success: true,
      nodeId: nodeResult.rows[0].id,
      content: nodeResult.rows[0].content,
      type: nodeResult.rows[0].node_type,
      verifications: verificationsResult.rows.map(v => ({
        validatorId: v.validator_id,
        validatorEmail: v.validator_email,
        result: v.verification_result,
        confidence: v.confidence_score,
        evidence: v.evidence_citations,
        timestamp: v.created_at,
      })),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
