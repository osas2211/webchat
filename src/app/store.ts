import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { userReducer } from '../features/chatRoom.tsx/user'

export const store = configureStore({
  reducer: {
    user: userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
