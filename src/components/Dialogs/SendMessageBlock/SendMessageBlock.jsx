import React from 'react'
import s from './SendMessageBlock.module.css'

const SendMessageBlock = () => {
   return (
      <section className={s.wrapper}>
         <input className={s.text_input} type='text' />
         <button>send</button>
      </section>
   )
}

export default SendMessageBlock