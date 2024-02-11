import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setAccessToken } from '../../services/cookie.service';
import { RootState } from '../store';

type AuthResponse = {
  access_token: string;
  user: {
    full_name: string;
    phone_number: string;
    last_login_at: string;
  };
};

type AuthState = AuthResponse & {
  error: string | null;
};

const initialState = {
  access_token: '',
  error: null,
} as AuthState;

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthResponse>) => {
      setAccessToken(action.payload.access_token);
      state.access_token = action.payload.access_token;
      state.user = action.payload.user;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setAuth, setError } = auth.actions;

export const selectAccessToken = (state: RootState) => state.authReducer.access_token;
export const selectUser = (state: RootState) => state.authReducer.user;
export const selectError = (state: RootState) => state.authReducer.error;

export default auth.reducer;
