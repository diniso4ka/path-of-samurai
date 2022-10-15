import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   users: [
      { id: 1, fullName: 'denis', avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg', status: 'Hello', followed: false },
      { id: 2, fullName: 'sava', avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg', status: 'Hello im too', followed: false },
      { id: 3, fullName: 'jena', avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg', status: 'holanegro', followed: false },
      { id: 4, fullName: 'gosha', avatar: 'https://www.kino-teatr.ru/news/9262/92315.jpg', status: 'ohohohooh', followed: false },

   ]
}

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      follow: (state, action) =>
      ({
         ...state,
         users: state.users.map((user) => (
            user.id === action.payload ?
               {
                  ...user,
                  followed: true
               } : user
         )
         )
      })
      ,
      unfollow: (state, action) => ({
         ...state,
         users: state.users.map((user) => {
            return user.id === action.payload ?
               {
                  ...user,
                  followed: false
               } : user
         })
      }),
      getUsers: (state, action) => {
         return { ...state, users: [...state.users, action.payload.users] }
      }
   }
})

export const { follow, unfollow, getUsers } = usersSlice.actions
export default usersSlice.reducer
