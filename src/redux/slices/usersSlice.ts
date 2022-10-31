import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPages, fetchUsers } from '../../utils/axios/requests'
import { IUserData, Status } from './config/usersTypes'

export const fetchUsersList = createAsyncThunk(
    'users/fetchUsersStatus',
    async currentPage => {
        const data = await fetchUsers(currentPage).then(res => res)
        return data
    }
)

export const fetchTotalPages = createAsyncThunk(
    'users/fetchTotalPagesStatus',
    async () => {
        const data = await fetchPages().then(res => res)
        return data
    }
)

interface IInitialState {
    users: IUserData[]
    currentPage: number
    totalPages: number | null
    status: Status
}

const initialState: IInitialState = {
    users: [],
    currentPage: 1,
    totalPages: null,
    status: Status.LOADING,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchUsersList.pending, (state, action) => {
            Status.LOADING
        }),
            builder.addCase(
                fetchUsersList.fulfilled,
                (state, action: PayloadAction<IUserData[]>) => {
                    state.users = [...action.payload]
                    state.status = Status.SUCCESS
                }
            ),
            builder.addCase(fetchUsersList.rejected, (state, action) => {
                state.status = Status.ERROR
            }),
            builder.addCase(fetchTotalPages.pending, (state, action) => {
                state.totalPages = null
                state.status = Status.LOADING
            }),
            builder.addCase(
                fetchTotalPages.fulfilled,
                (state, action: PayloadAction<number>) => {
                    state.totalPages = action.payload
                    state.status = Status.SUCCESS
                }
            ),
            builder.addCase(fetchTotalPages.rejected, (state, action) => {
                state.totalPages = null
                state.status = Status.ERROR
            })
    },
})

export const { getCurrentPage } = usersSlice.actions
export default usersSlice.reducer
