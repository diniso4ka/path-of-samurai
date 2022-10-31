import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    checkIsAuth,
    fetchLogin,
    fetchLogout,
} from '../../utils/axios/requests'
import { IAuthData, IUser, IUserData, Status } from './config/userTypes'

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
        console.log(res)
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

interface IInitialState {
    user: null | IUserData
    status: Status
    validError: string
}

const initialState: IInitialState = {
    user: null,
    status: Status.LOADING,
    validError: '',
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {},
    extraReducers: builder => {
        builder.addCase(checkAuthData.pending, (state, action) => {
            state.user = null
            state.status = Status.LOADING
        }),
            builder.addCase(
                checkAuthData.fulfilled,
                (state, action: PayloadAction<IUserData>) => {
                    state.user =
                        action.payload === null ? null : { ...action.payload }
                    state.status = Status.SUCCESS
                }
            ),
            builder.addCase(checkAuthData.rejected, (state, action) => {
                state.user = null
                state.status = Status.ERROR
            }),
            builder.addCase(loginAuth.pending, (state, action) => {
                state.user = null
                state.status = Status.LOADING
            }),
            builder.addCase(
                loginAuth.fulfilled,
                (state, action: PayloadAction<IAuthData>) => {
                    if (action.payload.resultCode === 1) {
                        state.validError = action.payload.messages
                    } else {
                        state.validError = ''
                    }
                    state.status = Status.SUCCESS
                }
            ),
            builder.addCase(loginAuth.rejected, (state, action) => {
                state.user = null
                state.status = Status.ERROR
            }),
            builder.addCase(logoutAuth.pending, (state, action) => {
                state.user = null
                state.status = Status.LOADING
            }),
            builder.addCase(logoutAuth.fulfilled, (state, action) => {
                state.status = Status.SUCCESS
            }),
            builder.addCase(logoutAuth.rejected, (state, action) => {
                state.user = null
                state.status = Status.ERROR
            })
    },
})

export const {} = userSlice.actions
export default userSlice.reducer
