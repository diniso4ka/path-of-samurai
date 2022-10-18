import React from 'react'
import { connect } from 'react-redux'
import {follow, getTotalPages,getCurrentPage, getUsers, unfollow} from '../../../redux/slices/usersSlice'
import UsersBlock from './UsersBlock'




let mapStateToProps = (state) => {
   return {
      users: state.users.users,
      totalPages: state.users.totalPages,
      currentPage: state.users.currentPage,
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
      getCurrentPage:(curPage)=>{
         dispatch(getCurrentPage(curPage))
      },
      getTotalPages:(totalPages)=>{
         dispatch(getTotalPages(totalPages))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersBlock)
