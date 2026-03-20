# n-verify-protocol

> Decentralized AI verification layer

N-Verify Protocol provides cryptographic verification for AI reasoning chains.

## Install

```bash
npm install n-verify-protocol
```

## Usage

```javascript
import { NVerify } from 'n-verify-protocol';

const nverify = new NVerify({
  apiKey: process.env.NVERIFY_API_KEY,
});

// Verify AI output
const result = await nverify.verify({
  domain: 'medical',
  aiOutput: 'The patient presents with...',
});

console.log(result.certificateId);
```

## API

### verify(options)

Verifies AI output and returns a certificate.

**Options:**
- `domain` (required): 'medical' | 'legal' | 'financial'
- `aiOutput` (required): The AI output to verify

**Returns:**
- `certificateId`: Unique certificate identifier
- `reliabilityScore`: A+ to D rating
- `timestamp`: Verification timestamp

## License

MIT
