'use client';

import React from 'react';
import { useAppSelector } from '@/hooks/redux';

export function UserProfile() {
  // Ambil state user langsung dari Redux store (Auth slice)
  const { user } = useAppSelector((state) => state.auth);

  if (!user) {
    return (
      <div className="p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl shadow-sm flex flex-col items-center justify-center min-h-[268px] text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
          <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 text-sm">Profil Terkunci</h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-[240px] leading-relaxed">
            Silakan sign in menggunakan form di sebelah kiri untuk menampilkan data profil Anda.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl shadow-sm flex flex-col justify-between min-h-[268px]">
      <div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">User Profile (Users Feature Example)</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Dihubungkan ke state Redux Auth (Vertical Slice integration)
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">{user.name}</h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{user.role}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-900">
        <div className="flex justify-between text-sm">
          <span className="text-zinc-500">Email</span>
          <span className="font-medium text-zinc-900 dark:text-zinc-100">{user.email}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-zinc-500">ID User</span>
          <span className="font-medium text-zinc-900 dark:text-zinc-100">#{user.id}</span>
        </div>
        <div className="flex justify-between text-sm items-center">
          <span className="text-zinc-500">Redux Status</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 font-semibold font-mono">
            PERSISTED + ENCRYPTED
          </span>
        </div>
      </div>
    </div>
  );
}
