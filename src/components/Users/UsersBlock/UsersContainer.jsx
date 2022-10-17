import React from 'react'
import { connect } from 'react-redux'
import { follow, getUsers, unfollow } from '../../../redux/slices/usersSlice'
import UsersBlock from './UsersBlock'




let mapStateToProps = (state) => {
   return {
      users: state.users.users
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(follow(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollow(userId))
      },
      getUsers: (users) => {
         dispatch(getUsers(users))
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersBlock)
