import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPages, fetchUsers } from '../../utils/axios/requests'

export const fetchUsersList = createAsyncThunk(
    'users/fetchUsersStatus',
    async currentPage => {
        const data = await fetchUsers(currentPage).then(res => res)
        return data
    }
)

export const fetchTotalPages = createAsyncThunk(
    'users/fetchTotalPagesStatus',
    async currentPage => {
        const data = await fetchPages().then(res => res)
        return data
    }
)

const initialState = {
    users: [],
    currentPage: 1,
    totalPages: null,
    status: 'loading',
    user: {
        fullName: 'Denis',
        photos: {
            small: 'https://cdn.fishki.net/upload/post/2016/12/02/2153008/chihuahua-na-lugu.jpg',
            large: 'https://cdn.fishki.net/upload/post/2016/12/02/2153008/chihuahua-na-lugu.jpg',
        },
    },
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchUsersList.pending, (state, action) => {
            state.status = 'loading'
            state.loading = true
        }),
            builder.addCase(fetchUsersList.fulfilled, (state, action) => {
                state.users = [...action.payload]
                state.loading = false
                state.status = 'success'
            }),
            builder.addCase(fetchUsersList.rejected, (state, action) => {
                state.loading = true
                state.status = 'error'
            }),
            builder.addCase(fetchTotalPages.pending, (state, action) => {
                state.totalPages = null
                state.status = 'loading'
            }),
            builder.addCase(fetchTotalPages.fulfilled, (state, action) => {
                state.totalPages = action.payload
                state.status = 'success'
            }),
            builder.addCase(fetchTotalPages.rejected, (state, action) => {
                state.totalPages = null
                state.status = 'error'
            })
    },
})

export const { getCurrentPage } = usersSlice.actions
export default usersSlice.reducer
