import React from 'react'
import s from './AddPostBlock.module.css'

const AddPostBlock = ({ store }) => {
   const newPostElement = React.useRef()
   const state = store.getState()
   const createPost = () => {
      let text = newPostElement.current.value
      store.addPost(text)
   }
   const onPostChange = () => {
      let text = newPostElement.current.value
      store.updateNewPostText(text)
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