let rerenderEntireTree = () => {
}


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
      ]
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

   addPost(text) {
      const newPost = {
         id: this._state.profilePage.posts.length,
         message: text,
         avatar: '',
         name: 'unknown'
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
   },
   updateNewPostText(text) {
      this._state.profilePage.newPostText = text
      this._callSubscriber(this._state)
   },

   dispatch(action) {
      if (action.type === 'ADD-POST') {
         const newPost = {
            id: this._state.profilePage.posts.length,
            message: action.text,
            avatar: '',
            name: 'unknown'
         }
         this._state.profilePage.posts.push(newPost)
         this._state.profilePage.newPostText = ''
         this._callSubscriber(this._state)
      } else if (action.type == 'UPDATE-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.text
         this._callSubscriber(this._state)
      }
   }
}



window.state = store.getStatestate

export default store
