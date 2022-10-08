import React from 'react'
import s from './PostItem.module.css'

const PostItem = () => {
   return (
      <section className={s.wrapper}>
         <div className={s.avatar}></div>
         <p className={s.text}>Привет я шрек</p>
      </section>
   )
}

export default PostItem