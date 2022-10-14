import s from './Dialog.module.css'
import React from 'react'
import MessageItem from '../MessageItem/MessageItem'
import SendMessageBlock from '../SendMessageBlock/SendMessageBlock'

const Dialog = ({ state, store }) => {

   return (
      <section className={s.wrapper}>
         <div className={s.message_items}>
            {state.messages.map((message) => <MessageItem key={message.id} name={message.name} text={message.message} />)}

         </div>
         <SendMessageBlock state={state} store={store} />

      </section>
   )
}

export default Dialog