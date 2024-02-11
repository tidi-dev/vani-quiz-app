import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import answerReducer from './features/answerSlice';
import authReducer from './features/authSlice';
import counterReducer from './features/counterSlice';
import { api } from './services/userApi';

export const store = configureStore({
  reducer: {
    counterReducer,
    answerReducer,
    authReducer,
    [api.reducerPath]: api.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([api.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
