'use client';

import React, { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log target error to an error reporting service
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-sm flex flex-col items-center gap-6">
        
        {/* Error icon */}
        <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 flex items-center justify-center">
          <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Terjadi Kesalahan Sistem</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Aplikasi mengalami kesalahan yang tidak terduga. Silakan coba kembali atau hubungi administrator.
          </p>
          {error.digest && (
            <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mt-2">
              ID Error: {error.digest}
            </p>
          )}
        </div>

        <div className="flex gap-3 w-full">
          <button
            onClick={() => window.location.reload()}
            className="flex-1 px-4 py-2.5 text-sm font-semibold border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
          >
            Reload Halaman
          </button>
          <button
            onClick={() => reset()}
            className="flex-1 px-4 py-2.5 text-sm font-semibold bg-zinc-950 hover:bg-zinc-900 text-white dark:bg-zinc-50 dark:hover:bg-zinc-200 dark:text-zinc-950 rounded-lg transition"
          >
            Coba Lagi (Reset)
          </button>
        </div>
      </div>
    </div>
  );
}
