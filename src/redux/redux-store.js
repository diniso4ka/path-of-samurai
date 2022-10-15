import { configureStore } from '@reduxjs/toolkit';
import dialogs from './slices/dialogsSlice';
import profile from './slices/profileSlice';
import users from './slices/usersSlice';

export const store = configureStore({
   reducer: {
      dialogs,
      profile,
      users,

   }
})

