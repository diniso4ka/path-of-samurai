import React from 'react'
import s from './SendMessageBlock.module.css'

interface ISendMessageBlock {
    username: string
    newMessageText: string
    sendMessage: (name: string) => void
    onTextChange: (text: string) => void
}

const SendMessageBlock: React.FC<ISendMessageBlock> = ({
    username,
    sendMessage,
    onTextChange,
    newMessageText,
}) => {
    const newMessageElement = React.useRef(null)
    return (
        <section className={s.wrapper}>
            <input
                onChange={() => onTextChange(newMessageElement.current.value)}
                value={newMessageText}
                ref={newMessageElement}
                className={s.text_input}
                type='text'
            />
            <button onClick={() => sendMessage(username)}>send</button>
        </section>
    )
}

export default SendMessageBlock
