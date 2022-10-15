import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './SendMessageBlock.module.css'


const SendMessageBlock = ({ sendMessage, onTextChange, newMessageText }) => {
   const newMessageElement = React.useRef()

   return (
      <section className={s.wrapper}>
         <input onChange={() => onTextChange(newMessageElement.current.value)} value={newMessageText} ref={newMessageElement} className={s.text_input} type='text' />
         <button onClick={sendMessage}>send</button>
      </section>
   )
}

export default SendMessageBlock