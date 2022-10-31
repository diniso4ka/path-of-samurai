import { configureStore } from '@reduxjs/toolkit'

import profile from './slices/profileSlice'
import dialogs from './slices/dialogsSlice'
import users from './slices/usersSlice'
import user from './slices/userSlice'

export const store = configureStore({
    reducer: {
        dialogs,
        profile,
        users,
        user,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
