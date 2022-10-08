import React from 'react'
import s from './AddPostBlock.module.css'

const AddPostBlock = () => {
   return (
      <section className={s.wrapper}>
         <input type='text' />
         <button>send</button>
      </section>
   )
}

export default AddPostBlock