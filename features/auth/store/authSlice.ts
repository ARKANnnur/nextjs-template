import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, LoginInput, User } from '../types';

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Mock async login thunk
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data: LoginInput, { rejectWithValue }) => {
    try {
      // Simulasi API delay selama 1.2 detik
      await new Promise((resolve) => setTimeout(resolve, 1200));

      if (data.email === 'admin@admin.com' && data.password === 'admin123') {
        const mockUser: User = {
          id: '1',
          name: 'Super Admin',
          email: data.email,
          role: 'Administrator',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&h=256&q=80',
        };
        return { user: mockUser, token: 'mock-jwt-token-xyz' };
      } else if (data.email === 'dev@antigravity.ai' && data.password === 'dev123') {
        const mockUser: User = {
          id: '2',
          name: 'Antigravity Developer',
          email: data.email,
          role: 'Lead Architect',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80',
        };
        return { user: mockUser, token: 'mock-jwt-token-abc' };
      } else {
        return rejectWithValue('Email atau password salah! (Tips: Gunakan dev@antigravity.ai / dev123)');
      }
    } catch (err: any) {
      return rejectWithValue(err.message || 'Terjadi kesalahan sistem');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;
    },
    clearError(state) {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
