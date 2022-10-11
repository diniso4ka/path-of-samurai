let rerenderEntireTree = () => {

}

let state = {
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
}

export const addPost = (text) => {
   const newPost = {
      id: state.profilePage.posts.length,
      message: text,
      avatar: '',
      name: 'unknown'
   }
   state.profilePage.posts.push(newPost)
   state.profilePage.newPostText = ''
   rerenderEntireTree(state)
}

export const updateNewPostText = (text) => {
   state.profilePage.newPostText = text
   rerenderEntireTree(state)
}

export const subscribe = (observer) => {
   rerenderEntireTree = observer
}

window.state = state

export default state
