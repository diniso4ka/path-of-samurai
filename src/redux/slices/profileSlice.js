import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
    fetchGetStatus,
    fetchSetPhoto,
    fetchSetStatus,
} from '../../utils/axios/requests'

export const getStatus = createAsyncThunk('profile/getStatus', async id => {
    return await fetchGetStatus(id).then(res => res)
})

export const setStatus = createAsyncThunk('profile/setStatus', async text => {
    return await fetchSetStatus(text).then(res => res)
})

export const setPhoto = createAsyncThunk(
    'profile/setPhotoStatus',
    async formData => {
        console.log(formData)

        return await fetchSetPhoto(formData).then(res => res)
    }
)

const initialState = {
    posts: [
        {
            name: 'denis',
            avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg',
            message: 'Hello',
            id: 1,
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
            }),
            builder.addCase(setStatus.rejected, (state, action) => {
                state.profileStatus.status = 'error'
            }),
            builder.addCase(setPhoto.pending, (state, action) => {
                state.profileStatus.status = 'loading'
            }),
            builder.addCase(setPhoto.fulfilled, (state, action) => {
                console.log(action.payload)
                state.profileStatus.status = 'success'
            }),
            builder.addCase(setPhoto.rejected, (state, action) => {
                state.profileStatus.status = 'error'
            })
    },
})

export const { addNewPost, updateNewPostText } = profileSlice.actions
export default profileSlice.reducer
