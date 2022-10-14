import dialogsReducer from './reducers/dialogsReducer'
import profileReducer from './reducers/profileReducer'
import sidebarReducer from './reducers/sidebarReducer'

export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const ADD_POST = 'ADD-POST'



const store = {
   _state: {
      profilePage: {
         posts: [
            { name: 'denis', avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg', message: 'Hello', id: 1 },
            { name: 'lesha', avatar: '', message: 'Hello i am shrek', id: 2 },
            { name: 'sava', avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg', message: 'No i am shrek', id: 3 },
            { name: 'jenya', avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg', message: 'Ouuououwh kirusma', id: 4 },
            { name: 'kolya', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/b24837b874a652f842b387fc40a65ce6/1920x1080', message: 'Hello no no no no', id: 5 },
         ],
         newPostText: ''
      },
      dialogsPage: {
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
      },
      sidebarPage: {

      }
   },


   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer
   },
   _callSubscriber() {
      console.log('State changed')
   },


   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
      this._callSubscriber(this._state)
   }
}


export const addPostCreator = () => (
   { type: ADD_POST }
)
export const updateNewPostTextCreator = (text) => (
   { type: UPDATE_NEW_POST_TEXT, text }
)
export const sendMessageCreator = () => (
   { type: SEND_MESSAGE }
)
export const updateNewMessageTextCreator = (text) => (
   { type: UPDATE_NEW_MESSAGE_TEXT, text }
)




window.state = store.getStatestate

export default store
