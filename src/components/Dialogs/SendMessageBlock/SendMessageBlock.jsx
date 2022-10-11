import React from 'react'
import s from './SendMessageBlock.module.css'

const SendMessageBlock = () => {
   const [text, setText] = React.useState('')
   return (
      <section className={s.wrapper}>
         <input value={text} onChange={(e) => setText(e.target.value)} className={s.text_input} type='text' />
         <button >send</button>
      </section>
   )
}

export default SendMessageBlock