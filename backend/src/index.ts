import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import { Pool } from 'pg';
import { createClient } from 'redis';
import authRoutes from './routes/auth';
import verifyRoutes from './routes/verify';
import reasoningRoutes from './routes/reasoning';
import validatorRoutes from './routes/validators';
import analyticsRoutes from './routes/analytics';
import webhookRoutes from './routes/webhook';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './utils/logger';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 4000;

// Database connection
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Redis connection
export const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.on('error', (err) => logger.error('Redis Client Error', err));
redisClient.on('connect', () => logger.info('Redis connected'));

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/verify', verifyRoutes);
app.use('/api/v1/reasoning', reasoningRoutes);
app.use('/api/v1/validators', validatorRoutes);
app.use('/api/v1/analytics', analyticsRoutes);
app.use('/api/v1/webhook', webhookRoutes);

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Root endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    name: 'N-Verify Protocol API',
    version: '1.0.0',
    status: 'running',
  });
});

// Error handling
app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    // Connect to Redis
    await redisClient.connect();
    
    // Test database connection
    const dbResult = await pool.query('SELECT NOW()');
    logger.info('Database connected:', dbResult.rows[0]);
    
    app.listen(PORT, () => {
      logger.info(`🚀 N-Verify API running on port ${PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;
