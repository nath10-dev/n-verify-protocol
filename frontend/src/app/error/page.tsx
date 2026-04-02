'use client';

export default function Error500() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-9xl font-bold text-red-500 mb-4">500</div>
        <h1 className="text-3xl font-bold mb-4">Server Error</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          Something went wrong on our end. We're working to fix it.
        </p>
        <a href="/" className="px-6 py-3 bg-sky-500 text-black font-medium rounded-xl hover:bg-sky-400">
          Go Home
        </a>
      </div>
    </div>
  );
}