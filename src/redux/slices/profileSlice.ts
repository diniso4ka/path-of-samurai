import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    fetchGetStatus,
    fetchSetPhoto,
    fetchSetStatus,
} from '../../utils/axios/requests'
import { IPost, IProfileStatus, Status } from './config/profileTypes'

export const getStatus = createAsyncThunk(
    'profile/getStatus',
    async (id: number) => {
        return await fetchGetStatus(id).then(res => res)
    }
)

export const setStatus = createAsyncThunk(
    'profile/setStatus',
    async (text: string) => {
        return await fetchSetStatus(text).then(res => res)
    }
)

export const setPhoto = createAsyncThunk(
    'profile/setPhotoStatus',
    async (formData: FormData) => {
        return await fetchSetPhoto(formData).then(res => res)
    }
)

interface IInitialState {
    posts: IPost[]
    newPostText: string
    status: Status
    profileStatus: IProfileStatus
}

const initialState: IInitialState = {
    posts: [
        {
            name: 'denis',
            avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg',
            message: 'Hello',
            id: 1,
        },
    ],
    newPostText: '',
    status: Status.LOADING,
    profileStatus: {
        status: Status.LOADING,
        statusText: 'Add new post',
    },
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateNewPostText: (state, action: PayloadAction<string>) => {
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
            state.profileStatus.status = Status.LOADING
        }),
            builder.addCase(getStatus.fulfilled, (state, action) => {
                state.profileStatus.statusText = action.payload
                state.profileStatus.status = Status.SUCCESS
            }),
            builder.addCase(getStatus.rejected, (state, action) => {
                state.profileStatus.statusText = ''
                state.profileStatus.status = Status.ERROR
            }),
            builder.addCase(setStatus.pending, (state, action) => {
                state.profileStatus.status = Status.LOADING
            }),
            builder.addCase(setStatus.fulfilled, (state, action) => {
                state.profileStatus.status = Status.SUCCESS
            }),
            builder.addCase(setStatus.rejected, (state, action) => {
                state.profileStatus.status = Status.ERROR
            }),
            builder.addCase(setPhoto.pending, (state, action) => {
                state.profileStatus.status = Status.LOADING
            }),
            builder.addCase(setPhoto.fulfilled, (state, action) => {
                console.log(action.payload)
                state.profileStatus.status = Status.SUCCESS
            }),
            builder.addCase(setPhoto.rejected, (state, action) => {
                state.profileStatus.status = Status.ERROR
            })
    },
})

export const { addNewPost, updateNewPostText } = profileSlice.actions
export default profileSlice.reducer
