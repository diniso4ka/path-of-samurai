import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dialogs: [
        {
            name: 'denis',
            avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg',
            message: 'Hello',
            id: 1,
        },
    ],
    messages: [{ name: 'denis', message: 'Hello', id: 1 }],
    newMessageText: '',
}

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        updateNewMessageText: (state, action) => {
            state.newMessageText = action.payload
        },
        sendMessage: (state, action) => {
            const newMessage = {
                id: state.messages.length,
                message: state.newMessageText,
                name: action.payload,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
        },
    },
})

export const { updateNewMessageText, sendMessage } = dialogsSlice.actions
export default dialogsSlice.reducer
