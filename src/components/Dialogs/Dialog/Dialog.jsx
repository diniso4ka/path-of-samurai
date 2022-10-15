import s from './Dialog.module.css'
import React from 'react'
import MessageItem from '../MessageItem/MessageItem'
import SendMessageBlock from '../SendMessageBlock/SendMessageBlock'
import { useSelector } from 'react-redux'

const Dialog = () => {
   const { messages } = useSelector(state => state.dialogs)


   return (
      <section className={s.wrapper}>
         <div className={s.message_items}>
            {messages.map((message) => <MessageItem key={message.id} name={message.name} text={message.message} />)}

         </div>
         <SendMessageBlock />

      </section>
   )
}

export default Dialog