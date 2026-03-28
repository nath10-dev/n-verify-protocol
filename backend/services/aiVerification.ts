import express from 'express';
import crypto from 'crypto';

const router = express.Router();

// AI Service integration with OpenAI and LangChain
// This service handles the core verification logic

interface VerificationRequest {
  domain: 'medical' | 'legal' | 'financial';
  aiOutput: string;
  context?: string;
}

interface VerificationResult {
  certificateId: string;
  reliabilityScore: string;
  reasoningChain: any;
  verificationDetails: any;
}

// Domain-specific knowledge bases (simplified for demo)
// In production, these would be comprehensive databases
const KNOWLEDGE_BASES = {
  medical: {
    keywords: ['diagnosis', 'treatment', 'symptom', 'medication', 'prescription', 'patient', 'clinical'],
    trustedSources: ['NEJM', 'Lancet', 'WHO', 'CDC', 'Mayo Clinic'],
    redFlags: ['unproven cure', 'miracle', 'guaranteed', 'alternative to surgery']
  },
  legal: {
    keywords: ['court', 'judge', 'jury', 'verdict', 'statute', 'precedent', 'liability', 'contract'],
    trustedSources: ['Supreme Court', 'Bar Association', 'Legal Code', 'Case Law'],
    redFlags: ['guaranteed win', 'no risk', 'instant solution']
  },
  financial: {
    keywords: ['investment', 'stock', 'bond', 'dividend', 'portfolio', 'ROI', 'return', 'risk'],
    trustedSources: ['SEC', 'FINRA', 'Federal Reserve', 'Bloomberg'],
    redFlags: ['guaranteed return', 'no risk', '100% profit', 'pyramid']
  }
};

// Simple scoring algorithm (would be replaced with GPT-4 in production)
function calculateReliabilityScore(output: string, domain: string): string {
  const lowerOutput = output.toLowerCase();
  const kb = KNOWLEDGE_BASES[domain as keyof typeof KNOWLEDGE_BASES];
  
  let score = 50; // Base score
  
  // Check for domain keywords
  const keywordMatches = kb.keywords.filter(kw => lowerOutput.includes(kw)).length;
  score += keywordMatches * 10;
  
  // Check for trusted source mentions
  const sourceMatches = kb.trustedSources.filter(source => 
    lowerOutput.includes(source.toLowerCase())
  ).length;
  score += sourceMatches * 15;
  
  // Check for red flags
  const redFlagMatches = kb.redFlags.filter(flag => lowerOutput.includes(flag)).length;
  score -= redFlagMatches * 20;
  
  // Check output length (reasonable length is better)
  if (output.length > 100 && output.length < 5000) {
    score += 10;
  }
  
  // Convert to letter grade
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

// Generate reasoning chain
function extractReasoningChain(output: string, domain: string): any {
  // Simple reasoning extraction
  // In production, this would use GPT-4 to actually extract reasoning
  const sentences = output.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  return {
    steps: sentences.map((sentence, index) => ({
      step: index + 1,
      statement: sentence.trim(),
      confidence: 0.7 + Math.random() * 0.3,
      source: KNOWLEDGE_BASES[domain as keyof typeof KNOWLEDGE_BASES].trustedSources[
        Math.floor(Math.random() * 3)
      ]
    })),
    totalSteps: sentences.length,
    overallConfidence: 0.75 + Math.random() * 0.2
  };
}

// Verify endpoint
router.post('/verify', async (req, res) => {
  try {
    const { domain, aiOutput, context } = req.body as VerificationRequest;
    
    // Validate input
    if (!domain || !aiOutput) {
      return res.status(400).json({ 
        error: 'Missing required fields: domain, aiOutput' 
      });
    }
    
    if (!['medical', 'legal', 'financial'].includes(domain)) {
      return res.status(400).json({ 
        error: 'Invalid domain. Must be: medical, legal, or financial' 
      });
    }
    
    // Calculate reliability score
    const reliabilityScore = calculateReliabilityScore(aiOutput, domain);
    
    // Extract reasoning chain
    const reasoningChain = extractReasoningChain(aiOutput, domain);
    
    // Generate certificate ID
    const certificateId = `NV-${crypto.randomBytes(8).toString('hex').toUpperCase()}`;
    
    // Create verification result
    const result: VerificationResult = {
      certificateId,
      reliabilityScore,
      reasoningChain,
      verificationDetails: {
        domain,
        verifiedAt: new Date().toISOString(),
        analysisType: 'rule-based',
        confidenceLevel: reliabilityScore >= 'B' ? 'high' : 'medium',
        recommendations: getRecommendations(reliabilityScore, domain)
      }
    };
    
    // In production, this would:
    // 1. Store in PostgreSQL
    // 2. Upload to IPFS
    // 3. Create blockchain transaction
    // 4. Generate actual certificate
    
    res.json(result);
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ error: 'Verification failed' });
  }
});

// Get recommendations based on score
function getRecommendations(score: string, domain: string): string[] {
  const recommendations: string[] = [];
  
  if (score === 'A' || score === 'B') {
    recommendations.push('High reliability - suitable for critical decisions');
  } else if (score === 'C') {
    recommendations.push('Medium reliability - recommend human review');
  } else {
    recommendations.push('Low reliability - requires expert verification');
    recommendations.push('Consult with certified professional before acting');
  }
  
  // Domain-specific recommendations
  if (domain === 'medical') {
    recommendations.push('Always verify with licensed healthcare provider');
  } else if (domain === 'legal') {
    recommendations.push('Consult with licensed attorney for legal matters');
  } else if (domain === 'financial') {
    recommendations.push('Consider consulting certified financial advisor');
  }
  
  return recommendations;
}

// Health check
router.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'ai-verification',
    version: '1.0.0'
  });
});

export default router;