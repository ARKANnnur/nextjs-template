import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Format email tidak valid'),
  password: z.string().min(6, 'Password minimal harus 6 karakter'),
});

export type LoginInput = z.infer<typeof loginSchema>;

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}
