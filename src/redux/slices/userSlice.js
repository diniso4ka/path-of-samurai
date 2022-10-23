import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { checkIsAuth } from '../../utils/axios/requests'

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
                state.user = { ...action.payload }
                state.status = 'success'
            }),
            builder.addCase(checkAuthData.rejected, (state, action) => {
                state.user = null
                state.status = 'error'
            })
    },
})

export const {} = userSlice.actions
export default userSlice.reducer
