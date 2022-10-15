import React from 'react'
import s from './AddPostBlock.module.css'

const AddPostBlock = ({ createPost, onPostChange, newPostText }) => {
   const newPostElement = React.useRef()

   return (
      <section className={s.wrapper}>
         <input
            ref={newPostElement}
            value={newPostText}
            onChange={() => onPostChange(newPostElement.current.value)}
            type='text' />
         <button onClick={createPost}>send</button>
      </section>
   )
}

export default AddPostBlock