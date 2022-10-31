import s from './DialogMenuItem.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

interface IDialogMenuItemProps {
    link: string
    avatar: string
    name: string
    text: string
    active: boolean
    onClick: () => void
}

const DialogMenuItem: React.FC<IDialogMenuItemProps> = ({
    link,
    avatar,
    name,
    text,
    active,
    onClick,
}) => {
    return (
        <Link to={link} className={`${s.wrapper} ${active ? s.active : ''}`}>
            <img
                src={
                    avatar
                        ? avatar
                        : 'https://работазабкрай.рф/static/img/cabinet.png'
                }
                className={s.avatar}
            />
            <div>
                <p className={s.name}>{name}</p>
                <p className={s.text}>{text}</p>
            </div>
        </Link>
    )
}

export default DialogMenuItem
