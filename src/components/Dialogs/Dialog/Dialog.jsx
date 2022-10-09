import s from './Dialog.module.css'
import React from 'react'
import MessageItem from '../MessageItem/MessageItem'
import SendMessageBlock from '../SendMessageBlock/SendMessageBlock'

const Dialog = ({ data }) => {

   return (
      <section className={s.wrapper}>
         <div className={s.message_items}>
            {data.messages.map((message) => <MessageItem name={message.name} text={message.message} />)}

         </div>
         <SendMessageBlock />

      </section>
   )
}

export default Dialog