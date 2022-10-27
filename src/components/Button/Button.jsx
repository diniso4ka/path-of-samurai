import React from 'react'
import s from './Button.module.css'

export const Button = ({ children, onHandleClick, type = 'button' }) => {
    return (
        <button type={type} onClick={onHandleClick} className={`${s.button}`}>
            {children}
        </button>
    )
}
