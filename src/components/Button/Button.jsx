import React, { memo } from 'react'
import s from './Button.module.css'

export const Button = React.memo(
    ({ children, onHandleClick, type = 'button' }) => {
        return (
            <button
                type={type}
                onClick={onHandleClick}
                className={`${s.button}`}
            >
                {children}
            </button>
        )
    }
)
