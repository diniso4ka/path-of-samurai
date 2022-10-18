import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    currentPage: 1,
    totalPages: null,
    loading: true,
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
        follow: (state, action) => ({
            ...state,
            users: state.users.map(user =>
                user.id === action.payload
                    ? {
                          ...user,
                          followed: true,
                      }
                    : user
            ),
        }),
        unfollow: (state, action) => ({
            ...state,
            users: state.users.map(user => {
                return user.id === action.payload
                    ? {
                          ...user,
                          followed: false,
                      }
                    : user
            }),
        }),
        getUsers: (state, action) => {
            return { ...state, users: action.payload, loading: false }
        },
        getCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        getTotalPages: (state, action) => {
            state.totalPages = action.payload
        },
        toggleLoading: (state, action) => {
            state.loading = action.payload
        },
    },
})

export const {
    follow,
    unfollow,
    getUsers,
    getCurrentPage,
    getTotalPages,
    toggleLoading,
} = usersSlice.actions
export default usersSlice.reducer
