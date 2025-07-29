"use client";

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  // Log error to console for debugging
  useEffect(() => {
    console.error('Error captured by error boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-white/80 dark:bg-gray-900/80">
      <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-400">Something went wrong!</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300 max-w-xl">{error.message || 'Unexpected error.'}</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
