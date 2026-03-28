const express = require('express');
const router = express.Router();

// In-memory storage (use database in production)
let verifications = [];

// Get all verifications for a user
router.get('/', (req, res) => {
  res.json(verifications);
});

// Get single verification
router.get('/:id', (req, res) => {
  const verification = verifications.find(v => v.id === req.params.id);
  if (!verification) {
    return res.status(404).json({ message: 'Verification not found' });
  }
  res.json(verification);
});

// Delete verification
router.delete('/:id', (req, res) => {
  verifications = verifications.filter(v => v.id !== req.params.id);
  res.json({ message: 'Verification deleted' });
});

module.exports = router;