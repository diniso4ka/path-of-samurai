import { configureStore } from '@reduxjs/toolkit';
import dialogs from './slices/dialogsSlice';
import profile from './slices/profileSlice';

export const store = configureStore({
   reducer: {
      dialogs,
      profile,
      // sidebarSlice,
   }
})

