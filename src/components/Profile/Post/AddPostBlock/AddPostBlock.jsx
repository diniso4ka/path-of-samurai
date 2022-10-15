import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPost, updateNewPostText } from '../../../../redux/slices/profileSlice'
import s from './AddPostBlock.module.css'

const AddPostBlock = () => {
   const { newPostText } = useSelector((state) => state.profile)
   const dispatch = useDispatch()
   const newPostElement = React.useRef()
   const createPost = () => {
      dispatch(addNewPost())
   }
   const onPostChange = () => {
      let text = newPostElement.current.value
      console.log(newPostText);
      dispatch(updateNewPostText(text))
   }
   return (
      <section className={s.wrapper}>
         <input
            ref={newPostElement}
            value={newPostText}
            onChange={onPostChange}
            type='text' />
         <button onClick={createPost}>send</button>
      </section>
   )
}

export default AddPostBlock