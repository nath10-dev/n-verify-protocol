import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-9xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}