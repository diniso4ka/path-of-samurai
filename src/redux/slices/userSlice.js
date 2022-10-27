import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { checkIsAuth, fetchLogin } from '../../utils/axios/requests'

export const checkAuthData = createAsyncThunk(
    'user/setAuthDataStatus',
    async () => {
        const data = await checkIsAuth().then(res => {
            if (res.resultCode === 0) {
                console.log(res)
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
        console.log(user, res)
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
                console.log(action.payload)
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
                console.log(action.payload)
                state.status = 'succes'
            }),
            builder.addCase(loginAuth.rejected, (state, action) => {
                state.user = null
                state.status = 'error'
            })
    },
})

export const {} = userSlice.actions
export default userSlice.reducer
