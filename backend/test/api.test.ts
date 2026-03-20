// Test files for N-Verify API

import { describe, it, expect, beforeAll, afterAll } from 'jest';
import request from 'supertest';
import { Pool } from 'pg';
import { createClient } from 'redis';

// Test configuration
const API_URL = process.env.API_URL || 'http://localhost:4000';
const TEST_DB_URL = process.env.TEST_DATABASE_URL || 'postgresql://nverify:test@localhost:5432/nverify_test';

describe('N-Verify API', () => {
  let pool: Pool;
  let api: request.SuperTest<request.Test>;
  
  beforeAll(async () => {
    // Connect to test database
    pool = new Pool({ connectionString: TEST_DB_URL });
    api = request(API_URL);
    
    // Create test tables
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL DEFAULT 'user',
        organization VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT true
      );
    `);
  });
  
  afterAll(async () => {
    await pool.end();
  });
  
  describe('Auth', () => {
    const testUser = {
      email: `test-${Date.now()}@example.com`,
      password: 'testpassword123',
      organizationName: 'Test Org',
    };
    
    it('should register a new user', async () => {
      const response = await api
        .post('/api/v1/auth/register')
        .send(testUser)
        .expect(201);
      
      expect(response.body.success).toBe(true);
      expect(response.body.token).toBeDefined();
      expect(response.body.user.email).toBe(testUser.email);
    });
    
    it('should login with valid credentials', async () => {
      const response = await api
        .post('/api/v1/auth/login')
        .send({ email: testUser.email, password: testUser.password })
        .expect(200);
      
      expect(response.body.success).toBe(true);
      expect(response.body.token).toBeDefined();
    });
    
    it('should reject invalid credentials', async () => {
      const response = await api
        .post('/api/v1/auth/login')
        .send({ email: testUser.email, password: 'wrongpassword' })
        .expect(401);
      
      expect(response.body.success).toBe(false);
    });
  });
  
  describe('Verification', () => {
    let token: string;
    
    beforeAll(async () => {
      // Get a token for authenticated requests
      const response = await api
        .post('/api/v1/auth/login')
        .send({ email: 'test@example.com', password: 'testpassword123' });
      token = response.body.token;
    });
    
    it('should create a verification request', async () => {
      const response = await api
        .post('/api/v1/verify')
        .set('Authorization', `Bearer ${token}`)
        .send({
          domain: 'medical',
          aiOutput: 'Test AI output for verification',
        })
        .expect(201);
      
      expect(response.body.success).toBe(true);
      expect(response.body.requestId).toBeDefined();
      expect(response.body.status).toBe('pending');
    });
    
    it('should list user verifications', async () => {
      const response = await api
        .get('/api/v1/verify')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
      
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.requests)).toBe(true);
    });
  });
  
  describe('Health', () => {
    it('should return ok status', async () => {
      const response = await api.get('/health').expect(200);
      expect(response.body.status).toBe('ok');
    });
  });
});
