import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   dialogs: [
      { name: 'denis', avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg', message: 'Hello', id: 1 },
      { name: 'lesha', avatar: '', message: 'Hello i am shrek', id: 2 },
      { name: 'sava', avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg', message: 'No i am shrek', id: 3 },
      { name: 'jenya', avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg', message: 'Ouuououwh kirusma', id: 4 },
      { name: 'kolya', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/b24837b874a652f842b387fc40a65ce6/1920x1080', message: 'Hello no no no no', id: 5 },
   ],
   messages: [
      { name: 'denis', message: 'Hello', id: 1 },
      { name: 'lesha', message: 'Hello i am shrek', id: 2 },
      { name: 'sava', message: 'No i am shrek', id: 3 },
      { name: 'jenya', message: 'Ouuououwh kirusma', id: 4 },
      { name: 'kolya', message: 'Hello no no no no', id: 5 },
   ],
   newMessageText: '',
}

const dialogsSlice = createSlice({
   name: 'dialogs',
   initialState,
   reducers: {
      updateNewMessageText: (state, action) => {
         state.newMessageText = action.payload
      },
      sendMessage: (state) => {
         const newMessage = {
            id: state.messages.length,
            message: state.newMessageText,
            name: 'unknown'
         }
         state.messages.push(newMessage)
         state.newMessageText = ''
      }
   }
})

export const { updateNewMessageText, sendMessage } = dialogsSlice.actions
export default dialogsSlice.reducer
