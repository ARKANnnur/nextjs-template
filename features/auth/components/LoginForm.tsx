'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginInput } from '../types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { loginUser, logout, clearError } from '../store/authSlice';

export function LoginForm() {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Bersihkan error auth saat form unmount
  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const onSubmit = (data: LoginInput) => {
    dispatch(loginUser(data));
  };

  const handleLogout = () => {
    dispatch(logout());
    reset();
  };

  if (user) {
    return (
      <div className="p-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 rounded-2xl text-center flex flex-col items-center gap-2">
        <p className="text-emerald-600 dark:text-emerald-400 font-medium">🎉 Login Berhasil! (State: Redux)</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Selamat datang kembali, <strong>{user.name}</strong>!
        </p>
        <button 
          onClick={handleLogout}
          className="mt-4 px-4 py-2.5 text-xs font-semibold bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-lg hover:opacity-90 transition w-full max-w-[120px]"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl shadow-sm">
      <div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Sign In (Auth Feature Example)</h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Menggunakan react-hook-form + Zod + Redux Toolkit
        </p>
      </div>

      {error && (
        <div className="p-3.5 text-xs bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 text-red-600 dark:text-red-400 rounded-lg">
          {error}
        </div>
      )}

      {/* Email Input */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          {...register('email')}
          className={`px-3.5 py-2.5 text-sm bg-zinc-50 dark:bg-zinc-900/50 border rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.email 
              ? 'border-red-300 focus:ring-red-500/30 dark:border-red-800' 
              : 'border-zinc-200 focus:ring-black dark:focus:ring-white dark:border-zinc-800'
          }`}
        />
        {errors.email && (
          <span className="text-[11px] text-red-500 font-medium">{errors.email.message}</span>
        )}
      </div>

      {/* Password Input */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          {...register('password')}
          className={`px-3.5 py-2.5 text-sm bg-zinc-50 dark:bg-zinc-900/50 border rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.password 
              ? 'border-red-300 focus:ring-red-500/30 dark:border-red-800' 
              : 'border-zinc-200 focus:ring-black dark:focus:ring-white dark:border-zinc-800'
          }`}
        />
        {errors.password && (
          <span className="text-[11px] text-red-500 font-medium">{errors.password.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 py-2.5 text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-950 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
            Signing in...
          </>
        ) : 'Sign In'}
      </button>

      <div className="mt-2 text-center">
        <p className="text-[10px] text-zinc-400">
          Uji coba dengan: <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded font-mono">user@example.com</code> dan pass: <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded font-mono">user123</code>
        </p>
      </div>
    </form>
  );
}
