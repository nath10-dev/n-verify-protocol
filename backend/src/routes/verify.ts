import { Router, Response } from 'express';
import { pool } from '../index';
import { AppError } from '../middleware/errorHandler';
import { authenticate, AuthRequest } from '../middleware/auth';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// Validation schema
const verifySchema = z.object({
  domain: z.enum(['medical', 'legal', 'financial']),
  aiOutput: z.string().min(1),
  metadata: z.object({
    modelUsed: z.string().optional(),
    timestamp: z.string().optional(),
    contextData: z.record(z.unknown()).optional(),
  }).optional(),
});

// Create verification request
router.post('/', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const { domain, aiOutput, metadata } = verifySchema.parse(req.body);

    // Create verification request
    const requestId = uuidv4();
    const result = await pool.query(
      `INSERT INTO verification_requests (id, user_id, domain, ai_output, status)
       VALUES ($1, $2, $3, $4, 'pending')
       RETURNING id, domain, status, created_at`,
      [requestId, req.user!.id, domain, aiOutput]
    );

    // TODO: Trigger reasoning extraction asynchronously
    // TODO: Store metadata if provided

    res.status(201).json({
      success: true,
      requestId: result.rows[0].id,
      status: 'pending',
      estimatedTime: 5, // seconds
    });
  } catch (error) {
    next(error);
  }
});

// Get verification request status
router.get('/:requestId', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const { requestId } = req.params;

    const result = await pool.query(
      `SELECT vr.*, 
              rg.id as graph_id, rg.graph_data,
              c.id as certificate_id, c.certificate_data, c.merkle_root, c.reliability_score
       FROM verification_requests vr
       LEFT JOIN reasoning_graphs rg ON vr.id = rg.verification_request_id
       LEFT JOIN certificates c ON vr.id = c.verification_request_id
       WHERE vr.id = $1 AND vr.user_id = $2`,
      [requestId, req.user!.id]
    );

    if (result.rows.length === 0) {
      throw new AppError('Verification request not found', 404);
    }

    const vr = result.rows[0];

    // Calculate progress
    let progress = 0;
    switch (vr.status) {
      case 'pending': progress = 10; break;
      case 'processing': progress = 50; break;
      case 'completed': progress = 100; break;
      case 'failed': progress = 0; break;
    }

    res.json({
      success: true,
      requestId: vr.id,
      status: vr.status,
      progress,
      domain: vr.domain,
      createdAt: vr.created_at,
      completedAt: vr.completed_at,
      reasoningGraph: vr.graph_id ? {
        id: vr.graph_id,
        data: vr.graph_data,
      } : undefined,
      certificate: vr.certificate_id ? {
        id: vr.certificate_id,
        data: vr.certificate_data,
        merkleRoot: vr.merkle_root,
        reliabilityScore: vr.reliability_score,
      } : undefined,
    });
  } catch (error) {
    next(error);
  }
});

// Get certificate
router.get('/:requestId/certificate', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const { requestId } = req.params;

    const result = await pool.query(
      `SELECT c.*, vr.domain, vr.ai_output
       FROM certificates c
       JOIN verification_requests vr ON c.verification_request_id = vr.id
       WHERE vr.id = $1 AND vr.user_id = $2`,
      [requestId, req.user!.id]
    );

    if (result.rows.length === 0) {
      throw new AppError('Certificate not found', 404);
    }

    const cert = result.rows[0];

    res.json({
      success: true,
      certificateId: cert.id,
      certificate: {
        domain: cert.domain,
        reliabilityScore: cert.reliability_score,
        merkleRoot: cert.merkle_root,
        createdAt: cert.created_at,
      },
      downloadUrl: `/api/v1/verify/${requestId}/certificate/download`,
      blockchainTx: cert.blockchain_tx_hash,
    });
  } catch (error) {
    next(error);
  }
});

// List user's verification requests
router.get('/', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const { status, domain, limit = 20, offset = 0 } = req.query;

    let query = 'SELECT id, domain, status, created_at, completed_at FROM verification_requests WHERE user_id = $1';
    const params: any[] = [req.user!.id];

    if (status) {
      params.push(status);
      query += ` AND status = $${params.length}`;
    }

    if (domain) {
      params.push(domain);
      query += ` AND domain = $${params.length}`;
    }

    query += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(Number(limit), Number(offset));

    const result = await pool.query(query, params);

    res.json({
      success: true,
      requests: result.rows.map(r => ({
        id: r.id,
        domain: r.domain,
        status: r.status,
        createdAt: r.created_at,
        completedAt: r.completed_at,
      })),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
