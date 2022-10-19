import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        login: null,
        email: null,
        id: null,
    },
    isAuth: false,
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        saveAuth(state, action) {
            state.isAuth = true
            state.user = { ...action.payload }
        },
    },
})

export const { saveAuth } = userSlice.actions
export default userSlice.reducer
