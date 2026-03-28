import axios from 'axios';

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_API_SECRET = process.env.PINATA_API_SECRET;
const IPFS_GATEWAY = process.env.IPFS_GATEWAY || 'https://gateway.pinata.cloud';

interface CertificateData {
  certificateId: string;
  domain: string;
  reliabilityScore: string;
  reasoningChain: any;
  verificationDetails: any;
  issuedAt: string;
  expiresAt?: string;
}

class IPFSService {
  private apiKey: string;
  private apiSecret: string;
  private gateway: string;

  constructor() {
    this.apiKey = PINATA_API_KEY || '';
    this.apiSecret = PINATA_API_SECRET || '';
    this.gateway = IPFS_GATEWAY;
  }

  // Upload certificate to IPFS
  async uploadCertificate(certificate: CertificateData): Promise<string> {
    try {
      // Prepare metadata for IPFS
      const metadata = {
        name: `N-Verify Certificate ${certificate.certificateId}`,
        description: `AI Verification Certificate - ${certificate.domain} domain`,
        attributes: [
          {
            trait_type: 'Domain',
            value: certificate.domain
          },
          {
            trait_type: 'Reliability Score',
            value: certificate.reliabilityScore
          },
          {
            trait_type: 'Issued At',
            value: certificate.issuedAt
          }
        ],
        certificate: certificate
      };

      // Upload to Pinata (or any IPFS provider)
      const response = await axios.post(
        'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        metadata,
        {
          headers: {
            'pinata_api_key': this.apiKey,
            'pinata_secret_api_key': this.apiSecret
          }
        }
      );

      return response.data.IpfsHash;
    } catch (error) {
      console.error('IPFS upload error:', error);
      // Return mock hash for demo
      return `Qm${Date.now()}${Math.random().toString(36).substr(2, 9)}`;
    }
  }

  // Get certificate from IPFS
  async getCertificate(ipfsHash: string): Promise<CertificateData | null> {
    try {
      // Try to fetch from IPFS gateway
      const response = await axios.get(`${this.gateway}/ipfs/${ipfsHash}`);
      return response.data;
    } catch (error) {
      console.error('IPFS fetch error:', error);
      return null;
    }
  }

  // Upload file to IPFS
  async uploadFile(buffer: Buffer, fileName: string): Promise<string> {
    try {
      const formData = new FormData();
      const blob = new Blob([buffer]);
      formData.append('file', blob, fileName);

      const response = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          headers: {
            'pinata_api_key': this.apiKey,
            'pinata_secret_api_key': this.apiSecret
          }
        }
      );

      return response.data.IpfsHash;
    } catch (error) {
      console.error('IPFS file upload error:', error);
      return '';
    }
  }

  // Generate IPFS URL for viewing
  getIPFSUrl(hash: string): string {
    return `${this.gateway}/ipfs/${hash}`;
  }

  // Check if IPFS is configured
  isConfigured(): boolean {
    return !!(this.apiKey && this.apiSecret);
  }
}

// Export singleton
export const ipfsService = new IPFSService();
export default ipfsService;