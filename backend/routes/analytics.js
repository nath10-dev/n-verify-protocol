// Analytics API
const express = require('express');
const router = express.Router();

// Get analytics overview
router.get('/overview', async (req, res) => {
  const period = req.query.period || '7d';
  
  res.json({
    period,
    totalVerifications: 1247,
    averageScore: 'B+',
    successRate: 94.2,
    domains: {
      medical: 423,
      legal: 389,
      financial: 435
    },
    trend: [
      { date: '2026-03-24', count: 156 },
      { date: '2026-03-25', count: 189 },
      { date: '2026-03-26', count: 201 },
      { date: '2026-03-27', count: 178 },
      { date: '2026-03-28', count: 215 },
      { date: '2026-03-29', count: 167 },
      { date: '2026-03-30', count: 141 }
    ]
  });
});

// Get domain breakdown
router.get('/domains', async (req, res) => {
  res.json({
    medical: { count: 423, percentage: 33.9 },
    legal: { count: 389, percentage: 31.2 },
    financial: { count: 435, percentage: 34.9 }
  });
});

// Get user analytics
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;
  
  res.json({
    userId,
    totalVerifications: 47,
    averageScore: 'B+',
    favoriteDomain: 'medical',
    thisMonth: 12
  });
});

module.exports = router;