import React from 'react'
import { sendMessageCreator, updateNewMessageTextCreator } from '../../../redux/reducers/dialogsReducer'
import s from './SendMessageBlock.module.css'

const SendMessageBlock = ({ state, store }) => {
   const newMessageElement = React.useRef()

   const sendMessage = () => {
      store.dispatch(sendMessageCreator())
   }

   const onTextChange = () => {
      const text = newMessageElement.current.value
      store.dispatch(updateNewMessageTextCreator(text))
   }
   return (
      <section className={s.wrapper}>
         <input onChange={onTextChange} value={state.newMessageText} ref={newMessageElement} className={s.text_input} type='text' />
         <button onClick={sendMessage}>send</button>
      </section>
   )
}

export default SendMessageBlock