import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { userReducer } from '../features/chatRoom.tsx/user'
import { chatRoomReducer } from '../features/chatRoom.tsx/chatRoomSlice';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    // chatRoom: chatRoomReducer
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
