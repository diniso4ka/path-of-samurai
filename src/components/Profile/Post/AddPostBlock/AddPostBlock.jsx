import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { addPostCreator, updateNewPostTextCreator } from '../../../../redux/store'
import s from './AddPostBlock.module.css'

const AddPostBlock = ({ store }) => {
   const newPostElement = React.useRef()
   const state = store.getState()
   const createPost = () => {
      store.dispatch(addPostCreator())
   }
   const onPostChange = () => {
      let text = newPostElement.current.value
      store.dispatch(updateNewPostTextCreator(text))
   }
   return (
      <section className={s.wrapper}>
         <input
            ref={newPostElement}
            value={state.profilePage.newPostText}
            onChange={onPostChange}
            type='text' />
         <button onClick={createPost}>send</button>
      </section>
   )
}

export default AddPostBlock