import { Router, Response } from 'express';
import { processVerification } from '../services/verification';
import { pool } from '../index';
import { AppError } from '../middleware/errorHandler';
import { authenticate, AuthRequest } from '../middleware/auth';
import { z } from 'zod';

const router = Router();

// Webhook for verification processing (internal)
router.post('/webhook/process', async (req, res, next) => {
  try {
    const { requestId, domain } = req.body;
    
    // TODO: Add webhook authentication
    
    // Process in background
    processVerification(requestId, domain).catch(console.error);
    
    res.json({ success: true, message: 'Verification processing started' });
  } catch (error) {
    next(error);
  }
});

// Trigger verification manually
router.post('/:requestId/trigger', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const { requestId } = req.params;
    
    // Verify ownership
    const result = await pool.query(
      'SELECT domain, status FROM verification_requests WHERE id = $1 AND user_id = $2',
      [requestId, req.user!.id]
    );
    
    if (result.rows.length === 0) {
      throw new AppError('Verification request not found', 404);
    }
    
    const { domain, status } = result.rows[0];
    
    if (status !== 'pending' && status !== 'processing') {
      throw new AppError('Verification already processed', 400);
    }
    
    // Trigger processing
    processVerification(requestId, domain).catch(console.error);
    
    res.json({ 
      success: true, 
      message: 'Verification processing started',
      requestId 
    });
  } catch (error) {
    next(error);
  }
});

// Get verification status with polling
router.get('/:requestId/status', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const { requestId } = req.params;
    
    const result = await pool.query(
      'SELECT status, completed_at FROM verification_requests WHERE id = $1 AND user_id = $2',
      [requestId, req.user!.id]
    );
    
    if (result.rows.length === 0) {
      throw new AppError('Verification request not found', 404);
    }
    
    const { status, completed_at } = result.rows[0];
    
    res.json({
      success: true,
      requestId,
      status,
      completedAt: completed_at,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
