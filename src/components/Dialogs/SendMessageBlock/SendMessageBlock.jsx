import React from 'react'
import s from './SendMessageBlock.module.css'

const SendMessageBlock = ({
    username,
    sendMessage,
    onTextChange,
    newMessageText,
}) => {
    const newMessageElement = React.useRef()
    return (
        <section className={s.wrapper}>
            <input
                onChange={() => onTextChange(newMessageElement.current.value)}
                value={newMessageText}
                ref={newMessageElement}
                className={s.text_input}
                type='text'
            />
            <button onClick={() => sendMessage(username.login)}>send</button>
        </section>
    )
}

export default SendMessageBlock
