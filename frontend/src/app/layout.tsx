import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'N-Verify Protocol - AI Verification',
  description: 'Cryptographic verification for AI reasoning chains',
  keywords: ['AI', 'verification', 'blockchain', 'cryptographic', 'medical', 'legal', 'financial'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">{children}</body>
    </html>
  );
}
