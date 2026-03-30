// Webhooks API for integrations
const express = require('express');
const router = express.Router();

let webhooks = [];

// Register webhook
router.post('/', async (req, res) => {
  try {
    const { url, events, secret } = req.body;
    
    if (!url) {
      return res.status(400).json({ error: 'url required' });
    }

    const webhook = {
      id: `wh_${Math.random().toString(36).substr(2, 9)}`,
      url,
      events: events || ['verification.completed'],
      secret: secret || `secret_${Math.random().toString(36).substr(2, 16)}`,
      createdAt: new Date().toISOString(),
      active: true
    };

    webhooks.push(webhook);
    res.status(201).json(webhook);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register webhook' });
  }
});

// List webhooks
router.get('/', async (req, res) => {
  res.json({ webhooks });
});

// Delete webhook
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  webhooks = webhooks.filter(w => w.id !== id);
  res.json({ message: 'Webhook deleted' });
});

// Test webhook
router.post('/:id/test', async (req, res) => {
  const { id } = req.params;
  const webhook = webhooks.find(w => w.id === id);
  
  if (!webhook) {
    return res.status(404).json({ error: 'Webhook not found' });
  }

  // In production, would send test request to webhook URL
  res.json({ message: 'Test event sent', webhookId: id });
});

module.exports = router;