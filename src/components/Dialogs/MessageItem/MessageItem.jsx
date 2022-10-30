import s from './MessageItem.module.css'
import React from 'react'

const MessageItem = ({ avatar, name, text }) => {
    return (
        <section className={s.wrapper}>
            <div>
                <p className={s.name}>{name}</p>
                <p className={s.text}>{text}</p>
            </div>
        </section>
    )
}

export default MessageItem
