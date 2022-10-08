import s from './Info.module.css'
import React from 'react'

const Info = () => {
   return (
      <section className={s.info_wrapper}>
         <div className={s.avatar}></div>
         <div className={s.text_wrapper}>
            <p className={s.text__name}>Denis Z.</p>
            <p className={s.text__city}>Erevan</p>
            <p className={s.text__education}>Gerevan</p>
            <p className={s.text__birthday}>02.11.2001</p>
            <p className={s.text__website}>...</p>
         </div>
      </section>
   )
}

export default Info