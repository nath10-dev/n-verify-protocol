'use client';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-6xl mb-6">🚀</div>
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          This feature is under development. Stay tuned!
        </p>
        <a href="/" className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
          Go Home
        </a>
      </div>
    </div>
  );
}