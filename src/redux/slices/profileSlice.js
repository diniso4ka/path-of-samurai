import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchGetStatus, fetchSetStatus } from '../../utils/axios/requests'

export const getStatus = createAsyncThunk('profile/getStatus', async id => {
    return await fetchGetStatus(id).then(res => res)
})

export const setStatus = createAsyncThunk('profile/setStatus', async text => {
    return await fetchSetStatus(text).then(res => res)
})

const initialState = {
    posts: [
        {
            name: 'denis',
            avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg',
            message: 'Hello',
            id: 1,
        },
        { name: 'lesha', avatar: '', message: 'Hello i am shrek', id: 2 },
        {
            name: 'sava',
            avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg',
            message: 'No i am shrek',
            id: 3,
        },
        {
            name: 'jenya',
            avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg',
            message: 'Ouuououwh kirusma',
            id: 4,
        },
        {
            name: 'kolya',
            avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/b24837b874a652f842b387fc40a65ce6/1920x1080',
            message: 'Hello no no no no',
            id: 5,
        },
    ],
    newPostText: '',
    status: 'loading',
    profileStatus: {
        status: 'loading',
        statusText: 'Add new post',
    },
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateNewPostText: (state, action) => {
            state.newPostText = action.payload
        },
        addNewPost: state => {
            const newPost = {
                id: state.posts.length,
                message: state.newPostText,
                avatar: '',
                name: 'unknown',
            }
            state.posts.push(newPost)
            state.newPostText = ''
        },
    },
    extraReducers: builder => {
        builder.addCase(getStatus.pending, (state, action) => {
            state.profileStatus.statusText = ''
            state.profileStatus.status = 'loading'
        }),
            builder.addCase(getStatus.fulfilled, (state, action) => {
                state.profileStatus.statusText = action.payload
                state.profileStatus.status = 'success'
                console.log(state.profileStatus.statusText)
            }),
            builder.addCase(getStatus.rejected, (state, action) => {
                state.profileStatus.statusText = ''
                state.profileStatus.status = 'error'
            }),
            builder.addCase(setStatus.pending, (state, action) => {
                state.profileStatus.status = 'loading'
            }),
            builder.addCase(setStatus.fulfilled, (state, action) => {
                state.profileStatus.status = 'success'
                console.log(action.payload)
            }),
            builder.addCase(setStatus.rejected, (state, action) => {
                state.profileStatus.status = 'error'
            })
    },
})

export const { addNewPost, updateNewPostText } = profileSlice.actions
export default profileSlice.reducer
