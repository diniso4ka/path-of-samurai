import React from 'react'
import s from './AddPostBlock.module.css'

const AddPostBlock = ({ addPost, data, updateNewPostText }) => {
   const newPostElement = React.useRef()
   const createPost = () => {
      let text = newPostElement.current.value
      addPost(text)
   }
   const onPostChange = () => {
      let text = newPostElement.current.value
      updateNewPostText(text)
   }
   return (
      <section className={s.wrapper}>
         <input
            ref={newPostElement}
            value={data.newPostText}
            onChange={onPostChange}
            type='text' />
         <button onClick={createPost}>send</button>
      </section>
   )
}

export default AddPostBlock