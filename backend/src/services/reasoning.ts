import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface ReasoningNode {
  id: string;
  type: 'factual_claim' | 'logical_inference' | 'conclusion';
  content: string;
  dependencies: string[];
  confidence: number;
}

export interface ReasoningGraph {
  nodes: ReasoningNode[];
  edges: { from: string; to: string; type: string }[];
}

// Domain-specific prompts
const DOMAIN_PROMPTS = {
  medical: `You are a medical AI verifier. Analyze the following AI output and extract:
1. Factual claims (medical facts, drug interactions, diagnoses)
2. Logical inferences (reasoning steps)
3. Conclusions (final diagnoses or recommendations)

For each claim, assess its accuracy based on medical literature.
Output a structured JSON with reasoning nodes.`,

  legal: `You are a legal AI verifier. Analyze the following AI output and extract:
1. Factual claims (legal facts, case citations, statutes)
2. Logical inferences (legal reasoning steps)
3. Conclusions (legal opinions or recommendations)

For each claim, assess its accuracy based on legal precedent.
Output a structured JSON with reasoning nodes.`,

  financial: `You are a financial AI verifier. Analyze the following AI output and extract:
1. Factual claims (financial data, market facts, numbers)
2. Logical inferences (financial reasoning steps)
3. Conclusions (investment recommendations, risk assessments)

For each claim, assess its accuracy based on financial data.
Output a structured JSON with reasoning nodes.`,
};

export async function extractReasoning(
  aiOutput: string,
  domain: 'medical' | 'legal' | 'financial'
): Promise<ReasoningGraph> {
  const prompt = DOMAIN_PROMPTS[domain];

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      {
        role: 'system',
        content: prompt,
      },
      {
        role: 'user',
        content: `Analyze this AI output:\n\n${aiOutput}`,
      },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.2,
  });

  const content = response.choices[0]?.message?.content;
  
  if (!content) {
    throw new Error('No response from OpenAI');
  }

  try {
    const parsed = JSON.parse(content);
    return {
      nodes: parsed.nodes || [],
      edges: parsed.edges || [],
    };
  } catch (error) {
    console.error('Failed to parse reasoning graph:', error);
    // Return a basic structure if parsing fails
    return {
      nodes: [
        {
          id: '1',
          type: 'conclusion' as const,
          content: aiOutput.substring(0, 200),
          dependencies: [],
          confidence: 0,
        },
      ],
      edges: [],
    };
  }
}

export async function verifyClaim(
  claim: string,
  domain: 'medical' | 'legal' | 'financial'
): Promise<{
  isValid: boolean;
  confidence: number;
  evidence: string[];
}> {
  const verificationPrompt = `Verify this ${domain} claim:
Claim: "${claim}"

Provide a JSON response with:
- isValid: boolean (is the claim accurate?)
- confidence: number (0-100)
- evidence: string[] (supporting or contradicting sources)`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [
      {
        role: 'system',
        content: `You are a ${domain} expert verifier. Evaluate claims accurately.`,
      },
      {
        role: 'user',
        content: verificationPrompt,
      },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.1,
  });

  const content = response.choices[0]?.message?.content;

  if (!content) {
    return {
      isValid: false,
      confidence: 0,
      evidence: ['No response from verifier'],
    };
  }

  try {
    const parsed = JSON.parse(content);
    return {
      isValid: parsed.isValid ?? false,
      confidence: parsed.confidence ?? 0,
      evidence: parsed.evidence ?? [],
    };
  } catch (error) {
    return {
      isValid: false,
      confidence: 0,
      evidence: ['Failed to parse verification'],
    };
  }
}
