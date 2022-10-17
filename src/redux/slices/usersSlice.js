import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   users: []
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
         console.log(action.payload)
         return { ...state, users: [...state.users, ...action.payload]  }
      },

   }
})

export const { follow, unfollow, getUsers } = usersSlice.actions
export default usersSlice.reducer
