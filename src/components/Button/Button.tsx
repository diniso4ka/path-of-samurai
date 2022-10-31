import React from 'react'
import s from './Button.module.css'

enum ButtonType {
    BUTTON = 'button',
    SUBMIT = 'submit',
    RESET = 'reset',
}

interface IButtonProps {
    type: ButtonType
    onHandleClick: () => void
    children: React.ReactNode
}

export const Button: React.FC<IButtonProps> = React.memo(
    ({ children, onHandleClick, type = ButtonType.BUTTON }) => {
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
