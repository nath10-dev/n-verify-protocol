import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../index';
import { AppError } from '../middleware/errorHandler';
import { authenticate, AuthRequest } from '../middleware/auth';
import { z } from 'zod';

const router = Router();

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  organizationName: z.string().optional(),
  role: z.enum(['user', 'validator']).optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Generate JWT token
const generateToken = (user: { id: string; email: string; role: string }) => {
  const secret = process.env.JWT_SECRET || 'default-secret';
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d';

  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    secret,
    { expiresIn }
  );
};

// Register
router.post('/register', async (req: Request, res: Response, next) => {
  try {
    const { email, password, organizationName, role } = registerSchema.parse(req.body);

    // Check if user exists
    const existingUser = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      throw new AppError('Email already registered', 400);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create user
    const result = await pool.query(
      `INSERT INTO users (email, password_hash, role, organization)
       VALUES ($1, $2, $3, $4)
       RETURNING id, email, role, organization, created_at`,
      [email, passwordHash, role || 'user', organizationName || null]
    );

    const user = result.rows[0];
    const token = generateToken(user);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        organization: user.organization,
        createdAt: user.created_at,
      },
    });
  } catch (error) {
    next(error);
  }
});

// Login
router.post('/login', async (req: Request, res: Response, next) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    // Find user
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      throw new AppError('Invalid credentials', 401);
    }

    const user = result.rows[0];

    // Check password
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      throw new AppError('Invalid credentials', 401);
    }

    // Check if active
    if (!user.is_active) {
      throw new AppError('Account is deactivated', 401);
    }

    const token = generateToken(user);

    res.json({
      success: true,
      token,
      expiresIn: 7 * 24 * 60 * 60, // 7 days in seconds
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        organization: user.organization,
        createdAt: user.created_at,
      },
    });
  } catch (error) {
    next(error);
  }
});

// Refresh token
router.post('/refresh', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const token = generateToken(req.user!);

    res.json({
      success: true,
      token,
      expiresIn: 7 * 24 * 60 * 60,
    });
  } catch (error) {
    next(error);
  }
});

// Get current user
router.get('/me', authenticate, async (req: AuthRequest, res: Response, next) => {
  try {
    const result = await pool.query(
      'SELECT id, email, role, organization, created_at, is_active FROM users WHERE id = $1',
      [req.user!.id]
    );

    if (result.rows.length === 0) {
      throw new AppError('User not found', 404);
    }

    const user = result.rows[0];

    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        organization: user.organization,
        createdAt: user.created_at,
        isActive: user.is_active,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default router;
