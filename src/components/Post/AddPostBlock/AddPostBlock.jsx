import React from 'react'
import s from './AddPostBlock.module.css'

const AddPostBlock = ({ addPost }) => {
   const [text, setText] = React.useState('')

   return (
      <section className={s.wrapper}>
         <input value={text} onChange={(e) => setText(e.target.value)} type='text' />
         <button onClick={() => addPost(text)}>send</button>
      </section>
   )
}

export default AddPostBlock