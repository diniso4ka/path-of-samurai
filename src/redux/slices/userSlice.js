import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
    checkIsAuth,
    fetchLogin,
    fetchLogout,
} from '../../utils/axios/requests'

export const checkAuthData = createAsyncThunk(
    'user/setAuthDataStatus',
    async () => {
        const data = await checkIsAuth().then(res => {
            if (res.resultCode === 0) {
                return res.data
            } else {
                return null
            }
        })
        return data
    }
)

export const loginAuth = createAsyncThunk(
    'user/loginAuthStatus',
    async user => {
        const res = await fetchLogin(user)
        return res.data
    }
)
export const logoutAuth = createAsyncThunk(
    'user/logoutAuthStatus',
    async () => {
        const res = await fetchLogout()
        return res.data
    }
)

const initialState = {
    user: null,
    status: 'loading',
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {},
    extraReducers: builder => {
        builder.addCase(checkAuthData.pending, (state, action) => {
            state.user = null
            state.status = 'loading'
        }),
            builder.addCase(checkAuthData.fulfilled, (state, action) => {
                state.user =
                    action.payload === null ? null : { ...action.payload }
                state.status = 'success'
            }),
            builder.addCase(checkAuthData.rejected, (state, action) => {
                state.user = null
                state.status = 'error'
            }),
            builder.addCase(loginAuth.pending, (state, action) => {
                state.user = null
                state.status = 'loading'
            }),
            builder.addCase(loginAuth.fulfilled, (state, action) => {
                state.status = 'success'
            }),
            builder.addCase(loginAuth.rejected, (state, action) => {
                state.user = null
                state.status = 'error'
            }),
            builder.addCase(logoutAuth.pending, (state, action) => {
                state.user = null
                state.status = 'loading'
            }),
            builder.addCase(logoutAuth.fulfilled, (state, action) => {
                state.status = 'success'
            }),
            builder.addCase(logoutAuth.rejected, (state, action) => {
                state.user = null
                state.status = 'error'
            })
    },
})

export const {} = userSlice.actions
export default userSlice.reducer
