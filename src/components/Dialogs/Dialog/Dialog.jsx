import s from './Dialog.module.css'
import React from 'react'
import MessageItem from '../MessageItem/MessageItem'
import SendMessageBlock from '../SendMessageBlock/SendMessageBlock'

const Dialog = () => {
   return (
      <section className={s.wrapper}>
         <div className={s.message_items}>
            <MessageItem name={'Denis'} text={'Hello'} />
            <MessageItem name={'Denis'} text={'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello'} />
            <MessageItem name={'Denis'} text={'Hello'} />
            <MessageItem name={'Denis'} text={'Hello'} />
            <MessageItem name={'Denis'} text={'Hello'} />
            <MessageItem name={'Denis'} text={'Hello'} />
            <MessageItem name={'Denis'} text={'Hello'} />
            <MessageItem name={'Denis'} text={'Hello'} />
            <MessageItem name={'Denis'} text={'Hello'} />
            <MessageItem name={'Denis'} text={'Hello'} />
            <MessageItem name={'Denis'} text={'Hello'} />
            <MessageItem name={'Denis'} text={'Hello'} />
            <MessageItem name={'Denis'} text={'Hello'} />
            <MessageItem name={'Denis'} text={'Hello'} />
         </div>
         <SendMessageBlock />

      </section>
   )
}

export default Dialog