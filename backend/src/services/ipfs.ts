import axios from 'axios';
import { logger } from '../utils/logger';

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_KEY = process.env.PINATA_SECRET_KEY;
const PINATA_BASE_URL = 'https://api.pinata.cloud';

interface PinataResponse {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
}

export async function uploadToIPFS(
  data: object | string
): Promise<string> {
  try {
    const payload = typeof data === 'string' 
      ? data 
      : JSON.stringify(data);

    const formData = new FormData();
    const blob = new Blob([payload], { type: 'application/json' });
    formData.append('file', blob, 'nverify-data.json');

    const response = await axios.post<PinataResponse>(
      `${PINATA_BASE_URL}/pinning/pinFileToIPFS`,
      formData,
      {
        headers: {
          'pinata_api_key': PINATA_API_KEY,
          'pinata_secret_api_key': PINATA_SECRET_KEY,
        },
      }
    );

    logger.info(`Uploaded to IPFS: ${response.data.IpfsHash}`);
    return response.data.IpfsHash;
  } catch (error) {
    logger.error('Failed to upload to IPFS:', error);
    throw new Error('IPFS upload failed');
  }
}

export async function fetchFromIPFS(ipfsHash: string): Promise<any> {
  try {
    // Using a public gateway
    const response = await axios.get(
      `https://gateway.pinata.cloud/ipfs/${ipfsHash}`,
      { timeout: 10000 }
    );
    return response.data;
  } catch (error) {
    logger.error(`Failed to fetch from IPFS ${ipfsHash}:`, error);
    throw new Error('IPFS fetch failed');
  }
}

export function getIPFSUrl(ipfsHash: string): string {
  return `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
}

// Merkle tree for certificate generation
export class MerkleTree {
  private leaves: string[];
  private tree: string[][];

  constructor(leaves: string[]) {
    this.leaves = leaves;
    this.tree = [leaves];
    this.build();
  }

  private build() {
    let level = this.leaves;
    while (level.length > 1) {
      const nextLevel: string[] = [];
      for (let i = 0; i < level.length; i += 2) {
        if (i + 1 < level.length) {
          // Sort to ensure deterministic ordering
          const sorted = [level[i], level[i + 1]].sort();
          nextLevel.push(this.hash(sorted.join('')));
        } else {
          nextLevel.push(level[i]);
        }
      }
      this.tree.push(nextLevel);
      level = nextLevel;
    }
  }

  private hash(data: string): string {
    // Simple hash for MVP - in production use proper cryptographic hash
    return '0x' + Buffer.from(data).toString('hex').padEnd(64, '0');
  }

  getRoot(): string {
    return this.tree[this.tree.length - 1][0];
  }

  getProof(index: number): string[] {
    const proof: string[] = [];
    for (let i = 0; i < this.tree.length - 1; i++) {
      const sibling = index % 2 === 0 ? index + 1 : index - 1;
      if (sibling < this.tree[i].length) {
        proof.push(this.tree[i][sibling]);
      }
      index = Math.floor(index / 2);
    }
    return proof;
  }
}

export function generateMerkleRoot(dataItems: string[]): string {
  const tree = new MerkleTree(dataItems);
  return tree.getRoot();
}
