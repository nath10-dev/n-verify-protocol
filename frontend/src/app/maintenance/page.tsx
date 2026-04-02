'use client';

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-6xl mb-6">🔧</div>
        <h1 className="text-3xl font-bold mb-4">Scheduled Maintenance</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          We're performing scheduled maintenance. We'll be back shortly.
        </p>
        <div className="text-sm text-gray-500">
          Expected completion: 30 minutes
        </div>
      </div>
    </div>
  );
}