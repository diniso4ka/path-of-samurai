import { configureStore } from '@reduxjs/toolkit'
import dialogs from './slices/dialogsSlice'
import profile from './slices/profileSlice'
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
