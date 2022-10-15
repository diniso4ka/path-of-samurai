import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPost, updateNewPostText } from '../../../../redux/slices/profileSlice'
import AddPostBlock from './AddPostBlock'

const AddPostContainer = () => {
   const { newPostText } = useSelector((state) => state.profile)
   const dispatch = useDispatch()
   const createPost = () => {
      dispatch(addNewPost())
   }
   const onPostChange = (text) => {
      dispatch(updateNewPostText(text))
   }
   return (
      <AddPostBlock createPost={createPost} onPostChange={onPostChange} newPostText={newPostText} />
   )
}

export default AddPostContainer