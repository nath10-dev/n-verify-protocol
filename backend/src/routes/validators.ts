import { Router, Response } from 'express';
import { pool } from '../index';
import { AppError } from '../middleware/errorHandler';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// Register as validator
router.post('/register', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const { domain, walletAddress, stakeAmount } = z.object({
      domain: z.enum(['medical', 'legal', 'financial']),
      walletAddress: z.string(),
      stakeAmount: z.number().positive(),
    }).parse(req.body);

    // Check if already a validator
    const existing = await pool.query(
      'SELECT id FROM validators WHERE user_id = $1',
      [req.user!.id]
    );

    if (existing.rows.length > 0) {
      throw new AppError('Already registered as validator', 400);
    }

    // Create validator record
    const validatorId = uuidv4();
    await pool.query(
      `INSERT INTO validators (id, user_id, domain, wallet_address, stake_amount)
       VALUES ($1, $2, $3, $4, $5)`,
      [validatorId, req.user!.id, domain, walletAddress, stakeAmount]
    );

    res.status(201).json({
      success: true,
      validatorId,
      status: 'pending_approval',
    });
  } catch (error) {
    next(error);
  }
});

// Get validator stats
router.get('/:validatorId/stats', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const { validatorId } = req.params;

    const result = await pool.query(
      `SELECT v.*, u.email, u.organization
       FROM validators v
       JOIN users u ON v.user_id = u.id
       WHERE v.id = $1`,
      [validatorId]
    );

    if (result.rows.length === 0) {
      throw new AppError('Validator not found', 404);
    }

    const v = result.rows[0];

    // Calculate earnings (placeholder)
    const earnings = v.verification_count * 0.01;

    res.json({
      success: true,
      validatorId: v.id,
      domain: v.domain,
      reputationScore: v.reputation_score,
      verificationCount: v.verification_count,
      accuracyRate: v.accuracy_rate,
      stakeAmount: v.stake_amount,
      earnings,
    });
  } catch (error) {
    next(error);
  }
});

// Submit verification (for validators)
router.post('/:validatorId/verify-node', authenticate, authorize('validator', 'admin'), 
  async (req: AuthRequest, res: Response, next) => {
    try {
      const { validatorId } = req.params;
      const { nodeId, result, confidence, evidence } = z.object({
        nodeId: z.string().uuid(),
        result: z.enum(['verified', 'rejected', 'uncertain']),
        confidence: z.number().min(0).max(100),
        evidence: z.array(z.unknown()),
      }).parse(req.body);

      // Verify validator owns this
      const validatorResult = await pool.query(
        'SELECT id, domain FROM validators WHERE id = $1 AND user_id = $2',
        [validatorId, req.user!.id]
      );

      if (validatorResult.rows.length === 0) {
        throw new AppError('Validator not found or unauthorized', 404);
      }

      // Create verification record
      const verificationId = uuidv4();
      await pool.query(
        `INSERT INTO verifications (id, node_id, validator_id, verification_result, confidence_score, evidence_citations)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [verificationId, nodeId, validatorId, result, confidence, JSON.stringify(evidence)]
      );

      // Update validator stats
      await pool.query(
        `UPDATE validators 
         SET verification_count = verification_count + 1
         WHERE id = $1`,
        [validatorId]
      );

      // Generate signature (placeholder - in production use proper crypto)
      const signature = `0x${Buffer.from(`${verificationId}${nodeId}${result}`).toString('hex')}`;

      res.status(201).json({
        success: true,
        verificationId,
        signature,
      });
    } catch (error) {
      next(error);
    }
  }
);

// List validators (admin only)
router.get('/', authenticate, authorize('admin'), async (req: AuthRequest, res: Response, next) => {
  try {
    const { domain, isActive } = req.query;

    let query = 'SELECT v.*, u.email, u.organization FROM validators v JOIN users u ON v.user_id = u.id WHERE 1=1';
    const params: any[] = [];

    if (domain) {
      params.push(domain);
      query += ` AND v.domain = $${params.length}`;
    }

    if (isActive !== undefined) {
      params.push(isActive === 'true');
      query += ` AND v.is_active = $${params.length}`;
    }

    query += ' ORDER BY v.reputation_score DESC';

    const result = await pool.query(query, params);

    res.json({
      success: true,
      validators: result.rows.map(v => ({
        id: v.id,
        email: v.email,
        domain: v.domain,
        reputationScore: v.reputation_score,
        stakeAmount: v.stake_amount,
        isActive: v.is_active,
        createdAt: v.created_at,
      })),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
