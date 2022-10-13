import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/store'
import s from './AddPostBlock.module.css'

const AddPostBlock = ({ store }) => {
   const newPostElement = React.useRef()
   const state = store.getState()
   const createPost = () => {
      store.dispatch(addPostActionCreator())
   }
   const onPostChange = () => {
      let text = newPostElement.current.value
      console.log(updateNewPostTextActionCreator(text))
      store.dispatch(updateNewPostTextActionCreator(text))
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