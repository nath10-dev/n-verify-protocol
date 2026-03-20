import { Router, Response } from 'express';
import { pool } from '../index';
import { AppError } from '../middleware/errorHandler';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';

const router = Router();

// Dashboard analytics
router.get('/dashboard', authenticate, authorize('admin'), async (req: AuthRequest, res: Response, next) => {
  try {
    // Total verifications
    const totalResult = await pool.query(
      'SELECT COUNT(*) as count FROM verification_requests'
    );
    const totalVerifications = parseInt(totalResult.rows[0].count);

    // Average verification time
    const avgTimeResult = await pool.query(
      `SELECT AVG(EXTRACT(EPOCH FROM (completed_at - created_at))) as avg_time
       FROM verification_requests
       WHERE status = 'completed'`
    );
    const averageVerificationTime = avgTimeResult.rows[0].avg_time || 0;

    // Domain breakdown
    const domainResult = await pool.query(
      `SELECT domain, COUNT(*) as count 
       FROM verification_requests 
       GROUP BY domain`
    );
    const domainBreakdown: Record<string, number> = {};
    domainResult.rows.forEach((r: any) => {
      domainBreakdown[r.domain] = parseInt(r.count);
    });

    // Success rate
    const successResult = await pool.query(
      `SELECT COUNT(*) as count 
       FROM verification_requests 
       WHERE status = 'completed'`
    );
    const successRate = totalVerifications > 0 
      ? (parseInt(successResult.rows[0].count) / totalVerifications) * 100 
      : 0;

    // Active validators
    const validatorsResult = await pool.query(
      "SELECT COUNT(*) as count FROM validators WHERE is_active = true"
    );
    const activeValidators = parseInt(validatorsResult.rows[0].count);

    res.json({
      success: true,
      totalVerifications,
      averageVerificationTime: Math.round(averageVerificationTime),
      domainBreakdown,
      successRate: Math.round(successRate * 100) / 100,
      activeValidators,
    });
  } catch (error) {
    next(error);
  }
});

// Domain-specific analytics
router.get('/domain/:domain', authenticate, authorize('admin'), async (req: AuthRequest, res: Response, next) => {
  try {
    const { domain } = req.params;

    // Verification count
    const countResult = await pool.query(
      'SELECT COUNT(*) as count FROM verification_requests WHERE domain = $1',
      [domain]
    );
    const verificationCount = parseInt(countResult.rows[0].count);

    // Average reliability score
    const scoreResult = await pool.query(
      `SELECT AVG(
        CASE 
          WHEN reliability_score = 'A+' THEN 100
          WHEN reliability_score = 'A' THEN 90
          WHEN reliability_score = 'B+' THEN 80
          WHEN reliability_score = 'B' THEN 70
          WHEN reliability_score = 'C' THEN 60
          ELSE 50
        END
      ) as avg_score
      FROM certificates c
      JOIN verification_requests vr ON c.verification_request_id = vr.id
      WHERE vr.domain = $1`,
      [domain]
    );
    const averageReliabilityScore = scoreResult.rows[0].avg_score 
      ? `${Math.round(scoreResult.rows[0].avg_score)}`
      : 'N/A';

    // Top validators for this domain
    const validatorsResult = await pool.query(
      `SELECT v.id, u.email, v.reputation_score, v.verification_count
       FROM validators v
       JOIN users u ON v.user_id = u.id
       WHERE v.domain = $1 AND v.is_active = true
       ORDER BY v.reputation_score DESC
       LIMIT 5`,
      [domain]
    );
    const topValidators = validatorsResult.rows.map((v: any) => ({
      id: v.id,
      email: v.email,
      reputationScore: v.reputation_score,
      verificationCount: v.verification_count,
    }));

    // Common failure points (placeholder)
    const commonFailurePoints: string[] = [];

    res.json({
      success: true,
      domain,
      verificationCount,
      averageReliabilityScore,
      commonFailurePoints,
      topValidators,
    });
  } catch (error) {
    next(error);
  }
});

// User analytics
router.get('/user', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const userId = req.user!.id;

    // Total verifications
    const totalResult = await pool.query(
      'SELECT COUNT(*) as count FROM verification_requests WHERE user_id = $1',
      [userId]
    );

    // By domain
    const domainResult = await pool.query(
      `SELECT domain, COUNT(*) as count 
       FROM verification_requests 
       WHERE user_id = $1 
       GROUP BY domain`,
      [userId]
    );
    const domainBreakdown: Record<string, number> = {};
    domainResult.rows.forEach((r: any) => {
      domainBreakdown[r.domain] = parseInt(r.count);
    });

    // Recent activity
    const recentResult = await pool.query(
      `SELECT id, domain, status, created_at 
       FROM verification_requests 
       WHERE user_id = $1 
       ORDER BY created_at DESC 
       LIMIT 10`,
      [userId]
    );

    res.json({
      success: true,
      totalVerifications: parseInt(totalResult.rows[0].count),
      domainBreakdown,
      recentActivity: recentResult.rows,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
